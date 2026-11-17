// 'YYYY-MM' -> "Dec 2020" (en) / "dez. de 2020" (pt-BR); 'YYYY' -> "2020".
export function formatDate(value, lang) {
  if (!value.includes('-')) return value
  const [year, month] = value.split('-').map(Number)
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  )
}

// ('2022-01', '2026-11') -> "4 yrs 11 mos" (en) / "4 anos 11 meses" (pt-BR), the way LinkedIn shows it:
// both the start and the end month count. end: null = up to the current month.
// t: the useLanguage() translator, for the unit labels in strings.js (timeline.duration.*).
export function formatDuration(start, end, t) {
  const toMonths = (value) => {
    const [year, month] = value.split('-').map(Number)
    return year * 12 + (month - 1)
  }
  const now = new Date()
  const last = end ? toMonths(end) : now.getFullYear() * 12 + now.getMonth()
  const total = last - toMonths(start) + 1
  if (total < 1) return ''

  const years = Math.floor(total / 12)
  const months = total % 12
  const parts = []
  if (years) parts.push(`${years} ${t(years === 1 ? 'timeline.duration.year' : 'timeline.duration.years')}`)
  if (months) parts.push(`${months} ${t(months === 1 ? 'timeline.duration.month' : 'timeline.duration.months')}`)
  return parts.join(' ')
}
