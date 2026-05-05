<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
    <title>2D Artwork | Starter Kit</title>
</svelte:head>

<div class="twodee-container">
    <section class="twodee-opener">
        <h1>> Welcome to the 2D Artwork Page.</h1>
    </section>

    <section class="art-section">
        <h2>My current 2D work:</h2>
        <div class="display">
            <div>
                <p class="art-title">Piece 1:</p>
                <img class="image" src="/images/catalogue/W_Foxy_ZineFinal.png">
            </div>
            <div>
                <p class="art-title">Piece 2:</p>
                <img class="image2" src="/images/catalogue/Pit_Bonnie.png">
            </div>
            <div>
                <p class="art-title">Piece 3:</p>
            </div>
            <div>
                <p class="art-title">Piece 4:</p>
            </div>
            <div>
                <p class="art-title">Piece 5:</p>
            </div>
            <div>
                <p class="art-title">Piece 6:</p>
            </div>
            <div>
                <p class="art-title">Piece 7:</p>
            </div>
            <div>
                <p class="art-title">Piece 8:</p>
            </div>
        </div>
    </section>
</div>

<style>
    /*OPENER FOR 2D ARTWORK PAGE**/
    .twodee-container{
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    .twodee-opener{
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
        background-color: #000000;
    }

    .twodee-opener h1{
        font-size: var(--font-xxl);
        font-family: 'Courier New', Courier, monospace;
        margin-bottom: var(--space-sm);
        color: rgb(254, 255, 255);
        text-shadow: 1px 2px 2px #61c9f9;
    }

    /*DISPLAY OF ARTWORK**/
    .art-section{
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
        background-color: #000000;
    }

    .art-section h2{
        font-family: 'Courier New', Courier, monospace;
        font-size: var(--font-xl);
        margin-bottom: var(--space-lg);
        color: #ffffff;
        text-shadow: 1px 2px 2px #61c9f9;
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

    .image{
        width: 250px;
        height: 350px;
    }

    .image2{
        width: 300px;
        height: 350px;
    }
</style>