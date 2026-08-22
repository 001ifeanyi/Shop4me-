import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { config } from "../config";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="sticky top-0 z-30 flex items-center border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md shrink-0">
        <button onClick={() => navigate(-1)} className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface text-text-primary transition-colors hover:bg-surface-hover">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-primary leading-none">TERMS OF SERVICE</span>
        </div>
      </header>

      <div className="px-6 py-8 mx-auto w-full max-w-3xl space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-text-primary mb-2">SHOP4ME TERMS OF SERVICE</h1>
          <p className="text-sm font-bold tracking-wider text-text-muted uppercase">Last Updated: August 18, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6">
          <p className="text-text-secondary leading-relaxed">Welcome to Shop4Me.</p>
          <p className="text-text-secondary leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of the Shop4Me platform and services.
          </p>
          <p className="text-text-secondary leading-relaxed">
            By accessing or using Shop4Me, submitting a request, communicating with Shop4Me, or otherwise using our services, you agree to these Terms.
          </p>
          <p className="text-text-secondary leading-relaxed font-medium">
            If you do not agree with these Terms, please do not use the Shop4Me service.
          </p>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">1. About Shop4Me</h2>
            <p className="text-text-secondary leading-relaxed mb-3">Shop4Me is an errand and shopping assistance service.</p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Our service allows customers to request that Shop4Me assist with obtaining, purchasing, collecting, transporting, or delivering items and completing certain errands on the customer's behalf.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me is intended to make everyday shopping and errand tasks easier and more convenient.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">2. Using Shop4Me</h2>
            <p className="text-text-secondary leading-relaxed mb-3">You agree to provide accurate and complete information when submitting a request. This may include:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Your name",
                "Phone number",
                "WhatsApp contact information",
                "Location",
                "Delivery or pickup information",
                "Details of the item or service requested",
                "Quantity, size, brand, specifications, or other relevant requirements"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed mb-3">You are responsible for reviewing the information you provide and ensuring that it is accurate.</p>
            <p className="text-text-secondary leading-relaxed">Shop4Me may contact you if additional information or clarification is required before a request can be completed.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">3. Shopping and Errand Requests</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              When you submit a request, Shop4Me may review the request and determine whether it can reasonably be fulfilled.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Submitting a request does not automatically guarantee that Shop4Me will be able to complete it.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Availability, location, supplier availability, operating hours, pricing, transportation, safety considerations, and other circumstances may affect whether a request can be fulfilled.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me may contact you to confirm details, pricing, availability, delivery arrangements, or other relevant information before proceeding.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">4. Pricing and Payment</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              The price of an item or service may change depending on availability, supplier pricing, location, transportation costs, delivery requirements, applicable fees, and other circumstances.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Where applicable, Shop4Me will communicate the relevant cost or estimated cost to the customer before proceeding with the request.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              The customer may be required to make payment before Shop4Me purchases an item or begins fulfilling a request.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Where payment is required, the customer is responsible for providing accurate payment information and completing the required payment.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me is not responsible for price changes imposed by third-party suppliers after a quotation or estimate has been provided, where such changes are outside Shop4Me's reasonable control.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">5. Availability and Substitutions</h2>
            <p className="text-text-secondary leading-relaxed mb-3">Shop4Me cannot guarantee that every requested product will be available.</p>
            <p className="text-text-secondary leading-relaxed mb-3">
              If a requested item is unavailable, Shop4Me may contact the customer regarding alternatives, substitutions, changes in quantity, or cancellation.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me will not knowingly substitute a materially different product without appropriate customer communication or authorization where such authorization is reasonably required.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">6. Delivery and Pickup</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Where delivery or pickup is part of the requested service, the customer must provide accurate and sufficient location information.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Delivery times may vary because of traffic, weather, supplier delays, location, demand, operational conditions, or other circumstances.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Any delivery estimate provided by Shop4Me is an estimate unless expressly confirmed otherwise.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              The customer is responsible for being available to receive a delivery where required.
            </p>
            <p className="text-text-secondary leading-relaxed">
              If a delivery cannot be completed because the customer provides incorrect information, is unavailable, or otherwise prevents reasonable completion, additional arrangements or charges may apply where applicable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">7. Cancellations</h2>
            <p className="text-text-secondary leading-relaxed mb-3">A customer may request cancellation of a Shop4Me request.</p>
            <p className="text-text-secondary leading-relaxed mb-3">
              However, cancellation may not be possible if Shop4Me has already purchased the requested item, incurred non-refundable expenses, dispatched personnel, or otherwise begun fulfilling the request.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Where applicable, the customer may be responsible for reasonable costs already incurred before cancellation.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Any refund will be handled according to the circumstances of the request and Shop4Me's applicable refund process.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">8. Refunds and Returns</h2>
            <p className="text-text-secondary leading-relaxed mb-3">Refunds are not automatically guaranteed for every request.</p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Where an item is defective, incorrect, unavailable, damaged, or otherwise unsuitable, Shop4Me will review the circumstances and determine the appropriate resolution.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Where an item was purchased from a third-party seller, the seller's own return, exchange, warranty, or refund policy may also apply.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me may assist with communication or return arrangements where reasonably possible, but cannot guarantee the policies or actions of third-party sellers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">9. Customer Responsibilities</h2>
            <p className="text-text-secondary leading-relaxed mb-3">Customers agree to:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Provide accurate information",
                "Provide clear shopping or errand instructions",
                "Pay applicable charges when due",
                "Be available for necessary communication",
                "Provide accurate delivery or pickup information",
                "Treat Shop4Me staff, representatives, delivery personnel, and partners respectfully",
                "Use the service lawfully",
                "Not misuse the platform or communication channels"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Customers are responsible for ensuring that their requests comply with applicable laws and these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">10. Prohibited Requests</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may refuse or cancel requests involving illegal, dangerous, fraudulent, abusive, or otherwise prohibited goods or activities.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">Customers must not use Shop4Me to request assistance with:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Illegal goods or substances",
                "Stolen goods",
                "Weapons or prohibited weapons-related items",
                "Fraudulent transactions",
                "Counterfeit goods where prohibited by law",
                "Dangerous or hazardous materials",
                "Items that cannot legally be purchased, transported, or delivered",
                "Requests intended to facilitate criminal activity",
                "Harassment, threats, abuse, or intimidation",
                "Any activity that violates applicable law"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Shop4Me reserves the right to refuse any request where there is a reasonable safety, legal, operational, or compliance concern.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">11. Third-Party Suppliers</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may purchase items from third-party stores, marketplaces, vendors, supermarkets, pharmacies, retailers, or other suppliers.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me does not necessarily own or control these third-party businesses.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Product descriptions, availability, pricing, warranties, return policies, and other conditions may therefore be subject to the third party's policies.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Where appropriate, Shop4Me may communicate relevant third-party information to the customer.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">12. WhatsApp and Other Communication Channels</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may use WhatsApp, telephone calls, SMS, email, or other communication channels to communicate with customers.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              By choosing to communicate through a third-party platform such as WhatsApp, you acknowledge that the third party's own terms and policies may also apply.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Customers are responsible for providing a functional communication channel where one is required to complete their request.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">13. Service Availability</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me aims to provide reliable service but does not guarantee that the platform or services will always be available without interruption.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The service may occasionally be unavailable because of maintenance, technical problems, network issues, third-party service interruptions, security issues, emergencies, or circumstances beyond our reasonable control.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">14. Intellectual Property</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              The Shop4Me name, branding, logo, interface, design elements, text, graphics, software, and other original content associated with the platform may be protected by applicable intellectual property laws.
            </p>
            <p className="text-text-secondary leading-relaxed">
              You may not copy, reproduce, modify, distribute, sell, or commercially exploit Shop4Me's protected content without appropriate authorization.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">15. Limitation of Liability</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              To the extent permitted by applicable law, Shop4Me will not be responsible for losses caused by circumstances outside our reasonable control, including third-party supplier actions, product availability, traffic, weather, network failures, communication-platform failures, or other external circumstances.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me does not guarantee that every requested product will be available, that a third-party supplier will meet its obligations, or that every delivery will occur within an estimated timeframe.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Nothing in these Terms is intended to exclude or limit liability that cannot legally be excluded or limited under applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">16. Account or Service Restrictions</h2>
            <p className="text-text-secondary leading-relaxed mb-3">Shop4Me may restrict, suspend, or terminate access to the service where a customer:</p>
            <ul className="list-none space-y-2 mb-4">
              {[
                "Violates these Terms",
                "Provides false or misleading information",
                "Uses the service fraudulently",
                "Engages in abusive or threatening conduct",
                "Attempts to misuse the service",
                "Makes prohibited requests",
                "Creates a security or safety risk",
                "Engages in unlawful activity"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Where appropriate, Shop4Me may also refuse future requests from a customer.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">17. Changes to these Terms</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Shop4Me may update these Terms from time to time to reflect changes to the service, business operations, technology, or applicable legal requirements.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              When changes are made, the updated Terms will be published on this page with a revised "Last Updated" date.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Your continued use of Shop4Me after updated Terms are published may constitute acceptance of the updated Terms, to the extent permitted by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">18. Privacy</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              Your use of Shop4Me is also subject to the <Link to="/privacy" className="text-primary hover:underline font-medium">Shop4Me Privacy Policy</Link>.
            </p>
            <p className="text-text-secondary leading-relaxed mb-3">
              The Privacy Policy explains how Shop4Me collects, uses, stores, and protects personal information.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Users should review the Privacy Policy alongside these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-3 uppercase tracking-wider">19. Governing Law</h2>
            <p className="text-text-secondary leading-relaxed mb-3">
              These Terms shall be interpreted and applied in accordance with the applicable laws and regulations governing Shop4Me and its services.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Where appropriate, disputes shall be handled by the courts or other legally recognized dispute-resolution mechanisms having appropriate jurisdiction.
            </p>
          </div>

          <div className="pt-6 border-t border-border">
            <h2 className="text-lg font-bold text-text-primary mb-4 uppercase tracking-wider">20. Contact Shop4Me</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              If you have questions about these Terms, your Shop4Me request, payments, cancellations, or other service-related matters, please contact Shop4Me through the official contact channel provided in the application.
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
