import {
  kpiSummary,
  teachers,
  monthlyRevenue,
  todayLessons,
  revenueByLessonType,
  studentsByLevel,
  weeklySchedule,
} from "./mock-data";

function KpiCard({
  title,
  value,
  subtitle,
  trend,
  icon,
}: {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: { value: number; positive: boolean };
  icon: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{icon}</span>
        {trend && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              trend.positive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {trend.positive ? "+" : ""}
            {trend.value}%
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-piano-black">{value}</div>
      <div className="text-sm font-medium text-warm-gray mt-1">{title}</div>
      {subtitle && (
        <div className="text-xs text-warm-gray/70 mt-1">{subtitle}</div>
      )}
    </div>
  );
}

function BarChart({
  data,
  maxValue,
}: {
  data: { label: string; value: number }[];
  maxValue: number;
}) {
  return (
    <div className="flex items-end gap-2 h-40">
      {data.map((item) => (
        <div key={item.label} className="flex-1 flex flex-col items-center gap-1">
          <span className="text-xs font-semibold text-piano-dark">
            {(item.value / 1000).toFixed(0)}k
          </span>
          <div
            className="w-full bg-gradient-to-t from-gold to-gold-light rounded-t-md transition-all"
            style={{ height: `${(item.value / maxValue) * 100}%` }}
          />
          <span className="text-xs text-warm-gray">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function ProgressBar({
  label,
  value,
  max,
  color = "bg-gold",
}: {
  label: string;
  value: number;
  max: number;
  color?: string;
}) {
  const percentage = Math.round((value / max) * 100);
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-piano-dark font-medium">{label}</span>
        <span className="text-warm-gray">
          {value}/{max} ({percentage}%)
        </span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    completed: "bg-emerald-50 text-emerald-700",
    cancelled: "bg-red-50 text-red-700",
    scheduled: "bg-blue-50 text-blue-700",
    "no-show": "bg-orange-50 text-orange-700",
  };
  const labels: Record<string, string> = {
    completed: "הושלם",
    cancelled: "בוטל",
    scheduled: "מתוכנן",
    "no-show": "לא הגיע",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {labels[status] || status}
    </span>
  );
}

function LessonTypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    private: "bg-purple-50 text-purple-700",
    group: "bg-cyan-50 text-cyan-700",
    masterclass: "bg-amber-50 text-amber-700",
  };
  const labels: Record<string, string> = {
    private: "פרטי",
    group: "קבוצתי",
    masterclass: "מאסטרקלאס",
  };
  return (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
        styles[type] || "bg-gray-100 text-gray-700"
      }`}
    >
      {labels[type] || type}
    </span>
  );
}

export default function DashboardPage() {
  const revenueGrowth = Math.round(
    ((kpiSummary.monthlyRevenue - kpiSummary.previousMonthRevenue) /
      kpiSummary.previousMonthRevenue) *
      100
  );

  const weekDays = [
    { label: "א׳", value: weeklySchedule.sunday },
    { label: "ב׳", value: weeklySchedule.monday },
    { label: "ג׳", value: weeklySchedule.tuesday },
    { label: "ד׳", value: weeklySchedule.wednesday },
    { label: "ה׳", value: weeklySchedule.thursday },
    { label: "ו׳", value: weeklySchedule.friday },
    { label: "ש׳", value: weeklySchedule.saturday },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory to-warm-white">
      {/* Header */}
      <header className="bg-piano-black text-white px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">דשבורד ניהולי</h1>
            <p className="text-gold-light text-sm mt-0.5">
              בית הספר לפסנתר | יום רביעי, 25 מרץ 2026
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

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* KPI Cards Row */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <KpiCard
            icon="🎹"
            title="תלמידים פעילים"
            value={kpiSummary.activeStudents}
            subtitle={`+${kpiSummary.newStudentsThisMonth} חדשים החודש`}
            trend={{ value: 10, positive: true }}
          />
          <KpiCard
            icon="💰"
            title="הכנסות חודשיות"
            value={`₪${kpiSummary.monthlyRevenue.toLocaleString()}`}
            subtitle={`שנתי: ₪${kpiSummary.yearlyRevenue.toLocaleString()}`}
            trend={{ value: revenueGrowth, positive: true }}
          />
          <KpiCard
            icon="📅"
            title="שיעורים היום"
            value={kpiSummary.lessonsToday}
            subtitle={`${kpiSummary.lessonsThisWeek} השבוע`}
          />
          <KpiCard
            icon="✅"
            title="אחוז נוכחות"
            value={`${kpiSummary.attendanceRate}%`}
            subtitle={`ביטולים: ${kpiSummary.cancellationRate}%`}
            trend={{ value: 2, positive: true }}
          />
          <KpiCard
            icon="🔄"
            title="שימור תלמידים"
            value={`${kpiSummary.retentionRate}%`}
            subtitle={`${kpiSummary.churnedThisMonth} עזבו החודש`}
            trend={{ value: 1, positive: true }}
          />
          <KpiCard
            icon="⏳"
            title="רשימת המתנה"
            value={kpiSummary.waitingList}
            subtitle={`המרת ניסיון: ${kpiSummary.trialConversionRate}%`}
          />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-piano-black mb-4">
              הכנסות - 6 חודשים אחרונים
            </h2>
            <BarChart
              data={monthlyRevenue.map((m) => ({
                label: m.month,
                value: m.revenue,
              }))}
              maxValue={50000}
            />
            <div className="flex items-center gap-6 mt-4 text-sm text-warm-gray">
              <span>
                ממוצע חודשי:{" "}
                <strong className="text-piano-dark">
                  ₪
                  {Math.round(
                    monthlyRevenue.reduce((s, m) => s + m.revenue, 0) /
                      monthlyRevenue.length
                  ).toLocaleString()}
                </strong>
              </span>
              <span>
                הכנסה לתלמיד:{" "}
                <strong className="text-piano-dark">
                  ₪{kpiSummary.revenuePerStudent}
                </strong>
              </span>
            </div>
          </div>

          {/* Revenue by Lesson Type */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-piano-black mb-4">
              הכנסות לפי סוג שיעור
            </h2>
            <div className="space-y-4">
              {revenueByLessonType.map((item) => (
                <div key={item.type}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-piano-dark">
                      {item.type}
                    </span>
                    <span className="text-warm-gray">
                      ₪{item.amount.toLocaleString()} ({item.percentage}%)
                    </span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-gold to-gold-light rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-base font-bold text-piano-black mt-6 mb-3">
              תלמידים לפי רמה
            </h3>
            <div className="space-y-2">
              {studentsByLevel.map((item) => (
                <div key={item.level} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-piano-dark w-20">
                    {item.level}
                  </span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-piano-dark/60 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-warm-gray w-8">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Schedule */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-piano-black mb-4">
              לוח שיעורים - היום
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-right py-2 font-semibold text-warm-gray">
                      שעה
                    </th>
                    <th className="text-right py-2 font-semibold text-warm-gray">
                      תלמיד
                    </th>
                    <th className="text-right py-2 font-semibold text-warm-gray">
                      מורה
                    </th>
                    <th className="text-right py-2 font-semibold text-warm-gray">
                      סוג
                    </th>
                    <th className="text-right py-2 font-semibold text-warm-gray">
                      משך
                    </th>
                    <th className="text-right py-2 font-semibold text-warm-gray">
                      סטטוס
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {todayLessons.map((lesson) => (
                    <tr
                      key={lesson.id}
                      className="border-b border-gray-50 hover:bg-ivory/50 transition-colors"
                    >
                      <td className="py-2.5 font-medium text-piano-dark">
                        {lesson.time}
                      </td>
                      <td className="py-2.5 text-piano-dark">
                        {lesson.student}
                      </td>
                      <td className="py-2.5 text-warm-gray">
                        {lesson.teacher}
                      </td>
                      <td className="py-2.5">
                        <LessonTypeBadge type={lesson.type} />
                      </td>
                      <td className="py-2.5 text-warm-gray">
                        {lesson.duration} דק׳
                      </td>
                      <td className="py-2.5">
                        <StatusBadge status={lesson.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weekly Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold text-piano-black mb-4">
              התפלגות שיעורים שבועית
            </h2>
            <div className="flex items-end gap-3 h-32">
              {weekDays.map((day) => (
                <div
                  key={day.label}
                  className="flex-1 flex flex-col items-center gap-1"
                >
                  <span className="text-xs font-semibold text-piano-dark">
                    {day.value || ""}
                  </span>
                  <div
                    className={`w-full rounded-t-md transition-all ${
                      day.value > 0
                        ? "bg-gradient-to-t from-piano-dark to-piano-dark/70"
                        : "bg-gray-100"
                    }`}
                    style={{
                      height: day.value > 0 ? `${(day.value / 15) * 100}%` : "8%",
                    }}
                  />
                  <span className="text-xs text-warm-gray font-medium">
                    {day.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-warm-gray text-center">
              סה״כ{" "}
              <strong className="text-piano-dark">
                {kpiSummary.lessonsThisWeek}
              </strong>{" "}
              שיעורים השבוע
            </div>

            {/* Quick Stats */}
            <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-warm-gray">משך שיעור ממוצע</span>
                <span className="font-semibold text-piano-dark">
                  {kpiSummary.averageLessonDuration} דק׳
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-warm-gray">שיעורים שהושלמו</span>
                <span className="font-semibold text-piano-dark">
                  {kpiSummary.completedLessonsThisWeek}/
                  {kpiSummary.lessonsThisWeek}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-warm-gray">אחוז אי-הגעה</span>
                <span className="font-semibold text-piano-dark">
                  {kpiSummary.noShowRate}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-piano-black mb-4">
            ביצועי מורים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="border border-gray-100 rounded-xl p-4 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-piano-dark">{teacher.name}</h3>
                  <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                    {teacher.rating} ★
                  </span>
                </div>
                <ProgressBar
                  label="ניצולת"
                  value={teacher.activeStudents}
                  max={teacher.maxStudents}
                  color="bg-gold"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-warm-gray">שיעורים השבוע</span>
                  <span className="font-medium text-piano-dark">
                    {teacher.lessonsThisWeek}
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-warm-gray">הכנסה חודשית</span>
                  <span className="font-medium text-piano-dark">
                    ₪{teacher.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-8 text-sm text-warm-gray">
            <span>
              סה״כ מורים:{" "}
              <strong className="text-piano-dark">
                {kpiSummary.totalTeachers}
              </strong>
            </span>
            <span>
              ניצולת ממוצעת:{" "}
              <strong className="text-piano-dark">
                {kpiSummary.averageTeacherUtilization}%
              </strong>
            </span>
            <span>
              סה״כ הכנסות מורים:{" "}
              <strong className="text-piano-dark">
                ₪{teachers.reduce((s, t) => s + t.revenue, 0).toLocaleString()}
              </strong>
            </span>
          </div>
        </div>

        {/* Student Growth */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-piano-black mb-4">
            צמיחת תלמידים - 6 חודשים אחרונים
          </h2>
          <div className="flex items-end gap-2 h-32">
            {monthlyRevenue.map((m) => (
              <div
                key={m.month}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <span className="text-xs font-semibold text-piano-dark">
                  {m.students}
                </span>
                <div
                  className="w-full bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-md"
                  style={{ height: `${(m.students / 60) * 100}%` }}
                />
                <span className="text-xs text-warm-gray">{m.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-warm-gray text-center">
            גידול של{" "}
            <strong className="text-emerald-600">
              {monthlyRevenue[monthlyRevenue.length - 1].students -
                monthlyRevenue[0].students}
            </strong>{" "}
            תלמידים ב-6 חודשים ({Math.round(((monthlyRevenue[monthlyRevenue.length - 1].students - monthlyRevenue[0].students) / monthlyRevenue[0].students) * 100)}% צמיחה)
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-warm-gray pb-4">
          דשבורד KPI | בית הספר לפסנתר | עודכן לאחרונה: 25/03/2026
        </footer>
      </div>
    </div>
  );
}
