<script lang="ts">
  import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div class="wrapper">
  <h1>Projects</h1>

  <ProjectCard
    title="Personal Website"
    date="August 2025"
    techstack="Svelte, TS"
    description="Yup, it's this website! Serve as a portfolio and for me to try out different frameworks and tools."
    codeLink="https://github.com/ywang0625/personal-website"
  />

  <ProjectCard
    title="Video Game Design Final Project"
    date="April 2025"
    techstack="Unity(C#)"
    description="A real-time strategy game inspired by Age of Empires for CSC 4263"
    codeLink="https://github.com/Hayden-Dup/Starcats"
    gameLink="https://ywang0625.itch.io/starcats"
  />

  <ProjectCard
    title="WiCS Technical Workshop"
    date="March 2025"
    techstack="Next.js, Firebase"
    description="Simple front-end/back-end workshop for hackathon"
    codeLink="https://github.com/ywang0625/React_Workshop"
  />

  <ProjectCard
    title="SASE LSU GeauxHack"
    date="October 2024"
    techstack="Expo, Firebase"
    description="A froggy gatcha app created by 5-people team 🐸 Beginner third place"
    codeLink="https://github.com/Hayden-Dup/RandomObscu"
  />

  <ProjectCard
    title="Undergraduate Research"
    date="May 2024 - August 2024"
    techstack="Gem5 Simulations, SPEC2006, SPEC2017"
    description="Systems memory research"
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