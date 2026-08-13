import React from "react";
import "./TermsForHost.css";

const HostTerms = () => {
  return (
    <main className="host-terms-page">
      <div className="mt-wrap host-terms-container">

        {/* Header */}
        <header className="host-terms-header">
          <p className="host-terms-eyebrow">
            Nutzungsbedingungen für Gastgeber
          </p>

          <h1>
            Gastgeber-Nutzungsbedingungen
          </h1>

          <p className="host-terms-updated">
            Stand: 13. August 2026
          </p>
        </header>


        {/* 1. Purpose and Scope */}
        <section className="host-terms-section">
          <h2>
            <span>1.</span>{" "}
            Zweck und Geltungsbereich
          </h2>

          <p>
            Diese Nutzungsbedingungen regeln die Nutzung der Plattform
            Mischtisch durch Gastgeber. Die Plattform ermöglicht Gastgebern,
            ihren Betrieb zu präsentieren und Gästen die Möglichkeit zu geben,
            Plätze und Tische zu reservieren.
          </p>
        </section>


        {/* 2. Registration and Activation */}
        <section className="host-terms-section">
          <h2>
            <span>2.</span>{" "}
            Registrierung und Freischaltung
          </h2>

          <p>
            Gastgeber können sich über das dafür vorgesehene
            Registrierungsformular für die Nutzung der Plattform anmelden.
            Die bei der Registrierung gemachten Angaben müssen vollständig
            und wahrheitsgemäß sein.
          </p>

          <p>
            Die Freischaltung des Gastgeberkontos erfolgt nach Prüfung der
            Angaben durch das zuständige Team. Ein Anspruch auf Freischaltung
            besteht nicht.
          </p>
        </section>


        {/* 3. Login Credentials */}
        <section className="host-terms-section">
          <h2>
            <span>3.</span>{" "}
            Zugangsdaten
          </h2>

          <p>
            Der Gastgeber ist dafür verantwortlich, seine Zugangsdaten
            vertraulich zu behandeln und vor dem Zugriff Dritter zu schützen.
            Zugangsdaten dürfen nicht an andere Personen weitergegeben werden.
          </p>
        </section>


        {/* 4. One Mischtisch per Host */}
        <section className="host-terms-section">
          <h2>
            <span>4.</span>{" "}
            Ein Mischtisch pro Gastgeber
          </h2>

          <p>
            Jeder Gastgeber darf grundsätzlich nur einen Mischtisch für seinen
            Betrieb auf der Plattform betreiben. Mehrfachregistrierungen für
            denselben Betrieb sind nicht zulässig.
          </p>
        </section>


        {/* 5. Schedules and Capacity */}
        <section className="host-terms-section">
          <h2>
            <span>5.</span>{" "}
            Öffnungszeiten und Kapazitäten
          </h2>

          <p>
            Der Gastgeber ist dafür verantwortlich, seine verfügbaren
            Reservierungszeiten und Kapazitäten korrekt und aktuell zu halten.
          </p>

          <ul className="host-terms-list">
            <li>
              Öffnungszeiten und verfügbare Zeiten müssen korrekt angegeben
              werden.
            </li>
            <li>
              Die verfügbare Anzahl der Plätze muss der tatsächlichen
              Kapazität entsprechen.
            </li>
            <li>
              Änderungen der Verfügbarkeit sind zeitnah zu aktualisieren.
            </li>
            <li>
              Nicht verfügbare Zeiten dürfen nicht für Reservierungen
              freigegeben werden.
            </li>
          </ul>

          <p>
            Der Gastgeber trägt die Verantwortung dafür, dass bestätigte
            Reservierungen tatsächlich bedient werden können.
          </p>
        </section>


        {/* 6. Reservations */}
        <section className="host-terms-section">
          <h2>
            <span>6.</span>{" "}
            Reservierungen
          </h2>

          <p>
            Reservierungen, die über die Plattform vorgenommen werden, sind
            vom Gastgeber entsprechend der angegebenen Verfügbarkeit zu
            berücksichtigen.
          </p>

          <p>
            Der Gastgeber verpflichtet sich, mit den Reservierungsdaten
            sorgfältig umzugehen und Gäste bei notwendigen Änderungen oder
            Problemen rechtzeitig zu informieren.
          </p>
        </section>


        {/* 7. Photos, Logos and Other Content */}
        <section className="host-terms-section">
          <h2>
            <span>7.</span>{" "}
            Fotos, Logos und sonstige Inhalte
          </h2>

          <p>
            Der Gastgeber darf Fotos, Logos, Texte und andere Inhalte
            hochladen, die zur Darstellung seines Betriebs auf der Plattform
            verwendet werden.
          </p>

          <p>
            Der Gastgeber stellt sicher, dass er über die erforderlichen
            Rechte zur Nutzung und Veröffentlichung dieser Inhalte verfügt.
          </p>

          <p>
            Inhalte, die gegen geltendes Recht oder Rechte Dritter verstoßen,
            dürfen nicht hochgeladen oder veröffentlicht werden.
          </p>
        </section>


        {/* 8. Promotions, Discounts and Special Offers */}
        <section className="host-terms-section">
          <h2>
            <span>8.</span>{" "}
            Aktionen, Rabatte und Sonderangebote
          </h2>

          <p>
            Gastgeber können Aktionen, Rabatte und besondere Angebote für
            Gäste auf der Plattform bereitstellen.
          </p>

          <p>
            Alle Angaben zu Angeboten müssen korrekt, verständlich und für
            Gäste nachvollziehbar sein.
          </p>

          <ul className="host-terms-list">
            <li>
              Bedingungen eines Angebots müssen eindeutig angegeben werden.
            </li>
            <li>
              Gültigkeitszeiträume müssen korrekt angegeben werden.
            </li>
            <li>
              Einschränkungen eines Angebots müssen deutlich erkennbar sein.
            </li>
            <li>
              Angebote dürfen nicht irreführend dargestellt werden.
            </li>
          </ul>

          <p>
            Der Gastgeber ist für die Einhaltung der von ihm veröffentlichten
            Angebotsbedingungen verantwortlich.
          </p>

          <p>
            Die Plattform übernimmt keine Verantwortung für die wirtschaftliche
            Durchführung oder Verfügbarkeit eines vom Gastgeber angebotenen
            Rabatts oder Sonderangebots.
          </p>
        </section>


        {/* 9. Privacy and Confidentiality */}
        <section className="host-terms-section">
          <h2>
            <span>9.</span>{" "}
            Datenschutz und Vertraulichkeit
          </h2>

          <p>
            Personenbezogene Daten von Gästen dürfen ausschließlich im Rahmen
            der zulässigen Zwecke und unter Beachtung der geltenden
            Datenschutzbestimmungen verarbeitet werden.
          </p>

          <p>
            Der Gastgeber verpflichtet sich, erhaltene personenbezogene Daten
            vertraulich zu behandeln und angemessene technische und
            organisatorische Maßnahmen zu deren Schutz zu treffen.
          </p>

          <p>
            Eine Weitergabe von Gästedaten an unbefugte Dritte ist nicht
            zulässig.
          </p>
        </section>


        {/* 10. Privacy Requests from Guests */}
        <section className="host-terms-section">
          <h2>
            <span>10.</span>{" "}
            Datenschutzanfragen von Gästen
          </h2>

          <p>
            Gehen beim Gastgeber Anfragen von Gästen zu deren
            personenbezogenen Daten ein, sind diese unverzüglich und
            sorgfältig zu bearbeiten.
          </p>

          <p>
            Bei Fragen oder Unsicherheiten kann der Gastgeber den zuständigen
            Ansprechpartner unter{" "}
            <a href="mailto:info@dehoga-sachsen.de">
              info@dehoga-sachsen.de
            </a>
            {" "}kontaktieren.
          </p>
        </section>


        {/* 11. Public Profile Information */}
        <section className="host-terms-section">
          <h2>
            <span>11.</span>{" "}
            Öffentliche Profilinformationen
          </h2>

          <p>
            Die vom Gastgeber bereitgestellten Informationen können auf der
            Plattform öffentlich sichtbar sein.
          </p>

          <ul className="host-terms-list">
            <li>
              Name und Art des Betriebs
            </li>
            <li>
              Adresse und Standort
            </li>
            <li>
              Öffnungszeiten und verfügbare Reservierungszeiten
            </li>
            <li>
              Beschreibung des Betriebs
            </li>
            <li>
              Fotos und Logos
            </li>
            <li>
              Informationen zu Aktionen und Angeboten
            </li>
          </ul>

          <p>
            Der Gastgeber ist dafür verantwortlich, dass die veröffentlichten
            Informationen korrekt und aktuell sind.
          </p>
        </section>


        {/* 12. Technical Operation */}
        <section className="host-terms-section">
          <h2>
            <span>12.</span>{" "}
            Technischer Betrieb
          </h2>

          <p>
            Die Plattform wird nach Möglichkeit zuverlässig und verfügbar
            betrieben. Aufgrund technischer Störungen, Wartungsarbeiten oder
            Ereignissen außerhalb des Einflussbereichs des Betreibers kann es
            jedoch zu vorübergehenden Einschränkungen kommen.
          </p>
        </section>


        {/* 13. Suspension and Termination */}
        <section className="host-terms-section">
          <h2>
            <span>13.</span>{" "}
            Sperrung und Beendigung
          </h2>

          <p>
            Ein Gastgeberkonto kann vorübergehend gesperrt oder dauerhaft
            beendet werden, wenn gegen diese Nutzungsbedingungen oder geltendes
            Recht verstoßen wird.
          </p>

          <p>
            Eine Sperrung oder Beendigung kann insbesondere erfolgen bei:
          </p>

          <ul className="host-terms-list">
            <li>
              falschen oder irreführenden Angaben,
            </li>
            <li>
              wiederholten Problemen mit Reservierungen,
            </li>
            <li>
              Verstößen gegen Datenschutzbestimmungen,
            </li>
            <li>
              Verletzungen von Rechten Dritter,
            </li>
            <li>
              sonstigem missbräuchlichem Verhalten.
            </li>
          </ul>

          <p>
            Der Gastgeber kann die Nutzung der Plattform jederzeit beenden,
            sofern keine offenen Verpflichtungen entgegenstehen.
          </p>
        </section>


        {/* 14. Liability */}
        <section className="host-terms-section">
          <h2>
            <span>14.</span>{" "}
            Haftung
          </h2>

          <p>
            Der Gastgeber ist für die von ihm bereitgestellten Informationen,
            Inhalte, Angebote und die Durchführung seiner Reservierungen
            selbst verantwortlich. Die Haftung richtet sich nach den
            gesetzlichen Bestimmungen.
          </p>
        </section>


        {/* 15. Privacy */}
        <section className="host-terms-section">
          <h2>
            <span>15.</span>{" "}
            Datenschutz
          </h2>

          <p>
            Die Verarbeitung personenbezogener Daten erfolgt unter Beachtung
            der geltenden Datenschutzgesetze und der jeweils gültigen
            Datenschutzhinweise der Plattform.
          </p>
        </section>


        {/* 16. Changes */}
        <section className="host-terms-section">
          <h2>
            <span>16.</span>{" "}
            Änderungen
          </h2>

          <p>
            Änderungen dieser Nutzungsbedingungen können vorgenommen werden,
            wenn dies aufgrund gesetzlicher, technischer oder organisatorischer
            Entwicklungen erforderlich ist. Über wesentliche Änderungen wird
            der Gastgeber in geeigneter Weise informiert.
          </p>

          <p>
            Für die Nutzung der Plattform gilt jeweils die zum Zeitpunkt der
            Nutzung gültige Fassung dieser Nutzungsbedingungen.
          </p>
        </section>

      </div>
    </main>
  );
};

export default HostTerms;