// @ts-nocheck
import { error } from '@sveltejs/kit';
import { places } from '../data.js';

export function load({ params }) {
	const place = places.find((place) => place.slug === params.slug);

	if (!place) throw error(404);

	return {
		place
	};
}