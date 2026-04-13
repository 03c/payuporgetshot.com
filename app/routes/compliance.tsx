import type { Route } from "./+types/compliance";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Rules of Engagement | Pay Up or Get Shot" },
		{
			name: "description",
			content:
				"How Pay Up or Get Shot handles disputes, communications, and escalation boundaries.",
		},
	];
}

export default function Compliance(_: Route.ComponentProps) {
	return (
		<div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
			<p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
				Rules
			</p>
			<h1 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
				What we will and will not do on paper
			</h1>
			<p className="mt-6 text-base font-medium leading-relaxed text-zinc-400">
				Even we operate inside lines—some of them legal, some of them yours. The
				summary below is how we keep your exposure controlled while we keep your
				debtor uncomfortable.{" "}
				<strong className="text-zinc-200">
					Disputes do not erase debt; they trigger a different playbook.
				</strong>
			</p>
			<div className="mt-10 space-y-8 text-sm font-medium leading-relaxed text-zinc-400">
				<section>
					<h2 className="font-display text-2xl tracking-wide text-[var(--color-accent)]">
						Validation & disputes
					</h2>
					<p className="mt-3">
						If a debtor claims the debt is wrong, we route it to review—fast.
						Documentation gets compared to your files. If they are lying to buy
						time, we document that too. Valid disputes get fixed; bogus ones get
						pressure until payment or proof.
					</p>
				</section>
				<section>
					<h2 className="font-display text-2xl tracking-wide text-red-500">
						Communication limits
					</h2>
					<p className="mt-3">
						We track consent, do-not-contact flags, and channel preferences so
						we do not hand your debtor a harassment lawsuit on a silver platter.
						We can still be relentless inside the rules—just smarter relentless.
					</p>
				</section>
				<section>
					<h2 className="font-display text-2xl tracking-wide text-white">
						Training & quality
					</h2>
					<p className="mt-3">
						Our people are trained on what to say, what not to say, and how to
						escalate without giving the debtor a free pass. Calls get reviewed.
						Scripts get tightened. If someone steps out of line, we correct it—
						because a lost lawsuit helps nobody except the person who still owes
						you money.
					</p>
				</section>
				<p className="rounded-md border border-zinc-700 bg-zinc-900/80 p-4 text-xs text-zinc-500">
					This page describes operational intent, not legal advice. Retain
					counsel if you need jurisdiction-specific guidance.
				</p>
			</div>
		</div>
	);
}
