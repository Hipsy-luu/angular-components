import { Dayjs } from 'dayjs';

export type Theme = 'dark' | 'light';
export type Position = 'left' | 'right' | 'center';
export class DateRange {
  start: Dayjs;
  end: Dayjs;
}

export class DateChanged {
  day: Dayjs;
  isLeft: boolean;
}

export class YearMonthChanged {
  value: number;
  isLeft: boolean;
}

export class MonthNameValue {
  name: string;
  value: number;
}

export class DefinedDateRange {
  name: string;
  value: DateRange;
}

export class Timepicker {
  minuteInterval = 1;
  twentyFourHourFormat = true;
}

export class YearsGrid {
  startYear: number;
  numberOfYearsInOneView: number;
  yearsPerRow: number;
  yearsList: number[][];
  currentYear: number;
}

export class Options {
  startDate?: Dayjs| null = null;
  endDate?: Dayjs| null = null;
  minDate?: Dayjs| null = null;
  maxDate?: Dayjs| null = null;
  format?: string| null = 'YYYY-MM-DD';
  displayFormat?: string| null;
  inactiveBeforeStart?: boolean = false;
  autoApply?: boolean = false;
  singleCalendar?: boolean = false;
  preDefinedRanges?: DefinedDateRange[];
  noDefaultRangeSelected?: boolean = false;
  showRanges?: boolean = false;
  position?: Position| null = 'left';
  disabled?: boolean = false;
  timePicker?: Timepicker| null = null;
  disableBeforeStart?: boolean = false;
  alwaysOpen?: boolean = false;
  theme?: Theme = 'light';
  required?: boolean = false;
  DOB?: boolean = false;
  weekStartsOn?: number| null = 0;
  addTouchSupport?: boolean = false;
  placeholder?: string = '';
  hideControls?: boolean = false;
  readOnly?: boolean = false;
  disableWeekEnds: boolean = false;
  disabledDays: number[]| null = null;
  disabledDates: Dayjs[]| null = null;
}
