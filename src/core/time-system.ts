export interface TimeState {
  year: number;
  month: number;
  day: number;
}

export function advanceDay(time: TimeState): TimeState {
  const nextDay = time.day + 1;
  if (nextDay > 30) {
    return {
      year: time.month === 12 ? time.year + 1 : time.year,
      month: time.month === 12 ? 1 : time.month + 1,
      day: 1
    };
  }

  return { ...time, day: nextDay };
}
