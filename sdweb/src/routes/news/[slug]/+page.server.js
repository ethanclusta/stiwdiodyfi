import { error } from '@sveltejs/kit';
import { apiKey, apiUrl } from '../../stores';
import { get } from 'svelte/store';

const url = get(apiUrl);
const key = get(apiKey);
 
/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
  if (params.slug) {
    const name = params.slug;
    async function getPost() {
		const res = await fetch(url + name + '/' + key);
		const resJson = await res.json();
		const article = resJson.posts[0];

		if (res.ok) {
			return article;
		} else {
			// throw error(404, 'Not found');
            return resJson;
		}
	}
    return getPost();
  }
  throw error(404, 'Not found');
}