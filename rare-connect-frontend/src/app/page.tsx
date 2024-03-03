import Link from "next/link";

export default function Page() {
  return (
    <div>
      <nav className="flex gap-4 justify-end mr-10 mt-5">
        <ul className="hover:underline ease-in-out text-3xl">
          <Link href="/portal">Apply</Link>
        </ul>
        <ul className="hover:underline ease-in-out text-3xl">Support</ul>
        <ul className="hover:underline ease-in-out text-3xl">Stories</ul>
        <ul className="hover:underline ease-in-out text-3xl">Settings</ul>
      </nav>
      <h1 className="flex text-7xl font-medium justify-center mt-40 italic">
        Rare Connect
      </h1>
      <h2 className="flex text-3xl font-normal justify-center mt-20">
        Connecting patients to the right people.
      </h2>
    </div>
  );
}
