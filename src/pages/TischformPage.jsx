// Tischform page: choose a table variant or arrange it yourself,
// including the surrounding environment.

import { useState } from "react";
import {
  presetById,
  presetLabel,
  presetVariant,
  tischLabel,
  TABLE_PRESETS,
  UMGEBUNG,
  umgebungLabel,
} from "../utils/table";
import { slugify } from "../utils/strings";
import { upsertVenue, setSetting } from "../services/storage";
import { TableSvg } from "../components/TableSvg";
import { ChairEditor } from "../components/ChairEditor";

export function TischformPage({
  locations,
  preselect,
  reload,
  showToast,
  onDone,
  onBack,
}) {
  const [selected, setSelected] = useState(preselect || "");
  const [name, setName] = useState("");
  const [kontakt, setKontakt] = useState("");
  const [modus, setModus] = useState("var");
  const [variant, setVariant] = useState("E8");
  const [shape, setShape] = useState("rect");
  const [slots, setSlots] = useState([]);
  const [notiz, setNotiz] = useState("");
  const [umgebung, setUmgebung] = useState({
    top: "",
    bottom: "",
    left: "",
    right: "",
  });
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(null);

  const env =
    umgebung.top ||
    umgebung.bottom ||
    umgebung.left ||
    umgebung.right
      ? umgebung
      : null;

  const tisch = {
    ...(modus === "var"
      ? presetVariant(presetById(variant))
      : {
          variant: "custom",
          shape,
          custom: {
            shape,
            slots: [...slots].sort((a, b) => a - b),
          },
          seats: slots.length,
        }),
    umgebung: env,
  };

  const toggleSlot = (n) =>
    setSlots((cur) =>
      cur.includes(n)
        ? cur.filter((m) => m !== n)
        : [...cur, n]
    );

  const save = async () => {
    const loc = locations.find((l) => l.id === selected);
    const g = loc ? loc.name : name.trim();

    if (!g || g.length < 3) {
      showToast("Please select a venue or enter a venue name.");
      return;
    }

    if (modus === "eigen" && slots.length < 4) {
      showToast("Please set at least 4 seats.");
      return;
    }

    setSaving(true);

    try {
      const entry = {
        tisch,
        seats: tisch.seats,
        tischNote: notiz.trim(),
        tischKontakt: kontakt.trim(),
        tischEingereicht: new Date().toISOString(),
      };

      if (loc) {
        // upsertVenue replaces the entire row.
        // loc contains the complete venue data.
        await upsertVenue({
          ...loc,
          ...entry,
        });

        reload();
      } else {
        await setSetting(
          `tischform-new:${slugify(g)}-${Date.now() % 1e5}`,
          {
            name: g,
            ...entry,
          }
        );
      }

      const mail = {
        an: "",
        betreff: `Table shape Mischtisch — ${g}`,
        lines: [
          `Venue: ${g}`,

          `Table shape: ${tischLabel(tisch)}`,

          tisch.custom
            ? `Layout: custom arrangement (positions ${tisch.custom.slots
                .map((n) => n + 1)
                .join(", ")})`
            : `Chosen variant: ${
                presetLabel(presetById(tisch.variant)) ||
                tisch.variant
              }`,

          env
            ? `Surroundings: ${[
                umgebung.top &&
                  `above ${umgebungLabel(umgebung.top)}`,
                umgebung.bottom &&
                  `below ${umgebungLabel(umgebung.bottom)}`,
                umgebung.left &&
                  `left ${umgebungLabel(umgebung.left)}`,
                umgebung.right &&
                  `right ${umgebungLabel(umgebung.right)}`,
              ]
                .filter(Boolean)
                .join(", ")}`
            : null,

          notiz.trim()
            ? `Notes: ${notiz.trim()}`
            : null,

          kontakt.trim()
            ? `Contact for queries: ${kontakt.trim()}`
            : null,

          "— submitted via the Mischtisch table-shape form",
        ].filter(Boolean),
      };

      setDone({
        name: g,
        tisch,
        mail,
        imSystem: !!loc,
      });

      showToast("Table shape saved");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error(err);
      showToast("Saving failed.");
    } finally {
      setSaving(false);
    }
  };

  /* =========================================================
     SUCCESS SCREEN
     ========================================================= */

  if (done) {
    return (
      <div
        className="mt-wrap"
        style={{
          padding: "28px 20px 60px",
          maxWidth: 720,
        }}
      >
        <div
          className="card"
          style={{
            textAlign: "center",
            padding: "30px 22px",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "var(--kobalt)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              margin: "0 auto 12px",
            }}
          >
            ✓
          </div>

          <div
            className="f-display"
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "var(--kobalt-dunkel)",
            }}
          >
            Table shape submitted
          </div>

          <p
            style={{
              color: "#3A4258",
              margin: "8px auto 4px",
              maxWidth: "46ch",
            }}
          >
            <b>{done.name}</b> — {tischLabel(done.tisch)}.

            {done.imSystem
              ? " The table plan in the booking view now shows exactly this layout."
              : " The team will add the venue with this layout."}
          </p>
        </div>

        <div
          className="card"
          style={{
            marginTop: 14,
          }}
        >
          <TableSvg
            tisch={done.tisch}
            seats={done.tisch.seats}
            occupied={[]}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 16,
          }}
        >
          {/*
          <a
            className="btn btn-primary"
            style={{
              textDecoration: "none",
              display: "inline-block",
            }}
            href={mailtoHref(done.mail)}
          >
            Send to the Mischtisch team
          </a>
          */}

          <button
            className="btn btn-ghost"
            onClick={onDone}
          >
            Done
          </button>
        </div>

        <p
          className="notice"
          style={{
            marginTop: 10,
            textAlign: "center",
          }}
        >
          The button opens your email program with the summary.
          Enter the team's email address and send it.
        </p>
      </div>
    );
  }

  /* =========================================================
     MAIN FORM
     ========================================================= */

  return (
    <div
      className="mt-wrap"
      style={{
        padding: "20px 20px 60px",
        maxWidth: 820,
      }}
    >
      {/* Back button */}

      <button
        className="nav-btn"
        onClick={onBack}
        style={{
          marginLeft: -10,
        }}
      >
        ← Back
      </button>

      {/* Eyebrow */}

      <div
        className="eyebrow"
        style={{
          marginTop: 10,
        }}
      >
        For partner venues
      </div>

      {/* Page title */}

      <h2
        className="f-display"
        style={{
          fontSize: "clamp(24px,4.2vw,36px)",
          fontWeight: 600,
          margin: "6px 0 8px",
          color: "var(--kobalt-dunkel)",
        }}
      >
        Your Mischtisch: Shape & Seats
      </h2>

      {/* Description */}

      <p
        className="lead"
        style={{
          marginBottom: 20,
        }}
      >
        Tell us what your Mischtisch looks like: whether it is
        round or rectangular, how many people sit at it, and how
        the seats are arranged. Choose one of the available
        variants or arrange the seats yourself and create a
        custom layout. Your entries appear directly in the
        booking table plan.
      </p>

      <div
        className="card"
        style={{
          display: "grid",
          gap: 16,
        }}
      >
        {/* =====================================================
            VENUE / CONTACT
            ===================================================== */}

        <div className="form-grid">
          {/*
          <div>
            <label
              className="label"
              htmlFor="tf-sel"
            >
              Your venue
            </label>

            <select
              id="tf-sel"
              className="input"
              value={selected}
              onChange={(e) =>
                setSelected(e.target.value)
              }
            >
              <option value="">
                — Choose venue —
              </option>

              {locations.map((l) => (
                <option
                  key={l.id}
                  value={l.id}
                >
                  {l.name} · {l.city}
                </option>
              ))}

              <option value="__frei">
                My venue is not in the list
              </option>
            </select>

            {selected === "__frei" && (
              <input
                className="input"
                style={{
                  marginTop: 8,
                }}
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Venue name"
                aria-label="Venue name"
              />
            )}
          </div>
          */}

          <div>
            <label
              className="label"
              htmlFor="tf-mail"
            >
              Your email for queries (optional)
            </label>

            <input
              id="tf-mail"
              type="email"
              className="input"
              value={kontakt}
              onChange={(e) =>
                setKontakt(e.target.value)
              }
              placeholder="booking@your-venue.example"
            />
          </div>
        </div>

        {/* =====================================================
            TABLE VARIANTS
            ===================================================== */}

        <div>
          <div className="label">
            Choose a variant — or arrange it yourself
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill,minmax(150px,1fr))",
              gap: 10,
            }}
          >
            {TABLE_PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`varbtn ${
                  modus === "var" &&
                  variant === p.id
                    ? "on"
                    : ""
                }`}
                onClick={() => {
                  setModus("var");
                  setVariant(p.id);
                }}
                aria-pressed={
                  modus === "var" &&
                  variant === p.id
                }
              >
                <div
                  style={{
                    fontSize: 24,
                    lineHeight: 1,
                  }}
                >
                  {p.shape === "round"
                    ? "◯"
                    : p.shape === "square"
                    ? "▢"
                    : "▭"}
                </div>

                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    marginTop: 6,
                  }}
                >
                  {presetLabel(p)}
                </div>
              </button>
            ))}

            {/* Custom arrangement */}

            <button
              type="button"
              className={`varbtn ${
                modus === "eigen" ? "on" : ""
              }`}
              onClick={() => setModus("eigen")}
              aria-pressed={modus === "eigen"}
            >
              <div
                style={{
                  fontSize: 24,
                  lineHeight: 1,
                }}
              >
                ✎
              </div>

              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  marginTop: 6,
                }}
              >
                Arrange yourself
              </div>
            </button>
          </div>
        </div>

        {/* =====================================================
            PRESET PREVIEW / CUSTOM EDITOR
            ===================================================== */}

        {modus === "var" ? (
          <div>
            <div className="label">
              Preview — this is how guests see your table
            </div>

            <TableSvg
              tisch={tisch}
              seats={tisch.seats}
              occupied={[]}
            />
          </div>
        ) : (
          <div>
            <div className="label">
              Custom layout: choose a basic shape, then
              tap the dashed positions to add or remove seats.
            </div>

            {/* Shape buttons */}

            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 10,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                className={`chip ${
                  shape === "rect" ? "on" : ""
                }`}
                onClick={() => {
                  setShape("rect");
                  setSlots([]);
                }}
                aria-pressed={shape === "rect"}
              >
                Rectangular
              </button>

              <button
                type="button"
                className={`chip ${
                  shape === "round" ? "on" : ""
                }`}
                onClick={() => {
                  setShape("round");
                  setSlots([]);
                }}
                aria-pressed={shape === "round"}
              >
                Round
              </button>

              <span
                className="notice"
                style={{
                  alignSelf: "center",
                }}
              >
                {slots.length}{" "}
                {slots.length === 1
                  ? "seat"
                  : "seats"}{" "}
                set
              </span>
            </div>

            {/* Chair editor */}

            <ChairEditor
              shape={shape}
              slots={slots}
              onToggle={toggleSlot}
              umgebung={env}
            />
          </div>
        )}

        {/* =====================================================
            TABLE SURROUNDINGS
            ===================================================== */}

        <div>
          <div className="label">
            Table surroundings (optional): what is located
            on each side? This lets us show the kitchen,
            entrance, and other surroundings as well.
          </div>

          <div className="form-grid">
            {[
              ["top", "Above the table"],
              ["bottom", "Below the table"],
              ["left", "Left of the table"],
              ["right", "Right of the table"],
            ].map(([key, label]) => (
              <div key={key}>
                <label
                  className="label"
                  htmlFor={`tf-umg-${key}`}
                  style={{
                    fontWeight: 500,
                  }}
                >
                  {label}
                </label>

                <select
                  id={`tf-umg-${key}`}
                  className="input"
                  value={umgebung[key]}
                  onChange={(e) =>
                    setUmgebung((u) => ({
                      ...u,
                      [key]: e.target.value,
                    }))
                  }
                >
                  <option value="">
                    — Nothing —
                  </option>

                  {UMGEBUNG.map((opt) => (
                    <option
                      key={opt}
                      value={opt}
                    >
                      {umgebungLabel(opt)}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div
            className="notice"
            style={{
              marginTop: 6,
            }}
          >
            These entries appear as labels around the
            table plan, including for guests during booking.
          </div>
        </div>

        {/* =====================================================
            NOTES
            ===================================================== */}

        <div>
          <label
            className="label"
            htmlFor="tf-note"
          >
            Notes (optional)
          </label>

          <input
            id="tf-note"
            className="input"
            value={notiz}
            onChange={(e) =>
              setNotiz(e.target.value)
            }
            placeholder="e.g. oak table by the window, bench along the wall"
          />
        </div>

        {/* =====================================================
            SAVE AREA
            ===================================================== */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span className="notice">
            Prototype: entries are visible immediately.
            In live operation, the team approves them.
          </span>

          <button
            className="btn btn-primary"
            disabled={saving}
            onClick={save}
          >
            {saving
              ? "Saving …"
              : "Save & Send Table Shape"}
          </button>
        </div>
      </div>
    </div>
  );
}