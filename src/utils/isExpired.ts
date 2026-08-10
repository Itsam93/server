export function isExpired(date: Date) {
  return date.getTime() <= Date.now();
}