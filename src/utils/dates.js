import i18n from "i18next";

// ============================================================
// TRANSLATION HELPER
// ============================================================

const t = (key, options) => i18n.t(key, options);

// ============================================================
// WEEK ORDER
// Monday -> Sunday
// ============================================================

export const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0];

// ============================================================
// DAY NAMES
// ============================================================

export const dayShortName = {
  0: t("dates.days.short.sunday", {
    defaultValue: "Sun",
  }),

  1: t("dates.days.short.monday", {
    defaultValue: "Mon",
  }),

  2: t("dates.days.short.tuesday", {
    defaultValue: "Tue",
  }),

  3: t("dates.days.short.wednesday", {
    defaultValue: "Wed",
  }),

  4: t("dates.days.short.thursday", {
    defaultValue: "Thu",
  }),

  5: t("dates.days.short.friday", {
    defaultValue: "Fri",
  }),

  6: t("dates.days.short.saturday", {
    defaultValue: "Sat",
  }),
};

export const dayLongName = {
  0: t("dates.days.long.sunday", {
    defaultValue: "Sunday",
  }),

  1: t("dates.days.long.monday", {
    defaultValue: "Monday",
  }),

  2: t("dates.days.long.tuesday", {
    defaultValue: "Tuesday",
  }),

  3: t("dates.days.long.wednesday", {
    defaultValue: "Wednesday",
  }),

  4: t("dates.days.long.thursday", {
    defaultValue: "Thursday",
  }),

  5: t("dates.days.long.friday", {
    defaultValue: "Friday",
  }),

  6: t("dates.days.long.saturday", {
    defaultValue: "Saturday",
  }),
};

// ============================================================
// MONTH NAME
// ============================================================

export function monthName(monthIndex) {
  return t(`dates.months.${monthIndex}`, {
    defaultValue: new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(new Date(2020, monthIndex, 1)),
  });
}

// ============================================================
// DATE KEY
// ============================================================

export function dateKey(date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// ============================================================
// NEXT DAYS
// ============================================================

export function nextDays(count) {
  const result = [];

  const now = new Date();

  now.setHours(0, 0, 0, 0);

  for (let i = 0; i < count; i++) {
    const d = new Date(now);

    d.setDate(now.getDate() + i);

    result.push(d);
  }

  return result;
}

// ============================================================
// SHORT DATE
// Example: Mon, 04.08.
// ============================================================

export function shortDate(dateKeyStr) {
  const [y, m, d] = dateKeyStr.split("-").map(Number);

  const date = new Date(y, m - 1, d);

  return `${dayShortName[date.getDay()]}, ${String(d).padStart(
    2,
    "0",
  )}.${String(m).padStart(2, "0")}.`;
}

// ============================================================
// LONG DATE
// Example: Monday, 4. August 2026
// ============================================================

export function longDate(dateKeyStr) {
  const [y, m, d] = dateKeyStr.split("-").map(Number);

  const date = new Date(y, m - 1, d);

  return `${dayLongName[date.getDay()]}, ${d}. ${monthName(m - 1)} ${y}`;
}

// ============================================================
// DAYS LIST
// ============================================================

export function daysList(days) {
  const list = WEEK_ORDER.filter((i) => days.includes(i));

  if (list.length === 7) {
    return t("dates.daily", {
      defaultValue: "Daily",
    });
  }

  const indexes = list.map((i) => WEEK_ORDER.indexOf(i));

  let contiguous = true;

  for (let i = 1; i < indexes.length; i++) {
    if (indexes[i] !== indexes[i - 1] + 1) {
      contiguous = false;
    }
  }

  if (contiguous && list.length > 2) {
    return `${dayShortName[list[0]]}–${dayShortName[list[list.length - 1]]}`;
  }

  return list.map((i) => dayShortName[i]).join(", ");
}
