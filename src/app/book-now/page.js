import { redirect } from "next/navigation";
import { BOOKING_URL } from "@/lib/site";

// Online booking moved to GroundNexus. Anyone with an old /book-now link is sent there.
export default function BookNowPage() {
  redirect(BOOKING_URL);
}
