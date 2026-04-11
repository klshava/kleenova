import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Kleenova's services, you agree to be bound by these Terms and Conditions. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Kleenova's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Kleenova's website are provided on an 'as is' basis. Kleenova makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Kleenova or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kleenova's website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Kleenova's website could include technical, typographical, or photographic errors. Kleenova does not warrant that any of the materials on its website are accurate, complete, or current. Kleenova may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">6. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kleenova has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Kleenova of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">7. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kleenova may revise these terms and conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Western Australia, and you irrevocably submit to the exclusive jurisdiction of the courts located in Western Australia.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">9. Booking and Cancellation Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bookings must be made at least 48 hours in advance. Cancellations must be made at least 48 hours before the scheduled service. Cancellations made less than 48 hours before the service may incur a cancellation fee equal to 50% of the service cost.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">10. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment is due upon completion of service unless other arrangements have been made. We accept cash, credit cards, and bank transfers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">11. Satisfaction Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer a 100% satisfaction guarantee. If you are not satisfied with our service, please contact us within 24 hours and we will address your concerns.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these terms and conditions, please contact us at 0480 536 701 or ngonidzashetutayi@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have any questions about our terms and conditions, please don't hesitate to contact us.
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

export default TermsAndConditions;
