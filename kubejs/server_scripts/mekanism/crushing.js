ServerEvents.recipes(event => {
    const NS = 'mastery:mekanism/crushing'

    const crushing = (output, input, id) => {
        event.recipes.mekanism.crushing(output, input).id(`${NS}/${id}`)
    }

    crushing('forbidden_arcanus:arcane_crystal',    'occultism:burnt_otherrock',        'arcane_crystal_from_burnt_otherrock')
    crushing('minecraft:glowstone_dust',            'forbidden_arcanus:arcane_crystal', 'glowstone_dust_from_arcane_crystal')
    crushing('occultism:spirit_attuned_gem',        'minecraft:diamond_block',          'spirit_attuned_gem_from_diamond_block')
    crushing('ars_nouveau:purple_archwood_sapling', 'occultism:otherworld_sapling',     'purple_archwood_sapling')
    crushing('minecraft:netherite_scrap', 'ad_astra:moon_sand',     'netherite_scrap_from_moon_sand')
    crushing('ae2lt:firmament_dust','8x createmoremachines:beyond_alloy','dust_from_alloy')

    const colors = ['white','light_gray','gray','black','red','orange','yellow','lime','green','cyan','light_blue','blue','purple','magenta','pink','brown']
    colors.forEach(color => {
        crushing('minecraft:cobblestone', `minecraft:${color}_concrete`, `cobblestone_from_${color}_concrete`)
    })
})
