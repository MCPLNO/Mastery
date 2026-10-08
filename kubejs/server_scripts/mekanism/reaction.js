ServerEvents.recipes(event => {
    const NS = 'mastery:mekanism/reaction'

    const reaction = (itemOut, itemIn, fluidIn, gasIn, gasOut, id) => {
        event.recipes.mekanism.reaction(itemIn, fluidIn, gasIn)
            .itemOutput(itemOut)
            .chemicalOutput(gasOut)
            .duration(100)
            .id(`${NS}/${id}`)
    }

    reaction('64x mekanism:alloy_infused', 'minecraft:black_concrete', '1000x minecraft:lava', 'mekanism:white_concrete', '1000x mekanism:water_vapor', 'infused_alloy_from_concrete')
    reaction('9x minecraft:rotten_flesh',  'avaritia:diamond_lattice', '1000x minecraft:water', 'mastery:lava',           '1000x mastery:lava',          'rotten_flesh_from_diamond_lattice')
    reaction("minecraft:nether_star", "forbidden_arcanus:mundabitur_dust", "1000x createaddition:seed_oil","mastery:radiance_alloy_gas", "mastery:atomic_alloy_gas", "nether_star_from_mundabitur_dust")
    reaction("ae2omnicells:spent_nuclear_waste_singularity", "64x extendedae_plus:oblivion_singularity", "1000x advanced_ae:quantum_infusion_source", "1000x mekmm:uu_matter", "mastery:spectrum_alloy_gas", "spent_nuclear_waste_singularity_from_oblivion_singularity")
})
