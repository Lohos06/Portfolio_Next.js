import Header from "@/components/Header/Header";

import ContactForm from "@/components/ContactForm/ContactForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Lorenzo L'Hostis",
  description: "Formulaire pour Contacter Lorenzo L'Hostis",
};

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