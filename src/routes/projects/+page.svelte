<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="wrapper">
  <h1>Projects</h1>

  <ProjectCard
    title="Personal Website"
    date="August 2025"
    techstack="Example"
    description="This website that you're currently at! "
    codeLink="https://github.com/ywang0625/website"
  />

  <ProjectCard
    title="Unity RTS Game"
    date="June 2025"
    description="A real-time strategy game inspired by Age of Empires. Built using Unity and C# with faction-based mechanics."
  />
</div>


<style>
    .wrapper{
        display:flex;
        flex-direction: column;
        align-items: center;
        padding: 4rem 0;
        gap: 2rem;
    }
</style>