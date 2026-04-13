import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About | Pay Up or Get Shot" },
		{
			name: "description",
			content:
				"Pay Up or Get Shot: who we are and why we do not tolerate unpaid debt.",
		},
	];
}

export default function About(_: Route.ComponentProps) {
	return (
		<div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
			<p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
				About
			</p>
			<h1 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
				We exist because people steal with a smile
			</h1>
			<p className="mt-6 text-base font-medium leading-relaxed text-zinc-400">
				Pay Up or Get Shot was built for creditors who are done being treated like
				a charity. You extended credit, delivered goods, or did the work. They
				owe you. If they think silence and avoidance are free, we charge them
				interest in stress until the account is settled.
			</p>
			<div className="mt-10 space-y-8 text-sm font-medium leading-relaxed text-zinc-400">
				<section>
					<h2 className="font-display text-2xl tracking-wide text-[var(--color-accent)]">
						Our method
					</h2>
					<p className="mt-3">
						We combine relentless follow-through with a clear escalation ladder.
						Every case is tracked. Every contact is logged. When we say we will
						send the boys round, there is a roster and a schedule—not a bluff.
					</p>
				</section>
				<section>
					<h2 className="font-display text-2xl tracking-wide text-red-500">
						Leadership
					</h2>
					<p className="mt-3">
						Executive oversight means we review outcomes weekly: recovery rates,
						escalations, and whether debtors are still pretending they “never got
						the invoice.” If your portfolio is bleeding, we tighten the screws
						until the bleeding stops.
					</p>
				</section>
				<section className="rounded-lg border-2 border-red-800 bg-red-950/30 p-4 text-red-100">
					<p className="font-display text-lg tracking-wide text-[var(--color-accent)]">
						Final word
					</p>
					<p className="mt-2">
						Owing someone money and ignoring them is a choice. We make that
						choice expensive—in time, in peace of mind, and in whatever tier of
						pressure you authorize.{" "}
						<strong className="text-white">
							Sleep with one eye open is what we tell the people who owe you—not
							you.
						</strong>
					</p>
				</section>
			</div>
		</div>
	);
}
