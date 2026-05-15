import { writable, derived } from 'svelte/store';

/**
 * Catalogue of resources promoting healthy, mindful, and disciplined living.
 * Each item is structured for use with Card and Modal components.
 */
const initialCatalogue = [
    {
        id: "1",
        title: "Withered Foxy Zine",
        description: "A digital art piece created for a zine collab based on Five Nights at Freddy's.",
        category: "2D",
        tags: ["digital"],
        featured: false,
        image: "/images/catalogue/W_Foxy_ZineFinal.png"
    },
    {
        id: "2",
        title: "Metal Sonic Painting",
        description: "A digital painting made to test replicating the style of older Sonic CD promo art.",
        category: "2D",
        tags: ["digital"],
        featured: false,
        image: "/images/catalogue/really good metal ig.png"
    },
    {
        id: "3",
        title: "Into the Pit",
        description: "A pixel art piece based on Into the Pit, was featured in a dev showcase with other works.",
        category: "Pixel Art",
        tags: ["pixels"],
        featured: true,
        image: "/images/catalogue/Pit_Bonnie.png"
    },
    {
        id: "4",
        title: "Outside Your Window",
        description: "A 3D render made in SFM of Ignited Bonnie from The Joy of Creation.",
        category: "3D",
        tags: ["render", "model"],
        featured: true,
        image: "/images/catalogue/Ignited_Bonnie_Render.png"
    },
];


// Writable store
export const catalogue = writable(initialCatalogue);


// Derived store: unique categories
export const categories = derived(catalogue, $catalogue => {
    const set = new Set($catalogue.map(item => item.category));
    return Array.from(set).sort();
});


// Derived store: unique tags (flattened and sorted)
export const tags = derived(catalogue, $catalogue => {
    const allTags = $catalogue.flatMap(item => item.tags || []);
    const tagSet = new Set(allTags.map(tag => tag.trim().toLowerCase()));
    return Array.from(tagSet).sort();
});
