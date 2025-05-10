
import { ContactForm } from '@/components/contact-form';

export function ContactFormSection() {
  return (
    <section id="contact" className="bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Agenda Tu Cita Ahora
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Rellena el formulario y nos pondremos en contacto contigo para confirmar los detalles de tu cita. ¡Estamos deseando conocerte!
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
