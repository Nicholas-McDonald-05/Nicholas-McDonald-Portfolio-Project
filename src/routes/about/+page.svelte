<script>
    import { asset } from '$app/paths';
    import { PhilosophyCard } from '$lib/components';
</script>


<svelte:head>
    <title>About | Starter Kit</title>
</svelte:head>


<section class="intro section">
    <h1>So who am I?</h1>
    <p>
        I'm a student of Computing in Interactive Digital Art & Design at SETU, which means I get to
        make cool stuff involving digital interfaces and games. Very guilty of having a large interest 
        in horror and action games, and I love working in 3D animation/modelling programs. Most of my spare
        time is spent creating art and occasionally finishing a book I'm reading.
    </p>
</section>

<section class="socials">
    <h1>Where to Find Me: </h1>
    <div class="links">
        <div>
            <h2>Github: </h2>
            <p>Link</p>
        </div>
        <div>
            <h2>LinkedIn: </h2>
            <p>Link</p>
        </div>
        <div>
            <h2> Personal Email: </h2>
            <p>nickmcd2005@gmail.com</p>
        </div>
        <div>
            <h2>College Email: </h2>
            <p>C00308788@setu.ie</p>
        </div>
    </div>
    
</section>
<!--<section class="reflection section-quote" aria-labelledby="reflection-title">
	<div class="container">
		<h2 id="reflection-title">Reflections</h2>
		<blockquote>
			<p>
				“He who conquers himself is the mightiest warrior.”
			</p>
			<footer>— Confucius</footer>
		</blockquote>
	</div>
</section>
-->


<style>
    section {
        margin-bottom: var(--space-xl);
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        animation: fadeIn 0.6s ease-in;
    }

    section h1,
    section h2,
    p {
        font-family:'Courier New', Courier, monospace;
        font-size: var(--font-xl);
        margin-bottom: var(--space-sm);
        text-align: center;
        position: relative;
        color: #ffffff;
        text-shadow: 1px 2px 2px #61c9f9;
    }

    .section {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.8);
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
    }

    .socials {
        background-color: #000000;
        background-size: 650px;
        background-repeat: repeat;
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
    }

    .links{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .section-quote {
		background-image: url("/images/backgrounds/zen-garden-ripples.png");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-blend-mode: overlay;
		background-color: rgba(255, 255, 255, 0.85);
		padding: var(--space-xl) var(--space-md);
		text-align: center;
	}

	.section-quote .container {
		max-width: 800px;
		margin: 0 auto;
		padding: var(--space-lg);
		background: rgba(255, 255, 255, 0.75);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-md);
		backdrop-filter: blur(3px);
	}

	.section-quote h2 {
		font-family: var(--font-heading);
		font-size: var(--font-xxl);
		margin-bottom: var(--space-md);
		color: var(--text-primary);
	}

	blockquote {
		font-family: var(--font-quote);
		font-style: italic;
		font-size: var(--font-lg);
		color: var(--text-secondary);
		margin: 0;
	}

	blockquote footer {
		margin-top: var(--space-sm);
		font-size: var(--font-sm);
		color: var(--text-tertiary);
	}

    p {
        font-size: var(--font-base);
        max-width: 700px;
        margin: 0 auto var(--space-md);
        text-align: center;
        line-height: 1.8;
    }
</style>