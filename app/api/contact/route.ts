import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Fonction pour vérifier le token Turnstile
async function verifyTurnstileToken(token: string): Promise<boolean> {
    const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                secret: process.env.TURNSTILE_SECRET_KEY,
                response: token,
            }),
        }
    );

    const data = await response.json();
    return data.success;
}

export async function POST(request: Request) {
    try {
        const { name, email, message, captchaToken } = await request.json();

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Tous les champs sont requis" },
                { status: 400 }
            );
        }

        // Vérifier le captcha
        if (!captchaToken) {
            return NextResponse.json(
                { error: "Captcha requis" },
                { status: 400 }
            );
        }

        const isCaptchaValid = await verifyTurnstileToken(captchaToken);

        if (!isCaptchaValid) {
            return NextResponse.json(
                { error: "Captcha invalide. Veuillez réessayer." },
                { status: 400 }
            );
        }

        // Configuration du transporteur SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_PORT === "465",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: true,
            },
        });

        // Vérifier la connexion SMTP
        await transporter.verify();

        // HTML de l'email
        const htmlContent = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            background: white;
                            border-radius: 10px;
                            overflow: hidden;
                            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        }
                        .header {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 30px;
                            text-align: center;
                        }
                        .header h1 {
                            margin: 0;
                            font-size: 24px;
                        }
                        .content {
                            padding: 30px;
                        }
                        .info-box {
                            background: #f8f9fa;
                            border-left: 4px solid #667eea;
                            padding: 15px;
                            margin: 15px 0;
                        }
                        .label {
                            font-weight: bold;
                            color: #667eea;
                            margin-bottom: 5px;
                        }
                        .message-content {
                            background: #f8f9fa;
                            padding: 20px;
                            border-radius: 5px;
                            margin-top: 15px;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                        }
                        .footer {
                            background: #f8f9fa;
                            padding: 20px;
                            text-align: center;
                            color: #666;
                            font-size: 12px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>✉️ Nouveau message depuis votre portfolio</h1>
                        </div>
                        <div class="content">
                            <div class="info-box">
                                <div class="label">👤 Nom</div>
                                <div>${name}</div>
                            </div>
                            <div class="info-box">
                                <div class="label">📧 Email</div>
                                <div><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
                            </div>
                            <div class="info-box">
                                <div class="label">💬 Message</div>
                                <div class="message-content">${message}</div>
                            </div>
                        </div>
                        <div class="footer">
                            <p>Ce message a été envoyé depuis le formulaire de contact de jessy-david.dev</p>
                            <p>✅ Captcha vérifié - Message légitime</p>
                        </div>
                    </div>
                </body>
            </html>
        `;

        const textContent = `
Nouveau message depuis votre portfolio

Nom: ${name}
Email: ${email}

Message:
${message}

---
Pour répondre, envoyez un email à: ${email}
Captcha vérifié
        `;

        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `💬 Nouveau message de ${name}`,
            text: textContent,
            html: htmlContent,
        };

        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            messageId: info.messageId,
        });
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Erreur inconnue";

        return NextResponse.json(
            {
                error: "Erreur lors de l'envoi du message",
                details:
                    process.env.NODE_ENV === "development"
                        ? errorMessage
                        : "Erreur serveur",
            },
            { status: 500 }
        );
    }
}
