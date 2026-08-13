import React from "react";
import "./LegalPage.css";

export function LegalPage() {
  // English translations for Legal Page
  const translations = {
    en: {
      eyebrow: "Labelling & legal",
      title: "Transparency about this application",
      intro:
        "This page collects all labelling. It is written for the test phase; before going live the marked sections must be completed and the whole page reviewed by a lawyer.",
      aiSummaryTitle: "English summary.",
      aiSummary:
        'This application was built with AI assistance but contains no AI itself — no chatbot, no automated decisions, no profiling. For a reservation we collect first name, last name, email and phone; address and message are optional. Your details go to the venue you chose and to nobody else; other guests only see which chairs are taken. Nothing is loaded from third-party servers, and no advertising or analytics services are used. You can cancel and thereby delete a booking at any time under "My seats". The German text below is the legally binding version.',
      aiSectionTitle: "Created with AI",
      aiSection1:
        "This application was developed with the support of artificial intelligence. Structure, program code and texts were created in dialogue with an AI assistant (Claude from Anthropic) and subsequently editorially reviewed.",
      aiSection2:
        "The application itself contains no artificial intelligence: There is no chatbot, no automated decisions and no profiling. Availability, time slots and table plans follow exclusively the information entered by the businesses themselves.",
      aiSection3:
        "Therefore the transparency obligations under Article 50 of the AI Regulation (EU) 2024/1689, which have applied since 2 August 2026, do not apply to this application. Should an AI function be added later — such as a chatbot or automatically generated texts and images — it must be labelled at this point and directly at the function.",
      privacySectionTitle: "Privacy",
      privacySection1:
        "The respective chosen business is jointly responsible for the reservation data together with the platform operator. For live operation, a joint controllership agreement under Article 26 GDPR is required.",
      privacySection2:
        "Personal data collected: First name, last name, email and telephone number for processing and follow-up on the reservation. Address and message are voluntary. Legal basis is Article 6(1)(b) GDPR (performance of pre-contractual measures) or (a) for voluntary information.",
      privacySection3:
        "Who sees the data: Only the chosen business. Other guests are shown exclusively which chairs are occupied — without names or contact details.",
      privacySection4:
        "Storage: Shared business, registration and reservation data are stored in the configured Firebase project. Host accesses are managed via Firebase Authentication, photos in Cloud Storage and business data in Cloud Firestore. Language, logo selection and local display states remain in the browser. Emails are sent via the configured SMTP service. The application itself uses no marketing or analytics functions.",
      privacySection5:
        'Your rights: Access, rectification, erasure, restriction, data portability and objection (Articles 15-21 GDPR) as well as complaint to a supervisory authority. Reservations can be cancelled and thereby deleted at any time under "My seats".',
      privacyNotice:
        "To be completed before live operation: Name and contact of the controller, data protection officer, specific deletion periods, Firebase project region, processors used (Firebase/Google Cloud, hosting, email dispatch) and the associated contracts and privacy notices.",
      trademarkSectionTitle: "Trademarks and usage rights",
      trademarkSection1:
        '"Mischtisch" is a protected word mark and word-figurative mark of the Bavarian Hotel and Restaurant Association DEHOGA Bayern e.V. Use by participating businesses is governed by the usage agreement; the templates from its Annex 1 must not be altered or distorted.',
      trademarkSection2:
        "Business photos are uploaded by the participating establishments themselves. Each business warrants that it owns the usage rights to the images and does not upload any images on which persons are recognisable without their consent (§§ 22 f. KUG, Art. 6 GDPR). The platform does not pre-screen images; complained-about photos are removed upon notice.",
      trademarkSection3:
        'The logo of DEHOGA Sachsen e.V. is used as an unaltered original file and merely scaled to screen size; colours, proportions and lettering remain untouched. Use is in coordination with the association. The word mark representation "MISCH·TISCH" in the header is a placeholder and must be replaced by the approved template from Annex 1 of the usage agreement before publication.',
      furtherNoticesTitle: "Further notices",
      imprintNotice:
        "Imprint according to § 5 DDG and responsible person according to § 18(2) MStV are to be completed before publication.",
      accessibilityNotice:
        "Accessibility: The application is keyboard-operable, works with labels for screen readers and respects the system setting for reduced motion. For consumer services, the Accessibility Strengthening Act has applied since 28 June 2025; an accessibility statement is to be added once the scope of application is clarified.",
      noPaymentNotice:
        "No payment function: The reservation is free of charge, no payment obligation arises. Availability information comes exclusively from real reservations and business information.",
      furtherNoticesCompletion:
        "To be completed: Imprint, accessibility statement, where applicable reference to dispute resolution.",
      versionStatusTitle: "Status of this version",
      versionStatus1:
        "Test version / concept draft with sample data. Host access data is only simply secured and not suitable for live operation — please use test data exclusively.",
      versionStatus2:
        "Before release, server operation with encrypted data storage, a deletion concept and a legal review are required.",
      imprintTitle: "Legal notice",
      imprintSection1: "Information according to § 5 DDG",
      imprintSection2:
        "DEHOGA Hotel- und Gaststättenverband Sachsen e.V.\n(DEHOGA Sachsen e.V.)\nTharandter Straße 5\n01159 Dresden",
      imprintSection3:
        "Contact\nPhone: (0351) 428 95 10\nTelefax: (0351) 428 95 19\nWhatsApp: 0152 22344383\nE-Mail: info@dehoga-sachsen.de",
      imprintSection4: "Represented by\nManaging Director: Axel Klein",
      imprintSection5:
        "Register entry\nEntered in the register of associations.\nRegister court: Amtsgericht Dresden\nRegister number: 1104",
      imprintSection6: "Image rights\nHomepage area:",
      imageRights: [
        "© Wavebreakmedia Ltd | Dreamstime.com",
        "© Alexander Kirch | Dreamstime.com",
        "© Taiga | Dreamstime.com",
        "© Wavebreakrneora Ltd | Dreamstime.com",
        "© Wavebreakmedia Ltd | Dreamstime.com",
        "© Rosshelen | Dreamstime.com",
      ],
      phoneLink: "(0351) 428 95 10",
      whatsappLink: "0152 22344383",
      emailLink: "info@dehoga-sachsen.de",
    },
  };

  const t = translations.en;

  const Card = ({ titel, kinder }) => (
    <div className="legal-card">
      <div className="legal-card-title f-display">{titel}</div>

      <div className="legal-card-content">{kinder}</div>
    </div>
  );

  const Dashed = ({ children }) => (
    <div className="legal-dashed"> {children} </div>
  );

  return (
  <div className="legal-page-container">
      <div className="eyebrow">{t.eyebrow}</div>
      <h2
        className="f-display legal-page-title"
        style={{
          fontSize: "clamp(26px,4.5vw,36px)",
          fontWeight: 600,
          margin: "6px 0 10px",
          color: "var(--kobalt-dunkel)",
        }}
      >
        {t.title}
      </h2>
      <p className="lead legal-page-intro" style={{ marginBottom: 16 }}>
        {t.intro}
      </p>

      {/* English Summary Box - only shown for English */}
      <div
        className="legal-card legal-summary-box"
        style={{
          marginBottom: 20,
          background: "#EEF1FA",
          borderColor: "var(--kobalt)",
        }}
        lang="en"
      >
        <b>{t.aiSummaryTitle}</b> {t.aiSummary}
      </div>

      <Card
        titel={t.aiSectionTitle}
        kinder={
          <>
            <div>
              <b>{t.aiSection1}</b>
            </div>
            <div>{t.aiSection2}</div>
            <div>{t.aiSection3}</div>
          </>
        }
      />
      <Card
        titel={t.privacySectionTitle}
        kinder={
          <>
            <div>
              <b>{t.privacySection1}</b>
            </div>
            <div>
              <b>{t.privacySection2}</b>
            </div>
            <div>
              <b>{t.privacySection3}</b>
            </div>
            <div>
              <b>{t.privacySection4}</b>
            </div>
            <div>
              <b>{t.privacySection5}</b>
            </div>
            <Dashed>{t.privacyNotice}</Dashed>
          </>
        }
      />
      <Card
        titel={t.trademarkSectionTitle}
        kinder={
          <>
            <div>{t.trademarkSection1}</div>
            <div>
              <b>{t.trademarkSection2}</b>
            </div>
            <div>{t.trademarkSection3}</div>
          </>
        }
      />
      <Card
        titel={t.furtherNoticesTitle}
        kinder={
          <>
            <div>
              <b>{t.imprintNotice}</b>
            </div>
            <div>
              <b>{t.accessibilityNotice}</b>
            </div>
            <div>
              <b>{t.noPaymentNotice}</b>
            </div>
            <Dashed>{t.furtherNoticesCompletion}</Dashed>
          </>
        }
      />
      <Card
        titel={t.versionStatusTitle}
        kinder={
          <>
            <div>{t.versionStatus1}</div>
            <div>{t.versionStatus2}</div>
          </>
        }
      />

      <Card
        titel={t.imprintTitle}
        kinder={
          <>
            <div>
              <b>{t.imprintSection1}</b>
            </div>

            <div>
              <b>{t.imprintSection2}</b>
            </div>

            <div>
              <b>{t.imprintSection3}</b>
            </div>

            <div>
              <b>{t.imprintSection4}</b>
            </div>

            <div>
              <b>{t.imprintSection5}</b>
            </div>

            <div>
              <b>{t.imprintSection6}</b>
              <ul
                className="legal-image-rights"
                style={{ margin: "8px 0 0", paddingLeft: 20 }}
              >
                {t.imageRights.map((right, index) => (
                  <li key={index}>{right}</li>
                ))}
              </ul>
            </div>
          </>
        }
      />
    </div>
  );
}
