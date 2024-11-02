
<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import {onMount} from "svelte";

    async function fetchdata() {
        const res = await fetch('api/test',{
                method: 'POST',
                body: JSON.stringify({'test entry': 'test value'}),
                headers: {
                    'Content-Type': 'application/json',
                },
        });
        const data = await res.json();
        console.log(data);

        const res2 = await fetch('api/test',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
        });
        const data2 = await res2.json();
        console.log(data2);

        const res3 = await fetch('api/test',{
                method: '_post2',
                headers: {
                    'Content-Type': 'application/json',
                },
        });
        const data3 = await res3.json();
        console.log("Res3" + data3);
    }

    onMount(() => {
        fetchdata();
    });

</script>

<Table striped={true}>
    <TableHead>
        <TableHeadCell>Product name</TableHeadCell>
        <TableHeadCell>Color</TableHeadCell>
        <TableHeadCell>Category</TableHeadCell>
        <TableHeadCell>Price</TableHeadCell>
        <TableHeadCell>
            <span class="sr-only">Edit</span>
        </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
        <TableBodyRow>
            <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
            <TableBodyCell>Sliver</TableBodyCell>
            <TableBodyCell>Laptop</TableBodyCell>
            <TableBodyCell>$2999</TableBodyCell>
            <TableBodyCell>
                <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
            <TableBodyCell>White</TableBodyCell>
            <TableBodyCell>Laptop PC</TableBodyCell>
            <TableBodyCell>$1999</TableBodyCell>
            <TableBodyCell>
                <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Magic Mouse 2</TableBodyCell>
            <TableBodyCell>Black</TableBodyCell>
            <TableBodyCell>Accessories</TableBodyCell>
            <TableBodyCell>$99</TableBodyCell>
            <TableBodyCell>
                <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Google Pixel Phone</TableBodyCell>
            <TableBodyCell>Gray</TableBodyCell>
            <TableBodyCell>Phone</TableBodyCell>
            <TableBodyCell>$799</TableBodyCell>
            <TableBodyCell>
                <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Apple Watch 5</TableBodyCell>
            <TableBodyCell>Red</TableBodyCell>
            <TableBodyCell>Wearables</TableBodyCell>
            <TableBodyCell>$999</TableBodyCell>
            <TableBodyCell>
                <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
            </TableBodyCell>
        </TableBodyRow>
    </TableBody>
</Table>