const featureList = [
	{
		title: 'Integration-First',
		desc: 'Two-way sync with Airtable, Google Drive, Canva & more—keep the workflows you know, minus the tab-surfing.',
	},
	{
		title: 'Drag-and-Drop Scheduling',
		desc: 'Build single- or multi-track agendas in minutes. Conflicts flagged instantly, changes propagate everywhere.',
	},
	{
		title: 'Attendee Networking Built-In',
		desc: 'Chat, AI match-making & meeting booking that rivals Brella and Socio—without a separate license fee.',
	},
	{
		title: 'Instant Brand Assets',
		desc: 'Auto-generate on-brand social tiles, signage & badges from your color palette. Export straight to Canva or print.',
	},
];

export default function Features() {
	return (
		<section className="py-20 px-6 bg-white shadow-md rounded-lg">
			<div className="mx-auto max-w-6xl grid gap-14 md:grid-cols-2">
				{featureList.map((f) => (
					<div key={f.title} className="flex flex-col gap-3 p-6 bg-indigo-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
						<h3 className="text-2xl font-semibold text-indigo-600">{f.title}</h3>
						<p className="text-gray-700 leading-relaxed">{f.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
