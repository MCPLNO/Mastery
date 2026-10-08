ServerEvents.recipes(event => {
    const NS = 'mastery:mekanism/rotary'

    const rotary = (chemical, fluid, id) => {
        event.recipes.mekanism.rotary(chemical, fluid, chemical, fluid).id(`${NS}/${id}`)
    }

    rotary('1x mastery:lava', '1x minecraft:lava', 'lava_rotary')
})
