import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const mobile = String(body?.mobile || "").replace(/\D/g, "");
    const treatment = String(body?.treatment || "").trim();
    const date = String(body?.date || "").trim();
    const notes = String(body?.notes || "").trim();

    if (!name || !email || !mobile || !treatment || !date) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email." }, { status: 400 });
    }

    if (mobile.length !== 10) {
      return Response.json(
        { error: "Mobile must be exactly 10 digits." },
        { status: 400 }
      );
    }

    const selected = new Date(date);
    selected.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (Number.isNaN(selected.getTime())) {
      return Response.json({ error: "Invalid date." }, { status: 400 });
    }

    if (selected < today) {
      return Response.json(
        { error: "Date cannot be in the past." },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      return Response.json(
        {
          error:
            "Email service is not configured. Set EMAIL_USER and EMAIL_PASS in environment variables.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const to = "healthfusion.live@gmail.com";

    const subject = `New Appointment Request: ${name} (${treatment})`;

    const text =
      `New appointment request received:\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Mobile: ${mobile}\n` +
      `Treatment: ${treatment}\n` +
      `Preferred Date: ${date}\n` +
      `Notes: ${notes || "-"}\n`;

    await transporter.sendMail({
      from: `Healthfusion Website <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
