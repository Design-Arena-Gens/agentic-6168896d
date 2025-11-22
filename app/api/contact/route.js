export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data || {};

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "invalid" }), { status: 400 });
    }

    // Simulate sending (log). In production integrate email/SaaS here.
    console.log("[CONTACT]", { name, email, subject, message });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
