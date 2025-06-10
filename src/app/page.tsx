// src/app/page.tsx

import Hero from '../components/hero';
import Features from '../components/features';
import UseCases from '../components/usecases';
import CTA from '../components/cta';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Testimonials from '../components/testimonials';
import FAQ from '../components/faq';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen text-gray-900 bg-gradient-to-b from-indigo-50 to-white">
        <Hero />
        <Features />
        <UseCases />
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="/login" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Login
          </Link>
          <Link href="/signup" className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Sign Up
          </Link>
        </div>
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
