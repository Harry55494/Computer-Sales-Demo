import { json } from '@sveltejs/kit'
import { env } from '$env/dynamic/private'
const DB_BASE_URL = "https://db-access-worker.harrisons-account.workers.dev/"

const decoder = new TextDecoder("utf-8");

// @ts-ignore
const readStream = async (reader) => {
    let result = '';
    let done, value;
    while ({ done, value } = await reader.read(), !done) {
        result += decoder.decode(value, { stream: true });
    }
    result += decoder.decode(); // Final decode to flush any remaining bytes
    return result;
};


export async function POST({ request }) {
    console.log('Request received:')
    console.log(request)
    // @ts-ignore
    const reader = request.body.getReader();
    const body = await readStream(reader);

    if (env.ENVIRONMENT === "LOCAL") {
        // Local, so accessing via WORKER
        console.log("Accessing via WORKER")
        const request = await fetch(DB_BASE_URL + "api/test",
            {
                method: "POST",
                body: body,
                // @ts-ignore
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": env.WORKER_AUTH_KEY
                },
            })
        const data = await request.json()
        console.log(data)
        return json(data)

    } else if (env.ENVIRONMENT === "REMOTE") {
        // Remote, so accessing directly via binding
        console.log("Accessing via BINDING")

        const bodyjson = JSON.parse(body);
        console.log(bodyjson)
        var stmt;

        for (const obj of bodyjson) {
            if (obj.query) {
                stmt = obj.query.toString(); // Access the 'query' value if it exists
                break; // Exit the loop once the value is found
            }
        }

        if (!stmt) {
            return json({error: "No query provided"})
        }

        console.log(stmt)

        const DB = env.NORDIC_DB
        console.log(DB)
        // @ts-ignore
        const {results} = await DB.prepare(stmt).all()
        console.log(results)
        return json(results)
    } else {
        return json({error: "Invalid environment variable configured"})
    }

}
