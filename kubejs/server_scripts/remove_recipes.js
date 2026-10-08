ServerEvents.recipes(event => {
    event.remove({ id: 'forbidden_arcanus:ritual/upgrade_tier_2' })
    event.remove({ id: 'powah:crafting/dielectric_paste_2' })
    event.remove({ id: 'mekmm:recycler/from_dirt' })
    event.remove({ id: 'mekmm:recycler/from_stone' })
    event.remove({ id: 'mekmm:recycler/from_substrate' })
    event.remove({id:'create:crafting/materials/andesite_alloy'})
    event.remove({id:'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({id:'minecraft:netherite_ingot'})
    event.remove({id:'forbidden_arcanus:ritual/upgrade_tier_3'})
    event.remove({id:'create:filling/grass_block'})
    event.remove({ type: 'occultism:miner', miner: 'occultism:miner_foliot_unspecialized' })
    event.remove({ id: 'ae2cs:aggregator/budding_amethyst' })
    const itemsToRemove = [
    'packagedauto:packaging_provider',
    'ae2:blank_pattern',
    'ae2:pattern_provider',
    'extendedae:ex_pattern_provider',
    'extendedae:ex_molecular_assembler',
    'avaritia:crystal_matrix_ingot',
    'mekanism_extras:qio_drive_singularity',
    'ae2:cell_component_4k',
    'mekanism:pressurized_reaction_chamber',
    'ae2:cell_component_1k',
    'ae2:crafting_terminal',
    'mekmm:planting_station',
    'mekanism:chemical_oxidizer',
    'mekanism:metallurgic_infuser',
    'ars_nouveau:novice_spell_book',
    "mekanism_extras:alloy_radiance",
    "extendedcrafting:compressor",
    "avaritia:diamond_lattice",
    "mekanism:yellow_cake_uranium",
    "extendedcrafting:basic_table",
    "extendedcrafting:advanced_table",
    "justdirethings:gooblock_tier1",
    "occultism:celestial_chalice",
    "ars_nouveau:glyph_crush",
    "actuallyadditions:atomic_reconstructor",
    "ae2:condenser",
    'advanced_ae:reaction_chamber',
    "ae2:cell_component_16k",
    'neoecoae:integrated_working_station',
    "ae2:basic_card",
    'mekmm:recycler',
    'ad_astra:nasa_workbench',
    'ad_astra:rocket_nose_cone',
    'ad_astra:steel_engine',
    'ad_astra:gas_tank',
    "forbidden_arcanus:mundabitur_dust",
    "ae2cs:crystal_aggregator",
    "create:mechanical_press",
    "avaritia:sculk_crafting_table",
    "powah:dielectric_paste",
    "mysticalagriculture:infusion_pedestal",
    "mysticalagriculture:infusion_altar",
    "mysticalagriculture:prudentium_essence",
    "mekanismgenerators:control_rod_assembly",
    "mekanismgenerators:fission_fuel_assembly",
    "mekanismgenerators:fission_reactor_casing",
    "extendedae_plus:infinity_core",
    "extendedae_plus:infinity_biginteger_cell",
    "mekanism_extras:enriched_shining",
    "mekanism_extras:enriched_spectrum",
    "avaritia:infinity_catalyst",
    "mekanism:pellet_antimatter",
    "mekmm:large_wind_generator",
    "mekmm:large_heat_generator",
    "mysticalagriculture:imperium_essence",
    "avaritia:infinity_catalyst",
    'avaritia:extreme_crafting_table',
    'ars_nouveau:summon_focus',
    'createmoremachines:beyond_alloy',
    'minecraft:oak_log',
    'minecraft:oak_planks',
    'minecraft:oak_sapling',
    'minecraft:oak_slab',
    "createmoremachines:end_alloy",
    "mekanism_extras:alloy_shining",
    "ae2lt:pigmee_fumo",
    "avaritia:infinity_ingot",
    "avaritia:upgrade_smithing_template",
    "packagedauto:package_component",
    'avaritia:singularity[avaritia:singularity_id="avaritia:glowstone"]',
    "minecraft:amethyst_block",
    "ae2omnicells:spent_nuclear_waste_component",
    "ae2omnicells:spent_nuclear_waste_cell",
    "ae2omnicells:spent_nuclear_waste_singularity",
    "mekanism:creative_chemical_tank",
    "mekmm:uu_matter",
    "mekmm:scrap_box",
    "mekanism:creative_bin",
    "extendedae_plus:oblivion_singularity"
    ]

    itemsToRemove.forEach(item => {
        try {
            Item.of(item)
            event.remove({ output: item })
        } catch (e) {
            console.log(`物品 ${item} 不存在，跳过移除`)
        }
    })
})
