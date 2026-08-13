// SVG-Tischpläne: Tischgrundform, Umgebungs-Beschriftung, interaktive
// Stuhl-Sitzplätze, Legende und Mini-Punktanzeige.
import { useTranslation } from "react-i18next";
import { seatPositions, standardLayout, umgebungLabel } from "../utils/table";

// Tisch-Grundform (rund / quadratisch / eckig) mit "MISCHTISCH"-Schriftzug
export function TableShape({ shape, compact }) {
  let label = !compact && (
    <text
      x="280"
      y="176"
      textAnchor="middle"
      fontFamily="Georgia, serif"
      fontSize="15"
      fontWeight="600"
      fill="#F5EEDF"
      letterSpacing="2"
    >
      MISCHTISCH
    </text>
  );

  if (shape === "round")
    return (
      <>
        <circle cx="280" cy="170" r="102" fill="var(--eiche)" />

        <circle
          cx="280"
          cy="170"
          r="88"
          fill="var(--eiche-hell)"
          opacity="0.55"
        />

        {label}
      </>
    );

  if (shape === "square")
    return (
      <>
        <rect
          x="196"
          y="86"
          width="168"
          height="168"
          rx="18"
          fill="var(--eiche)"
        />

        <rect
          x="204"
          y="94"
          width="152"
          height="152"
          rx="14"
          fill="var(--eiche-hell)"
          opacity="0.55"
        />

        {label}
      </>
    );

  return (
    <>
      <rect
        x="110"
        y="128"
        width="340"
        height="84"
        rx="20"
        fill="var(--eiche)"
      />

      <rect
        x="118"
        y="135"
        width="324"
        height="70"
        rx="15"
        fill="var(--eiche-hell)"
        opacity="0.55"
      />

      <line
        x1="132"
        y1="170"
        x2="428"
        y2="170"
        stroke="var(--eiche)"
        strokeWidth="2"
        opacity="0.5"
      />

      {label}
    </>
  );
}

// Umgebungs-Beschriftungen (Küche, Eingang, …) rund um den Tischplan
export function UmgebungLabels({ umg }) {
  const style = {
    fontSize: "12.5px",
    fill: "#6A7288",
    letterSpacing: "2px",
    fontWeight: 600,
    fontFamily: "inherit",
  };

  return (
    <g aria-hidden="true">
      {umg.top && (
        <text x="280" y="-12" textAnchor="middle" style={style}>
          {umgebungLabel(umg.top).toUpperCase()}
        </text>
      )}

      {umg.bottom && (
        <text x="280" y="364" textAnchor="middle" style={style}>
          {umgebungLabel(umg.bottom).toUpperCase()}
        </text>
      )}

      {umg.left && (
        <text
          x="14"
          y="170"
          textAnchor="middle"
          style={style}
          transform="rotate(-90 14 170)"
        >
          {umgebungLabel(umg.left).toUpperCase()}
        </text>
      )}

      {umg.right && (
        <text
          x="546"
          y="170"
          textAnchor="middle"
          style={style}
          transform="rotate(90 546 170)"
        >
          {umgebungLabel(umg.right).toUpperCase()}
        </text>
      )}
    </g>
  );
}

