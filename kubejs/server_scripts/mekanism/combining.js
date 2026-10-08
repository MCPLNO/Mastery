ServerEvents.recipes(event => {
    const NS = 'mastery:mekanism/combining'

    const combining = (output, input, extra, id) => {
        event.recipes.mekanism.combining(output, input, extra)
            .id(`${NS}/${id}`)
    }

    combining('ae2:crafting_terminal',                  'minecraft:crafting_table',            'ae2:certus_quartz_crystal', 'crafting_terminal')
    combining('ae2:cell_component_1k',                  '8x ae2:charged_certus_quartz_crystal','8x minecraft:redstone',     'cell_component_1k')
    combining('ae2:cell_component_4k',                  '8x ae2:fluix_crystal',                'ae2:cell_component_1k',     'cell_component_4k')
    combining('mekanism_extras:qio_drive_singularity',  'ae2:cell_component_4k',               'mekanism:alloy_atomic',     'qio_drive_singularity')
    combining("ae2:cell_component_16k",                 'ae2:cell_component_4k',                 '16x ae2:fluix_crystal',          'cell_component_16k')
    combining('extendedae:ex_pattern_provider',         'ae2:pattern_provider',                'ae2:capacity_card',         'ex_pattern_provider')
    combining("16x ad_astra:etrium_ingot",         "64x powah:crystal_nitro",                "64x ad_astra:calorite_ingot",         'etrium_ingot')
    combining("avaritia:infinity_ingot",         "ad_astra:etrium_ingot",                "8x avaritia:infinity_catalyst",         'infinity_ingot')

    const colors = ['white','light_gray','gray','black','red','orange','yellow','lime','green','cyan','light_blue','blue','purple','magenta','pink','brown']
    colors.forEach(color => {
        combining('mekanism:steel_casing', `minecraft:${color}_concrete`, 'mekanism:alloy_infused', `steel_casing_from_${color}_concrete`)
    })
})
