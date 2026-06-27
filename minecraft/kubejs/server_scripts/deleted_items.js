// Retire la recette de craft d'objets indesirables

ServerEvents.recipes(event => {

  // Cobblestone generator
  event.remove({ output: 'cobblefordays:tier_1' });


  // immersive enginering
  //only remove the craft in the basic crafting table
  event.remove({ output: 'immersiveengineering:component_iron', type: 'minecraft:crafting_shaped' });
  event.remove({ output: 'immersiveengineering:component_steel', type: 'minecraft:crafting_shaped' });



  //ex compressum
  event.remove({ output: 'excompressum:auto_hammer' });
  event.remove({ output: 'excompressum:auto_compressed_hammer'});


  //simply jetpack  
    //vanilla
  event.remove({ output: 'simplyjetpacks:jetpack_vanilla1' });
  event.remove({ output: 'simplyjetpacks:jetpack_vanilla2' });
  event.remove({ output: 'simplyjetpacks:jetpack_vanilla3' });
  event.remove({ output: 'simplyjetpacks:jetpack_vanilla4' });

    //armored
  event.remove({ output: 'simplyjetpacks:jetpack_vanilla1_armored' });
  event.remove({ output: 'simplyjetpacks:jetpack_vanilla2_armored' });
  event.remove({ output: 'simplyjetpacks:jetpack_vanilla3_armored' });
  event.remove({ output: 'simplyjetpacks:jetpack_vanilla4_armored' });
    //mekanism
  event.remove({ output: 'simplyjetpacks:jetpack_mek1' });
  event.remove({ output: 'simplyjetpacks:jetpack_mek2' });
  event.remove({ output: 'simplyjetpacks:jetpack_mek3' });
  event.remove({ output: 'simplyjetpacks:jetpack_mek4' });

    //armored
  event.remove({ output: 'simplyjetpacks:jetpack_mek1_armored' });
  event.remove({ output: 'simplyjetpacks:jetpack_mek2_armored' });
  event.remove({ output: 'simplyjetpacks:jetpack_mek3_armored' });
  event.remove({ output: 'simplyjetpacks:jetpack_mek4_armored' });

    //ie
  event.remove({ output: 'simplyjetpacks:jetpack_ie1' });
  event.remove({ output: 'simplyjetpacks:jetpack_ie2' });
  event.remove({ output: 'simplyjetpacks:jetpack_ie3' });

    //armored
  event.remove({ output: 'simplyjetpacks:jetpack_ie1_armored' });
  event.remove({ output: 'simplyjetpacks:jetpack_ie2_armored' });
  event.remove({ output: 'simplyjetpacks:jetpack_ie3_armored' });

  // colossal chests
  // copper tier
  event.remove({ output: 'colossalchests:colossal_chest_copper' });
  event.remove({ output: 'colossalchests:chest_wall_copper' });
  event.remove({ output: 'colossalchests:interface_copper' });

  // silver tier
  event.remove({ output: 'colossalchests:colossal_chest_silver' });
  event.remove({ output: 'colossalchests:chest_wall_silver' });
  event.remove({ output: 'colossalchests:interface_silver' });

  // obsidian tier
  event.remove({ output: 'colossalchests:colossal_chest_obsidian' });
  event.remove({ output: 'colossalchests:chest_wall_obsidian' });
  event.remove({ output: 'colossalchests:interface_obsidian' });
  


//tinker 

event.remove({ output: 'tconstruct:steel_ingot' });
event.remove({ output: 'tconstruct:steel_nugget' });
event.remove({ output: 'tconstruct:steel_block' });

// remove molten steel generation from Tinkers' Construct

//ad astra
event.remove({ output: 'ad_astra:steel_ingot' });
event.remove({ output: 'ad_astra:steel_nugget' });
event.remove({ output: 'ad_astra:steel_block' });

});