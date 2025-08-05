import { motion } from "framer-motion";
import AgentsNavigation from "@/components/AgentsNavigation";
import AgentsFooter from "@/components/AgentsFooter";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-foreground antialiased">
      <AgentsNavigation />
      
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        
        <div className="container px-6 lg:px-12 relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <h1 className="text-heading mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Contact us through our website or email</li>
                  <li>Request our services or information</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Participate in surveys or feedback</li>
                </ul>
                <p className="text-muted-foreground">
                  This may include your name, email address, phone number, company information, and project details.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide and improve our location scouting and production services</li>
                  <li>Respond to your inquiries and communicate with you</li>
                  <li>Send you relevant updates about our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">3. GDPR Compliance</h2>
                <p className="text-muted-foreground mb-4">
                  Under the General Data Protection Regulation (GDPR), you have the following rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Right to access:</strong> Request access to your personal data</li>
                  <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to restrict processing:</strong> Request limitation on data processing</li>
                  <li><strong>Right to data portability:</strong> Request transfer of your data</li>
                  <li><strong>Right to object:</strong> Object to processing of your personal data</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, contact us at <a href="mailto:hello@agentsandscouts.com" className="text-primary hover:underline">hello@agentsandscouts.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">4. Data Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or share your personal information with third parties except:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>With trusted service providers who assist in our operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">7. Cookies</h2>
                <p className="text-muted-foreground">
                  Our website uses essential cookies for functionality and analytics cookies to improve user experience. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or our data practices, contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Email: <a href="mailto:hello@agentsandscouts.com" className="text-primary hover:underline">hello@agentsandscouts.com</a></p>
                  <p>Phone: <a href="tel:+46700000081" className="text-primary hover:underline">+46 7 000 000 81</a></p>
                  <p>Address: Stockholm & Gothenburg, Sweden</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website with an updated date.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      
      <AgentsFooter />
    </div>
  );
};

export default PrivacyPolicy;