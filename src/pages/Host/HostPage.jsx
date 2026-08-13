import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./HostPage.css";
import {
  getSession,
  getVenues,
  setSession as saveSession,
} from "../../services/storage";
import { LoginForm, RegisterForm } from "../../components/AuthForms";
import { HostArea } from "../../components/HostArea.jsx";

export function HostPage({
  locations,
  reload,
  showToast,
  onAbout,
  onTischform,
  onSeen,
  onRecht,
  onHome,
  onCodes,
}) {
  const { t } = useTranslation();

  const safeShowToast =
    typeof showToast === "function"
      ? showToast
      : (message) => console.warn("Toast:", message);

  const safeReload =
    typeof reload === "function"
      ? reload
      : () => {
          console.warn("reload function is not available");
        };

  const [session, setSession] = useState(undefined);
  const [mode, setMode] = useState("login");
  const [regBetrieb, setRegBetrieb] = useState(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const s = await getSession();

        if (!alive) return;

        console.log("========== INITIAL HOST SESSION ==========");
        console.log("Session:", s);

        setSession(s || null);

        if (s?.betriebId) {
          console.log("Loading venues for host...");

          const venues = await getVenues();

          if (!alive) return;

          console.log("Venues loaded from Firebase:", venues);
          console.log("Venue count:", venues.length);

          const matchingVenue = venues.find(
            (venue) => venue?.id === s.betriebId,
          );

          console.log("Matching Firebase venue:", matchingVenue);

          if (matchingVenue) {
            setRegBetrieb(matchingVenue);
          }
        }
      } catch (err) {
        console.error("Host session/venue loading failed:", err);
        if (alive) {
          setSession(null);
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (session) {
      const matchingLocation = (locations ?? []).find(
        (l) => l?.id === session.betriebId,
      );
    }
  }, [session, locations, regBetrieb]);

  const onDone = (s, betrieb) => {
    if (betrieb) {
      setRegBetrieb(betrieb);
    }

    // console.log("Setting HostPage session...");
    setSession(s);
  };
  const logout = async () => {
    try {
      await saveSession(null);
    } catch {}
    setSession(null);
    safeShowToast(t("hostPage.signedOut"));
  };

  const renderAuth = (notice) => (
    <div
      className="host-page-container mt-wrap"
      style={{ padding: "28px 20px 60px", maxWidth: 960 }}
    >
      <div className="eyebrow">{t("hostPage.eyebrow")}</div>
      <h2
        className="f-display host-page-title"
        style={{
          fontSize: "clamp(26px,4.5vw,38px)",
          fontWeight: 600,
          margin: "6px 0 10px",
          color: "var(--kobalt-dunkel)",
        }}
      >
        {t("hostPage.title")}
      </h2>
      <p className="host-lead" style={{ marginBottom: 20 }}>
        {t("hostPage.lead")}
      </p>
      {notice && (
        <div
          className="card"
          style={{
            marginBottom: 14,
            borderColor: "var(--honig)",
            background: "#FDF6E7",
            fontSize: 14,
          }}
        >
          {notice}
        </div>
      )}
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        <button
          className={`chip ${mode === "login" ? "on" : ""}`}
          onClick={() => setMode("login")}
          aria-pressed={mode === "login"}
        >
          {t("hostPage.signIn")}
        </button>
        <button
          className={`chip ${mode === "register" ? "on" : ""}`}
          onClick={() => setMode("register")}
          aria-pressed={mode === "register"}
        >
          {t("hostPage.register")}
        </button>
      </div>
      {mode === "login" ? (
        <>
          <LoginForm onDone={onDone} showToast={safeShowToast} />
          <p className="notice" style={{ marginTop: 10 }}>
            {t("hostPage.noAccount")}
          </p>
        </>
      ) : (
        <RegisterForm
          reload={reload}
          onHome={onHome}
          showToast={safeShowToast}
          onAbout={onAbout}
          onRecht={onRecht}
        />
      )}
      <div
        className="card"
        style={{
          marginTop: 14,
          background: "var(--kobalt)",
          border: "none",
          color: "#F1F3FB",
        }}
      >
        <div
          className="f-display"
          style={{ fontSize: 19, fontWeight: 600, marginBottom: 6 }}
        >
          {t("hostPage.joinTitle")}
        </div>
        <div style={{ fontSize: 14.5, opacity: 0.92 }}>
          {t("hostPage.joinText")}
        </div>
        <button
          className="btn btn-sm"
          style={{
            marginTop: 12,
            background: "transparent",
            border: "1.5px solid #F1F3FB",
            color: "#F1F3FB",
          }}
          onClick={onAbout}
        >
          {t("hostPage.seeSteps")}
        </button>
      </div>
    </div>
  );

  if (session === undefined) {
    return (
      <div
        className="mt-wrap"
        style={{ padding: "40px 20px 60px", maxWidth: 960 }}
      >
        <span className="notice">{t("hostPage.loading")}</span>
      </div>
    );
  }

  if (session) {
    const loc =
      (locations ?? []).find((l) => {
        console.log(
          "Comparing:",
          l?.id,
          "===",
          session.betriebId,
          l?.id === session.betriebId,
        );

        return l?.id === session.betriebId;
      }) ||
      (regBetrieb && regBetrieb.id === session.betriebId ? regBetrieb : null);

    return loc ? (
        <div className="host-page-container">
      <HostArea
        key={loc.id}
        loc={loc}
        session={session}
        onLogout={logout}
        reload={safeReload}
        showToast={safeShowToast}
        onTischform={() => {
          console.log("========== HOSTPAGE TABLE FORM ==========");
          console.log("Venue ID:", loc.id);
          console.log("Parent onTischform:", onTischform);
          console.log("Parent onTischform type:", typeof onTischform);

          if (typeof onTischform !== "function") {
            console.error(
              "ERROR: HostPage did not receive onTischform from parent.",
            );
            safeShowToast("Table shape navigation is not configured.");
            return;
          }

          onTischform(loc.id);
        }}
        onSeen={onSeen}
      />
      </div>
    ) : (
      renderAuth(t("hostPage.venueNotFound"))
    );
  }

  return renderAuth(null);
}
