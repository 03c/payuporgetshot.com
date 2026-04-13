import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Contact | National Credit Recovery" },
		{
			name: "description",
			content:
				"Contact National Credit Recovery for portfolio consultations and client services.",
		},
	];
}

export default function Contact(_: Route.ComponentProps) {
	return (
		<div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
			<div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
				<div>
					<p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
						Contact
					</p>
					<h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
						Client services
					</h1>
					<p className="mt-4 text-base leading-relaxed text-slate-600">
						Use this form to request information about our programs. For a
						demonstration site, submissions are not stored or transmitted to
						any backend.
					</p>
					<dl className="mt-10 space-y-4 text-sm">
						<div>
							<dt className="font-semibold text-slate-900">Phone</dt>
							<dd className="mt-1 text-slate-600">(800) 555-0198</dd>
						</div>
						<div>
							<dt className="font-semibold text-slate-900">Correspondence</dt>
							<dd className="mt-1 text-slate-600">
								1200 Commerce Plaza
								<br />
								Suite 400
								<br />
								Wilmington, DE 19801
							</dd>
						</div>
					</dl>
				</div>
				<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<form
						className="space-y-5"
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-slate-800"
							>
								Full name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/30"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-slate-800"
							>
								Work email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/30"
							/>
						</div>
						<div>
							<label
								htmlFor="company"
								className="block text-sm font-medium text-slate-800"
							>
								Organization
							</label>
							<input
								id="company"
								name="company"
								type="text"
								autoComplete="organization"
								className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/30"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-slate-800"
							>
								How can we help?
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								className="mt-1.5 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/30"
							/>
						</div>
						<button
							type="submit"
							className="w-full rounded-md bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto sm:px-8"
						>
							Submit inquiry
						</button>
						<p className="text-xs text-slate-500">
							By submitting, you acknowledge this is a demo form with no data
							processing.
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}
