import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, Clock, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/hero-cleaning-service-3FTNrHmWcMZh7cPkBkV753.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
            Premium Cleaning Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100">
            Professional, reliable, and affordable cleaning solutions for your home and business in Western Australia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
                Book Now
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* End of Lease */}
            <div className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/end-of-lease-cleaning-myGpge5YgE8yoCswZYyfUt.webp"
                alt="End of Lease Cleaning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 font-poppins">
                  End of Lease Cleaning
                </h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive cleaning to ensure you get your full bond back. We handle every detail.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Commercial */}
            <div className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/commercial-cleaning-Adn2b2tdgRfCouSaohVuTy.webp"
                alt="Commercial Cleaning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 font-poppins">
                  Commercial Cleaning
                </h3>
                <p className="text-muted-foreground mb-4">
                  Professional office and commercial space cleaning to maintain a pristine workplace.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Regular Cleaning */}
            <div className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/regular-cleaning-8ciSF7jnURuzakqsYWL8Ej.webp"
                alt="Regular Cleaning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 font-poppins">
                  Regular Cleaning
                </h3>
                <p className="text-muted-foreground mb-4">
                  Keep your home fresh and clean with our regular maintenance cleaning services.
                </p>
                <Link href="/services">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-poppins">
              Why Choose Kleenova?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional cleaning services with professionalism and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">Professional Team</h3>
              <p className="text-muted-foreground">Trained and experienced cleaning professionals</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Sparkles className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">Quality Assured</h3>
              <p className="text-muted-foreground">100% satisfaction guarantee on all services</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">Flexible Scheduling</h3>
              <p className="text-muted-foreground">Book at times that work best for you</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">Affordable Pricing</h3>
              <p className="text-muted-foreground">Competitive rates without compromising quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Ready to Experience Premium Cleaning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Get your home or business sparkling clean today. Book your service now!
          </p>
          <Link href="/booking">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Book Your Service
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
