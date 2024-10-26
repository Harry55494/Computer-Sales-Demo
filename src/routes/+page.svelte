<script>
    import { Toast } from 'flowbite-svelte';
    import { InfoCircleOutline } from 'flowbite-svelte-icons';
    import cookies_accepted_value from "./Store.js";

</script>

<br/>
<br/>
<br/>
<h1 class="flex justify-center items-center text-5xl font-bold text-white dark:text-gray-900">Nordic Computers</h1>
<br/>

<h3 class="flex justify-center items-center text-3xl font-semibold text-white dark:text-gray-900">Not just another komputer site </h3>
<br/>
<br/>
<br/>
<img src="/ExampleiMac.webp" class="mx-auto px-4" alt="Example iMac" />
<br/>
<br/>
<br/>
<br/>

<Toast position="bottom-right" bind:toastStatus={$cookies_accepted_value} on:close={() => cookies_accepted_value.set(false)}>
    <InfoCircleOutline slot="icon" class="w-6 h-6 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200" />
    We use Cookies to make this website work. By using this site, you are agreeing to our <a href="/privacy" class="underline">Privacy Policy</a>.
</Toast>