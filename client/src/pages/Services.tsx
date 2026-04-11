import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive cleaning solutions for every need
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/end-of-lease-cleaning-myGpge5YgE8yoCswZYyfUt.webp"
                alt="End of Lease"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
                End of Lease Cleaning
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our end of lease cleaning service is designed to help you get your full bond back. We meticulously clean every corner of your property to meet landlord and real estate agent standards.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Deep cleaning of all rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Carpet and floor cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Window and blind cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Bond-back guarantee</span>
                </li>
              </ul>
              <Link href="/booking">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
                Commercial Cleaning
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Keep your workplace clean and professional with our commercial cleaning services. We work around your schedule to minimize disruption.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Office and workspace cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Flexible scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Eco-friendly products</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Customized cleaning plans</span>
                </li>
              </ul>
              <Link href="/booking">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Book Now
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/commercial-cleaning-Adn2b2tdgRfCouSaohVuTy.webp"
                alt="Commercial"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/regular-cleaning-8ciSF7jnURuzakqsYWL8Ej.webp"
                alt="Regular Cleaning"
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
                Regular Cleaning
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Maintain a clean and healthy home with our regular cleaning services. Choose weekly, fortnightly, or monthly schedules that work for you.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Flexible frequency options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Consistent quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Reliable team</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Affordable pricing</span>
                </li>
              </ul>
              <Link href="/booking">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Book your cleaning service today and experience the Kleenova difference.
          </p>
          <Link href="/booking">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
