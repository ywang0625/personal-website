import { Resend } from 'resend';
import { fail } from '@sveltejs/kit';
import { RESEND_API_KEY, EMAIL_FROM, EMAIL_TO } from '$env/static/private';
import type { Actions } from './$types';

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const first_name = formData.get('first_name') as string;
		const last_name = formData.get('last_name') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;

		const fullName = `${first_name} ${last_name}`;

		try {
			//Email to me
			await resend.emails.send({
				from: EMAIL_FROM,
				to: EMAIL_TO, // receiver
				subject: `[Website] New message from ${fullName}`,
				text: 
                `
Sender Name: ${fullName}
Sender Email: ${email}

Sender Message:
${message}
				` 
			});

			// Email to sender
			await resend.emails.send({
				from: EMAIL_FROM,
				to: email, // sender
				subject: `I've received your message!`,
				text: `
Hello ${first_name},

Thank you for reaching out! I've received your message and will get back to you shortly. 

Thank you for your time. 

Sincerely,
Yueh-Ming
				` 
			});

			return { success: true };
		} catch (err) {
			console.error('Resend error:', err);
			return fail(500, { message: 'Failed to send message' });
		}
	}
};
