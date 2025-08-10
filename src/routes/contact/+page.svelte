<script lang="ts">
    import { tick } from 'svelte';
    import gsap from 'gsap';

    let showModal = false;
    let modalRef: HTMLDivElement;
    let closeBtnRef: HTMLButtonElement;
    let formEl: HTMLFormElement;

    async function handleSubmit(e: Event) {
        e.preventDefault();

        const formData = new FormData(formEl);

        // Send form data to the SvelteKit action endpoint
        const res = await fetch('/contact', {
            method: 'POST',
            body: formData
        });

        if (res.ok) {
            showModal = true;
            await tick();

            gsap.from(modalRef, { scale: 0.8, opacity: 0, duration: 0.4, ease: "back.out(1.7)" });
            formEl.reset();
        } else {
            alert('Failed to send message. Please try again.');
        }
    }

    function clickClose(event: MouseEvent) {
        gsap.to(event.currentTarget, { 
            scale: 0.95, 
            duration: 0.05, 
            yoyo: true, 
            repeat: 1 
        });
        closeModal();
    }

    function closeModal() {
        showModal = false;
    }
</script>

<div class="wrapper">
    <h1>Contact Form</h1>

    <form bind:this={formEl} on:submit={handleSubmit}>
        <input name="first_name" placeholder="First Name" class="input" required />
        <input name="last_name" placeholder="Last Name" class="input" required />
        <input name="email" type="email" placeholder="Your Email" class="input" required />
        <textarea name="message" placeholder="Type your message here..." class="input" required></textarea>
        <button type="submit">Send</button>
    </form>

    {#if showModal}
        <div class="overlay">
            <div class="modal" bind:this={modalRef}>
                <div class="modal-top-bar">Message Sent!</div>
                <div class="modal-content">
                    <h2>𖥔Message Sent!𖥔</h2>
                    <button bind:this={closeBtnRef} on:click={clickClose}>Close</button>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4rem 0;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
		width: 60%;
		max-width: 30rem;
	}

	button {
		color: white;
		background-color: #c99fec;
		border-radius: .8rem;
		justify-content: center;
		text-align: center;
		align-items: center;
		padding: 1rem;
	}

	button:hover{
		cursor: pointer;
		background-color: #933be1;
	}

	textarea.input{
		padding: 10px;
	}

	::placeholder{
		color: rgb(34, 33, 34);
		font-size: .8rem;
		text-align: left;	
	}

	.input{
		border-radius: 5px;
		height: 3rem;
		padding: 0 10px;
	}

	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0,0,0,0.3);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal {
		position: relative;
		background: white;
		border: 3px solid #000;
		width: 250px;
		box-shadow: 5px 5px 0 #000000;
		color: rgb(49, 41, 52);
        font-family: "Tahoma", sans-serif;
	}

    .modal-top-bar {
        background: rgb(229, 207, 253);
        color: white;
        font-weight: bold;
        padding: 4px;
        font-size: 0.9rem;
        text-align: left;
        border-bottom: 2px solid #000;
    }

	.modal-content {
		padding: 1rem 1.5rem;
		text-align: center;
	}

	.modal h2 {
		font-size: 1rem;
		margin-bottom: 1rem;
	}

	.modal button {
		background: rgb(229, 207, 253);
		border: 2px outset #fff;
		padding: 0.4rem 1rem;
		cursor: pointer;
	}

	.modal button:active {
		border: 2px inset #fff;
		transform: translate(2px, 2px);
	}
</style>
