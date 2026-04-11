import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
            About Kleenova
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Your trusted partner in professional cleaning services across Western Australia
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Kleenova was founded with a simple mission: to provide premium cleaning services that exceed expectations. We believe that a clean space is a happy space, and we're dedicated to making that a reality for every client.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                With years of experience in the cleaning industry, our team has developed a deep understanding of what it takes to deliver exceptional results. From residential homes to commercial spaces, we approach every project with professionalism and care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're committed to using eco-friendly cleaning products and sustainable practices to protect both your property and the environment.
              </p>
            </div>
            <div className="bg-secondary rounded-lg h-96 flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/hero-cleaning-service-3FTNrHmWcMZh7cPkBkV753.webp"
                alt="About Kleenova"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center font-poppins">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every cleaning project, paying attention to every detail to ensure your complete satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Reliability</h3>
              <p className="text-muted-foreground">
                You can count on us to show up on time, every time, and deliver the quality service you expect.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct our business with honesty and transparency, treating your home and business with the utmost respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center font-poppins">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Our team consists of trained, professional cleaners who are passionate about delivering exceptional results. We invest in ongoing training to ensure our team stays updated with the latest cleaning techniques and best practices.
          </p>
          <div className="bg-secondary p-8 rounded-lg text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Every team member is background-checked and fully insured, so you can have complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">
            Experience the Kleenova Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let us show you why we're the trusted choice for cleaning services in Western Australia.
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

export default About;
