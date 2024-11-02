import { json } from '@sveltejs/kit'
import { WORKER_AUTH_KEY } from '$env/static/private'
import {getContext} from "svelte";
const DB_BASE_URL = "https://nordic-computers-db.harrisons-account.workers.dev/"

console.log( WORKER_AUTH_KEY )


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
    const request = await fetch(DB_BASE_URL + "api/test?key=" + WORKER_AUTH_KEY)
    const data = await request.json()
    console.log(data)

    return json(data)
}

/**
 * @param {{ env: { NORDIC_DB: any; }; }} context
 */
export async function _post2(context){
    console.log("Called")
    const DB = context.env.NORDIC_DB;
    console.log(DB)
    const data = await DB.prepare('SELECT * FROM testtable').all();
    console.log(data)
    return json(data)
}