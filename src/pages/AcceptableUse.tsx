import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { config } from "../config";

export default function AcceptableUse() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 flex items-center border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md shrink-0">
        <button onClick={() => navigate(-1)} className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-primary leading-none">ACCEPTABLE USE</span>
        </div>
      </header>

      <div className="px-6 py-8 mx-auto w-full max-w-3xl space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-text-primary mb-2">SHOP4ME ACCEPTABLE USE POLICY</h1>
          <p className="text-sm font-bold tracking-wider text-text-muted uppercase">Last Updated: August 18, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6">
          <p className="text-text-secondary leading-relaxed">
            Shop4Me is designed to make shopping, errands, pickup, and delivery assistance easier.
          </p>
          <p className="text-text-secondary leading-relaxed">
            This Acceptable Use Policy explains how customers are expected to use the Shop4Me platform and services.
          </p>
          <p className="text-text-secondary leading-relaxed font-medium">
            By using Shop4Me, you agree to follow this policy, as well as the <Link to="/terms" className="text-primary hover:underline">Shop4Me Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">1. Use Shop4Me Lawfully</h2>
            <p className="text-text-secondary leading-relaxed mb-3">You must use Shop4Me only for lawful purposes.</p>
            <p className="text-text-secondary leading-relaxed">
              You must not use the platform to request, organize, facilitate, or participate in activities that violate applicable laws or regulations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">2. Prohibited Goods and Requests</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may refuse requests involving goods, services, or activities that are illegal, unsafe, restricted, or otherwise inappropriate for the service.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">Customers must not use Shop4Me to request:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Illegal drugs or controlled substances where prohibited by law",
                "Stolen goods",
                "Weapons or prohibited weapons-related items",
                "Explosives or dangerous weapons",
                "Fraudulent documents",
                "Counterfeit goods where prohibited by law",
                "Hazardous or dangerous materials",
                "Items that cannot legally be purchased, transported, or delivered",
                "Goods intended to facilitate criminal activity",
                "Any other item or activity prohibited by applicable law"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me may refuse a request if there is uncertainty about its legality, safety, or suitability.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">3. No Fraud or Deception</h2>
            <p className="text-text-secondary leading-relaxed mb-3">You must not use Shop4Me to:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Commit fraud",
                "Impersonate another person",
                "Provide intentionally false information",
                "Use stolen payment information",
                "Obtain goods through deception",
                "Manipulate prices or transactions",
                "Attempt unauthorized access to Shop4Me systems",
                "Conduct fraudulent returns or refund activities",
                "Misrepresent a transaction or shopping request"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Any suspected fraudulent activity may result in cancellation, suspension, or termination of access to Shop4Me and may be reported to appropriate authorities where required or appropriate.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">4. Respectful Communication</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Customers must communicate respectfully with Shop4Me staff, representatives, delivery personnel, shopping partners, vendors, and other users.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">The following behavior is not permitted:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Threats",
                "Harassment",
                "Bullying",
                "Hate-based abuse",
                "Sexual harassment",
                "Intimidation",
                "Repeated abusive communication",
                "Violence or threats of violence",
                "Deliberate attempts to cause emotional or physical harm"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me may restrict communication or refuse service where a customer engages in abusive or threatening behavior.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">5. No Misuse of the Platform</h2>
            <p className="text-text-secondary leading-relaxed mb-3">You must not attempt to interfere with the normal operation of Shop4Me.</p>
            <p className="text-text-secondary leading-relaxed mb-3">You must not:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Attempt to hack, damage, or disrupt the platform",
                "Introduce malicious software",
                "Attempt unauthorized access to accounts or systems",
                "Scrape or extract information through unauthorized methods",
                "Abuse automated systems",
                "Submit excessive or deliberately misleading requests",
                "Attempt to bypass security measures",
                "Exploit technical vulnerabilities",
                "Use the service in a manner that could damage Shop4Me or other users"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">6. Accurate Information</h2>
            <p className="text-text-secondary leading-relaxed mb-3">Customers must provide accurate information when using Shop4Me.</p>
            <p className="text-text-secondary leading-relaxed mb-3">This includes information such as:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Name",
                "Phone number",
                "WhatsApp number",
                "Location",
                "Delivery address",
                "Shopping instructions",
                "Product specifications",
                "Quantity",
                "Other information reasonably required to fulfil a request"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed mb-3">Do not knowingly provide false, misleading, or fraudulent information.</p>
            <p className="text-text-secondary leading-relaxed">
              Incorrect information may result in delays, additional costs, cancellation, or inability to fulfil a request.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">7. Payment Misuse</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Customers must not use fraudulent, stolen, unauthorized, or otherwise unlawful payment methods.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">You must not attempt to:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Use another person's payment method without authorization",
                "Circumvent payment requirements",
                "Manipulate transaction records",
                "Fraudulently request refunds",
                "Dispute legitimate transactions dishonestly"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me may suspend or restrict service where payment fraud or abuse is suspected.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">8. Personal Information</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Do not submit another person's private or personal information through Shop4Me unless you have a lawful reason and appropriate authorization to provide it.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Customers should avoid providing unnecessary sensitive information when submitting a request.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me will handle personal information according to its <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">9. Third-Party Services</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may use third-party services such as WhatsApp, payment providers, retailers, delivery providers, mapping services, or other technology platforms.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              When using those services through Shop4Me, you must also comply with their applicable rules and policies.
            </p>
            <p className="text-text-secondary leading-relaxed">
              You must not use Shop4Me as a way to bypass restrictions imposed by third-party services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">10. Safety</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Customer requests must not place Shop4Me personnel, delivery personnel, vendors, customers, or members of the public at unreasonable risk.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may refuse a request where fulfilling it could create a significant safety concern.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Customers must provide relevant information about circumstances that could reasonably affect the safety of fulfilling a request.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">11. Age and Authority</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              You must have the legal capacity required to use Shop4Me and enter into transactions through the service.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Where a transaction requires a particular minimum age under applicable law, you are responsible for complying with that requirement.
            </p>
            <p className="text-text-secondary leading-relaxed">
              You must not use another person's identity or account without appropriate authorization.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">12. Commercial or Unauthorized Use</h2>
            <p className="text-text-secondary leading-relaxed">
              You must not use Shop4Me to operate an unauthorized competing service, resell access to the platform, or commercially exploit Shop4Me's systems, content, branding, or services without permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">13. Reporting Abuse or Misuse</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              If you become aware of suspected fraud, abuse, illegal activity, security problems, or other serious misuse of Shop4Me, please report it through the official Shop4Me contact channel provided in the application.
            </p>
            <p className="text-text-secondary leading-relaxed">
              When reporting an issue, provide enough information for Shop4Me to understand and investigate the concern.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">14. Enforcement</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              If we reasonably believe that a user has violated this Acceptable Use Policy, Shop4Me may take appropriate action, including:
            </p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Refusing a request",
                "Cancelling a request",
                "Restricting communication",
                "Suspending access",
                "Terminating access",
                "Investigating the activity",
                "Taking steps to protect users or the platform",
                "Reporting activity to appropriate authorities where required or appropriate"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">
              The action taken will depend on the circumstances and applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">15. No Guarantee of Service</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Following this policy does not guarantee that Shop4Me will accept or fulfil every request.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me may refuse a request for operational, safety, legal, availability, supplier, geographic, or other legitimate reasons.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">16. Changes to this Policy</h2>
            <p className="text-text-secondary leading-relaxed mb-3">Shop4Me may update this Acceptable Use Policy from time to time.</p>
            <p className="text-text-secondary leading-relaxed mb-3">
              When changes are made, the updated version will be published on this page with a revised "Last Updated" date.
            </p>
            <p className="text-text-secondary leading-relaxed">Users should review this policy periodically.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">17. Relationship with Other Shop4Me Policies</h2>
            <p className="text-text-secondary leading-relaxed mb-3">This Acceptable Use Policy should be read together with the:</p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span className="text-text-secondary"><Link to="/terms" className="text-primary hover:underline">Shop4Me Terms of Service</Link></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                <span className="text-text-secondary"><Link to="/privacy" className="text-primary hover:underline">Shop4Me Privacy Policy</Link></span>
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              If you have questions about how these policies apply to a particular request, contact Shop4Me through the official contact channel provided in the application.
            </p>
          </div>

          <div className="pt-6 border-t border-border">
            <h2 className="text-lg font-bold text-text-primary mb-4 uppercase tracking-wider">18. Contact Shop4Me</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              For questions, reports, complaints, or concerns regarding acceptable use, please contact Shop4Me through the official contact channel provided in the application.
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
