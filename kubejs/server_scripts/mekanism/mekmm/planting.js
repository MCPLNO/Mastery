ServerEvents.recipes(event => {
    const NS = 'mastery:mekanism/planting'

    const planting = (itemOut, count, itemIn, chemical, amount, id) => {
        event.custom({
            type: 'mekmm:planting',
            main_output: { count: count, id: itemOut },
            item_input: { item: itemIn, count: 1 },
            chemical_input: { chemical: chemical, amount: amount },
            per_tick_usage: true
        }).id(`${NS}/${id}`)
    }

    planting('minecraft:white_concrete',      64, 'minecraft:white_concrete',      'mekanism:white_concrete',      1,   'white_concrete')
    planting('minecraft:light_gray_concrete', 64, 'minecraft:light_gray_concrete', 'mekanism:light_gray_concrete', 1,   'light_gray_concrete')
    planting('minecraft:black_concrete',      64, 'minecraft:black_concrete',      'mekanism:black_concrete',      1,   'black_concrete')
    planting('avaritia:diamond_lattice',      1,  'avaritia:diamond_lattice',      'mekanism:uranium_oxide',       100, 'diamond_lattice')
})
