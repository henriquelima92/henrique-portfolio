// 'YYYY-MM' -> "Dec 2020" (en) / "dez. de 2020" (pt-BR); 'YYYY' -> "2020".
export function formatDate(value, lang) {
  if (!value.includes('-')) return value
  const [year, month] = value.split('-').map(Number)
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  )
}
