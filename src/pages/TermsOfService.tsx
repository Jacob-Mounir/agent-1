import { motion } from "framer-motion";
import AgentsNavigation from "@/components/AgentsNavigation";
import AgentsFooter from "@/components/AgentsFooter";

const TermsOfService = () => {
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
            <h1 className="text-heading mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using the services provided by Agents & Scouts, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">2. Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  Agents & Scouts provides professional location scouting, production management, and logistics coordination services for film, television, and commercial productions throughout Scandinavia, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Location scouting and management</li>
                  <li>Permit acquisition and production management</li>
                  <li>Logistics and crew support</li>
                  <li>Creative consultation and planning</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  Clients agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete project information</li>
                  <li>Obtain necessary insurance coverage as required</li>
                  <li>Comply with all local laws and regulations</li>
                  <li>Respect property and location guidelines</li>
                  <li>Pay agreed fees according to the payment schedule</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Deposits may be required to secure services</li>
                  <li>Payment schedules will be outlined in project contracts</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Cancellation policies apply as specified in contracts</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All materials, content, and intellectual property created or provided by Agents & Scouts remain our property unless otherwise specified in writing. Clients retain rights to their own creative content and materials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground">
                  We maintain strict confidentiality regarding all client projects, locations, and business information. We expect clients to respect confidentiality regarding our business practices, rates, and proprietary information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Agents & Scouts' liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages. Clients are responsible for obtaining appropriate insurance coverage for their productions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">8. Force Majeure</h2>
                <p className="text-muted-foreground">
                  We are not liable for delays or failures due to circumstances beyond our control, including but not limited to natural disasters, government actions, pandemics, or other force majeure events.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">9. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate services with appropriate notice as specified in individual contracts. Termination policies and any applicable fees will be outlined in project agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms are governed by Swedish law. Any disputes will be resolved through Swedish courts or alternative dispute resolution methods as agreed upon.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Email: <a href="mailto:hello@agentsandscouts.com" className="text-primary hover:underline">hello@agentsandscouts.com</a></p>
                  <p>Phone: <a href="tel:+46700000081" className="text-primary hover:underline">+46 7 000 000 81</a></p>
                  <p>Address: Stockholm & Gothenburg, Sweden</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-medium mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Updated terms will be posted on our website with a new effective date. Continued use of our services constitutes acceptance of revised terms.
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

export default TermsOfService;