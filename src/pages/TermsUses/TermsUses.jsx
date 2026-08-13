import React from "react";
import "./TermsUses.css";

const TermsUses = () => {
  return (
    <main className="terms-page">
      <div className="mt-wrap terms-container">
        {/* Header */}
        <header className="terms-header">
          <p className="terms-eyebrow">
            Terms & Reservations
          </p>

          <h1>Terms of Use &amp; Reservation</h1>

          <p className="terms-updated">
            Last updated: August 2026
          </p>
        </header>

        {/* 1. Platform Role */}
        <section className="terms-section">
          <h2>
            <span>1.</span> Platform Role
          </h2>

          <p>
            Mischtisch Saxony is operated by DEHOGA Sachsen e.V. and acts as
            an intermediary between guests and participating hosts. DEHOGA does
            not itself provide the host's hospitality services.
          </p>
        </section>

        {/* 2. Minimum Age */}
        <section className="terms-section">
          <h2>
            <span>2.</span> Minimum Age
          </h2>

          <p>
            Reservations may be made only by persons aged 18 or older. A person
            reserving several seats confirms that they are entitled to make the
            reservation for accompanying persons.
          </p>
        </section>

        {/* 3. Reservation */}
        <section className="terms-section">
          <h2>
            <span>3.</span> Reservation
          </h2>

          <p>
            The guest selects the host, date, time and number of seats and
            provides required contact details. Displayed availability is not
            yet a confirmation. A reservation is confirmed only after the final
            availability check succeeds and a confirmation is displayed and/or
            sent by email.
          </p>
        </section>

        {/* 4. Multiple Seats */}
        <section className="terms-section">
          <h2>
            <span>4.</span> Multiple Seats
          </h2>

          <p>
            Where sufficient capacity exists, several seats may be reserved in
            one booking. The guest is responsible for entering the correct
            number.
          </p>
        </section>

        {/* 5. Accuracy */}
        <section className="terms-section">
          <h2>
            <span>5.</span> Accuracy
          </h2>

          <p>
            Reservation information must be complete and accurate. Incorrect
            contact information may prevent important messages from being
            delivered.
          </p>
        </section>

        {/* 6. Changes and Cancellations */}
        <section className="terms-section">
          <h2>
            <span>6.</span> Changes and Cancellations
          </h2>

          <p>
            Mischtisch Saxony currently does not provide guest self-service
            changes, rescheduling or cancellations. Guests may contact the
            selected host directly. Whether a requested change/cancellation is
            accepted depends on the circumstances and any host-specific
            conditions. Mischtisch does not guarantee acceptance.
          </p>
        </section>

        {/* 7. Host Changes */}
        <section className="terms-section">
          <h2>
            <span>7.</span> Host Changes
          </h2>

          <p>
            The current platform does not provide a host-side cancellation
            function. If a host exceptionally cannot honour a confirmed
            reservation, the host is responsible for contacting affected guests
            where reasonably possible.
          </p>
        </section>

        {/* 8. Prices and Payments */}
        <section className="terms-section">
          <h2>
            <span>8.</span> Prices and Payments
          </h2>

          <p>
            Mischtisch Saxony does not process online payments. Charges for
            host services are handled directly between guest and host.
          </p>
        </section>

        {/* 9. Promotions and Discounts */}
        <section className="terms-section">
          <h2>
            <span>9.</span> Promotions and Discounts
          </h2>

          <p>
            Hosts may publish promotions, discounts or special offers. The host
            is responsible for the content, conditions, validity, availability
            and redemption of the offer.
          </p>
        </section>

        {/* 10. Availability and Technical Errors */}
        <section className="terms-section">
          <h2>
            <span>10.</span> Availability and Technical Errors
          </h2>

          <p>
            Availability can change because of concurrent reservations. The
            final technical check before confirmation is decisive. DEHOGA
            Sachsen e.V. does not guarantee uninterrupted or error-free
            operation.
          </p>
        </section>

        {/* 11. Prohibited Use */}
        <section className="terms-section">
          <h2>
            <span>11.</span> Prohibited Use
          </h2>

          <p>
            Automated bulk reservations, knowingly false data, technical
            manipulation, attacks and unlawful use are prohibited.
          </p>
        </section>

        {/* 12. Liability */}
        <section className="terms-section">
          <h2>
            <span>12.</span> Liability
          </h2>

          <p>
            Statutory liability rules apply. DEHOGA Sachsen e.V. is not
            responsible for proper performance of the host's own hospitality
            services where DEHOGA does not provide those services and no broader
            statutory responsibility applies. Mandatory statutory claims remain
            unaffected.
          </p>
        </section>

        {/* 13. Privacy */}
        <section className="terms-section">
          <h2>
            <span>13.</span> Privacy
          </h2>

          <p>
            The Mischtisch Saxony{" "}
            <a href="/privacy">Privacy Policy</a> applies.
          </p>
        </section>

        {/* 14. Governing Law */}
        <section className="terms-section">
          <h2>
            <span>14.</span> Governing Law
          </h2>

          <p>
            German law applies. Mandatory consumer-protection rules remain
            unaffected.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsUses;