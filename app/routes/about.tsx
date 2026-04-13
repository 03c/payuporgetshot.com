import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About Us | National Credit Recovery" },
		{
			name: "description",
			content:
				"Learn about National Credit Recovery's leadership philosophy, client focus, and commitment to professional receivables management.",
		},
	];
}

export default function About(_: Route.ComponentProps) {
	return (
		<div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
			<p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
				About
			</p>
			<h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
				A partner to credit and finance teams
			</h1>
			<p className="mt-6 text-base leading-relaxed text-slate-600">
				National Credit Recovery was established to give creditors a single,
				accountable partner for late-stage receivables—without sacrificing the
				controls your regulators and customers expect.
			</p>
			<div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
				<section>
					<h2 className="font-serif text-lg font-semibold text-slate-900">
						Our approach
					</h2>
					<p className="mt-3">
						We combine disciplined workflows with technology-enabled
						oversight. Every account is tracked in a unified system of record,
						so your organization can reconcile outcomes, fees, and consumer
						interactions on demand.
					</p>
				</section>
				<section>
					<h2 className="font-serif text-lg font-semibold text-slate-900">
						Leadership & governance
					</h2>
					<p className="mt-3">
						Executive oversight includes monthly business reviews, vendor risk
						assessments, and documented corrective action when metrics fall
						outside agreed tolerances—supporting your third-party risk
						management programs.
					</p>
				</section>
				<section className="rounded-lg border border-amber-200/80 bg-amber-50/50 p-4 text-amber-950">
					<p className="text-sm font-medium">Disclaimer</p>
					<p className="mt-2">
						This organization and website are fictional and created for
						demonstration only. No debt collection services are offered or
						performed.
					</p>
				</section>
			</div>
		</div>
	);
}
