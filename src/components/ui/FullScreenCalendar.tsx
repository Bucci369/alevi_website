"use client"

import * as React from "react"
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
  getYear,
  setYear,
} from "date-fns"
import { de } from "date-fns/locale"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Locale } from "@/types"

interface Holiday {
  id: string
  name: string
  date: Date
  type: 'german' | 'alevi'
  isPublicHoliday?: boolean
}

interface FullScreenCalendarProps {
  locale: Locale
}

const colStartClasses = [
  "",
  "col-start-2", 
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
]

// --- Holiday Calculation ---

// Easter calculation using the Meeus/Jones/Butcher algorithm
function getEaster(year: number): Date {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1
  return new Date(year, month - 1, day)
}

// Generate German holidays for a given year
function getGermanHolidays(year: number): Holiday[] {
  const easter = getEaster(year)
  return [
    { id: `neujahr-${year}`, name: 'Neujahr', date: new Date(year, 0, 1), type: 'german', isPublicHoliday: true },
    { id: `hl-drei-koenige-${year}`, name: 'Heilige Drei Könige', date: new Date(year, 0, 6), type: 'german', isPublicHoliday: true },
    { id: `karfreitag-${year}`, name: 'Karfreitag', date: add(easter, { days: -2 }), type: 'german', isPublicHoliday: true },
    { id: `ostermontag-${year}`, name: 'Ostermontag', date: add(easter, { days: 1 }), type: 'german', isPublicHoliday: true },
    { id: `tag-der-arbeit-${year}`, name: 'Tag der Arbeit', date: new Date(year, 4, 1), type: 'german', isPublicHoliday: true },
    { id: `christi-himmelfahrt-${year}`, name: 'Christi Himmelfahrt', date: add(easter, { days: 39 }), type: 'german', isPublicHoliday: true },
    { id: `pfingstmontag-${year}`, name: 'Pfingstmontag', date: add(easter, { days: 50 }), type: 'german', isPublicHoliday: true },
    { id: `fronleichnam-${year}`, name: 'Fronleichnam', date: add(easter, { days: 60 }), type: 'german', isPublicHoliday: true },
    { id: `tag-der-einheit-${year}`, name: 'Tag der Deutschen Einheit', date: new Date(year, 9, 3), type: 'german', isPublicHoliday: true },
    { id: `allerheiligen-${year}`, name: 'Allerheiligen', date: new Date(year, 10, 1), type: 'german', isPublicHoliday: true },
    { id: `weihnachten-1-${year}`, name: '1. Weihnachtsfeiertag', date: new Date(year, 11, 25), type: 'german', isPublicHoliday: true },
    { id: `weihnachten-2-${year}`, name: '2. Weihnachtsfeiertag', date: new Date(year, 11, 26), type: 'german', isPublicHoliday: true },
  ]
}

// Approximate Alevi holidays for a given year (based on a 10/11-day shift per year)
// Note: This is an approximation. For exact dates, a Hijri calendar conversion library would be better.
function getAleviHolidays(year: number): Holiday[] {
    const yearDiff = year - 2025;
    const dayShift = Math.round(yearDiff * -10.875); // Approximate shift for lunar calendar

    return [
        { id: `muharrem-start-${year}`, name: 'Muharrem-Fasten (Beginn)', date: add(new Date(2025, 0, 1), { days: dayShift }), type: 'alevi' },
        { id: `muharrem-end-${year}`, name: 'Aşure (Ende Muharrem)', date: add(new Date(2025, 0, 12), { days: dayShift }), type: 'alevi' },
        { id: `hizir-fasten-${year}`, name: 'Hızır-Fasten', date: add(new Date(2025, 1, 13), { days: dayShift }), type: 'alevi' },
        { id: `nevruz-${year}`, name: 'Nevruz - Geburtstag Alis', date: new Date(year, 2, 21), type: 'alevi' }, // Fixed date
        { id: `hidirellez-${year}`, name: 'Hıdırellez', date: new Date(year, 4, 6), type: 'alevi' }, // Fixed date
        { id: `abdal-musa-${year}`, name: 'Abdal Musa Gedenkfest', date: add(new Date(2025, 5, 7), { days: dayShift }), type: 'alevi' },
        { id: `haci-bektas-${year}`, name: 'Hacı Bektaş Veli Festival', date: new Date(year, 7, 16), type: 'alevi' }, // Fixed date
        { id: `huseyin-sehit-${year}`, name: 'Tod des Heiligen Hüseyin', date: add(new Date(2025, 9, 10), { days: dayShift }), type: 'alevi' },
    ];
}

