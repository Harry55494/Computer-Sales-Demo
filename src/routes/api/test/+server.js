import { json } from '@sveltejs/kit'
import { WORKER_AUTH_KEY} from "$env/static/private";

export async function POST({ request }) {
    const body = JSON.parse(await request.text())
    console.log(body)
    const test_data = [
        {name: 'test1', value: 1},
        {name: 'test2', value: 2},
        {name: 'test3', value: 3},
            ]
    return json(test_data)
}

export async function GET() {
    const test_data = [
        {name: 'test1', value: 1},
        {name: 'test2', value: 2},
        {name: 'test3', value: 3},
        {name: 'test4', value: WORKER_AUTH_KEY}
            ]
    console.log(WORKER_AUTH_KEY);
    return json(test_data)
}