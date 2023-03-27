import { error } from '@sveltejs/kit';
import { apiKey, apiUrl } from '../stores';
import { get } from 'svelte/store';

const url = get(apiUrl);
const key = get(apiKey);
 
/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
  if (params.tag) {
    const name = params.tag;
    async function getPost() {
		const res = await fetch(url + key + '&filter=tag:' + name + '&include=tags');
		const resJson = await res.json();
		const posts = resJson;

		if (res.ok) {
			return posts;
		} else {
			// throw error(404, 'Not found');
            return resJson;
		}
	}
    return getPost();
  }
  throw error(404, 'Not found');
}