function getAllHolidaysForYear(year: number): Holiday[] {
  return [...getGermanHolidays(year), ...getAleviHolidays(year)];
}

const months = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
]

export function FullScreenCalendar({ locale }: FullScreenCalendarProps) {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = React.useState(today)
  const [currentMonth, setCurrentMonth] = React.useState(
    format(today, "MMM-yyyy")
  )
  const [showMonthPicker, setShowMonthPicker] = React.useState(false)
  const [showYearPicker, setShowYearPicker] = React.useState(false)
  
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())
  const currentYear = getYear(firstDayCurrentMonth)
  const currentMonthIndex = firstDayCurrentMonth.getMonth()

  // Generate years dynamically for the next 10 years
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i)

  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  })

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
  }

  function goToMonth(monthIndex: number) {
    const newDate = new Date(currentYear, monthIndex, 1)
    setCurrentMonth(format(newDate, "MMM-yyyy"))
    setShowMonthPicker(false)
  }

  function goToYear(year: number) {
    const newDate = setYear(firstDayCurrentMonth, year)
    setCurrentMonth(format(newDate, "MMM-yyyy"))
    setShowYearPicker(false)
  }

  function goToToday() {
    setCurrentMonth(format(today, "MMM-yyyy"))
    setSelectedDay(today)
  }

  const allHolidays = React.useMemo(() => getAllHolidaysForYear(currentYear), [currentYear]);

  const getHolidaysForDay = React.useCallback((day: Date) => {
    return allHolidays.filter(holiday => isSameDay(holiday.date, day))
  }, [allHolidays])

  return (
    <div className="flex flex-1 flex-col bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
      {/* Calendar Header */}
      <div className="flex flex-col space-y-4 p-6 md:flex-row md:items-center md:justify-between md:space-y-0 border-b border-gray-200">
        <div className="flex flex-auto">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowMonthPicker(!showMonthPicker)}
                  className="text-2xl font-bold text-black hover:text-blue-600 transition-colors"
                >
                  {format(firstDayCurrentMonth, "MMMM", { locale: de })}
                </button>
                <button
                  onClick={() => setShowYearPicker(!showYearPicker)}
                  className="text-2xl font-bold text-black hover:text-blue-600 transition-colors"
                >
                  {currentYear}
                </button>
              </div>
              <p className="text-sm text-gray-500">
                {locale === 'de' ? 'Deutsche und Alevitische Feiertage' : 'Alman ve Alevi Bayramları'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="inline-flex -space-x-px rounded-lg shadow-sm">
            <button
              onClick={previousMonth}
              className="px-3 py-2 rounded-l-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200 flex items-center justify-center"
            >
              <ChevronLeftIcon size={16} strokeWidth={2} />
            </button>
            <button
              onClick={goToToday}
              className="px-4 py-2 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200 flex items-center"
            >
              <CalendarIcon size={16} className="mr-2" />
              Heute
            </button>
            <button
              onClick={nextMonth}
              className="px-3 py-2 rounded-r-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200 flex items-center justify-center"
            >
              <ChevronRightIcon size={16} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Month/Year Picker Overlays */}
      {showMonthPicker && (
        <div className="absolute top-20 left-6 right-6 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200 shadow-2xl z-50 p-4">
          <div className="grid grid-cols-3 gap-2">
            {months.map((month, index) => (
              <button
                key={month}
                onClick={() => goToMonth(index)}
                className={cn(
                  "p-3 rounded-lg text-sm font-medium transition-all duration-200",
                  index === currentMonthIndex 
                    ? "bg-blue-500 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                )}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      )}

      {showYearPicker && (
        <div className="absolute top-20 left-6 right-6 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200 shadow-2xl z-50 p-4">
          <div className="grid grid-cols-5 gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => goToYear(year)}
                className={cn(
                  "p-3 rounded-lg text-sm font-medium transition-all duration-200",
                  year === currentYear 
                    ? "bg-blue-500 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Calendar Grid */}
      <div className="flex flex-auto flex-col overflow-hidden">
        {/* Week Days Header */}
        <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50 text-center text-sm font-semibold text-gray-600">
          <div className="border-r border-gray-200 py-3">Mo</div>
          <div className="border-r border-gray-200 py-3">Di</div>
          <div className="border-r border-gray-200 py-3">Mi</div>
          <div className="border-r border-gray-200 py-3">Do</div>
          <div className="border-r border-gray-200 py-3">Fr</div>
          <div className="border-r border-gray-200 py-3">Sa</div>
          <div className="py-3">So</div>
        </div>

        {/* Calendar Days */}
        <div className="flex-auto">
          <div className="grid grid-cols-7 grid-rows-6 h-full">
            {days.map((day, dayIdx) => {
              const dayHolidays = getHolidaysForDay(day)
              return (
                <div
                  key={dayIdx}
                  onClick={() => setSelectedDay(day)}
                  className={cn(
                    dayIdx === 0 && colStartClasses[getDay(day) === 0 ? 6 : getDay(day) - 1],
                    !isSameMonth(day, firstDayCurrentMonth) && "bg-gray-50 text-gray-400",
                    "relative flex flex-col border-b border-r border-gray-200 hover:bg-gray-100 cursor-pointer min-h-[120px] transition-all duration-200",
                    isEqual(day, selectedDay) && "bg-blue-50 ring-2 ring-blue-500",
                  )}
                >
                  <header className="flex items-center justify-between p-2">
                    <button
                      type="button"
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all duration-200",
                        isToday(day) && "bg-blue-500 text-white shadow-lg",
                        isEqual(day, selectedDay) && !isToday(day) && "bg-blue-200 text-blue-800",
                        !isEqual(day, selectedDay) && !isToday(day) && "text-gray-700 hover:bg-gray-200",
                        !isSameMonth(day, firstDayCurrentMonth) && "text-gray-400"
                      )}
                    >
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                  </header>
                  
                  <div className="flex-1 p-2 space-y-1">
                    {dayHolidays.slice(0, 3).map((holiday, index) => (
                      <div
                        key={holiday.id}
                        className={cn(
                          "rounded px-2 py-1 text-xs font-medium truncate transition-all duration-200 hover:scale-105",
                          holiday.type === 'german' && holiday.isPublicHoliday 
                            ? "bg-red-500 text-white shadow-sm" 
                            : holiday.type === 'german'
                            ? "bg-blue-500 text-white shadow-sm"
                            : "bg-green-500 text-white shadow-sm"
                        )}
                        title={holiday.name}
                      >
                        {holiday.name}
                      </div>
                    ))}
                    {dayHolidays.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{dayHolidays.length - 3} weitere
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Selected Day Details */}
      {selectedDay && getHolidaysForDay(selectedDay).length > 0 && (
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <h3 className="text-lg font-bold text-black mb-4">
            {format(selectedDay, "EEEE, d. MMMM yyyy", { locale: de })}
          </h3>
          <div className="space-y-2">
            {getHolidaysForDay(selectedDay).map((holiday, index) => (
              <div
                key={holiday.id}
                className={cn(
                  "rounded-lg p-3 text-sm transition-all duration-200 hover:scale-105",
                  holiday.type === 'german' && holiday.isPublicHoliday 
                    ? "bg-red-100 border border-red-200 text-red-800" 
                    : holiday.type === 'german'
                    ? "bg-blue-100 border border-blue-200 text-blue-800"
                    : "bg-green-100 border border-green-200 text-green-800"
                )}
              >
                <div className="font-medium">{holiday.name}</div>
                <div className="text-xs opacity-75">
                  {holiday.type === 'german' 
                    ? holiday.isPublicHoliday 
                      ? 'Gesetzlicher Feiertag' 
                      : 'Deutscher Feiertag'
                    : 'Alevitischer Feiertag'
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Overlay for closing pickers */}
      {(showMonthPicker || showYearPicker) && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowMonthPicker(false)
            setShowYearPicker(false)
          }}
        />
      )}
    </div>
  )
}
