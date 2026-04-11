import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book a cleaning service?",
      answer: "You can book through our website using the booking form, call us at 0480 536 701, or email us at ngonidzashetutayi@gmail.com. We'll confirm your booking within 24 hours.",
    },
    {
      question: "What areas do you service?",
      answer: "We service all areas across Western Australia. If you're unsure whether we cover your area, please contact us directly and we'll let you know.",
    },
    {
      question: "Do you offer end of lease cleaning?",
      answer: "Yes, we specialize in end of lease cleaning and offer a bond-back guarantee. Our thorough cleaning process is designed to meet landlord and real estate agent standards.",
    },
    {
      question: "What cleaning products do you use?",
      answer: "We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. All our products are professional-grade and highly effective.",
    },
    {
      question: "Can I customize my cleaning service?",
      answer: "Absolutely! We understand that every home and business is unique. We can customize our cleaning services to meet your specific needs and preferences.",
    },
    {
      question: "How long does a cleaning service take?",
      answer: "The duration depends on the size of your property and the type of cleaning service. A typical house cleaning takes 2-4 hours. We'll provide an estimate during booking.",
    },
    {
      question: "Are your cleaners insured?",
      answer: "Yes, all our team members are fully insured and background-checked. You can have complete peace of mind knowing your property is in safe hands.",
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with our work, we'll return and re-clean the areas at no additional cost.",
    },
    {
      question: "Do you offer commercial cleaning?",
      answer: "Yes, we provide professional commercial cleaning services for offices, retail spaces, and other commercial properties. We can work around your business hours.",
    },
    {
      question: "How much does your service cost?",
      answer: "Our pricing varies depending on the size of your property, type of service, and specific requirements. Contact us for a free quote tailored to your needs.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Find answers to common questions about our cleaning services
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left font-poppins">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">
            Didn't find your answer?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Feel free to contact us directly. Our team is always happy to help with any questions you may have.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg font-semibold">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
