import { threatGallery } from "~/lib/threat-images";

export function ThreatGallery() {
	return (
		<section
			className="border-y-2 border-red-950 bg-black/40"
			aria-labelledby="threat-gallery-heading"
		>
			<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
				<h2
					id="threat-gallery-heading"
					className="font-display text-3xl tracking-wide text-white sm:text-4xl"
				>
					<span className="text-[var(--color-accent)]">Visual</span> deterrent
				</h2>
				<p className="mt-2 max-w-2xl text-sm font-medium text-zinc-400">
					One image says it. No range-day holiday snaps—just the energy your
					debtor earns when they treat a UK invoice like chip paper.
				</p>
				<ul className="mt-8 flex justify-center">
					{threatGallery.map((img) => (
						<li
							key={img.src}
							className="group w-full max-w-2xl overflow-hidden rounded-lg border-2 border-red-900/70 bg-zinc-950 shadow-[0_12px_40px_rgba(0,0,0,0.65)]"
						>
							<div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
								<img
									src={img.src}
									alt={img.alt}
									loading="lazy"
									decoding="async"
									className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02] group-hover:brightness-110"
								/>
								<div
									className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
									aria-hidden
								/>
							</div>
							<p className="border-t border-red-950/80 p-4 text-sm font-semibold leading-snug text-zinc-300">
								{img.caption}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
