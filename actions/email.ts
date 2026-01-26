"use server"

import { Resend } from 'resend';

export default async function email(){
const resend = new Resend(process.env.RESEND_API_KEY);
console.log(process.env.RESEND_API_KEY);
const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ['lorenzolh06@gmail.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error(error);
  }

  console.log(data);
}
