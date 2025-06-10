export default function CTA() {
  return (
    <section id="signup" className="py-20 px-6 text-center bg-indigo-600 text-white">
      <h2 className="text-3xl font-bold">Ready to simplify your next event?</h2>
      <p className="mt-4 text-lg">Join the early-access cohort and help shape Kiteflyer.</p>
      <form
        action="https://formspree.io/f/yourID"
        method="POST"
        className="mt-8 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="Work email"
          required
          className="flex-1 rounded-lg px-4 py-3 text-gray-900"
        />
        <button
          type="submit"
          className="rounded-lg bg-tertiary-color px-8 py-3 text-white font-medium hover:bg-teal-500"
        >
          Get Early Access
        </button>
      </form>
    </section>
  );
}
