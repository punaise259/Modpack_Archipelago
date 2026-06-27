//limits the number of furnaces a player can place in the game

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

const MAX_FURNACES = 2 //maximum number of furnace(s) the player can place
const DATA_KEY = 'global_furnace_count'

// Avoid stale values in persistentData after script changes or crashes.
ServerEvents.loaded(event => {
    event.server.persistentData.putInt(DATA_KEY, 0)
    console.info('[KubeJS] Furnace counter reset to 0 on server load')
})

FURNACE_BLOCKS.forEach(blockId => {

    BlockEvents.placed(blockId, event => {
        const data = event.server.persistentData
        const count = data.getInt(DATA_KEY)

        if (count >= MAX_FURNACES) {
            event.level.removeBlock(event.block.pos, false)
            if (event.player) {
                event.player.tell(Text.red(
                    'You cannot place more than ' + MAX_FURNACES + ' furnaces in the world'
                ))
                event.player.give(Item.of(blockId))
            }
        } else {
            data.putInt(DATA_KEY, count + 1)
        }
    })

    BlockEvents.broken(blockId, event => {
        const data = event.server.persistentData
        const count = data.getInt(DATA_KEY)
        if (count > 0) {
            data.putInt(DATA_KEY, count - 1)
        }
    })

})
