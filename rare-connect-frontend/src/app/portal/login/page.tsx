import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen gap-10">
      <form className="flex flex-col gap-8 border-2 border-blue-200 bg-blue-200 rounded-xl px-3 py-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="border-2 border-blue-300 rounded-full px-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border-2 border-blue-300 rounded-full px-2"
          />
        </div>
        <Link
          className="flex justify-center border-2 border-blue-500 p-2 rounded-full bg-blue-500 text-white"
          href="/portal/patient"
        >
          Submit
        </Link>
      </form>
    </div>
  );
}
