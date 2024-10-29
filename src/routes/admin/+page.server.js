import { redirect, fail } from '@sveltejs/kit';
import { WORKER_AUTH_KEY } from '$env/static/private';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();


        if (data.get('passphrase') === WORKER_AUTH_KEY) {
            console.log('Auth successful');
            redirect(303, '/success');
        }

        return fail(403, {
            incorrect: true
        });
    }
};

console.log('This is a server route');
console.log(WORKER_AUTH_KEY)