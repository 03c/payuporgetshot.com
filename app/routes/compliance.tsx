import type { Route } from "./+types/compliance";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Compliance & Consumer Rights | National Credit Recovery" },
		{
			name: "description",
			content:
				"Information about fair treatment, dispute handling, and consumer rights in receivables management.",
		},
	];
}

export default function Compliance(_: Route.ComponentProps) {
	return (
		<div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
			<p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
				Compliance
			</p>
			<h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
				Commitment to fair, accurate treatment
			</h1>
			<p className="mt-6 text-base leading-relaxed text-slate-600">
				Professional receivables firms operate within a framework of federal and
				state laws, regulatory guidance, and client policies. The following
				summarizes how we think about those obligations in a production
				environment.
			</p>
			<div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
				<section>
					<h2 className="font-serif text-lg font-semibold text-slate-900">
						Validation & disputes
					</h2>
					<p className="mt-3">
						Consumers who dispute a debt are entitled to clear timelines for
						validation, investigation, and reporting outcomes to credit bureaus
						where applicable. Our workflows route disputes to specialized teams
						and preserve correspondence for audit.
					</p>
				</section>
				<section>
					<h2 className="font-serif text-lg font-semibold text-slate-900">
						Communication preferences
					</h2>
					<p className="mt-3">
						We maintain suppression lists, consent records, and channel
						preferences so outreach respects consumer choice and regulatory
						limits on frequency and time of day.
					</p>
				</section>
				<section>
					<h2 className="font-serif text-lg font-semibold text-slate-900">
						Training & monitoring
					</h2>
					<p className="mt-3">
						Agents receive recurring training on harassment standards,
						mini-Miranda requirements, and state-specific rules. Calls are
						sampled for quality and coaching.
					</p>
				</section>
				<p className="rounded-md border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
					This page is illustrative content for a fictional brand. It is not
					legal advice. Consult qualified counsel for obligations that apply to
					your organization.
				</p>
			</div>
		</div>
	);
}
