import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "regular",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via FormSubmit (free service)
      const formElement = document.getElementById("booking-form") as HTMLFormElement;
      if (formElement) {
        const response = await fetch("https://formspree.io/f/xyzqwert", {
          method: "POST",
          body: new FormData(formElement),
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          toast.success("Booking request sent! We'll contact you soon.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "regular",
            date: "",
            message: "",
          });
        } else {
          toast.error("Failed to send booking request. Please try again.");
        }
      }
    } catch (error) {
      toast.error("Error sending booking request. Please contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
            Book Your Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Schedule your cleaning service with us today
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 font-poppins">
                Quick Booking Form
              </h2>
              <form id="booking-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0480 536 701"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="regular">Regular Cleaning</option>
                    <option value="endofLease">End of Lease Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us more about your cleaning needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Submit Booking Request"}
                </Button>
              </form>
            </div>

            {/* Contact Info & Calendar */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 font-poppins">
                Get in Touch
              </h2>

              <div className="bg-secondary p-8 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-foreground mb-6 font-poppins">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Phone</p>
                    <a
                      href="tel:0480536701"
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      0480 536 701
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Email</p>
                    <a
                      href="mailto:ngonidzashetutayi@gmail.com"
                      className="text-lg font-semibold text-primary hover:underline break-all"
                    >
                      ngonidzashetutayi@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Location</p>
                    <p className="text-lg font-semibold text-foreground">Western Australia</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Hours</p>
                    <p className="text-lg font-semibold text-foreground">
                      Monday - Sunday<br />
                      8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border-2 border-primary p-8 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">
                  Google Calendar Integration
                </h3>
                <p className="text-muted-foreground mb-4">
                  You can also view our availability and book directly through Google Calendar. Please contact us for the calendar link, or use the form above to request your preferred time slot.
                </p>
                <p className="text-sm text-muted-foreground">
                  We'll confirm your booking within 24 hours and send you all the details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">
            Why Book With Kleenova?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3 font-poppins">Fast Response</h3>
              <p className="text-muted-foreground">
                We respond to booking requests within 24 hours
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-3 font-poppins">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                We work around your schedule, 7 days a week
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-3 font-poppins">Guaranteed Satisfaction</h3>
              <p className="text-muted-foreground">
                100% satisfaction guarantee on all services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
