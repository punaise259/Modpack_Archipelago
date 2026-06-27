// Makes all furnace types (vanilla + iron furnaces) immune to explosions
// by setting an extremely high blast resistance.

const FURNACE_BLOCKS = [
    'minecraft:furnace',
    'ironfurnaces:iron_furnace',
    'ironfurnaces:gold_furnace',
    'ironfurnaces:copper_furnace',
    'ironfurnaces:diamond_furnace',
    'ironfurnaces:emerald_furnace',
    'ironfurnaces:obsidian_furnace',
    'ironfurnaces:netherite_furnace',
    'ironfurnaces:crystal_furnace',
    'ironfurnaces:silver_furnace',
    'ironfurnaces:allthemodium_furnace',
    'ironfurnaces:unobtainium_furnace',
    'ironfurnaces:vibranium_furnace',
    'ironfurnaces:million_furnace',
]

BlockEvents.modification(event => {
    FURNACE_BLOCKS.forEach(blockId => {
        event.modify(blockId, block => {
            block.explosionResistance = 3600000.0
        })
    })
})
