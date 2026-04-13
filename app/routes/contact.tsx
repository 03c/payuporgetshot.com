import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Contact | Pay Up or Get Shot" },
		{
			name: "description",
			content:
				"Contact Pay Up or Get Shot in London to open a UK debt recovery case and select your collection package.",
		},
	];
}

export default function Contact(_: Route.ComponentProps) {
	return (
		<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
			<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
				<div>
					<p className="text-xs font-black uppercase tracking-[0.3em] text-red-500">
						Contact
					</p>
					<h1 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
						Tell us who owes you
					</h1>
					<p className="mt-4 text-base font-medium leading-relaxed text-zinc-400">
						Use this form to brief us on the debt, the debtor, and how aggressive
						you want us to be.{" "}
						<strong className="text-zinc-200">
							The more detail you give—the Companies House number, the last
							known postcode, the invoice in pounds—the faster we move.
						</strong>{" "}
						If they have been dodging you, assume they will try to dodge us—we
						plan for that.
					</p>
					<dl className="mt-10 space-y-4 text-sm">
						<div>
							<dt className="font-bold uppercase tracking-wide text-red-500">
								Phone (UK)
							</dt>
							<dd className="mt-1 font-medium text-zinc-300">
								<a
									href="tel:+442071234567"
									className="hover:text-[var(--color-accent)]"
								>
									+44 20 7123 4567
								</a>
							</dd>
						</div>
						<div>
							<dt className="font-bold uppercase tracking-wide text-red-500">
								Email
							</dt>
							<dd className="mt-1 font-medium text-zinc-300">
								<a
									href="mailto:collections@payuporgetshot.co.uk"
									className="hover:text-[var(--color-accent)]"
								>
									collections@payuporgetshot.co.uk
								</a>
							</dd>
						</div>
						<div>
							<dt className="font-bold uppercase tracking-wide text-red-500">
								Registered office
							</dt>
							<dd className="mt-1 font-medium text-zinc-300">
								Pay Up or Get Shot Ltd
								<br />
								The Leather Market
								<br />
								11–13 Weston Street
								<br />
								London SE1 3ER
								<br />
								United Kingdom
							</dd>
						</div>
					</dl>
					<p className="mt-8 text-sm font-medium text-red-400/90">
						Do not contact us for sympathy for the debtor. We do not have any.
					</p>
				</div>
				<div className="rounded-xl border-2 border-red-900/80 bg-zinc-900/80 p-6 shadow-[0_0_40px_rgba(220,38,38,0.12)] sm:p-8">
					<form
						className="space-y-5"
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-bold text-zinc-200"
							>
								Full name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								className="mt-1.5 w-full rounded-md border-2 border-zinc-700 bg-black px-3 py-2 text-sm text-white shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/40"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-bold text-zinc-200"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								className="mt-1.5 w-full rounded-md border-2 border-zinc-700 bg-black px-3 py-2 text-sm text-white shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/40"
							/>
						</div>
						<div>
							<label
								htmlFor="company"
								className="block text-sm font-bold text-zinc-200"
							>
								Organisation
							</label>
							<input
								id="company"
								name="company"
								type="text"
								autoComplete="organization"
								className="mt-1.5 w-full rounded-md border-2 border-zinc-700 bg-black px-3 py-2 text-sm text-white shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/40"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-bold text-zinc-200"
							>
								Debt details & desired package tier
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								placeholder="Amount in GBP, debtor name, Companies House number if Ltd, last known UK postcode, what you have tried so far…"
								className="mt-1.5 w-full rounded-md border-2 border-zinc-700 bg-black px-3 py-2 text-sm text-white placeholder:text-zinc-600 shadow-inner focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/40"
							/>
						</div>
						<button
							type="submit"
							className="w-full rounded-md border-2 border-red-600 bg-red-600 py-2.5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-red-500 sm:w-auto sm:px-8"
						>
							Submit case
						</button>
						<p className="text-xs text-zinc-500">
							Submission acknowledges you want recovery action and understand
							escalation is part of the service. UK law applies; we operate from
							England and Wales unless agreed otherwise.
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
