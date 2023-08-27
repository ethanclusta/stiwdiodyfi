import { error } from '@sveltejs/kit';
import { apiKey, apiUrl } from '../stores';
import { get } from 'svelte/store';

const url = get(apiUrl);
const key = get(apiKey);
 
/** @type {import('./$types').PageServerLoad} */
export function load() {
    async function getPost() {
		const res = await fetch(url + key + '&filter=tag:sd-advisor&limit=all&order=published_at%20asc');
		const resJson = await res.json();
		const posts = resJson;

		if (res.ok) {
			return posts;
		} else {
			throw error(404, 'Not found');
            // return res;
		}
	}
    return getPost();
}