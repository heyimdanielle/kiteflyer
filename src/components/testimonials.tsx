import React from "react";
import Image from "next/image";

const testimonials = [
	{
		name: "Alex Johnson",
		role: "Event Planner",
		feedback:
			"Kiteflyer has revolutionized the way I organize events. It's intuitive and saves me so much time!",
		image: "/public/integrations/slack.svg",
	},
	{
		name: "Maria Gonzalez",
		role: "Corporate Organizer",
		feedback: "The best tool for managing large-scale events. Highly recommend it!",
		image: "/public/integrations/canva.svg",
	},
	{
		name: "James Lee",
		role: "Freelance Coordinator",
		feedback: "I love how easy it is to collaborate with my team using Kiteflyer.",
		image: "/public/integrations/google-drive.svg",
	},
];

export default function Testimonials() {
	return (
		<section className="py-20 px-6 bg-gray-100 text-center">
			<h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
			<div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
					>
						<Image
							src={testimonial.image}
							alt={testimonial.name}
							width={64}
							height={64}
							className="w-16 h-16 mx-auto rounded-full"
						/>
						<h3 className="mt-4 text-xl font-semibold text-gray-700">
							{testimonial.name}
						</h3>
						<p className="text-sm text-gray-500">{testimonial.role}</p>
						<p className="mt-4 text-gray-600">&quot;{testimonial.feedback}&quot;</p>
					</div>
				))}
			</div>
		</section>
	);
}
