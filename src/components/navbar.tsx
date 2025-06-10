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

      {/* Sign Up / Login Button */}
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="rounded-lg bg-gray-200 px-4 py-2 text-gray-800 font-medium hover:bg-gray-300">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}
