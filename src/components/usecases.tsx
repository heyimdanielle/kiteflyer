const cases = [
  {
    heading: 'At-Home Gatherings',
    body: 'Guest lists, invites & playlists in minutes.',
  },
  {
    heading: 'Weddings',
    body: 'Seating charts, vendor comms & day-of timelines—stress-free.',
  },
  {
    heading: 'Corporate Summits',
    body: 'Multi-track agendas, sponsor assets & real-time analytics.',
  },
  {
    heading: 'Festivals & Conferences',
    body: 'Maps, ticket tiers, parallel stages & attendee networking—all synced.',
  },
];

const organiserTypes = [
  {
    title: 'Corporate Event Planners',
    desc: 'Streamline multi-track agendas and attendee networking with tools tailored for professional events.',
    icon: '/public/globe.svg',
  },
  {
    title: 'Festival Organisers',
    desc: 'Create vibrant schedules and manage artist lineups with ease, while engaging attendees with interactive features.',
    icon: '/public/window.svg',
  },
  {
    title: 'Non-Profit Coordinators',
    desc: 'Simplify volunteer management and fundraising events with integrated tools for collaboration and outreach.',
    icon: '/public/file.svg',
  },
];

const pricingPlans = [
  {
    tier: 'Starter',
    price: '$49/month',
    features: ['Basic scheduling tools', 'Email support', 'Up to 100 attendees'],
  },
  {
    tier: 'Pro',
    price: '$99/month',
    features: ['Advanced networking', 'Priority support', 'Up to 500 attendees'],
  },
  {
    tier: 'Enterprise',
    price: 'Custom pricing',
    features: ['Unlimited attendees', 'Dedicated account manager', 'Custom integrations'],
  },
];

export default function UseCases() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">Event Organiser Types</h2>
        <div className="grid gap-14 md:grid-cols-3">
          {organiserTypes.map((type) => (
            <div key={type.title} className="flex flex-col items-center gap-4 p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={type.icon} alt={`${type.title} icon`} className="h-16" />
              <h3 className="text-2xl font-bold text-indigo-600">{type.title}</h3>
              <p className="text-gray-700 text-center font-medium">{type.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mt-20 mb-12">Pricing Plans</h2>
        <div className="grid gap-14 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.tier} className="flex flex-col items-center gap-4 p-8 bg-indigo-50 border border-indigo-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-indigo-600">{plan.tier}</h3>
              <p className="text-3xl font-extrabold text-gray-900">{plan.price}</p>
              <ul className="text-gray-700 list-disc list-inside font-medium">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
