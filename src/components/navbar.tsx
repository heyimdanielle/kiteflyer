import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
      {/* Logo */}
      <Link href="/">
        <span className="text-xl font-bold text-indigo-600">KITEFLYER.AI</span>
      </Link>

      {/* Book Demo Button */}
      <Link href="#demo">
        <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">
          Book Demo
        </button>
      </Link>
    </nav>
  );
}
