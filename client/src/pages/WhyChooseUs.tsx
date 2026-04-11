import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Zap, Heart, Shield } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
            Why Choose Kleenova?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Discover what sets us apart from other cleaning services
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-poppins">
                  Professional Excellence
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Our team consists of highly trained and experienced cleaning professionals. We invest in ongoing training to ensure our team stays updated with the latest cleaning techniques and industry best practices.
              </p>
              <p className="text-lg text-muted-foreground">
                Every team member is background-checked, fully insured, and committed to delivering exceptional results.
              </p>
            </div>
            <div className="bg-secondary rounded-lg h-96 flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/hero-cleaning-service-3FTNrHmWcMZh7cPkBkV753.webp"
                alt="Professional Team"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-secondary rounded-lg h-96 flex items-center justify-center order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/commercial-cleaning-Adn2b2tdgRfCouSaohVuTy.webp"
                alt="Quality Service"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-poppins">
                  100% Satisfaction Guarantee
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with our service, we'll make it right.
              </p>
              <p className="text-lg text-muted-foreground">
                Your happiness is our priority, and we won't consider a job done until you're thrilled with the results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-poppins">
                  Eco-Friendly Approach
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                We're committed to protecting the environment and your health. We use eco-friendly cleaning products that are safe for your family and pets.
              </p>
              <p className="text-lg text-muted-foreground">
                Our sustainable practices ensure we clean responsibly without compromising on quality.
              </p>
            </div>
            <div className="bg-secondary rounded-lg h-96 flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/end-of-lease-cleaning-myGpge5YgE8yoCswZYyfUt.webp"
                alt="Eco-Friendly"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-lg h-96 flex items-center justify-center order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/regular-cleaning-8ciSF7jnURuzakqsYWL8Ej.webp"
                alt="Affordable Pricing"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-poppins">
                  Reliable & Trustworthy
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                We understand that inviting someone into your home or business requires trust. That's why we prioritize reliability and professionalism in everything we do.
              </p>
              <p className="text-lg text-muted-foreground">
                You can count on us to show up on time, respect your property, and deliver consistent quality every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center font-poppins">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-muted-foreground mb-4 italic">
                "Kleenova did an amazing job with our end of lease clean. We got our full bond back! Highly recommended."
              </p>
              <p className="font-semibold text-foreground">Sarah M.</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <p className="text-muted-foreground mb-4 italic">
                "Professional, punctual, and thorough. They've been cleaning our office for 6 months and we're very happy."
              </p>
              <p className="font-semibold text-foreground">John D.</p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <p className="text-muted-foreground mb-4 italic">
                "Great service at a fair price. The team is friendly and efficient. Will definitely use again!"
              </p>
              <p className="font-semibold text-foreground">Emma L.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">
            Experience the Kleenova Difference Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Join thousands of satisfied customers who trust Kleenova for their cleaning needs.
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

export default WhyChooseUs;
