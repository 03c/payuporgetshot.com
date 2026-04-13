import { Link } from "react-router";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{
			title: "Pay Up or Get Shot | Debt Recovery That Does Not Negotiate With Cowards",
		},
		{
			name: "description",
			content:
				"Pay Up or Get Shot: professional debt collection with escalating packages. If they do not pay, they will wish they had.",
		},
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return { envLabel: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<section className="relative overflow-hidden border-b-4 border-red-600 bg-gradient-to-br from-red-950 via-black to-zinc-950 text-white">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.12]"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef4444' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
					aria-hidden
				/>
				<div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
					<div className="max-w-3xl">
						<p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--color-accent)]">
							Owed money · Tired of excuses · Done being nice
						</p>
						<h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide sm:text-6xl lg:text-7xl">
							<span className="text-white [text-shadow:4px_4px_0_#7f1d1d]">
								Pay up
							</span>
							<span className="mx-2 text-zinc-500">or</span>
							<span className="bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
								get shot
							</span>
						</h1>
						<p className="mt-6 text-base font-medium leading-relaxed text-zinc-300 sm:text-lg">
							You gave them trust. They gave you silence. We give them a reason
							to find their wallet.{" "}
							<strong className="text-white">
								If they do not pay, they will learn what “we will send the boys
								round” actually means.
							</strong>{" "}
							Sleep with one eye open is advice we give to debtors—not to you.
						</p>
						<div className="mt-10 flex flex-wrap gap-4">
							<Link
								to="/contact"
								className="inline-flex items-center justify-center rounded border-2 border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_24px_rgba(250,204,21,0.45)] transition hover:bg-yellow-300"
							>
								Contact us now
							</Link>
							<Link
								to="/services"
								className="inline-flex items-center justify-center rounded border-2 border-red-500 bg-red-600/20 px-6 py-3 text-sm font-black uppercase tracking-wide text-red-100 backdrop-blur-sm transition hover:bg-red-600/40"
							>
								See the packages
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-6 lg:grid-cols-3">
					<div className="rounded-xl border-2 border-red-900/80 bg-gradient-to-b from-zinc-900 to-black p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
						<h2 className="font-display text-2xl tracking-wide text-[var(--color-accent)]">
							We find them
						</h2>
						<p className="mt-3 text-sm font-medium leading-relaxed text-zinc-400">
							They moved. They blocked your number. They pretend they never heard
							of you. We do not care. Your money is not a suggestion—it is a
							debt, and we treat it like one.
						</p>
					</div>
					<div className="rounded-xl border-2 border-red-900/80 bg-gradient-to-b from-zinc-900 to-black p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
						<h2 className="font-display text-2xl tracking-wide text-red-500">
							We pressure them
						</h2>
						<p className="mt-3 text-sm font-medium leading-relaxed text-zinc-400">
							Calls, visits, escalation—whatever tier you purchase. The message
							is always the same:{" "}
							<strong className="text-zinc-200">pay what you owe</strong> or
							keep looking over your shoulder.
						</p>
					</div>
					<div className="rounded-xl border-2 border-red-900/80 bg-gradient-to-b from-zinc-900 to-black p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
						<h2 className="font-display text-2xl tracking-wide text-white">
							We document everything
						</h2>
						<p className="mt-3 text-sm font-medium leading-relaxed text-zinc-400">
							So when they cry foul, you have timestamps. When they pay, you have
							proof. When they do not, you have a paper trail that says you gave
							them every chance.
						</p>
					</div>
				</div>
			</section>

			<section className="border-y-2 border-red-950 bg-zinc-900/50">
				<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-8">
					<div className="max-w-xl">
						<h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
							This is not a game
						</h2>
						<p className="mt-4 text-sm font-medium leading-relaxed text-zinc-400">
							We are not here to hold hands. We are here to recover funds. If
							your debtor thinks your invoice is optional, we will disabuse them
							of that notion—firmly, repeatedly, and until the balance clears or
							they regret ever crossing you.
						</p>
						<Link
							to="/compliance"
							className="mt-6 inline-flex text-sm font-bold uppercase tracking-wide text-[var(--color-accent)] hover:text-yellow-300"
						>
							Read the rules of engagement →
						</Link>
					</div>
					<ul className="mt-8 grid flex-1 gap-3 text-sm font-medium text-zinc-300 lg:mt-0">
						{[
							"No more “I will pay next week.” Next week already happened.",
							"If they hide, we escalate. If they run, we follow the trail you paid for.",
							"You stay clean. We stay relentless. They stay nervous.",
						].map((item) => (
							<li
								key={item}
								className="flex gap-3 rounded-lg border border-red-950/80 bg-black/60 px-4 py-3"
							>
								<span
									className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626]"
									aria-hidden
								/>
								{item}
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="rounded-xl border-2 border-red-600 bg-gradient-to-br from-red-950/40 to-black p-8 sm:p-10">
					<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="font-display text-2xl tracking-wide text-white sm:text-3xl">
								Ready to get paid?
							</h2>
							<p className="mt-2 text-sm font-medium text-zinc-400">
								Tell us who owes you and how hard you want us to squeeze. We
								respond within one business day—faster if the situation is
								urgent.
							</p>
						</div>
						<Link
							to="/contact"
							className="inline-flex shrink-0 items-center justify-center rounded-md border-2 border-white bg-white px-8 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-zinc-200"
						>
							Open a case
						</Link>
					</div>
					<p className="mt-6 border-t border-red-900/60 pt-6 font-mono text-xs text-zinc-600">
						System: {loaderData.envLabel}
					</p>
				</div>
			</section>
		</>
	);
}
