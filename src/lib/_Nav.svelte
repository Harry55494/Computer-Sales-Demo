<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
    import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
</script>

<Navbar>
    <NavBrand href="/">
        <img src="/logo.png" class="me-3 h-6 sm:h-9 " alt="Nordic Computers" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Nordic Computers</span>
    </NavBrand>
    <div class="flex md:order-2">
        <Button size="sm">Get started</Button>
        <NavHamburger />
    </div>
    <NavUl class="order-1" {activeUrl}>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/docs/components/navbar">Navbar</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/admin">Admin</NavLi>
    </NavUl>
</Navbar>