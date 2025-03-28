import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto">
        <Link href="/" className="font-bold text-3xl">Home</Link>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </header>
  );
}