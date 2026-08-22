import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { config } from "../config";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 flex items-center border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md shrink-0">
        <button onClick={() => navigate(-1)} className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-primary leading-none">PRIVACY POLICY</span>
        </div>
      </header>

      <div className="px-6 py-8 mx-auto w-full max-w-3xl space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-text-primary mb-2">SHOP4ME PRIVACY POLICY</h1>
          <p className="text-sm font-bold tracking-wider text-text-muted uppercase">Last Updated: August 18, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6">
          <p className="text-text-secondary leading-relaxed">
            Shop4Me respects your privacy and is committed to protecting the personal information you provide when using our services.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Shop4Me is an errand and shopping assistance service designed to help customers get items, products, and other requested services handled on their behalf.
          </p>
          <p className="text-text-secondary leading-relaxed">
            This Privacy Policy explains what information we may collect, how we use it, how we protect it, and the choices available to you.
          </p>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">1. Information We Collect</h2>
            <p className="text-text-secondary leading-relaxed mb-3">Depending on how you use Shop4Me, we may collect information such as:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Your name",
                "Phone number",
                "WhatsApp contact information",
                "Delivery or pickup address",
                "Location information that you voluntarily provide",
                "Shopping or errand requests",
                "Details about items or services you ask us to obtain",
                "Information you provide when communicating with us",
                "Payment or transaction information where applicable",
                "Technical information necessary for the operation, security, and improvement of the website or application"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">We only request information that is reasonably necessary to provide or improve our services.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">2. How We Use Your Information</h2>
            <p className="text-text-secondary leading-relaxed mb-3">We may use the information we collect to:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Process and manage your Shop4Me requests",
                "Communicate with you about your request",
                "Confirm shopping, pickup, delivery, or errand details",
                "Contact you through WhatsApp, phone, SMS, email, or other communication channels you provide",
                "Coordinate the fulfilment of your request",
                "Process payments or transactions where applicable",
                "Provide customer support",
                "Improve our services and user experience",
                "Maintain the security and reliability of the platform",
                "Prevent fraud, misuse, or unauthorized activity",
                "Comply with applicable legal and regulatory obligations"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">We will not use your personal information for purposes unrelated to our services without an appropriate lawful basis or your permission where required.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">3. WhatsApp and Third-Party Services</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may use WhatsApp and other third-party communication or technology services to communicate with customers and facilitate requests.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              When you choose to communicate with Shop4Me through WhatsApp or another third-party service, your interaction may also be subject to that provider's own privacy policy and terms.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me does not control the privacy practices of third-party platforms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">4. Sharing Your Information</h2>
            <p className="text-text-secondary leading-relaxed mb-3">We do not sell your personal information.</p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Where necessary to provide a requested service, we may share relevant information with trusted service providers, delivery personnel, shopping partners, payment providers, technology providers, or other parties involved in fulfilling your request.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              We only intend to share information that is reasonably necessary for the relevant purpose.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We may also disclose information where required by law, legal process, fraud prevention requirements, or to protect the rights, safety, and security of Shop4Me, our customers, or others.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">5. Data Security</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              However, no internet-based system can be guaranteed to be completely secure.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Customers should also take reasonable steps to protect their own devices, accounts, passwords, and communication channels.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">6. Data Retention</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including providing services, maintaining appropriate business records, resolving disputes, enforcing agreements, preventing fraud, and complying with legal obligations.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When personal information is no longer reasonably required, we may securely delete, anonymize, or otherwise dispose of it in accordance with applicable requirements.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">7. Your Privacy Rights</h2>
            <p className="text-text-secondary leading-relaxed mb-3">Depending on applicable law, you may have rights relating to your personal information, including the right to:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Request access to personal information we hold about you",
                "Request correction of inaccurate or incomplete information",
                "Request deletion of personal information where applicable",
                "Object to or request restriction of certain processing",
                "Withdraw consent where processing is based on consent",
                "Ask questions about how your information is handled",
                "Make a privacy-related complaint"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">Some rights may be subject to legal or operational limitations.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">8. Children's Privacy</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me is not intended to knowingly collect personal information from children without appropriate authorization.
            </p>
            <p className="text-text-secondary leading-relaxed">
              If you believe a child has provided personal information to us improperly, please contact us so that we can review the situation and take appropriate action.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">9. Cookies and Technical Information</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may use cookies, local storage, analytics, or similar technologies where necessary to operate, secure, analyze, or improve the platform.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Where applicable, users may be able to control certain browser or device settings relating to these technologies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">10. Third-Party Links</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may contain links or connections to third-party websites, applications, payment services, communication platforms, or other services.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We are not responsible for the privacy practices of third-party services. Users should review the privacy policies of those services before providing information to them.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">11. Changes to this Privacy Policy</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              We may update this Privacy Policy from time to time to reflect changes to our services, technology, legal requirements, or business practices.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              When changes are made, the updated version will be published on this page with a revised "Last Updated" date.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We encourage users to review this page periodically.
            </p>
          </div>

          <div className="pt-6 border-t border-border">
            <h2 className="text-lg font-bold text-text-primary mb-4 uppercase tracking-wider">12. Contact Us</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              If you have questions, concerns, requests, or complaints regarding this Privacy Policy or the way Shop4Me handles personal information, please contact us through the official Shop4Me contact channel provided in the application.
            </p>
            
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6">
              <h3 className="mb-4 text-sm font-bold text-indigo-900 uppercase tracking-wider">Shop4Me Contact Information</h3>
              <div className="space-y-3 text-text-secondary">
                <p className="flex flex-col sm:flex-row sm:items-center">
                  <strong className="sm:w-28 text-text-primary">Phone/WhatsApp:</strong>
                  <a href={`tel:+${config.whatsappNumber}`} className="text-primary hover:underline">+{config.whatsappNumber}</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center">
                  <strong className="sm:w-28 text-text-primary">Email:</strong>
                  <a href="mailto:hello@shop4me.com" className="text-primary hover:underline">hello@shop4me.com</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-start">
                  <strong className="sm:w-28 text-text-primary mt-1">Business Hours:</strong>
                  <span className="mt-1">{config.businessHours}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
