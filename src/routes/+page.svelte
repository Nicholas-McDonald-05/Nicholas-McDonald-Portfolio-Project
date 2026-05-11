<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
    import { CatalogueCard, Modal } from '$lib/components';
    import { catalogue } from '$lib/stores/catalogueStore.js';
    import { currentQuote, setRandomQuote } from '$lib/stores/quoteStore.js';
    
    let showQuoteModal = false;

    /**
     * Select a few featured items — e.g., first 4 items
	 * @type {any[]}
	 */
    let featuredItems = [];

    $: $catalogue && (featuredItems = $catalogue.slice(0, 4));

    function openQuoteModal() {
        setRandomQuote();
        showQuoteModal = true;
    }
</script>


<svelte:head>
    <title>Nicholas McDonald's Portfolio</title>
</svelte:head>


<!-- Page Container -->
<div class="home-container">
    <!-- Hero Section -->
    <section class="opener">
        <h1>> Welcome to my art portfolio, hope you like it here.</h1>
        <br>
        <h1>> Might as well stick around, there's lots to see.</h1>
    </section>

    <!-- Featured Catalogue Section -->
    <section class="featured">
        <h2>Featured Art Pieces</h2>
    <!--<div class="card-grid">
            {#each featuredItems as item, index}
                <button
					type="button"
					class="card-button"
					on:click={() => goto(resolve('/catalogue/[title]', { title: item.title }))}
					aria-label={`View details for ${item.title}`}
				>
                    <CatalogueCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        category={item.category}
                        tags={item.tags}
                        animationDelay={index * 80}
                    />
                </button>
            {/each}
        </div>-->
            <div class="display">
                <div>
                    <p class="art-title">Piece 1: The Ruined One</p>
                    <img class="image1" src="/images/catalogue/The Mimi.png"
                    alt="A render of the Mimic from RUIN.">
                </div>
                <div>
                    <p class="art-title">Piece 2: Into the Pit</p>
                    <img class="image2" src="/images/catalogue/Pit_Bonnie.png"
                    alt="A pixel art piece based on the game 'Into the Pit'.">
                </div>
                <div>
                    <p class="art-title">Piece 3: Simple Skeleton</p>
                    <img class="image3" src="/images/catalogue/Skeleton_Render.jpg"
                    alt="A model of a simple skeleton based on a previous 2D asset.">
                </div>
                <div>
                    <p class="art-title">Piece 4: Caine's Abstraction</p>
                <img class="image4" src="/images/catalogue/Caine Sketch.png"
                alt="A pen sketch of Caine during his abstration from The Amazing Digital Circus.">
                </div>
            </div>
        
        <!--<a class="browse-link" href="{resolve('/catalogue')}">Check out the rest of my work ></a>-->
    </section>

    <!-- About Teaser Section -->
    <section class="about-teaser">
        <h2>Want to know more about me?</h2>
        <p>
            Visit my 'About Me' page below to find out anything you wish to know.
        </p>
        <a href="{resolve('/about')}" class="learn-more">This Way ></a>
    </section>
</div>


<style>
    .home-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    /* Hero Section */
    .opener {
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
        background-color: #000000;
    }

    .opener h1 {
        font-size: var(--font-xxl);
        font-family: 'Courier New', Courier, monospace;
        margin-bottom: var(--space-sm);
        color: rgb(254, 255, 255);
        text-shadow: 1px 2px 2px #61c9f9;
    }

    /* Featured Section */
    .featured {
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
        background-color: #000000;
    }

    .featured h2 {
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        font-size: var(--font-xl);
        margin-bottom: var(--space-lg);
        color: #ffffff;
        text-shadow: 1px 2px 2px #61c9f9;

        animation: flashyFeatured 0.7s infinite steps(4);
    }

    @keyframes flashyFeatured {
            0% { color: #ffffff; }
            25% { color: #c5e9fa; }
            50% { color: #70c9f9; }
            75% { color: #3fc2ff; }
            100% { color: #ffffff; }
        }

    .display{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .art-title{
        font-family: 'Courier New', Courier, monospace;
        color: #ffffff;
        text-shadow: 1px 2px 2px #61c9f9;
    }

    /*ARTWORK**/
    .image1{
        width: 250px;
        height: 280px;
    }

    .image2{
        width: 250px;
        height: 280px;
    }

    .image3{
        width: 250px;
        height: 280px;
    }

    .image4{
        width: 250px;
        height: 280px;
    }

    /* About Teaser */
    .about-teaser {
        text-align: center;
        padding: var(--space-lg) var(--space-md);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.75);
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
    }

    .about-teaser h2 {
        font-family: 'Courier New', Courier, monospace;
        color: #ffffff;
        text-shadow: 1px 2px 2px #61c9f9;
        margin-bottom: var(--space-sm);
    }

    .about-teaser p {
        font-size: var(--font-base);
        font-family: 'Courier New', Courier, monospace;
        color: #ffffff;
        font-weight: bold;
        max-width: 60ch;
        margin: 0 auto var(--space-sm) auto;
    }

    .learn-more {
        font-size: var(--font-sm);
        font-family: 'Courier New', Courier, monospace;
        color: #5fe2ff;
        text-decoration: none;
    }

    .learn-more:hover {
        text-decoration: underline;
    }
</style>
