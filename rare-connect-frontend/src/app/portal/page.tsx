import Link from "next/link";

export default function Portal() {
  return (
    <div className="flex items-center justify-center gap-10 h-dvh">
      <div>
        <Link
          href="/portal/register/patient"
          className="border-2 border-blue-500 p-4 m-2 rounded-full"
        >
          Patient portal
        </Link>
        <Link
          href="/portal/register/doctor"
          className="border-2 border-blue-500 p-4 m-2 rounded-full"
        >
          Doctor portal
        </Link>
        <div className="flex items-center justify-center mt-10">
          <h1>
            Have an account? Login{" "}
            <Link href="/portal/login" className="underline">
              here
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
