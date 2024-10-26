import { writable } from 'svelte/store';

const cookies_store = typeof window !== 'undefined' && localStorage.getItem('cookies_accepted') === 'true';
let cookies_accepted_value = writable(cookies_store);

if (typeof window !== 'undefined') {
    cookies_accepted_value.subscribe(value => {
        localStorage.setItem('cookies_accepted', value.toString());
        console.log('Cookies accepted: ', value);
    });
}

export default cookies_accepted_value;
