<script lang="ts">
  export let title: string;
  export let date: string;
  export let techstack: string = '';
  export let description: string;
  export let codeLink: string = '';
  export let gameLink: string = '';
  export let linkedIn: string = '';
</script>

<div class="project-card">
    <div class="project-introduction">
        <h2>{title}</h2>
        <p class="project-date">{date}</p>
    </div>

    {#if techstack}
        <p class="tech-stack">Tech Stack: {techstack}</p>
    {/if}

      <p class="project-description">{description}</p>
    {#if codeLink}
        <a class="links" id="code-link" href={codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
    {/if}
    {#if gameLink}
        <a class="links" id="game-link" href={gameLink} target="_blank" rel="noopener noreferrer">Play Game</a>
    {/if}
    {#if linkedIn}
        <a class="links" id="linkedin-link" href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn Post</a>
    {/if}
</div>

<style>
    .project-card {
        width: 90%;
        max-width: 50rem;
        padding: 1rem;    
        border-radius: .8rem;
        padding: 2rem;
        background-color: #fafafa;
        box-sizing: border-box;
    }

    .project-introduction{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 0;
    }

    h2 {
        font-size: 1.6rem;
        color: #bb82d8;
        text-align: left;
    }

    .project-date {
        font-size: 0.8rem;
        color: #6c6b6d;
        text-align: right;
    }

    .tech-stack {
        font-size: 0.9rem;
        color: #6c6b6d;    
    }

    .project-description {
        color: #3f3c41;
        padding: 1.5rem 0;
    }

    .links {
        display: inline-block;
        color: #bb82d8;
        cursor: pointer;
    }

    .links:hover{
        color: #9114d0;
    }
</style>