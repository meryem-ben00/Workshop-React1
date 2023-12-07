import { format, parse } from "date-fns";

export function ParseDate(date) {
  const parsedDate = parse(date, "MM/dd/yyyy", new Date());

  return format(parsedDate, "MMM dd, yyyy");
}
