import {env} from "$env/dynamic/private";

export async function GET() {
    if (env.ENVIRONMENT === "LOCAL" || env.ENVIRONMENT === "REMOTE") {
        return new Response("TRUE", { status: 200 });
    } else {
        return new Response("FALSE", { status: 500 });
    }
}