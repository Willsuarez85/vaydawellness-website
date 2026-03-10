export const prerender = false;

import type { APIRoute } from 'astro';

const GHL_API_KEY = 'pit-32e6d329-713d-4b9f-b971-d1226e459fd1';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, totalScore, zone, scores } = body;

    if (!email || !name) {
      return new Response(JSON.stringify({ error: 'Name and email required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Version': '2021-07-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: name,
        email: email,
        tags: ['quiz-lead', `zone-${zone.toLowerCase()}`],
        customFields: [
          { key: 'quiz_score', field_value: String(totalScore) },
          { key: 'quiz_zone', field_value: zone },
          { key: 'sleep_score', field_value: String(scores.sleep) },
          { key: 'digestion_score', field_value: String(scores.digestion) },
          { key: 'stress_score', field_value: String(scores.stress) },
        ],
      }),
    });

    // GHL returns 200 or 201 on success; if it fails we still show results
    return new Response(JSON.stringify({ ok: true, status: ghlRes.status }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('submit-quiz error:', err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
