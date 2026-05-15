<script>
    import { fade } from 'svelte/transition';
    import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
    import { asset } from '$app/paths';
</script>

<svelte:head>
    <title>3D Artwork | Starter Kit</title>
</svelte:head>

<div class="threedee-container">
    <section class="threedee-opener">
        <h1>> Welcome to the 3D Artwork Page.</h1>
    </section>

    <section class="render-section">
        <h2>Renders:</h2>
        <div class="display">
            <div>
                <p class="art-title">Piece 1: Breaker Room</p>
                <img class="image" src={asset("/images/catalogue/Breaker Room.png")}
                alt="A render of Funtime Freddy from Help Wanted 2.">
            </div>
            <div>
                <p class="art-title">Piece 2: The Bad Ending</p>
                <img class="image" src={asset("/images/catalogue/Burntrap.png")}
                alt="A render of Burntrap and the Blob inspired by Security Breach.">
            </div>
            <div>
                <p class="art-title">Piece 3: All In Your Mind</p>
                <img class="image" src={asset("/images/catalogue/All In Your Mind.png")}
                alt="A render of the Nightmare Animatronics from Help Wanted.">
            </div>
            <div>
                <p class="art-title">Piece 4: The Ruined One</p>
                <img class="image" src={asset("/images/catalogue/The Mimi.png")}
                alt="A render of the Mimic from RUIN.">
            </div>
            <div>
                <p class="art-title">Piece 5: He Always Does</p>
                <img class="image" src={asset("/images/catalogue/He Always Does.png")}
                alt="A render to celebrate Springtrap coming to Dead by Daylight.">
            </div>
            <div>
                <p class="art-title">Piece 6: Molten Dreams</p>
                <img class="image" src={asset("/images/catalogue/Molten.png")}
                alt="A render of Molten Freddy from FFPS.">
            </div>
            <div>
                <p class="art-title">Piece 7: Outside Your Window</p>
                <img class="image" src={asset("/images/catalogue/Ignited_Bonnie_Render.png")}
                alt="A render of Ignited Bonnie from The Joy of Creation.">
            </div>
            <div>
                <p class="art-title">Piece 8: Happy Birthday</p>
                <img class="image" src={asset("/images/catalogue/Happy Birthday.png")}
                alt="A render to celebrate the Anniversary of Help Wanted.">
            </div>
        </div>
    </section>

    <section class="model-section">
        <h2>Models:</h2>
        <div class=display>
            <div>
                <p class="art-title">Model 1: Book Test</p>
                <img class="model" src={asset("/images/catalogue/Simple_Book.jpg")} 
                alt="A model test for creating a book in Maya.">
            </div>
            <div>
                <p class="art-title">Model 2: Refined Book</p>
                <img class="model" src={asset("/images/catalogue/Simple_Book-Proper.jpg")}
                alt="A proper render of the previous book model.">
            </div>
            <div>
                <p class="art-title">Model 3: Tea Cup</p>
                <img class="model" src={asset("/images/catalogue/TeaCup_Render.jpg")}
                alt="A model of a simple tea cup.">
            </div>
             <div>
                <p class="art-title">Model 4: Simple Skeleton</p>
                <img class="model" src={asset("/images/catalogue/Skeleton_Render.jpg")}
                alt="A model of a simple skeleton based on a previous 2D asset.">
            </div>
             <div>
                <p class="art-title">Model 5: Small Bus</p>
                <img class="model" src={asset("/images/catalogue/Van_Render.jpg")}
                alt="The BUS.">
            </div>
             <div>
                <p class="art-title">Model 6: Toy Car</p>
                <img class="model" src={asset("/images/catalogue/Toy Car.jpg")}
                alt="A model of a small toy car with normals.">
            </div>
             <div>
                <p class="art-title">Model 7: Simple Rock Wall</p>
                <img class="model" src={asset("/images/catalogue/Rock_Wall_New.jpg")}
                alt="A model of a rock wall based on a previous 2D asset.">
            </div>
             <div>
                <p class="art-title">Model 8: Early Scaffolding Test</p>
                <img class="model" src={asset("/images/catalogue/Scaffolding.png")}
                alt="The earliest 3D model I ever made modelled from a singular reference.">
            </div>
        </div>
    </section>
</div>

<style>
    /*OPENER FOR 3D ARTWORK PAGE**/
    .threedee-container{
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    .threedee-opener{
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
        background-color: #000000;
    }

    .threedee-opener h1{
        font-size: var(--font-xxl);
        font-family: 'Courier New', Courier, monospace;
        margin-bottom: var(--space-sm);
        color: rgb(254, 255, 255);
        text-shadow: 1px 2px 2px #61c9f9;
    }

    /*DISPLAY OF ARTWORK**/
    .render-section{
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
        background-color: #000000;
    }

    .render-section h2{
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

    @media (max-width: 768px) {
    .display {
      grid-template-columns: repeat(1, 5fr);
    }
  }

    .art-title{
        font-family: 'Courier New', Courier, monospace;
        color: #ffffff;
        text-shadow: 1px 2px 2px #61c9f9;
    }
    /*RENDERS**/
    .image{
        width: 240px;
        height: 250px;
    }

    /*MODEL SHOWCASE**/
    .model-section{
        text-align: center;
        padding: var(--space-xl) var(--space-md);
        border: 5px solid #ffffff;
        border-radius: var(--radius-md);
        box-shadow: 4px 3px 5px #61c9f9;
        background-color: #000000;
    }

    .model-section h2{
        font-family: 'Courier New', Courier, monospace;
        font-size: var(--font-xl);
        margin-bottom: var(--space-lg);
        color: #ffffff;
        text-shadow: 1px 2px 2px #61c9f9;
    }

    .model{
        width: 300px;
        height: 200px;
    }
</style>
