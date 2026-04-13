import type { Route } from "./+types/services";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Collection Packages | Pay Up or Get Shot" },
		{
			name: "description",
			content:
				"UK tiered debt recovery from Pay Up or Get Shot: from firm reminders to physical persuasion packages.",
		},
	];
}

const programs: {
	title: string;
	tag: string;
	tagClass: string;
	body: string;
}[] = [
	{
		title: "Tier 1 — The Reminder",
		tag: "Soft opening",
		tagClass:
			"border-yellow-600/80 bg-yellow-500/10 text-[var(--color-accent)]",
		body: "Structured calls and letters on UK letterhead. We tell your debtor the clock is ticking—CCJs and county court routes are on the table if they keep stalling. If they think they can ghost you from a bedsit in Leeds, they learn otherwise—politely at first, then less politely. No broken bones yet; just broken excuses.",
	},
	{
		title: "Tier 2 — The Squeeze",
		tag: "We send the boys",
		tagClass: "border-orange-600/80 bg-orange-950/50 text-orange-300",
		body: "In-person visits across Britain. Escalating frequency. We park where they see us—on the estate, outside the pub, by the trading estate gate. We knock when they wish we would not. Neighbours start asking questions. That is the point. Pay the debt or live under scrutiny.",
	},
	{
		title: "Tier 3 — Leg Breaker",
		tag: "Physical persuasion",
		tagClass: "border-red-600 bg-red-950/60 text-red-300",
		body: "When words fail, we apply pressure—literally. A visit that ends with them unable to walk straight is a visit they remember when the next payment is due. NHS or private A&E is their problem; your recovery in pounds is the priority.",
	},
	{
		title: "Tier 4 — Total Recovery",
		tag: "Maximum intent",
		tagClass: "border-red-500 bg-black text-white ring-2 ring-red-600",
		body: "Full-spectrum collection: locate assets, lean on associates, and make clear that unpaid debt has consequences they cannot outrun. Sleep with one eye open becomes their lifestyle until the balance reads zero.",
	},
];

export default function Services(_: Route.ComponentProps) {
	return (
		<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
			<div className="max-w-3xl">
				<p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
					Collection packages
				</p>
				<h1 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
					Pick how hard we lean
				</h1>
				<p className="mt-4 text-base font-medium leading-relaxed text-zinc-400">
					Every debtor is different. Some pay after a stiff letter. Some need to
					hear a voice at their door. Some need to reconsider their mobility.{" "}
					<strong className="text-zinc-200">
						You choose the package; we deliver the outcome.
					</strong>{" "}
					If they still do not pay, upgrade the tier—we are not sentimental.
				</p>
			</div>
			<ul className="mt-12 grid gap-6 sm:grid-cols-2">
				{programs.map((p) => (
					<li
						key={p.title}
						className="rounded-xl border-2 border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-black p-6 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
					>
						<div className="flex flex-wrap items-center gap-2">
							<span
								className={`inline-block rounded border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${p.tagClass}`}
							>
								{p.tag}
							</span>
						</div>
						<h2 className="mt-3 font-display text-2xl tracking-wide text-white">
							{p.title}
						</h2>
						<p className="mt-3 text-sm font-medium leading-relaxed text-zinc-400">
							{p.body}
						</p>
					</li>
				))}
			</ul>
			<p className="mt-10 rounded-lg border border-red-900/60 bg-red-950/20 p-4 text-sm font-medium text-red-200/90">
				<strong className="text-red-400">Non-payment is not cute.</strong> It is
				a liability. We treat it like one—until your ledger is whole or your
				debtor understands that owing you was their worst decision.
			</p>
		</div>
	);
}
