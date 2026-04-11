import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      service: "End of Lease Cleaning",
      rating: 5,
      text: "Kleenova did an amazing job with our end of lease clean. They were thorough, professional, and we got our full bond back! Highly recommended.",
    },
    {
      name: "John D.",
      service: "Commercial Cleaning",
      rating: 5,
      text: "Professional, punctual, and thorough. They've been cleaning our office for 6 months and we're very happy with the consistency and quality.",
    },
    {
      name: "Emma L.",
      service: "Regular Cleaning",
      rating: 5,
      text: "Great service at a fair price. The team is friendly and efficient. Will definitely use again!",
    },
    {
      name: "Michael T.",
      service: "End of Lease Cleaning",
      rating: 5,
      text: "Best cleaning service I've used. They paid attention to every detail and the property looked brand new. Definitely worth it!",
    },
    {
      name: "Lisa K.",
      service: "Commercial Cleaning",
      rating: 5,
      text: "Reliable and professional. They always show up on time and do excellent work. Our office has never looked better.",
    },
    {
      name: "David R.",
      service: "Regular Cleaning",
      rating: 5,
      text: "I'm very impressed with Kleenova. They're trustworthy, efficient, and provide excellent value for money.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
            Client Reviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            See what our satisfied customers have to say about Kleenova
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
            Average Rating: 5.0 / 5.0
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Based on hundreds of satisfied customers across Western Australia
          </p>
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Experience the Kleenova difference and see why our customers love us.
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

export default Reviews;
