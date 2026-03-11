export const prerender = false;

import type { APIRoute } from 'astro';

// TODO: Set GHL_API_KEY in Vercel dashboard environment variables
const GHL_API_KEY = import.meta.env.GHL_API_KEY;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const corsHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'https://vaydahealth.com',
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, totalScore, zone, scores } = body;

    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';

    if (!trimmedName || !trimmedEmail) {
      return new Response(JSON.stringify({ error: 'Name and email required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: corsHeaders,
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
        firstName: trimmedName,
        email: trimmedEmail,
        tags: ['quiz-lead', `zone-${String(zone).toLowerCase()}`],
        customFields: [
          { key: 'quiz_score', field_value: String(totalScore) },
          { key: 'quiz_zone', field_value: zone },
          { key: 'sleep_score', field_value: String(scores?.sleep ?? 0) },
          { key: 'digestion_score', field_value: String(scores?.digestion ?? 0) },
          { key: 'stress_score', field_value: String(scores?.stress ?? 0) },
        ],
      }),
    });

    // GHL returns 200 or 201 on success; if it fails we still show results
    return new Response(JSON.stringify({ ok: true, status: ghlRes.status }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error('submit-quiz error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
};
