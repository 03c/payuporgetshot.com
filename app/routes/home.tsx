import { Link } from "react-router";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{
			title:
				"National Credit Recovery | Professional Accounts Receivable Management",
		},
		{
			name: "description",
			content:
				"National Credit Recovery provides structured recovery programs, compliant communications, and transparent reporting for creditors.",
		},
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return { envLabel: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.07]"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
					aria-hidden
				/>
				<div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
					<div className="max-w-2xl">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/90">
							Receivables · Resolution · Reporting
						</p>
						<h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
							Disciplined recovery. Documented compliance.
						</h1>
						<p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
							We help organizations recover outstanding balances through
							structured outreach, clear escalation paths, and audit-ready
							records—so your team stays focused on core operations.
						</p>
						<div className="mt-10 flex flex-wrap gap-4">
							<Link
								to="/contact"
								className="inline-flex items-center justify-center rounded bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
							>
								Request a consultation
							</Link>
							<Link
								to="/services"
								className="inline-flex items-center justify-center rounded border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
							>
								View capabilities
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-3">
					<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
						<h2 className="font-serif text-lg font-semibold text-slate-900">
							Portfolio oversight
						</h2>
						<p className="mt-3 text-sm leading-relaxed text-slate-600">
							Centralized account monitoring, aging analysis, and executive
							summaries tailored to credit and finance leadership.
						</p>
					</div>
					<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
						<h2 className="font-serif text-lg font-semibold text-slate-900">
							Structured contact
						</h2>
						<p className="mt-3 text-sm leading-relaxed text-slate-600">
							Consistent cadences across voice, mail, and digital channels—
							designed around permissible purpose and consent where required.
						</p>
					</div>
					<div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
						<h2 className="font-serif text-lg font-semibold text-slate-900">
							Transparent reporting
						</h2>
						<p className="mt-3 text-sm leading-relaxed text-slate-600">
							Activity logs, disposition codes, and performance dashboards you
							can share with internal audit and vendor management teams.
						</p>
					</div>
				</div>
			</section>

			<section className="border-y border-slate-200 bg-white">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-8">
					<div className="max-w-xl">
						<h2 className="font-serif text-2xl font-semibold text-slate-900">
							Built for regulated environments
						</h2>
						<p className="mt-4 text-sm leading-relaxed text-slate-600">
							Our operating model emphasizes training, quality assurance, and
							document retention—supporting your policies for fair treatment
							and accurate consumer communications.
						</p>
						<Link
							to="/compliance"
							className="mt-6 inline-flex text-sm font-semibold text-[var(--color-brand)] hover:underline"
						>
							Read our compliance overview →
						</Link>
					</div>
					<ul className="mt-8 grid flex-1 gap-3 text-sm text-slate-700 lg:mt-0">
						{[
							"Recorded lines and coaching for voice teams",
							"Script libraries reviewed by compliance counsel",
							"Escalation paths for disputes and cease requests",
						].map((item) => (
							<li
								key={item}
								className="flex gap-3 rounded-md border border-slate-100 bg-slate-50 px-4 py-3"
							>
								<span
									className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-600"
									aria-hidden
								/>
								{item}
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="rounded-xl border border-slate-200 bg-slate-100/80 p-8 sm:p-10">
					<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="font-serif text-xl font-semibold text-slate-900">
								Ready to discuss your portfolio?
							</h2>
							<p className="mt-2 text-sm text-slate-600">
								Our client services team responds within one business day.
							</p>
						</div>
						<Link
							to="/contact"
							className="inline-flex shrink-0 items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
						>
							Get in touch
						</Link>
					</div>
					<p className="mt-6 border-t border-slate-200/80 pt-6 text-xs text-slate-500">
						Infrastructure note: {loaderData.envLabel}
					</p>
				</div>
			</section>
		</>
	);
}
