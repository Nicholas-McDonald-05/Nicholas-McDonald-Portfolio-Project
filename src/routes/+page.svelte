<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
    import { asset } from '$app/paths';
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
        <h1>> Welcome to Nick's Portfolio, hope you like it.</h1>
        <br>
        <h1>> Might as well stick around, there's lots to see.</h1>
    </section>

    <!-- Featured Catalogue Section -->
    <section class="featured">
        <h2>Programs I Have Worked In:</h2>
            <div class="display">
                <div class="grid-item">
                    <p class="title">Autodesk Maya</p>
                    <img class="image" src={asset("/images/catalogue/maya.png")}
                    alt="maya logo">
                </div>
                <div>
                    <p class="title">Inkscape</p>
                    <img class="image2" src={asset("/images/catalogue/inkscape.png")}
                    alt="inkscape logo">
                </div>
                <div>
                    <p class="title">Source FilmMaker</p>
                    <img class="image" src={asset("/images/catalogue/sfm.png")}
                    alt="source filmmaker logo">
                </div>
                <div>
                    <p class="title">Penpot</p>
                    <img class="image" src={asset("/images/catalogue/penpot.png")}
                    alt="penpot logo">
                </div>
                <div>
                    <p class="title">Aseprite</p>
                    <img class="image" src={asset("/images/catalogue/aseprite.png")}
                    alt="aseprite logo">
                </div>
               
            </div>
    </section>

    <!-- About Teaser Section -->
    <section class="about-teaser">
        <h2>Want to know more about me?</h2>
        <p>
            Visit my 'About Me' page below to find out more.
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

    /* Opening Section */
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
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 768px) {
    .display {
      grid-template-columns: repeat(1, 5fr);
    }
  }

    .title{
        font-family: 'Courier New', Courier, monospace;
        color: #ffffff;
        text-shadow: 1px 2px 2px #61c9f9;
    }

    /*LOGOS**/
    .image{
        width: 150px;
        height: 150px;
    }

    .image2{
        width: 170px;
        height: 170px;
    }

    /* About Section */
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
