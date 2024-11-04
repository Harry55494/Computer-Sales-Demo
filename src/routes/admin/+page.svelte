
<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { Label, Input, Button } from 'flowbite-svelte';

    import {onMount} from "svelte";

    async function fetchdata(){
        const res2 = await fetch('api/test', {
                method: 'POST',
                body: '[{"query": "Select * from testtable"}]',
        });
        const data2 = await res2.json();
        console.log(data2);
    }

    async function submitForm(){
        const nameinput = document.getElementById('name-input').value;
        const ageinput = document.getElementById('age-input').value;
        console.log(nameinput, ageinput);
        const response = await fetch('api/test', {
            method: 'POST',
            body: '[{"query": "INSERT INTO testtable (Name, age) VALUES (\'' + nameinput + '\', ' + ageinput + ');"}]',
        })
        const data = await response.json();
        console.log(data);
    }

    onMount(() => {
        fetchdata();
        document.getElementById('submitbutton').addEventListener('click', submitForm);


    });

    const tableHeaders = ["Name", "Age"]

</script>

<Table striped={true}>
    <TableHead>
        {#each tableHeaders as header}
            <TableHeadCell>{header}</TableHeadCell>
        {/each}
        <TableHeadCell>
            <span class="sr-only">Edit</span>
        </TableHeadCell>
    </TableHead>

</Table>

<div class="mb-6">
    <Label for="name-input" class="block mb-2">Default input</Label>
    <Input id="name-input" placeholder="Default input" />
</div>
<div class="mb-6">
    <Label for="age-input" class="block mb-2">Small input</Label>
    <Input id="age-input" value="number" placeholder="Small input" />
</div>
<Button id="submitbutton">Submit</Button>

