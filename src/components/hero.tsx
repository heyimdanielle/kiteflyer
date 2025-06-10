export default function Hero() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-indigo-100 to-white shadow-lg rounded-lg">
      <h1 className="mx-auto max-w-4xl text-5xl md:text-6xl font-extrabold leading-tight text-indigo-600">
        The <span className="text-indigo-800">all-in-one events OS</span>
        <br className="hidden md:block" />
        that plays nicely with your stack.
      </h1>

      <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-700">
        Stop duct-taping Airtable sheets to Canva templates and endless email threads.
        Kiteflyer unifies ideation&nbsp;→ planning&nbsp;→ live delivery&nbsp;→ debrief—
        while <strong>integrating with the tools you already love</strong>.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#signup"
          className="rounded-lg bg-indigo-600 px-8 py-3 text-white font-medium shadow hover:bg-indigo-700"
        >
          Join the early-access list
        </a>
        <a
          href="#demo"
          className="rounded-lg border border-gray-300 px-8 py-3 font-medium text-gray-700 hover:bg-gray-50"
        >
          Book a demo call
        </a>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-8 grayscale opacity-80">
        {["airtable", "google-drive", "canva", "slack"].map((logo) => (
          <img
            key={logo}
            src={`/integrations/${logo}.svg`}
            alt={`${logo} logo`}
            className="h-8 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </section>
  );
}
