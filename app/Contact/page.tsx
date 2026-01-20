import Header from "@/components/Header/Header";

import ContactForm from "@/components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div>
        <Header/>
      <main className="flex flex-col justify-center items-center">
        <ContactForm/>
      </main>
    </div>
  );
}