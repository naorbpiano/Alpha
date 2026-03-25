// Mock data for Piano School KPI Dashboard

export interface Student {
  id: number;
  name: string;
  teacher: string;
  lessonType: "private" | "group" | "masterclass";
  startDate: string;
  status: "active" | "paused" | "churned";
  monthlyFee: number;
}

export interface Lesson {
  id: number;
  student: string;
  teacher: string;
  date: string;
  time: string;
  duration: number; // minutes
  type: "private" | "group" | "masterclass";
  status: "completed" | "cancelled" | "scheduled" | "no-show";
}

export interface Teacher {
  id: number;
  name: string;
  activeStudents: number;
  maxStudents: number;
  lessonsThisWeek: number;
  rating: number;
  revenue: number;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
  students: number;
}

export const teachers: Teacher[] = [
  { id: 1, name: "נאור בן פיאנו", activeStudents: 18, maxStudents: 22, lessonsThisWeek: 20, rating: 4.9, revenue: 14400 },
  { id: 2, name: "מיכל כהן", activeStudents: 15, maxStudents: 20, lessonsThisWeek: 17, rating: 4.8, revenue: 12000 },
  { id: 3, name: "דניאל לוי", activeStudents: 12, maxStudents: 18, lessonsThisWeek: 14, rating: 4.7, revenue: 9600 },
  { id: 4, name: "רחל אברהם", activeStudents: 10, maxStudents: 15, lessonsThisWeek: 12, rating: 4.9, revenue: 8000 },
];

export const monthlyRevenue: MonthlyRevenue[] = [
  { month: "אוק׳", revenue: 32000, students: 42 },
  { month: "נוב׳", revenue: 35000, students: 45 },
  { month: "דצמ׳", revenue: 37500, students: 48 },
  { month: "ינו׳", revenue: 38000, students: 50 },
  { month: "פבר׳", revenue: 40000, students: 52 },
  { month: "מרץ", revenue: 44000, students: 55 },
];

export const todayLessons: Lesson[] = [
  { id: 1, student: "יובל כהן", teacher: "נאור בן פיאנו", date: "2026-03-25", time: "09:00", duration: 45, type: "private", status: "completed" },
  { id: 2, student: "מאיה לוי", teacher: "מיכל כהן", date: "2026-03-25", time: "09:30", duration: 45, type: "private", status: "completed" },
  { id: 3, student: "קבוצה א׳", teacher: "דניאל לוי", date: "2026-03-25", time: "10:00", duration: 60, type: "group", status: "completed" },
  { id: 4, student: "נועם ישראלי", teacher: "נאור בן פיאנו", date: "2026-03-25", time: "11:00", duration: 45, type: "private", status: "cancelled" },
  { id: 5, student: "שירה דוד", teacher: "רחל אברהם", date: "2026-03-25", time: "14:00", duration: 45, type: "private", status: "scheduled" },
  { id: 6, student: "אורי גולן", teacher: "מיכל כהן", date: "2026-03-25", time: "15:00", duration: 45, type: "private", status: "scheduled" },
  { id: 7, student: "קבוצה ב׳", teacher: "דניאל לוי", date: "2026-03-25", time: "16:00", duration: 60, type: "group", status: "scheduled" },
  { id: 8, student: "תמר שלום", teacher: "נאור בן פיאנו", date: "2026-03-25", time: "16:00", duration: 45, type: "private", status: "scheduled" },
  { id: 9, student: "איתי ברק", teacher: "רחל אברהם", date: "2026-03-25", time: "17:00", duration: 45, type: "private", status: "scheduled" },
  { id: 10, student: "מאסטרקלאס", teacher: "נאור בן פיאנו", date: "2026-03-25", time: "18:00", duration: 90, type: "masterclass", status: "scheduled" },
];

// KPI Summary
export const kpiSummary = {
  activeStudents: 55,
  newStudentsThisMonth: 7,
  churnedThisMonth: 2,
  monthlyRevenue: 44000,
  previousMonthRevenue: 40000,
  yearlyRevenue: 226500,
  attendanceRate: 91,
  cancellationRate: 6,
  noShowRate: 3,
  retentionRate: 94,
  lessonsToday: 10,
  lessonsThisWeek: 63,
  completedLessonsThisWeek: 28,
  averageLessonDuration: 48,
  totalTeachers: 4,
  averageTeacherUtilization: 83,
  revenuePerStudent: 800,
  trialConversionRate: 78,
  waitingList: 8,
};

export const revenueByLessonType = [
  { type: "שיעור פרטי", percentage: 68, amount: 29920 },
  { type: "שיעור קבוצתי", percentage: 22, amount: 9680 },
  { type: "מאסטרקלאס", percentage: 10, amount: 4400 },
];

export const studentsByLevel = [
  { level: "מתחילים", count: 18, percentage: 33 },
  { level: "בינוניים", count: 22, percentage: 40 },
  { level: "מתקדמים", count: 11, percentage: 20 },
  { level: "מקצועיים", count: 4, percentage: 7 },
];

export const weeklySchedule = {
  sunday: 14,
  monday: 12,
  tuesday: 13,
  wednesday: 10,
  thursday: 14,
  friday: 0,
  saturday: 0,
};
