ServerEvents.recipes(event => {
    const NS = 'mastery:mekanism/energy_conversion'

    const energyConversion = (item, energy, id) => {
        event.recipes.mekanism.energy_conversion(item, energy).id(`${NS}/${id}`)
    }

    energyConversion('minecraft:light_gray_concrete', 20000, 'light_gray_concrete')
    energyConversion('minecraft:white_concrete',      800,   'white_concrete')
})
