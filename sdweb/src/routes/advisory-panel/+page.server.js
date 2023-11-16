import { error } from '@sveltejs/kit';
import { apiKey, apiUrl } from '../stores';
import { get } from 'svelte/store';

const bgUrl = get(apiUrl);
const key = get(apiKey);
 
/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	const page = Number(url.searchParams.get('page')) || 1;
    async function getPost(pg) {
		const res = await fetch(bgUrl + key + `&filter=tag:sd-advisor&order=published_at%20asc&page=${pg}`);
		const resJson = await res.json();
		const posts = resJson;

		if (res.ok) {
			return posts;
		} else {
			throw error(404, 'Not found');
            // return res;
		}
	}
    return getPost(page);
}