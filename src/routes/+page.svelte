<script lang="ts">
  import { onMount } from 'svelte';
  import profilePic from '$lib/assets/YM_Profile.webp';
  import gitHub from '$lib/assets/1_github.png';
  import linkedIn from '$lib/assets/2_linkedin.png';
  import itch from '$lib/assets/3_game.png'; 
  import { gsap } from 'gsap';
  import {base} from '$app/paths';

  onMount(() => {
    gsap.from(".left-section", {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });
</script>

<div class="wrapper">
  <div class="intro-section">
    <div class="left-section" role="presentation" aria-label="Introduction text">
      <h1>Yueh-Ming Wang</h1>
      <p>
        A recently graduated <em>Software Engineer</em> from Louisiana State University.<br>
        I like building 2D games on Unity and exploring more in the tech field. 
        Feel free to connect and contact me!
      </p>
      <a href={`${base}/Yueh-Ming Wang - Resume.pdf`} download="Yueh-Ming Wang - Resume.pdf" class="resume-button">
        Download Resume
      </a>
    </div>
    <div class="right-section">
      <div class="picture-container" id="picture-frame">
        <img src={profilePic} alt="YM" id="profile-picture" />
      </div>
      <div class="icon-container">
        <a href="https://github.com/ywang0625" target="_blank" rel="noopener noreferrer">
          <div class="icon-circle"><img src={gitHub} alt="GitHub" class="icon" /></div> 
        </a>
        <a href="https://www.linkedin.com/in/yuehmingwang" target="_blank" rel="noopener noreferrer">
          <div class="icon-circle"><img src={linkedIn} alt="LinkedIn" class="icon" /></div> 
        </a>
        <a href="https://ywang0625.itch.io/" target="_blank" rel="noopener noreferrer">
          <div class="icon-circle"><img src={itch} alt="itch.io" class="icon" /></div> 
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
    max-width: 80%;
    margin: 0 auto;
    /* box-sizing: border-box; */
  }

  h1 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    display: inline-block;
    border-bottom: 2px solid #c99fec;
  }

  p {
    font-size: clamp(0.5rem, 2vw, 1.2rem);
    line-height: clamp(0.9rem, 2vw, 1.5rem);
    padding: 0.5rem 0;
  }

  .intro-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    gap: 2rem;
  }

  .left-section {
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: clamp(0.5rem, 1vw, 0.8rem) 
  }

  .right-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: right;
  }  

  .resume-button {
    margin: auto auto 0 auto;
    max-width: 50%;
    padding: clamp(0.3rem, 1vw, 1.2rem) clamp(1.5rem, 3vw, 3rem);


    background-color: #c99fec;
    color: white;
    text-decoration: none;
    font-size: clamp(0.7rem, 2vw, 1.2rem);
    font-weight: bold;
 

    border-radius: 8px;
    transition: transform 0.2s ease, background-color 0.3s ease;
    cursor: pointer;
  }

  .resume-button:hover {
    background-color: #b87fd6;
    transform: scale(1.05);
  }

  #picture-frame {
    padding: 6px;
    border: 3px solid #c99fec;
    border-radius: 12px;
    display: inline-block;
    box-shadow: 0 0 8px #c99fec88;
    transition: transform 0.3s ease;
  }

  #picture-frame:hover {
    transform: scale(0.9);
  }

  #profile-picture {
    width: 250px;
    height: 250px;
    border-radius: 8px;
    display: block;
  }

  .icon-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .icon-circle {
    background-color: white;
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center; 
    box-shadow: 0 0 5px #ddd;
    transition: box-shadow 0.3s ease;
  }

  .icon-circle:hover {
    box-shadow: 0 0 12px #f9edff;
  }

  .icon {
    width: 80%;
    height: 80%;
    object-fit: contain;
    display: block;
  }
</style>
