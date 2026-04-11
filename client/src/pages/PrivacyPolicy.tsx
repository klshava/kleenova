import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Your privacy is important to us. Please read this privacy policy carefully.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <div className="space-y-8 text-foreground">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kleenova ("we", "us", "our", or "Company") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">2. Information Collection and Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Types of Data Collected:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personal Data: Name, email address, phone number, address, and any other information you provide when booking our services</li>
                <li>Usage Data: Information about how you access and use our website, including IP address, browser type, and pages visited</li>
                <li>Cookies and Tracking Data: We use cookies to track activity on our website and hold certain information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">3. Use of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kleenova uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical and security issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">4. Security of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">5. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 bg-secondary p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Email: ngonidzashetutayi@gmail.com</p>
                <p className="text-foreground font-semibold mb-2">Phone: 0480 536 701</p>
                <p className="text-foreground font-semibold">Location: Western Australia</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and improve our service. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">9. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 font-poppins">10. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time by contacting us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have any concerns or questions about how we handle your personal data, please contact us.
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

export default PrivacyPolicy;
