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
                <p class="art-title">Piece 1: Withered Foxy Zine</p>
                <img class="image" src="/images/catalogue/W_Foxy_ZineFinal.png" 
                alt="A digital drawing of Withered Foxy for a Zine collab.">
            </div>
            <div>
                <p class="art-title">Piece 2: Into the Pit</p>
                <img class="image2" src="/images/catalogue/Pit_Bonnie.png"
                alt="A pixel art piece based on the game 'Into the Pit'.">
            </div>
            <div>
                <p class="art-title">Piece 3: Caine's Abstraction</p>
                <img class="image3" src="/images/catalogue/Caine Sketch.png"
                alt="A pen sketch of Caine during his abstration from The Amazing Digital Circus.">
            </div>
            <div>
                <p class="art-title">Piece 4: Blighted Springtrap</p>
                <img class="image4" src="/images/catalogue/BlightTrap.png"
                alt="A coloured pen sketch of Blighted Springtrap from Dead by Daylight.">
            </div>
            <div>
                <p class="art-title">Piece 5: Metal Sonic Painting</p>
                <img class="image5" src="/images/catalogue/really good metal ig.png"
                alt="A digital painting of Metal Sonic based on art from Sonic CD.">
            </div>
            <div>
                <p class="art-title">Piece 6: Captain Rex</p>
                <img class="image6" src="/images/catalogue/Cap'n Rex.png"
                alt="A pencil and pen sketch of Captain Rex from The Clone Wars.">
            </div>
            <div>
                <p class="art-title">Piece 7: Neo Metal Sonic</p>
                <img class="image7" src="/images/catalogue/Neo Metal.png"
                alt="A pen sketch of Neo Metal Sonic.">
            </div>
            <div>
                <p class="art-title">Piece 8: S.A.B.I.I.A</p>
                <img class="image8" src="/images/catalogue/older sab.png"
                alt="A digital drawing of my OC 'S.A.B.I.I.A'.">
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
        width: 250px;
        height: 350px;
    }

    .image3{
        width: 250px;
        height: 350px;
    }

    .image4{
        width: 250px;
        height: 350px; 
    }

    .image5{
        width: 250px;
        height: 170px;
    }

    .image6{
        width: 250px;
        height: 170px;
    }

    .image7{
        width: 250px;
        height: 170px;
    }

    .image8{
        width: 250px;
        height: 170px;
    }
</style>