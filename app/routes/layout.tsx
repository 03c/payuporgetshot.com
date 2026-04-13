import { Link, NavLink, Outlet } from "react-router";

import type { Route } from "./+types/layout";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
	[
		"text-sm font-medium transition-colors",
		isActive
			? "text-[var(--color-brand)]"
			: "text-slate-600 hover:text-slate-900",
	].join(" ");

export default function SiteLayout(_: Route.ComponentProps) {
	return (
		<div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow"
			>
				Skip to main content
			</a>
			<header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
					<div className="flex items-center gap-3">
						<div
							className="flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-slate-900 text-xs font-semibold tracking-tight text-white"
							aria-hidden
						>
							NCR
						</div>
						<div>
							<p className="font-serif text-lg font-semibold tracking-tight text-slate-900">
								National Credit Recovery
							</p>
							<p className="text-xs font-medium uppercase tracking-widest text-slate-500">
								Accounts receivable management
							</p>
						</div>
					</div>
					<nav
						className="flex flex-wrap items-center gap-x-6 gap-y-2"
						aria-label="Primary"
					>
						<NavLink to="/" className={navLinkClass} end>
							Home
						</NavLink>
						<NavLink to="/services" className={navLinkClass}>
							Services
						</NavLink>
						<NavLink to="/compliance" className={navLinkClass}>
							Compliance
						</NavLink>
						<NavLink to="/about" className={navLinkClass}>
							About
						</NavLink>
						<NavLink to="/contact" className={navLinkClass}>
							Contact
						</NavLink>
					</nav>
				</div>
			</header>
			<main id="main" className="flex-1">
				<Outlet />
			</main>
			<footer className="border-t border-slate-200 bg-white">
				<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						<div className="lg:col-span-2">
							<p className="font-serif text-base font-semibold text-slate-900">
								National Credit Recovery, LLC
							</p>
							<p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
								A professional receivables firm serving creditors and
								portfolio owners. This website is for demonstration
								purposes only and does not represent a real collection
								agency.
							</p>
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
								Quick links
							</p>
							<ul className="mt-3 space-y-2 text-sm">
								<li>
									<Link
										to="/services"
										className="text-slate-700 hover:text-slate-900"
									>
										Recovery programs
									</Link>
								</li>
								<li>
									<Link
										to="/compliance"
										className="text-slate-700 hover:text-slate-900"
									>
										Consumer rights
									</Link>
								</li>
								<li>
									<Link
										to="/contact"
										className="text-slate-700 hover:text-slate-900"
									>
										Contact us
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
								Hours
							</p>
							<p className="mt-3 text-sm text-slate-600">
								Mon–Thu: 8:00 a.m. – 8:00 p.m. ET
								<br />
								Fri: 8:00 a.m. – 6:00 p.m. ET
							</p>
						</div>
					</div>
					<div className="mt-10 flex flex-col gap-2 border-t border-slate-100 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
						<p>
							© {new Date().getFullYear()} National Credit Recovery. All
							rights reserved.
						</p>
						<p className="text-slate-400">
							Fictional brand · Not a licensed debt collector
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
