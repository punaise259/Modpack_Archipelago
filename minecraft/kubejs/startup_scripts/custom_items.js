// kubejs/startup_scripts/custom_items.js

StartupEvents.registry('item', event => {
    //Acidic Extract item
    event.create('acidic_extract')
         .displayName('Acidic Extract')
         .tooltip('§7A concentrated organic compound used to dissolve mineral impurities.')
         .texture('minecraft:item/potion_overlay')
         .color(0, 0x99FF33);

    // Compressed Bone Meal tiers
    event.create('compressed_bone_meal')
        .displayName('Compressed Bone Meal')
        .texture('kubejs:item/compressed_bone_meal');

    event.create('2x_compressed_bone_meal')
        .displayName('2x Compressed Bone Meal')
        .texture('kubejs:item/2x_compressed_bone_meal');

    event.create('3x_compressed_bone_meal')
        .displayName('3x Compressed Bone Meal')
        .texture('kubejs:item/3x_compressed_bone_meal');

    event.create('4x_compressed_bone_meal')
        .displayName('4x Compressed Bone Meal')
        .texture('kubejs:item/4x_compressed_bone_meal');

    event.create('5x_compressed_bone_meal')
        .displayName('5x Compressed Bone Meal')
        .texture('kubejs:item/5x_compressed_bone_meal');
});