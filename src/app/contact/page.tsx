"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextReveal } from "@/components/animations/TextReveal";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema) // Client side zod validation per PRP
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.simulated) {
           alert("Simulation Mode: Message processed locally (RESEND_API_KEY missing).");
        } else {
           alert("Payload Transmitted Successfully.");
        }
      } else {
        alert("Transmission Failed: " + (result.error || "Unknown Error"));
      }
    } catch (e) {
      alert("Network disruption detected. Please try again.");
    }
  };

  return (
    <div className="pt-[80px] min-h-screen flex flex-col">
      <section className="py-24 md:py-32 bg-surface-primary">
        <div className="container mx-auto px-4 max-w-7xl">
          <TextReveal>
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">Let's Build <br/>Something <span className="text-primary italic font-normal">Amazing</span></h1>
          </TextReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mt-16">
            
            {/* Form Side */}
            <div className="bg-surface-secondary p-8 md:p-12 border border-subtle rounded-brutalist shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-label uppercase text-text-secondary">Full Name</label>
                  <input {...register("name")} id="name" className="bg-surface-primary border border-subtle p-4 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                  {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-xs font-label uppercase text-text-secondary">Email Address</label>
                    <input {...register("email")} id="email" type="email" className="bg-surface-primary border border-subtle p-4 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone" className="text-xs font-label uppercase text-text-secondary">Phone Number</label>
                    <input {...register("phone")} id="phone" type="tel" className="bg-surface-primary border border-subtle p-4 text-text-primary focus:outline-none focus:border-primary transition-colors" />
                    {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-xs font-label uppercase text-text-secondary">Project Details</label>
                  <textarea {...register("message")} id="message" rows={5} className="bg-surface-primary border border-subtle p-4 text-text-primary focus:outline-none focus:border-primary transition-colors resize-none" />
                  {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-5 font-label uppercase text-sm hover:bg-primary-light transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending Payload..." : "Transmit Message"}
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="flex flex-col space-y-12">
              <div>
                <h3 className="font-label text-text-primary uppercase tracking-widest mb-4">Contact Info</h3>
                <p className="text-text-secondary text-2xl font-light mb-2">+91 9080891613</p>
                <p className="text-text-secondary text-lg">info@binaryexpertsystems.co.in</p>
              </div>

              <div>
                <h3 className="font-label text-text-primary uppercase tracking-widest mb-4">Locations</h3>
                <p className="text-text-secondary text-lg mb-2">Tamil Nadu, India</p>
                <p className="text-text-secondary text-lg">United Arab Emirates</p>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-[300px] bg-surface-tertiary border border-subtle flex flex-col items-center justify-center relative overflow-hidden group hover:border-primary transition-colors cursor-pointer">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Tamil+Nadu,India&zoom=6&size=800x400&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x9ca7aa&style=feature:water|element:geometry|color:0x0a0a0a&key=YOUR_API_KEY')] bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-700" />
                 <span className="relative z-10 text-primary font-label uppercase bg-surface-primary/80 px-4 py-2 border border-subtle backdrop-blur-sm">View on Google Maps</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
