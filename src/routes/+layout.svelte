<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import "../app.css";
</script>

<nav>
  <a href="/" class:active={$page.url.pathname === '/'}>Home</a>
  <a href="/projects" class:active={$page.url.pathname === '/projects'}>Projects</a>
  <a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
</nav>

<slot />

<style>
    nav {
        background-color: rgb(255, 255, 255);
        text-align: center;
        justify-content: center;

        padding: 1.5rem;
        display: flex;
        gap: 2rem;
    }

    a {
        color: #c99fec;
        font-size: 1.1rem;    
        text-decoration: none;
    }

    a.active {
        font-weight: bold;
        color: #bb82d8;
    }

    a:hover{
        color: #933be1;
    }
</style>