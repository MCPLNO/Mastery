ServerEvents.recipes(event => {
    const NS = 'mastery:mekanism/oxidizing'

    const oxidizing = (input, output, amount, id) => {
        event.custom({
            type: 'mekanism:oxidizing',
            input: { item: input },
            output: { id: output, amount: amount }
        }).id(`${NS}/${id}`)
    }

    oxidizing('minecraft:white_concrete',      'mekanism:white_concrete',      1000, 'white_concrete')
    oxidizing('minecraft:light_gray_concrete', 'mekanism:light_gray_concrete', 1000, 'light_gray_concrete')
    oxidizing('minecraft:black_concrete',      'mekanism:black_concrete',      1000, 'black_concrete')
    oxidizing('mekanism:alloy_infused',              'mastery:infused_alloy_gas',      1000, 'infused_alloy_gas')
    oxidizing('mekanism:alloy_reinforced',           'mastery:reinforced_alloy_gas',   1000, 'reinforced_alloy_gas')
    oxidizing('mekanism:alloy_atomic',               'mastery:atomic_alloy_gas',       1000, 'atomic_alloy_gas')
    oxidizing('mekanism_extras:alloy_radiance',      'mastery:radiance_alloy_gas',     1000, 'radiance_alloy_gas')
    oxidizing('mekanism_extras:alloy_thermonuclear', 'mastery:thermonuclear_alloy_gas',1000, 'thermonuclear_alloy_gas')
    oxidizing('mekanism_extras:alloy_shining',       'mastery:shining_alloy_gas',      1000, 'shining_alloy_gas')
    oxidizing('mekanism_extras:alloy_spectrum',      'mastery:spectrum_alloy_gas',     1000, 'spectrum_alloy_gas')
    oxidizing('minecraft:orange_concrete', 'mastery:lava',     125, 'lava_from_orange_concrete')
    oxidizing('minecraft:diamond',         'mekanism:diamond', 20,  'diamond_gas_from_diamond')
})