// Interaktiver Tischplan: belegte Stühle dunkel, gewählte mit Haken
export function TableSvg({
  seats,
  occupied,
  selected = [],
  onToggle,
  tisch = null,
  compact = false,
  ambient = false,
}) {
  const { t } = useTranslation();

  const table = tisch && tisch.shape ? tisch : standardLayout(seats || 8);

  const positions = seatPositions(table);
  const total = positions.length;

  const shape = table.custom ? table.custom.shape : table.shape;

  const taken = new Set((occupied || []).filter((i) => i < total));

  const picked = new Set(selected);

  const r = 21;

  const umgebung =
    table.umgebung && Object.values(table.umgebung).some(Boolean)
      ? table.umgebung
      : null;

  const pad = umgebung ? 32 : 0;

  return (
    <svg
      viewBox={`0 ${-pad} 560 ${340 + 2 * pad}`}
      width="100%"
      style={{
        maxWidth: compact ? 300 : 560,
        display: "block",
        margin: "0 auto",
      }}
      role="group"
      aria-label={t("tablePlan.planWithSeats", {
        count: total,
      })}
    >
      <TableShape shape={shape} compact={compact} />

      {umgebung && <UmgebungLabels umg={umgebung} />}

      {positions.map((pos, i) => {
        const isTaken = taken.has(i);
        const isPicked = picked.has(i);

        const cls = isTaken ? "chair chair-taken" : "chair chair-free";

        const fill = isPicked
          ? "var(--kobalt)"
          : isTaken
            ? "var(--tinte)"
            : "#FFFFFF";

        const stroke = isPicked
          ? "var(--kobalt-dunkel)"
          : isTaken
            ? "var(--tinte)"
            : "var(--kobalt)";

        const clickable = !!onToggle && !isTaken;

        return (
          <g
            key={i}
            className={
              cls + (ambient && isTaken && i % 3 === 0 ? " pulse" : "")
            }
            role={clickable ? "button" : undefined}
            tabIndex={clickable ? 0 : undefined}
            aria-label={
              clickable
                ? t("tablePlan.seatAction", {
                    seat: i + 1,
                    action: isPicked
                      ? t("tablePlan.deselect")
                      : t("tablePlan.select"),
                  })
                : t("tablePlan.seatTaken", {
                    seat: i + 1,
                  })
            }
            onClick={clickable ? () => onToggle(i) : undefined}
            onKeyDown={
              clickable
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onToggle(i);
                    }
                  }
                : undefined
            }
            style={{
              cursor: onToggle
                ? isTaken
                  ? "not-allowed"
                  : "pointer"
                : "default",
            }}
          >
            <circle
              className="chair-ring"
              cx={pos.x}
              cy={pos.y}
              r={r + 4}
              fill="none"
              stroke={isPicked ? "var(--honig)" : "transparent"}
              strokeWidth="2.5"
            />

            <circle
              className="chair-body"
              cx={pos.x}
              cy={pos.y}
              r={r}
              fill={fill}
              stroke={stroke}
              strokeWidth="2.5"
            />

            {isPicked && (
              <text
                x={pos.x}
                y={pos.y + 5.5}
                textAnchor="middle"
                fontSize="17"
                fontWeight="700"
                fill="#fff"
              >
                ✓
              </text>
            )}

            {isTaken && !isPicked && (
              <circle
                cx={pos.x}
                cy={pos.y}
                r={7}
                fill="var(--porzellan)"
                opacity="0.9"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function Legend() {
  const { t } = useTranslation();

  const Swatch = ({ variant }) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      style={{
        display: "block",
        flexShrink: 0,
      }}
    >
      {variant === "picked" && (
        <circle
          cx="9"
          cy="9"
          r="8.5"
          fill="none"
          stroke="var(--honig)"
          strokeWidth="1.5"
        />
      )}

      <circle
        cx="9"
        cy="9"
        r="6.5"
        fill={
          variant === "taken"
            ? "var(--tinte)"
            : variant === "picked"
              ? "var(--kobalt)"
              : "#fff"
        }
        stroke={
          variant === "taken"
            ? "var(--tinte)"
            : variant === "picked"
              ? "var(--kobalt-dunkel)"
              : "var(--kobalt)"
        }
        strokeWidth="2"
      />

      {variant === "taken" && (
        <circle cx="9" cy="9" r="2.3" fill="var(--porzellan)" opacity="0.9" />
      )}

      {variant === "picked" && (
        <text
          x="9"
          y="12.5"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="#fff"
        >
          ✓
        </text>
      )}
    </svg>
  );

  const Item = ({ variant, label }) => (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <Swatch variant={variant} />
      <span>{label}</span>
    </span>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop: 4,
        fontSize: 13.5,
        color: "#5B627A",
      }}
    >
      <Item variant="free" label={t("tablePlan.legend.free")} />

      <Item variant="taken" label={t("tablePlan.legend.taken")} />

      <Item variant="picked" label={t("tablePlan.legend.yourSeat")} />
    </div>
  );
}

export function SeatDots({ total, taken }) {
  const { t } = useTranslation();

  return (
    <span
      aria-label={t("tablePlan.seatsFree", {
        free: total - taken,
        total,
      })}
      style={{
        letterSpacing: 2,
      }}
    >
      {[...Array(total)].map((_, i) => (
        <span
          key={i}
          className="dotmini"
          style={{
            background: i < taken ? "var(--tinte)" : "#fff",
            border: `2px solid ${i < taken ? "var(--tinte)" : "var(--kobalt)"}`,
            marginRight: "2px",
          }}
        />
      ))}
    </span>
  );
}
