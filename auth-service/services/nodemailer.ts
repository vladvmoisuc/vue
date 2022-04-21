import nodemailer from 'nodemailer';

import { BUSINESS_MAIL_ADDRESS } from '../utils/constants';

import type { Email } from '../types';

const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD } = process.env;

let transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 2525,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

export default async ({
  from = BUSINESS_MAIL_ADDRESS,
  to,
  subject,
  html,
}: Email): Promise<void> => {
  const email = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });

  console.log('Message sent: %s', email.messageId);
};
