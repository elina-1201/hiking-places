import { places } from "./data";

export function load() {
	return {
		summaries: places.map((place) => ({
			slug: place.slug,
			title: place.title
		}))
	};
}