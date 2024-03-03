import Link from "next/link";

export default function Portal() {
  return (
    <div className="flex items-center justify-center h-screen gap-10">
      <Link
        href="/portal/patient"
        className="border-2 border-blue-500 p-4 rounded-full"
      >
        Patient portal
      </Link>
      <Link
        href="/portal/doctor"
        className="border-2 border-blue-500 p-4 rounded-full"
      >
        Doctor portal
      </Link>
    </div>
  );
}
