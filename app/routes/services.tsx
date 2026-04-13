import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Services | National Credit Recovery" },
		{
			name: "description",
			content:
				"Recovery programs, legal forwarding, skip tracing coordination, and client reporting from National Credit Recovery.",
		},
	];
}

const programs = [
	{
		title: "Early-stage outreach",
		body: "Structured reminders and payment arrangements before escalation, aligned with your brand voice and approval matrix.",
	},
	{
		title: "Primary collections",
		body: "Dedicated queues for charged-off and non-performing balances with clear KPIs and weekly performance reviews.",
	},
	{
		title: "Legal forwarding",
		body: "Pre-litigation documentation packages and network coordination with licensed counsel in approved jurisdictions.",
	},
	{
		title: "Asset location support",
		body: "Skip tracing and data hygiene workflows that respect permissible use and consumer privacy expectations.",
	},
];

export default function Services(_: Route.ComponentProps) {
	return (
		<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
			<div className="max-w-2xl">
				<p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
					Services
				</p>
				<h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
					Programs tailored to your paper
				</h1>
				<p className="mt-4 text-base leading-relaxed text-slate-600">
					Whether you manage a national card portfolio or specialized B2B
					receivables, we align staffing, technology, and reporting to your
					service-level agreements.
				</p>
			</div>
			<ul className="mt-12 grid gap-6 sm:grid-cols-2">
				{programs.map((p) => (
					<li
						key={p.title}
						className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
					>
						<h2 className="font-serif text-lg font-semibold text-slate-900">
							{p.title}
						</h2>
						<p className="mt-3 text-sm leading-relaxed text-slate-600">
							{p.body}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
