"use client";

import { useState, useEffect } from "react";

// --- Types ---
interface DailyReport {
  date: string;
  lessonsPlanned: number;
  lessonsDone: number;
  callsPlanned: number;
  callsDone: number;
  callsRemaining: number;
  trialsClosedPlanned: number;
  trialsClosedDone: number;
  chargesPlanned: number;
  chargesDone: number;
  chargesRemaining: number;
  newRevenue: number;
  notes: string;
  tomorrowFocus: string[];
}

interface MonthlyData {
  month: string;
  closingsTarget: number;
  closingsDone: number;
  activeStudents: number;
  consultingStudents: number;
  appm: number;
  monthlyRecurring: number;
  refusals: number;
  totalNewRevenue: number;
}

interface StoredData {
  dailyReports: DailyReport[];
  monthlyData: MonthlyData[];
  currentMonth: MonthlyData;
}

const STORAGE_KEY = "alpha-piano-dashboard";

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("he-IL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getDefaultDaily(): DailyReport {
  return {
    date: getToday(),
    lessonsPlanned: 5,
    lessonsDone: 0,
    callsPlanned: 10,
    callsDone: 0,
    callsRemaining: 0,
    trialsClosedPlanned: 3,
    trialsClosedDone: 0,
    chargesPlanned: 6,
    chargesDone: 0,
    chargesRemaining: 0,
    newRevenue: 0,
    notes: "",
    tomorrowFocus: [""],
  };
}

function getDefaultMonth(): MonthlyData {
  const now = new Date();
  const monthNames = [
    "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
    "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר",
  ];
  return {
    month: `${monthNames[now.getMonth()]} ${now.getFullYear()}`,
    closingsTarget: 7,
    closingsDone: 7,
    activeStudents: 24,
    consultingStudents: 1,
    appm: 915,
    monthlyRecurring: 25837,
    refusals: 1,
    totalNewRevenue: 7543,
  };
}

function loadData(): StoredData {
  if (typeof window === "undefined") {
    return {
      dailyReports: [],
      monthlyData: [],
      currentMonth: getDefaultMonth(),
    };
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    return JSON.parse(raw);
  }
  return {
    dailyReports: [],
    monthlyData: [],
    currentMonth: getDefaultMonth(),
  };
}

