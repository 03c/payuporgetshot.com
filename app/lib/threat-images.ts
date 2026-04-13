/** Local assets in /public/threat — weapons & intimidation visuals. */

export type ThreatImage = {
	src: string;
	alt: string;
	caption: string;
};

export const threatGallery: ThreatImage[] = [
	{
		src: "/threat/handgun-range.jpg",
		alt: "Person aiming a handgun at an indoor shooting range",
		caption: "Straight shot. Same focus we bring to your unpaid invoice.",
	},
	{
		src: "/threat/rifle-range.jpg",
		alt: "Person firing a rifle at a shooting range",
		caption: "Long range. We will find them from Land’s End to John o’ Groats.",
	},
	{
		src: "/threat/pistol-spread.jpg",
		alt: "Handgun, magazines, and ammunition on a table",
		caption: "Loaded for bear. Your debtor is not a bear—they are softer.",
	},
	{
		src: "/threat/pistol-detail.jpg",
		alt: "Semi-automatic pistol with loose ammunition on dark fabric",
		caption: "Section 5 is your problem to sort. Their problem is us knocking.",
	},
];
