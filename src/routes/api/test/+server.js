import { json } from '@sveltejs/kit'

export async function POST({ request}) {
    const test_data = [
        {name: 'test1', value: 1},
        {name: 'test2', value: 2},
        {name: 'test3', value: 3},
            ]
    return json(test_data)
}