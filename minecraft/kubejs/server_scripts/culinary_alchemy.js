//
const ORE_PIECES_RECIPES = [
    ['exnihilosequentia:iron_pieces',     'minecraft:iron_nugget',        3],
    ['exnihilosequentia:gold_pieces',     'minecraft:gold_nugget',        3],
    ['exnihilosequentia:copper_pieces',   'minecraft:copper_ingot',       1],
    ['exnihilosequentia:tin_pieces',      'thermal:tin_nugget',           3],
    ['exnihilosequentia:lead_pieces',     'thermal:lead_nugget',          3],
    ['exnihilosequentia:silver_pieces',   'thermal:silver_nugget',        3],
    ['exnihilosequentia:nickel_pieces',   'thermal:nickel_nugget',        3],
    ['exnihilosequentia:uranium_pieces',  'mekanism:nugget_uranium',      3],
];

const ENS_DIRECT_SMELT_METALS = [
    'tin', 'lead', 'silver', 'nickel', 'uranium'
];

const ENS_RAW_RECIPES = [
    'iron', 'gold', 'copper',
    'tin', 'lead', 'silver', 'nickel', 'uranium'
];

ServerEvents.recipes(event => {
    //Craft Acidic extract
    event.custom({
        "type": "farmersdelight:cooking",
        "ingredients": [
            { "item": "minecraft:apple" },
            { "item": "minecraft:apple" }
        ],
        "result": { "item": "kubejs:acidic_extract" },
        "experience": 0.1,
        "cookingtime": 100
    });

    //craft nuggets
    ORE_PIECES_RECIPES.forEach(([pieces, result, count]) => {
        event.custom({
            "type": "farmersdelight:cooking",
            "ingredients": [
                { "item": pieces },
                { "item": "kubejs:acidic_extract" }
            ],
            "result": { "item": result, "count": count },
            "experience": 0.5,
            "cookingtime": 400
        });
    });

    //remove vanilla ore smelting
    ENS_DIRECT_SMELT_METALS.forEach(m => {
        event.remove({ id: `exnihilosequentia:ens_${m}_ingot` });        // smelting
        event.remove({ id: `exnihilosequentia:ens_${m}_ingot_blast` });  // blasting
    });

    //Remove the vanilla chunk craft
    ENS_RAW_RECIPES.forEach(m => {
        event.remove({ id: `exnihilosequentia:ens_raw_${m}` });
    });
});
