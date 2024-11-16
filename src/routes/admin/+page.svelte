
<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Banner } from 'flowbite-svelte';
    import { Label, Input, Button } from 'flowbite-svelte';
    import {CheckCircleSolid, CloseCircleSolid} from "flowbite-svelte-icons";

    import {onMount} from "svelte";

    async function checkforapiaccess(){
        return fetch('api/test', {
            method: 'GET',
        })
    }

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

    let serverAvailable = true;

    onMount(() => {
        fetchdata();
        checkforapiaccess().then((response) => {
            console.log(response)
            if(response.status === 200){
                console.log('API Access is working');
                serverAvailable = true;
            } else {
                console.log('API Access is not working');
                serverAvailable = false;
            }
        });

        document.getElementById('submitbutton').addEventListener('click', submitForm);

    });

    const tableHeaders = ["Name", "Age"]

</script>

{#if serverAvailable}
    <Banner id="default-banner" position="sticky" dismissable={true}>
        <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <CheckCircleSolid class="w-3 h-3 text-green-500 dark:text-green-400 mr-2"/>
            <span>
        API Available
    </span>
        </p>
    </Banner>
{:else}
    <Banner id="default-banner" position="sticky" dismissable={false}>
        <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <CloseCircleSolid class="w-3 h-3 text-red-500 dark:text-red-400 mr-2"/>
            <span>
    API Unavailable - Changes will not be relayed to server
</span>
        </p>
    </Banner>
{/if}

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

