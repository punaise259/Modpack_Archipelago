// kubejs/server_scripts/craft.js

ServerEvents.recipes(event => {

    //Vanilla
    //bucket
    event.remove({ output: 'minecraft:bucket' })

    // Add the Primitive Brick version
    event.shaped('minecraft:bucket', [
        '   ',
        'P P',
        ' P '
    ], {  
        P: 'immersiveengineering:plate_iron' 
    })

    //farmer delight
    //cooking_pot
    event.remove({ output: 'farmersdelight:cooking_pot' })

    const woods = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'cherry', 'mangrove', 'bamboo']
    woods.forEach(w => event.remove({ id: `exnihilosequentia:ens_${w}_sieve` }))

    // Add the Primitive Brick version
    event.shaped('farmersdelight:cooking_pot', [
        'B B',
        'BPB',
        'SSS'
    ], {
        B: 'minecraft:brick',
        S: 'farmersdelight:straw',   
        P: 'minecraft:decorated_pot' 
    })

    event.remove({ output: 'farmersdelight:cooking_pot' })

    //furnace
    event.remove('minecraft:furnace')
    event.shaped('minecraft:furnace', [
        'CCC',
        'C C',
        'CCC'
    ], {
        C : 'excompressum:compressed_cobblestone'
    })



    //storage drawer upgrade
    //each tier need the below one to be crafted
    //obsidian tier
    event.remove({ output: 'storagedrawers:obsidian_storage_upgrade' })
    event.shaped('storagedrawers:obsidian_storage_upgrade', [
        'SSS',
        'MPM',
        'SSS'
    ], {
        M: 'minecraft:obsidian',
        P: 'storagedrawers:upgrade_template',
        S: 'minecraft:stick'
    })

    //copper tier
    event.remove({ output: 'storagedrawers:copper_storage_upgrade' })
    event.shaped('storagedrawers:copper_storage_upgrade', [
        'SSS',
        'MPM',
        'SSS'
    ], {
        M: 'minecraft:copper_ingot',
        P: 'storagedrawers:obsidian_storage_upgrade',
        S: 'minecraft:stick'
    })

    //iron tier
    event.remove({ output: 'storagedrawers:iron_storage_upgrade' })
    event.shaped('storagedrawers:iron_storage_upgrade', [
        'SSS',
        'MPM',
        'SSS'
    ], {
        M: 'minecraft:iron_ingot',
        P: 'storagedrawers:copper_storage_upgrade',
        S: 'minecraft:stick'
    })

    event.remove({ output: 'storagedrawers:gold_storage_upgrade' })
    event.shaped('storagedrawers:gold_storage_upgrade', [
        'SSS',
        'MPM',
        'SSS'
    ], {
        M: 'minecraft:gold_ingot',
        P: 'storagedrawers:iron_storage_upgrade',
        S: 'minecraft:stick'
    })

    //diamondd tier
    event.remove({ output: 'storagedrawers:diamond_storage_upgrade' })
    event.shaped('storagedrawers:diamond_storage_upgrade', [
        'SSS',
        'MPM',
        'SSS'
    ], {
        M: 'minecraft:diamond',
        P: 'storagedrawers:gold_storage_upgrade',
        S: 'minecraft:stick'
    })

    //emerald tier
    event.remove({ output: 'storagedrawers:emerald_storage_upgrade' })
    event.shaped('storagedrawers:emerald_storage_upgrade', [
        'SSS',
        'MPM',
        'SSS'
    ], {
        M: 'minecraft:emerald',
        P: 'storagedrawers:diamond_storage_upgrade',
        S: 'minecraft:stick'
    })

    //netherite tier
    event.remove({ output: 'storagedrawers:netherite_storage_upgrade' })
    event.shaped('storagedrawers:netherite_storage_upgrade', [
        'SSS',
        'MPM',
        'SSS'
    ], {
        M: 'minecraft:netherite_ingot',
        P: 'storagedrawers:emerald_storage_upgrade',
        S: 'minecraft:stick'
    })

    
    //immersive enginering

    //plates
    const iePlates = [
        { plate: 'immersiveengineering:plate_aluminum',  tag: 'forge:ingots/aluminum'  },
        { plate: 'immersiveengineering:plate_constantan', tag: 'forge:ingots/constantan' },
        { plate: 'immersiveengineering:plate_copper',    tag: 'forge:ingots/copper'    },
        { plate: 'immersiveengineering:plate_electrum',  tag: 'forge:ingots/electrum'  },
        { plate: 'immersiveengineering:plate_gold',      tag: 'forge:ingots/gold'      },
        { plate: 'immersiveengineering:plate_iron',      tag: 'forge:ingots/iron'      },
        { plate: 'immersiveengineering:plate_lead',      tag: 'forge:ingots/lead'      },
        { plate: 'immersiveengineering:plate_nickel',    tag: 'forge:ingots/nickel'    },
        { plate: 'immersiveengineering:plate_silver',    tag: 'forge:ingots/silver'    },
        { plate: 'immersiveengineering:plate_steel',     tag: 'forge:ingots/steel'     },
        { plate: 'immersiveengineering:plate_uranium',   tag: 'forge:ingots/uranium'   }
    ]

    iePlates.forEach(p => {
        event.remove({ output: p.plate, type: 'minecraft:crafting_shapeless' })
    })

    event.remove({ output: 'immersiveengineering:hammer' })

    //hammer
    event.shaped('immersiveengineering:hammer', [
        ' IM',
        ' HI',
        'S  '
    ], {  
        I: 'minecraft:iron_ingot',
        H: 'exnihilosequentia:diamond_hammer',
        S: 'minecraft:stick',
        M: 'immersiveengineering:hemp_fiber'


    })

    //engineer crafting table
    event.remove({ output: 'immersiveengineering:craftingtable' })

    event.shaped('immersiveengineering:craftingtable', [
        'SAS',
        'HIH',
        'H H'
    ], {  
        I: 'minecraft:crafting_table',
        H: 'immersiveengineering:stick_treated',
        S: 'immersiveengineering:slab_treated_wood_horizontal',
        A: 'kubejs:dark_anvil',
})

    //LV accumulator


    // botania
    // compressed Bone Meal
    event.shaped('kubejs:compressed_bone_meal', [
        'BB ',
        'BB ',
        '   '
    ], {
        B: 'minecraft:bone_meal'
    })

    // 2x compressed Bone Meal
    event.shaped('kubejs:2x_compressed_bone_meal', [
        'BB ',
        'BB ',
        '   '
    ], {
        B: 'kubejs:compressed_bone_meal'
    })

    // 3x compressed Bone Meal
    event.shaped('kubejs:3x_compressed_bone_meal', [
        'BB ',
        'BB ',
        '   '
    ], {
        B: 'kubejs:2x_compressed_bone_meal'
    })

    // 4x compressed Bone Meal
    event.shaped('kubejs:4x_compressed_bone_meal', [
        'BB ',
        'BB ',
        '   '
    ], {
        B: 'kubejs:3x_compressed_bone_meal'
    })

    // 5x compressed Bone Meal
    event.shaped('kubejs:5x_compressed_bone_meal', [
        'BB ',
        'BB ',
        '   '
    ], {
        B: 'kubejs:4x_compressed_bone_meal'
    })

    //floral fertilizer
    event.remove({ output: 'botania:fertilizer' })
    event.shaped('botania:fertilizer', [
        'BBB',
        'BBB',
        'BBB'
    ], {
        B: 'kubejs:5x_compressed_bone_meal'
    })

    event.shaped('2x botania:fertilizer', [
        '   ',
        'BFB',
        '   '
    ], {
        B: 'kubejs:5x_compressed_bone_meal',
        F: 'botania:fertilizer'
    })
})