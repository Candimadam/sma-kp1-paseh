import { format } from "date-fns";
import { id } from "date-fns/locale";

export function enumToReadable(value: string): string {
  return value
    .toLowerCase()
    .replace(/_/g, " ") // replace underscores with spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize each word
}

export function formattedDate(date: Date): string {
  return format(date, "dd MMMM yyyy", {
    locale: id,
  });
}
