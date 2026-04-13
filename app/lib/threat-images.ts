/** Local assets in /public/threat — weapons & intimidation visuals. */

export type ThreatImage = {
	src: string;
	alt: string;
	caption: string;
};

export const threatGallery: ThreatImage[] = [
	{
		src: "/threat/pistol-detail.jpg",
		alt: "Semi-automatic pistol with loose ammunition on dark fabric",
		caption:
			"This is the mood. Your debtor gets the picture—or they will when we knock.",
	},
];
