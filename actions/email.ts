"use server"

import { Resend } from 'resend';

export default async function email(subjectValue:string, emailValue:string, messageValue:string){
const resend = new Resend(process.env.RESEND_API_KEY);
const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ['lorenzolh06@gmail.com'],
    subject: subjectValue,
    html: 
    `<strong>Email : ${emailValue}</strong>
    <p>${messageValue}</p>`,
  });

  if (error) {
    return console.error(error);
  }

  console.log(data);
}
