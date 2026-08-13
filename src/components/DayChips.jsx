
// Weekday selection as chips (Monday to Sunday).

import { dayLongName } from "../utils/dates";

const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 7];

export function DayChips({ days = [], onChange }) {
  const toggle = (day) => {
    let nextDays;

    if (days.includes(day)) {
      nextDays = days.filter((d) => d !== day);
    } else {
      nextDays = [...days, day];
    }

    // Always keep Monday → Sunday order.
    nextDays.sort(
      (a, b) => WEEK_ORDER.indexOf(a) - WEEK_ORDER.indexOf(b),
    );

    onChange(nextDays);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      {WEEK_ORDER.map((day) => {
        const selected = days.includes(day);

        return (
          <button
            key={day}
            type="button"
            className={`chip ${selected ? "on" : ""}`}
            onClick={() => toggle(day)}
            aria-pressed={selected}
          >
            {dayLongName[day % 7]}
          </button>
        );
      })}
    </div>
  );
}
