
ServerEvents.recipes(event => {
    const NS = "mastery:minecraft"
    const autoPath = (output) => output
        .replace(/^\d+x\s*/, '')
        .replace(/[\[\]].*$/, '')
        .replace(':', '/')
    const shaped = (output, pattern, key, id) => {
        event.shaped(output, pattern, key)
            .id(`${NS}/shaped/${id ?? autoPath(output)}`)
    }
    const shapeless = (output, inputs, id) => {
        event.shapeless(output, inputs)
            .id(`${NS}/shapeless/${id ?? autoPath(output)}`)
    }
    shaped('neoecoae:integrated_working_station', [
    'ABC',
    'DED',
    'FGH'
], {
    'A': '#ae2:inscriber_presses',
    'B': 'ae2:vibration_chamber',
    'C': '#ae2:inscriber_presses',
    'D': 'mekanism:steel_casing',
    'E': 'mekanismgenerators:gas_burning_generator',
    'F': 'ae2:inscriber',
    'G': 'extendedae:ex_molecular_assembler',
    'H': 'ae2:charger'
})
    shaped('mekanism:creative_energy_cube[mekanism:side_config={config:{energy:{eject:1b,side:{back:"output",bottom:"output",front:"output",left:"output",right:"output",top:"output"}},items:{side:{back:"input",bottom:"input",front:"output",left:"input",right:"input",top:"input"}}}},mekanism:energy={energy_containers:[L;9223372036854775807L]}]', [
    'ABA',
    'CDC',
    'ABA'
], {
    'A': 'ae2omnicells:quantum_omni_cell_component_256k',
    'B': 'ae2omnicells:omni_link_processor',
    'C': 'extendedae_plus:infinity_core',
    'D': 'mekanism_extras:infinite_energy_cube'
})
    shaped('ae2lt:pigmee_fumo', [
    'AAA',
    'ABA',
    'AAA'
], {
    'A': 'mekanism_extras:alloy_spectrum',
    'B': 'ae2lt:pigmee_core'
})
    shaped('8x minecraft:oak_planks', [
    'AAA',
    'ABA',
    'AAA'
], {
    'A': 'ae2:creative_energy_cell',
    'B': 'minecraft:oak_slab'
})
    shaped('16x extendedae_plus:infinity_core', [
    'ABC',
    'DEF',
    'GHI'
], {
    'A': 'ae2omnicells:omni_cell_component_256m',
    'B': 'neoecoae:eco_infinite_cell_component',
    'C': 'megacells:cell_component_256m',
    'D': 'ae2omnicells:complex_omni_cell_component_256m',
    'E': "avaritia:infinity_catalyst",
    'F': 'appliedcreate:stress_storage_component_256m',
    'G': 'ae2omnicells:quantum_omni_cell_component_256m',
    'H': 'appflux:core_256m',
    'I': 'ae2lt:bulk_lightning_cell_component'
})
    shapeless('64x mysticalagradditions:creative_essence', [
    'extendedae_plus:infinity_core'
])
    shaped('minecraft:oak_log', [
    'ABA',
    'CDE',
    'AFA'
], {
    'A': 'createmoremachines:beyond_alloy',
    'B': "avaritia:infinity_bucket",
    'C': 'avaritia:eternal_singularity',
    'D': 'extendedcrafting:flux_star',
    'E': 'extendedcrafting:ultimate_singularity',
    'F': 'minecraft:nether_star'
})
    shaped('packagedauto:package_component', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'minecraft:gold_ingot',
    'B': '#c:concretes',
    'C': 'minecraft:ender_pearl'
})
    shaped('ae2omnicells:creative_ae_cell_long', [
    'AAA',
    'ABA',
    'AAA'
], {
    'A': 'extendedae_plus:infinity_biginteger_cell',
    'B': 'avaritia:infinity_catalyst'
})
    shaped('minecraft:amethyst_block', [
    'AA ',
    'AA ',
    '   '
], {
    'A': 'minecraft:amethyst_shard'
})
    shaped('ae2omnicells:spent_nuclear_waste_component', [
    'ABA',
    'CDC',
    'AEA'
], {
    'A': 'mekanism:hdpe_sheet',
    'B': 'mekanism:pellet_antimatter',
    'C': 'mekanism_extras:infinite_radioactive_waste_barrel',
    'D': 'ae2omnicells:quantum_omni_cell_component_256m',
    'E': 'ae2omnicells:spent_nuclear_waste_singularity'
})
    shaped('ae2omnicells:spent_nuclear_waste_cell', [
    '   ',
    'ABC',
    '   '
], {
    'A': 'minecraft:oak_planks',
    'B': 'ae2omnicells:spent_nuclear_waste_component',
    'C': 'extendedae_plus:infinity_biginteger_cell'
})
    shaped('create:creative_motor', [
    ' A ',
    ' B ',
    ' C '
], {
    'A': 'create:mechanical_press',
    'B': 'mekanism:ultimate_energy_cube',
    'C': 'ae2:16k_crafting_storage'
})
    shapeless('kubejs:blank_pattern_cell', [
    'infinitypattern:infinite_empty_pattern'
])
    shapeless('infinitypattern:infinite_empty_pattern', [
    'kubejs:blank_pattern_cell'
])

    shapeless('extendedae_plus:infinity_biginteger_cell', [
    'extendedae_plus:infinity_core',
    'ae2:item_cell_housing'
])
    shaped('16x mekanism_extras:enriched_spectrum', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'mekanism:pellet_antimatter',
    'B': 'mekanism_extras:enriched_shining',
    'C': 'extendedae_plus:infinity_core'
})
    shaped('32x mekanism_extras:enriched_shining', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'mekanism:pellet_antimatter',
    'B': 'mekanism_extras:enriched_thermonuclear',
    'C': 'extendedae_plus:infinity_core'
})
    shaped('64x mekanismgenerators:fission_fuel_assembly', [
    'ABA',
    'CAC',
    'CAC'
], {
    'A': 'mekanism:reprocessed_fissile_fragment',
    'B': 'mekanism:elite_control_circuit',
    'C': 'mekanism:ingot_steel'
})
    shaped('64x mekanismgenerators:control_rod_assembly', [
    'ABA',
    'ACA',
    'ABA'
], {
    'A': 'mekanism:reprocessed_fissile_fragment',
    'B': 'mekanism:ingot_steel',
    'C': 'mekanism:basic_chemical_tank'
})    
    shaped('64x mekanism:reprocessed_fissile_fragment', [
    'A  ',
    ' B ',
    '  C'
], {
    'A': 'ae2omnicells:omni_cell_component_256k',
    'B': 'ae2omnicells:quantum_omni_cell_component_256k',
    'C': 'ae2omnicells:complex_omni_cell_component_256k'
})
    shaped('minecraft:string', [
    ' AA',
    'A A',
    'AA '
], {
    'A': 'minecraft:bone_meal'
})
    shapeless('4x minecraft:snowball', [
    'minecraft:snow_block'
])
    shaped('create:creative_blaze_cake', [
    'AAA',
    'ABA',
    'AAA'
], {
    'A': 'createmoremachines:netherite_alloy_block',
    'B': 'minecraft:blaze_rod'
})
    shaped('avaritia:sculk_crafting_table', [
    'ABA',
    'CDC',
    'ABA'
], {
    'A': 'createmoremachines:netherite_alloy_block',
    'B': 'avaritia:double_compressed_crafting_table',
    'C': 'ae2omnicells:singularity_block',
    'D': 'create:creative_blaze_cake'
})
    shaped('mysticalagriculture:prosperity_shard', [
    ' A ',
    'A A',
    ' A '
], {
    'A': 'minecraft:snowball'
})
    shaped('64x mysticalagriculture:prudentium_essence', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'mysticalagriculture:prosperity_shard',
    'B': 'mysticalagriculture:inferium_essence',
    'C': 'ae2lt:lightning_cell_component_i'
})
    shaped('create:blaze_burner', [
    ' A ',
    'ABA',
    ' A '
], {
    'A': 'minecraft:blaze_rod',
    'B': 'create:empty_blaze_burner'
})
    shapeless('packaged_faa:hephaestus_packaged', [
    'packagedauto:package_component',
    'forbidden_arcanus:hephaestus_forge_tier_1'
])
    shaped('ae2cs:crystal_aggregator', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'ad_astra:desh_nugget',
    'B': 'minecraft:netherite_ingot',
    'C': 'create:andesite_casing'
})
    shaped('8x create:andesite_alloy', [
    'AB ',
    'BA ',
    '   '
], {
    'A': 'ad_astra:cheese_block',
    'B': 'ad_astra:desh_nugget'
})
    shaped('ae2:basic_card', [
    'AB ',
    'CDB',
    'AB '
], {
    'A': 'minecraft:gold_ingot',
    'B': 'minecraft:iron_ingot',
    'C': 'minecraft:redstone',
    'D': 'ae2:certus_quartz_crystal'
})
    shaped('advanced_ae:reaction_chamber', [
    'ABA',
    'ACA',
    'DED'
], {
    'A': 'ae2:fluix_dust',
    'B': 'ae2:vibration_chamber',
    'C': 'mekanism:steel_casing',
    'D': '#c:glass_blocks',
    'E': 'minecraft:bucket'
})
    shaped('ae2:condenser', [
    'ABA',
    'BCB',
    'ABA'
], {
    'A': 'minecraft:iron_ingot',
    'B': '#c:glass_blocks',
    'C': 'ae2:singularity'
})
    shaped('mekmm:recycler', [
    '   ',
    ' A ',
    ' B '
], {
    'A': 'neoecoae:integrated_working_station',
    'B': 'ae2:creative_energy_cell'
})
    shaped('ad_astra:nasa_workbench', [
    'ABA',
    'CDC',
    'EFE'
], {
    'A': 'ad_astra:iron_rod',
    'B': 'ad_astra:steel_plate',
    'C': 'minecraft:redstone_torch',
    'D': 'neoecoae:eco_cell_component_16m',
    'E': 'mekanism:block_steel',
    'F': 'neoecoae:black_tungsten_alloy_casing'
})
    shaped('ad_astra:rocket_nose_cone', [
    ' A ',
    ' B ',
    'BBB'
], {
    'A': 'minecraft:lightning_rod',
    'B': 'neoecoae:black_tungsten_alloy_ingot'
})
    shaped('ad_astra:steel_engine', [
    'AAA',
    'ABA',
    ' C '
], {
    'A': 'neoecoae:black_tungsten_alloy_ingot',
    'B': 'ad_astra:engine_frame',
    'C': 'ad_astra:fan'
})
    shaped('ad_astra:gas_tank', [
    'AA ',
    'BB ',
    'BB '
], {
    'A': 'neoecoae:black_tungsten_alloy_dust',
    'B': 'neoecoae:black_tungsten_alloy_ingot'
})
    shaped('minecraft:netherite_ingot', [
    'AAA',
    'ABB',
    'BB '
], {
    'A': 'minecraft:netherite_scrap',
    'B': 'create:andesite_alloy'
})

    shapeless('forbidden_arcanus:netherite_blacksmith_gavel', [
        'ae2lt:pigmee_fumo'
    ])

    // === 桶 ===
    shaped('minecraft:bucket', [
        'C C',
        ' C '
    ], {
        C: 'minecraft:white_concrete'
    }, 'bucket_from_concrete')

    // === 熔岩桶 ===
    shaped('minecraft:lava_bucket', [
        'CCC',
        'CBC',
        'CCC'
    ], {
        C: 'minecraft:black_concrete',
        B: 'minecraft:bucket'
    }, 'lava_bucket')

    // === 样板供应器 ===
    shaped('ae2:pattern_provider', [
        'QCQ',
        'TBT',
        'QRQ'
    ], {
        Q: 'ae2:certus_quartz_crystal',
        C: 'minecraft:crafting_table',
        T: 'minecraft:iron_ingot',
        B: 'minecraft:redstone',
        R: 'minecraft:redstone'
    }, 'pattern_provider')

    // === 打包供应器 ===
    shaped('packagedauto:packaging_provider', [
        'FCF',
        'RPR',
        'FRF'
    ], {
        F: 'ae2:fluix_crystal',
        C: 'minecraft:crafting_table',
        R: 'minecraft:redstone',
        P: 'ae2:pattern_provider'
    }, 'packaging_provider')

    // === 样板编码终端 ===
    shaped('ae2:pattern_encoding_terminal', [
        'QFQ',
        'FCF',
        'QRQ'
    ], {
        Q: 'ae2:certus_quartz_crystal',
        F: 'ae2:fluix_crystal',
        C: 'ae2:crafting_terminal',
        R: 'minecraft:redstone'
    }, 'pattern_encoding_terminal')

    // === 扩展分子装配器 ===
    shaped('extendedae:ex_molecular_assembler', [
        'QFQ',
        'FCF',
        'QRQ'
    ], {
        Q: 'ae2:certus_quartz_crystal',
        F: 'ae2:fluix_crystal',
        C: 'minecraft:crafting_table',
        R: 'minecraft:iron_ingot'
    }, 'ex_molecular_assembler')

    shaped('advanced_ae:small_adv_pattern_provider', [
        'QFQ',
        'FPF',
        'QRQ'
    ], {
        Q: 'ae2:certus_quartz_crystal',
        F: 'ae2:fluix_crystal',
        P: 'ae2:pattern_provider',
        R: 'minecraft:redstone'
    }, 'small_adv_pattern_provider')

    shaped('avaritia:crystal_matrix_ingot', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'ae2:fluix_crystal',
        C: 'minecraft:ender_pearl',
        D: 'ae2:certus_quartz_crystal',
        E: 'mekanism:ingot_steel',
        F: 'minecraft:gold_ingot',
        G: 'minecraft:diamond',
        H: 'mekanism:alloy_reinforced',
        I: 'mekanism:alloy_atomic'
    }, 'crystal_matrix_ingot')

    shaped('extendedcrafting:compressor', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'occultism:otherworld_wood',
        B: 'occultism:otherworld_log'
    }, 'compressor')

    // === 基础合成台 ===
    shaped('extendedcrafting:basic_table', [
        'AB',
        'BB'
    ], {
        A: 'occultism:chalk_white_impure',
        B: 'minecraft:crafting_table'
    }, 'basic_table')

    shaped('mekanism:combiner', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_reinforced',
        B: 'mekanism:elite_control_circuit',
        C: 'minecraft:black_concrete',
        D: 'minecraft:white_concrete'
    }, 'combiner')

    // === 橙色混凝土 ===
    shapeless('minecraft:orange_concrete', [
        'minecraft:white_concrete'
    ], 'orange_concrete')

    shaped('ars_nouveau:glyph_crush', [
        ' A ',
        ' B ',
        'C D'
    ], {
        A: 'minecraft:leather',
        B: 'ars_nouveau:blank_glyph',
        C: 'minecraft:grindstone',
        D: 'minecraft:piston'
    }, 'ars_nouveau_earth_essence')

    shaped('ars_nouveau:blank_glyph', [
        ' A ',
        'AAA',
        ' A '
    ], {
        A: 'minecraft:leather'
    }, 'ars_nouveau_blank_glyph')

    shaped('occultism:celestial_chalice', [
        'A A',
        ' A ',
        'AAA'
    ], {
        A: 'minecraft:white_concrete'
    }, 'occultism_celestial_chalice')

    shaped('minecraft:wither_skeleton_skull', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'occultism:otherrock'
    }, 'minecraft_wither_skeleton_skull')

    shaped('minecraft:skeleton_skull', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'occultism:otherstone'
    }, 'minecraft_skeleton_skull')

    shaped('minecraft:blaze_rod', [
        'A  ',
        'A  ',
        'A  '
    ], {
        A: 'minecraft:blaze_powder'
    }, 'minecraft_blaze_rod')
    shaped('9x avaritia:diamond_lattice', [
        'A'
    ], {
        A: 'avaritia:diamond_lattice_block'
    }, 'diamond_lattice_from_block')
})

ServerEvents.recipes(event => {
    event.smelting('occultism:otherworld_ashes', 'avaritia:diamond_lattice_block')
        .id('mastery:minecraft/smelting/otherworld_ashes_from_diamond_lattice_block')
    event.smelting('ae2lt:firmament_essence', 'ae2lt:firmament_dust')
        .id('mastery:minecraft/smlting/essence_from_dust')
})