function saveData(data: StoredData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// --- Components ---

function KpiCard({
  icon,
  title,
  value,
  subtitle,
  status,
}: {
  icon: string;
  title: string;
  value: string | number;
  subtitle?: string;
  status?: "green" | "yellow" | "red";
}) {
  const statusColors = {
    green: "border-emerald-300 bg-emerald-50/50",
    yellow: "border-amber-300 bg-amber-50/50",
    red: "border-red-300 bg-red-50/50",
  };
  return (
    <div
      className={`rounded-2xl p-5 shadow-sm border-2 hover:shadow-md transition-shadow ${
        status ? statusColors[status] : "border-gray-100 bg-white"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      <div className="text-2xl font-bold text-piano-black mt-2">{value}</div>
      <div className="text-sm font-medium text-warm-gray mt-1">{title}</div>
      {subtitle && (
        <div className="text-xs text-warm-gray/70 mt-1">{subtitle}</div>
      )}
    </div>
  );
}

function ProgressRow({
  label,
  done,
  planned,
  remaining,
}: {
  label: string;
  done: number;
  planned: number;
  remaining?: number;
}) {
  const pct = planned > 0 ? Math.round((done / planned) * 100) : 0;
  const isComplete = done >= planned;
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-piano-dark">{label}</span>
        <span className="text-warm-gray">
          {done} / {planned}{" "}
          {isComplete ? (
            <span className="text-emerald-500">&#10003;</span>
          ) : (
            remaining !== undefined &&
            remaining > 0 && (
              <span className="text-amber-600">({remaining} נותרו)</span>
            )
          )}
        </span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${
            isComplete
              ? "bg-emerald-400"
              : pct >= 50
              ? "bg-gold"
              : "bg-amber-400"
          }`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
    </div>
  );
}

function NumberInput({
  label,
  value,
  onChange,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <label className="text-sm font-medium text-piano-dark flex-1">
        {label}
      </label>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-20 text-center border border-gray-200 rounded-lg py-1.5 text-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}

// --- Main Dashboard ---

export default function DashboardPage() {
  const [data, setData] = useState<StoredData | null>(null);
  const [daily, setDaily] = useState<DailyReport>(getDefaultDaily());
  const [monthly, setMonthly] = useState<MonthlyData>(getDefaultMonth());
  const [activeTab, setActiveTab] = useState<"dashboard" | "input" | "history">(
    "dashboard"
  );

  useEffect(() => {
    const loaded = loadData();
    setData(loaded);
    setMonthly(loaded.currentMonth);
    const todayReport = loaded.dailyReports.find(
      (r) => r.date === getToday()
    );
    if (todayReport) {
      setDaily(todayReport);
    }
  }, []);

  function saveDailyReport() {
    if (!data) return;
    const updated = { ...data };
    const idx = updated.dailyReports.findIndex((r) => r.date === daily.date);
    if (idx >= 0) {
      updated.dailyReports[idx] = daily;
    } else {
      updated.dailyReports.push(daily);
    }
    updated.currentMonth = monthly;
    saveData(updated);
    setData(updated);
  }

  function updateDaily(fields: Partial<DailyReport>) {
    setDaily((prev) => ({ ...prev, ...fields }));
  }

  function updateMonthly(fields: Partial<MonthlyData>) {
    setMonthly((prev) => ({ ...prev, ...fields }));
  }

  const closingPct =
    monthly.closingsTarget > 0
      ? Math.round((monthly.closingsDone / monthly.closingsTarget) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory to-warm-white">
      {/* Header */}
      <header className="bg-piano-black text-white px-6 py-4 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Alpha Key - דשבורד ניהולי
            </h1>
            <p className="text-gold-light text-sm mt-0.5">
              {formatDate(getToday())}
            </p>
          </div>
          <a
            href="/"
            className="text-sm text-gold hover:text-gold-light transition-colors"
          >
            חזרה לאתר &larr;
          </a>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6 pt-4">
        <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-100 w-fit">
          {(
            [
              { key: "dashboard", label: "סיכום יומי" },
              { key: "input", label: "הזנת נתונים" },
              { key: "history", label: "היסטוריה" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-piano-black text-white"
                  : "text-warm-gray hover:text-piano-dark"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* ===== DASHBOARD TAB ===== */}
        {activeTab === "dashboard" && (
          <>
            {/* KPI Cards */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <KpiCard
                icon="🎹"
                title="תלמידים פעילים"
                value={monthly.activeStudents}
                subtitle={
                  monthly.consultingStudents > 0
                    ? `+ ${monthly.consultingStudents} ייעוץ`
                    : undefined
                }
                status="green"
              />
              <KpiCard
                icon="💰"
                title="מחזור חודשי"
                value={`₪${monthly.monthlyRecurring.toLocaleString()}`}
                subtitle={`APPM: ₪${monthly.appm}`}
                status="green"
              />
              <KpiCard
                icon="🎯"
                title="סגירות החודש"
                value={`${monthly.closingsDone}/${monthly.closingsTarget}`}
                subtitle={`${closingPct}% עמידה ביעד`}
                status={closingPct >= 100 ? "green" : closingPct >= 70 ? "yellow" : "red"}
              />
              <KpiCard
                icon="📈"
                title="הכנסה חדשה (חודש)"
                value={`₪${monthly.totalNewRevenue.toLocaleString()}`}
              />
              <KpiCard
                icon="🚫"
                title="סירובים"
                value={monthly.refusals}
                status={monthly.refusals <= 2 ? "green" : "red"}
              />
            </section>

            {/* Daily KPI Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-piano-black mb-1">
                KPI יומי - ביצוע מול תכנון
              </h2>
              <p className="text-sm text-warm-gray mb-4">{formatDate(daily.date)}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <ProgressRow
                  label="שיעורים"
                  done={daily.lessonsDone}
                  planned={daily.lessonsPlanned}
                />
                <ProgressRow
                  label="שיחות יוצאות"
                  done={daily.callsDone}
                  planned={daily.callsPlanned}
                  remaining={daily.callsRemaining}
                />
                <ProgressRow
                  label="ניסיונות שנסגרו"
                  done={daily.trialsClosedDone}
                  planned={daily.trialsClosedPlanned}
                />
                <ProgressRow
                  label="חיובים שטופלו"
                  done={daily.chargesDone}
                  planned={daily.chargesPlanned}
                  remaining={daily.chargesRemaining}
                />
              </div>

              {daily.newRevenue > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💰</span>
                    <span className="text-sm text-warm-gray">הכנסה חדשה היום:</span>
                    <span className="font-bold text-emerald-600 text-lg">
                      ₪{daily.newRevenue.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Notes & Tomorrow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {daily.notes && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-piano-black mb-3">
                    הערות היום
                  </h2>
                  <p className="text-sm text-piano-dark whitespace-pre-line">
                    {daily.notes}
                  </p>
                </div>
              )}
              {daily.tomorrowFocus.some((f) => f.trim()) && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-piano-black mb-3">
                    מיקוד למחר
                  </h2>
                  <ul className="space-y-2">
                    {daily.tomorrowFocus
                      .filter((f) => f.trim())
                      .map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-piano-dark"
                        >
                          <span className="text-gold mt-0.5">&#9679;</span>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Monthly Cumulative */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-piano-black mb-4">
                מצטבר חודשי | {monthly.month}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-ivory rounded-xl">
                  <div className="text-2xl font-bold text-piano-black">
                    {monthly.closingsDone}/{monthly.closingsTarget}
                  </div>
                  <div className="text-xs text-warm-gray mt-1">סגירות פסנתר</div>
                  {closingPct >= 100 && (
                    <div className="text-xs text-emerald-500 mt-1">
                      100% עמידה ביעד
                    </div>
                  )}
                </div>
                <div className="text-center p-4 bg-ivory rounded-xl">
                  <div className="text-2xl font-bold text-piano-black">
                    {monthly.activeStudents}
                    {monthly.consultingStudents > 0 && (
                      <span className="text-sm text-warm-gray">
                        {" "}
                        +{monthly.consultingStudents}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-warm-gray mt-1">
                    תלמידים פעילים + ייעוץ
                  </div>
                </div>
                <div className="text-center p-4 bg-ivory rounded-xl">
                  <div className="text-2xl font-bold text-piano-black">
                    ₪{monthly.appm.toLocaleString()}
                  </div>
                  <div className="text-xs text-warm-gray mt-1">APPM ממוצע</div>
                </div>
                <div className="text-center p-4 bg-ivory rounded-xl">
                  <div className="text-2xl font-bold text-piano-black">
                    ₪{monthly.monthlyRecurring.toLocaleString()}
                  </div>
                  <div className="text-xs text-warm-gray mt-1">מחזור חודשי</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ===== INPUT TAB ===== */}
        {activeTab === "input" && (
          <>
            {/* Daily Input */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-piano-black mb-4">
                הזנת נתונים יומיים | {formatDate(daily.date)}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-piano-dark border-b border-gray-100 pb-2">
                    KPI יומי
                  </h3>
                  <NumberInput
                    label="שיעורים - יעד"
                    value={daily.lessonsPlanned}
                    onChange={(v) => updateDaily({ lessonsPlanned: v })}
                  />
                  <NumberInput
                    label="שיעורים - בוצעו"
                    value={daily.lessonsDone}
                    onChange={(v) => updateDaily({ lessonsDone: v })}
                  />
                  <NumberInput
                    label="שיחות יוצאות - יעד"
                    value={daily.callsPlanned}
                    onChange={(v) => updateDaily({ callsPlanned: v })}
                  />
                  <NumberInput
                    label="שיחות יוצאות - בוצעו"
                    value={daily.callsDone}
                    onChange={(v) => updateDaily({ callsDone: v })}
                  />
                  <NumberInput
                    label="שיחות - נותרו למחר"
                    value={daily.callsRemaining}
                    onChange={(v) => updateDaily({ callsRemaining: v })}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-piano-dark border-b border-gray-100 pb-2">
                    סגירות וחיובים
                  </h3>
                  <NumberInput
                    label="ניסיונות - יעד"
                    value={daily.trialsClosedPlanned}
                    onChange={(v) => updateDaily({ trialsClosedPlanned: v })}
                  />
                  <NumberInput
                    label="ניסיונות - נסגרו"
                    value={daily.trialsClosedDone}
                    onChange={(v) => updateDaily({ trialsClosedDone: v })}
                  />
                  <NumberInput
                    label="חיובים - יעד"
                    value={daily.chargesPlanned}
                    onChange={(v) => updateDaily({ chargesPlanned: v })}
                  />
                  <NumberInput
                    label="חיובים - טופלו"
                    value={daily.chargesDone}
                    onChange={(v) => updateDaily({ chargesDone: v })}
                  />
                  <NumberInput
                    label="חיובים - נותרו למחר"
                    value={daily.chargesRemaining}
                    onChange={(v) => updateDaily({ chargesRemaining: v })}
                  />
                  <NumberInput
                    label="הכנסה חדשה היום (₪)"
                    value={daily.newRevenue}
                    onChange={(v) => updateDaily({ newRevenue: v })}
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-piano-dark block mb-1">
                    הערות והישגים
                  </label>
                  <textarea
                    value={daily.notes}
                    onChange={(e) => updateDaily({ notes: e.target.value })}
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-gold resize-none"
                    placeholder="סילבוס אלפא Teach בוצע ומוכן, תוכנית עסקית הועלתה..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-piano-dark block mb-2">
                    מיקוד למחר
                  </label>
                  {daily.tomorrowFocus.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const updated = [...daily.tomorrowFocus];
                          updated[i] = e.target.value;
                          updateDaily({ tomorrowFocus: updated });
                        }}
                        className="flex-1 border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-gold"
                        placeholder="משימה..."
                      />
                      {daily.tomorrowFocus.length > 1 && (
                        <button
                          onClick={() => {
                            const updated = daily.tomorrowFocus.filter(
                              (_, idx) => idx !== i
                            );
                            updateDaily({ tomorrowFocus: updated });
                          }}
                          className="text-red-400 hover:text-red-600 text-lg"
                        >
                          &times;
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() =>
                      updateDaily({
                        tomorrowFocus: [...daily.tomorrowFocus, ""],
                      })
                    }
                    className="text-sm text-gold hover:text-gold-light"
                  >
                    + הוסף משימה
                  </button>
                </div>
              </div>
            </div>

            {/* Monthly Input */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-piano-black mb-4">
                נתונים חודשיים | {monthly.month}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <NumberInput
                    label="יעד סגירות"
                    value={monthly.closingsTarget}
                    onChange={(v) => updateMonthly({ closingsTarget: v })}
                  />
                  <NumberInput
                    label="סגירות בפועל"
                    value={monthly.closingsDone}
                    onChange={(v) => updateMonthly({ closingsDone: v })}
                  />
                  <NumberInput
                    label="תלמידים פעילים"
                    value={monthly.activeStudents}
                    onChange={(v) => updateMonthly({ activeStudents: v })}
                  />
                  <NumberInput
                    label="תלמידי ייעוץ"
                    value={monthly.consultingStudents}
                    onChange={(v) => updateMonthly({ consultingStudents: v })}
                  />
                </div>
                <div className="space-y-4">
                  <NumberInput
                    label="APPM - ממוצע מחיר לעסקה (₪)"
                    value={monthly.appm}
                    onChange={(v) => updateMonthly({ appm: v })}
                  />
                  <NumberInput
                    label="מחזור חודשי מפעילים (₪)"
                    value={monthly.monthlyRecurring}
                    onChange={(v) => updateMonthly({ monthlyRecurring: v })}
                  />
                  <NumberInput
                    label="סה״כ הכנסה חדשה החודש (₪)"
                    value={monthly.totalNewRevenue}
                    onChange={(v) => updateMonthly({ totalNewRevenue: v })}
                  />
                  <NumberInput
                    label="סירובים"
                    value={monthly.refusals}
                    onChange={(v) => updateMonthly({ refusals: v })}
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={saveDailyReport}
              className="w-full bg-piano-black text-white py-4 rounded-2xl font-bold text-lg hover:bg-piano-dark transition-colors shadow-lg"
            >
              שמור דיווח יומי
            </button>
          </>
        )}

        {/* ===== HISTORY TAB ===== */}
        {activeTab === "history" && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-piano-black mb-4">
              היסטוריית דיווחים
            </h2>
            {data && data.dailyReports.length > 0 ? (
              <div className="space-y-4">
                {[...data.dailyReports]
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map((report) => (
                    <div
                      key={report.date}
                      className="border border-gray-100 rounded-xl p-4 hover:border-gold/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-piano-dark">
                          {formatDate(report.date)}
                        </h3>
                        {report.newRevenue > 0 && (
                          <span className="text-sm font-semibold text-emerald-600">
                            +₪{report.newRevenue.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div>
                          <span className="text-warm-gray">שיעורים: </span>
                          <strong>
                            {report.lessonsDone}/{report.lessonsPlanned}
                          </strong>
                          {report.lessonsDone >= report.lessonsPlanned && (
                            <span className="text-emerald-500 mr-1">
                              &#10003;
                            </span>
                          )}
                        </div>
                        <div>
                          <span className="text-warm-gray">שיחות: </span>
                          <strong>
                            {report.callsDone}/{report.callsPlanned}
                          </strong>
                        </div>
                        <div>
                          <span className="text-warm-gray">סגירות: </span>
                          <strong>
                            {report.trialsClosedDone}/
                            {report.trialsClosedPlanned}
                          </strong>
                        </div>
                        <div>
                          <span className="text-warm-gray">חיובים: </span>
                          <strong>
                            {report.chargesDone}/{report.chargesPlanned}
                          </strong>
                        </div>
                      </div>
                      {report.notes && (
                        <p className="text-xs text-warm-gray mt-2 border-t border-gray-50 pt-2">
                          {report.notes}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 text-warm-gray">
                <p className="text-4xl mb-3">📋</p>
                <p>אין דיווחים עדיין</p>
                <p className="text-sm mt-1">
                  עבור ללשונית &quot;הזנת נתונים&quot; כדי להתחיל
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-sm text-warm-gray pb-4">
          Alpha Key - בדרך להיות הכי טוב שיש 🎹
        </footer>
      </div>
    </div>
  );
}
