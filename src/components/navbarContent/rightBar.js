import Link from "next/link";

export function RightNav() {
  return (
    <div className="flex justify-end font-semibold w-screen pr-15 py-4">
      <a
        className="nav_right_link_container text-lg xl:text-base"
        href="tel:13609213233"
      >
        Call today +1 (360) 607-8204
      </a>
      <Link
        className="nav_right_link_container text-xs xl:text-base uppercase"
        href="/areas"
      >
        our areas
      </Link>
    </div>
  );
}
