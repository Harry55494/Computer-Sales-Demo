import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
const DB_BASE_URL = "https://nordic-computers-db.harrisons-account.workers.dev/"

console.log(env.WORKER_AUTH_KEY)

export async function POST() {
    const request = await fetch(DB_BASE_URL + "api/test?key=" + env.WORKER_AUTH_KEY)
    const data = await request.json()
    console.log(data)
    return json(data)
}

export async function GET() {
    const DB = env.NORDIC_DB
    console.log(DB)
    // @ts-ignore
    const stmt = DB.prepare("SELECT * FROM testtable")
    const {results} = await stmt.all()
    console.log(results)
    return json(results)
}