import { Link, NavLink, Outlet } from "react-router";

import type { Route } from "./+types/layout";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
	[
		"text-sm font-bold uppercase tracking-wide transition-colors",
		isActive
			? "text-[var(--color-brand)]"
			: "text-zinc-400 hover:text-[var(--color-accent)]",
	].join(" ");

export default function SiteLayout(_: Route.ComponentProps) {
	return (
		<div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-3 focus:py-2 focus:text-white focus:ring-2 focus:ring-red-600"
			>
				Skip to main content
			</a>
			<header className="border-b-4 border-red-600 bg-gradient-to-r from-black via-zinc-950 to-red-950/40 shadow-[0_0_40px_rgba(220,38,38,0.25)]">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
					<div className="flex items-center gap-3">
						<div
							className="flex h-12 w-12 shrink-0 items-center justify-center rounded border-2 border-[var(--color-accent)] bg-black font-display text-xl font-normal leading-none tracking-tight text-[var(--color-accent)] shadow-[0_0_20px_rgba(250,204,21,0.35)]"
							aria-hidden
						>
							PUG
						</div>
						<div>
							<p className="font-display text-2xl tracking-[0.02em] text-white [text-shadow:2px_2px_0_#7f1d1d] sm:text-3xl">
								Pay Up or Get Shot
							</p>
							<p className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-400">
								UK debt recovery · No excuses
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
							Packages
						</NavLink>
						<NavLink to="/compliance" className={navLinkClass}>
							Rules
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
			<footer className="border-t-2 border-red-900/80 bg-black">
				<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						<div className="lg:col-span-2">
							<p className="font-display text-xl tracking-wide text-white">
								Pay Up or Get Shot
							</p>
							<p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
								We collect what you are owed from deadbeats across England,
								Scotland, Wales, and Northern Ireland. If they think a UK
								invoice is optional, they are wrong.{" "}
								<span className="font-semibold text-red-400">
									Sleep with one eye open is not a metaphor here.
								</span>
							</p>
						</div>
						<div>
							<p className="text-xs font-bold uppercase tracking-widest text-red-500">
								Quick links
							</p>
							<ul className="mt-3 space-y-2 text-sm">
								<li>
									<Link
										to="/services"
										className="text-zinc-300 hover:text-[var(--color-accent)]"
									>
										Collection packages
									</Link>
								</li>
								<li>
									<Link
										to="/compliance"
										className="text-zinc-300 hover:text-[var(--color-accent)]"
									>
										What we will not do (officially)
									</Link>
								</li>
								<li>
									<Link
										to="/contact"
										className="text-zinc-300 hover:text-[var(--color-accent)]"
									>
										Hire us
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<p className="text-xs font-bold uppercase tracking-widest text-red-500">
								London office
							</p>
							<p className="mt-3 text-sm text-zinc-400">
								The Leather Market
								<br />
								11–13 Weston Street
								<br />
								London SE1 3ER
								<br />
								<span className="text-zinc-500">United Kingdom</span>
							</p>
							<p className="mt-4 text-xs text-zinc-500">
								Mon–Fri: 8:00–20:00 · Sat: 9:00–14:00{" "}
								<span className="text-red-400/90">(GMT / BST)</span>
							</p>
						</div>
					</div>
					<div className="mt-10 flex flex-col gap-2 border-t border-red-950 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
						<p>
							© {new Date().getFullYear()} Pay Up or Get Shot. All rights
							reserved.
						</p>
						<p className="text-red-600/90">
							We will send the boys round—tube, train, or Transit. Pay on time.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
