<script lang="ts">
	import '../app.css';
    import Navbar from "$lib/_Nav.svelte";
    import Footer from "$lib/Footer.svelte";
	let { children } = $props();
</script>


<Navbar />

{@render children()}

<Footer />