
import React from "react";
import "./Imprint.css";

const Imprint = () => {
  return (
    <main className="imprint-page">
      <div className="mt-wrap imprint-container">
        {/* Header */}
        <header className="imprint-header">
          <p className="imprint-eyebrow">Provider Information</p>
          <h1>Imprint</h1>
          <p className="imprint-updated">Last updated: August 2026</p>
        </header>

        {/* Provider */}
        <section className="imprint-section">
          <h2>Provider</h2>

          <div className="imprint-content">
            <p className="imprint-company">
              DEHOGA Hotel- und Gaststättenverband Sachsen e.V.
              <br />
              (DEHOGA Sachsen e.V.)
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
              <br />

              <strong>Website:</strong>{" "}
              <a
                href="https://mischtisch-sachsen.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://mischtisch-sachsen.de/
              </a>
            </p>
          </div>
        </section>

        {/* Authorised Representative */}
        <section className="imprint-section">
          <h2>Authorised Representative</h2>

          <p>
            Represented by the Managing Director (Hauptgeschäftsführer):{" "}
            <strong>Axel Klein</strong>
          </p>
        </section>

        {/* Register */}
        <section className="imprint-section">
          <h2>Register</h2>

          <p>
            Registered in the register of associations.
            <br />
            Register court: Amtsgericht Dresden
            <br />
            Registration number: 1104
          </p>
        </section>

        {/* Mischtisch Saxony */}
        <section className="imprint-section">
          <h2>Mischtisch Saxony</h2>

          <p>
            Mischtisch Saxony is a reservation-intermediary platform operated
            by DEHOGA Sachsen e.V. for participating restaurants, cafés, hotels
            and other hosts.
          </p>

          <p>
            DEHOGA Sachsen e.V. is not the provider of the hospitality
            services supplied by an individual host. Unless otherwise required
            by law, the selected host is responsible for its food, drinks,
            events, opening hours, prices, on-site services and host-provided
            information.
          </p>
        </section>

        {/* Consumer Dispute Resolution */}
        <section className="imprint-section">
          <h2>Consumer Dispute Resolution</h2>

          <p>
            DEHOGA Sachsen e.V. is neither willing nor obliged to participate
            in dispute-resolution proceedings before a consumer arbitration
            board.
          </p>
        </section>

        {/* Content and Image Rights */}
        <section className="imprint-section">
          <h2>Content and Image Rights</h2>

          <p>
            Original content is subject to applicable copyright law. Photos,
            logos, descriptions and other material supplied by participating
            hosts remain the responsibility of the respective host. Hosts may
            upload or publish only material for which they hold the necessary
            rights.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Imprint;