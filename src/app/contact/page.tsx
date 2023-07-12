import { ContactForm } from "@/Components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="max-w-screen-md mx-auto py-5">
        <ContactForm headerText={"Contact Us"} />
      </div>
    </>
  );
}
