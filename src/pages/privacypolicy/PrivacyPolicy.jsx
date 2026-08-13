import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <main className="privacy-page">
      <div className="mt-wrap privacy-container">
        {/* Header */}
        <header className="privacy-header">
          <p className="privacy-eyebrow">Privacy & Data Protection</p>

          <h1>Privacy Policy</h1>

          <p className="privacy-updated">Last updated: August 2026</p>
        </header>

        {/* 1. Controller */}
        <section className="privacy-section">
          <h2>
            <span>1.</span> Controller
          </h2>

          <div className="privacy-content">
            <p className="privacy-company">
              DEHOGA Hotel- und Gaststättenverband Sachsen e.V.
            </p>

            <p>
              Tharandter Straße 5
              <br />
              01159 Dresden
              <br />
              Germany
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+493514289510">+49 (0)351 428 95 10</a>
              <br />

              <strong>Email:</strong>{" "}
              <a href="mailto:info@dehoga-sachsen.de">
                info@dehoga-sachsen.de
              </a>
            </p>
          </div>
        </section>

        {/* 2. General Principle */}
        <section className="privacy-section">
          <h2>
            <span>2.</span> General Principle
          </h2>

          <p>
            We process personal data only where required to operate the
            platform, facilitate reservations, manage host accounts, secure
            the service or comply with legal obligations. Mischtisch Saxony
            currently does not use advertising or analytics trackers.
          </p>
        </section>

        {/* 3. Website Access and Hosting */}
        <section className="privacy-section">
          <h2>
            <span>3.</span> Website Access and Hosting
          </h2>

          <p>
            The website{" "}
            <a
              href="https://mischtisch-sachsen.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mischtisch-sachsen.de/
            </a>{" "}
            is hosted using Hostinger. When the website is accessed,
            technically necessary connection and server data may be processed,
            including IP address, access date/time, requested resource,
            browser/device information and technical error/security data.
          </p>

          <p>
            This processing is required for secure, stable and technically
            necessary website operation and is based on Article 6(1)(f) GDPR.
          </p>

          <p>
            Hostinger provides data-processing terms for covered hosting
            services. The specific Hostinger group company acting under the
            account contract and the server region used for this website
            depend on the configured Hostinger account/hosting contract. That
            configuration should be documented internally and reviewed when
            changed.
          </p>

          <p>
            Further information:{" "}
            <a
              href="https://www.hostinger.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hostinger Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://www.hostinger.com/legal/dpa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hostinger Data Processing Agreement
            </a>
          </p>
        </section>

        {/* 4. Guest Reservations */}
        <section className="privacy-section">
          <h2>
            <span>4.</span> Guest Reservations
          </h2>

          <p>
            Guests do not need an account. Data may include first/last name,
            email, phone, postal address if retained, number of seats,
            date/time, optional message, selected host and technical
            reservation/confirmation data.
          </p>

          <p>
            The data is used to transmit the reservation, check availability,
            document the reservation and send transactional emails. Processing
            is generally based on Article 6(1)(b) GDPR; necessary
            security/abuse-prevention processing may rely on Article 6(1)(f)
            GDPR.
          </p>

          <div className="privacy-note">
            <strong>Recommendation:</strong> remove the postal-address field
            unless genuinely required.
          </div>
        </section>

        {/* 5. Disclosure to the Selected Host */}
        <section className="privacy-section">
          <h2>
            <span>5.</span> Disclosure to the Selected Host
          </h2>

          <p>
            Reservation data is disclosed to the host selected by the guest.
            DEHOGA Sachsen e.V. is responsible for processing needed to operate
            the platform and transmit the reservation. After receipt, the
            selected host processes the data under its own responsibility for
            reservation handling and its own hospitality service.
          </p>
        </section>

        {/* 6. Reservation Emails */}
        <section className="privacy-section">
          <h2>
            <span>6.</span> Reservation Emails
          </h2>

          <p>
            After a successful reservation, a confirmation is sent to the guest
            and a notification is sent to the selected host. EmailJS is used as
            the technical email integration, and Gmail by Google is the email
            service connected to EmailJS.
          </p>

          <p>
            The email flow may process the guest's name and email address, the
            selected host, reservation date/time, number of seats and other
            reservation information required for the confirmation message.
          </p>

          <p>
            EmailJS publishes a data-processing agreement. Gmail is a Google
            service; under Google's privacy information, Google Ireland Limited
            is generally responsible for Google services provided to users in
            the European Economic Area. Google processes email content and
            related technical information in order to provide and secure Gmail.
          </p>

          <p>
            The legal basis for transactional reservation messages is generally
            Article 6(1)(b) GDPR; necessary delivery/security processing may
            rely on Article 6(1)(f) GDPR.
          </p>

          <p>
            Further information:{" "}
            <a
              href="https://www.emailjs.com/legal/data-protection-agreement/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EmailJS Data Processing Agreement
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </p>

          <div className="privacy-note">
            <strong>Technical recommendation:</strong> the Gmail mailbox used
            for production reservation emails should be managed as a business
            account (preferably Google Workspace or another contractually
            suitable business email service).
          </div>
        </section>

        {/* 7. Google Firebase */}
        <section className="privacy-section">
          <h2>
            <span>7.</span> Google Firebase
          </h2>

          <p>
            Firebase Authentication is used only for host accounts. Google
            states that Firebase Authentication is operated through US data
            centres. Cloud Firestore stores platform/host/reservation data, and
            Cloud Storage for Firebase stores host images. Google provides
            Firebase data-processing/security terms and SCCs for relevant
            international transfers.
          </p>

          <div className="privacy-note">
            <strong>Recommendation:</strong> use/document an EU/EEA location
            for Firestore and Cloud Storage where available.
          </div>
        </section>

        {/* 8. Technically Necessary Storage */}
        <section className="privacy-section">
          <h2>
            <span>8.</span> Technically Necessary Storage
          </h2>

          <p>
            Technically necessary browser storage/tokens may be used for host
            login/session handling, language preference, security and
            necessary form/session state. No analytics, advertising or
            marketing trackers are currently planned.
          </p>
        </section>

        {/* 9. No Automated Decision-Making */}
        <section className="privacy-section">
          <h2>
            <span>9.</span> No Automated Decision-Making
          </h2>

          <p>
            Mischtisch Saxony currently does not use solely automated
            decision-making or profiling within Article 22 GDPR. A final
            seat-availability check is not guest profiling.
          </p>
        </section>

        {/* 10. Recommended Retention */}
        <section className="privacy-section">
          <h2>
            <span>10.</span> Recommended Retention
          </h2>

          <ul className="privacy-list">
            <li>
              <strong>Operational reservation data:</strong> up to 90 days
              after reservation date
            </li>
            <li>
              Then deletion/anonymisation unless a specific legal need exists
            </li>
            <li>
              <strong>Security/error logs:</strong> generally up to 30 days
            </li>
            <li>
              <strong>Host account/profile:</strong> while active; operational
              deletion generally within 30 days after final deactivation
            </li>
            <li>
              <strong>Host images:</strong> until deletion/deactivation,
              subject to limited backup periods
            </li>
            <li>
              <strong>Email delivery information:</strong> only as long as
              necessary for delivery/troubleshooting
            </li>
            <li>
              Data required for a concrete dispute may be retained separately
              with restricted access for as long as necessary. The regular
              German civil-law limitation period is generally three years.
            </li>
          </ul>
        </section>

        {/* 11. Rights */}
        <section className="privacy-section">
          <h2>
            <span>11.</span> Rights
          </h2>

          <p>
            Subject to statutory requirements, data subjects may have rights of
            access, correction, erasure, restriction, portability and
            objection. Requests may be sent to{" "}
            <a href="mailto:info@dehoga-sachsen.de">
              info@dehoga-sachsen.de
            </a>
            .
          </p>
        </section>

        {/* 12. Complaint */}
        <section className="privacy-section">
          <h2>
            <span>12.</span> Complaint
          </h2>

          <p>
            Data subjects may lodge a complaint with a competent
            data-protection supervisory authority.
          </p>
        </section>

        {/* 13. Changes */}
        <section className="privacy-section">
          <h2>
            <span>13.</span> Changes
          </h2>

          <p>
            This Privacy Policy will be updated when platform functions,
            providers or legal requirements change.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;