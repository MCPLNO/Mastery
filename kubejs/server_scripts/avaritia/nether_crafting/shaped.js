ServerEvents.recipes(mastery => {
    mastery.custom({
        "type": "avaritia:shaped_table",
        "key": {
            "A": { "item": "ae2cs:purified_meteor_crystal" },
            "B": { "item": "ae2cs:purified_resonating_crystal" },
            "C": { "item": "enderdrives:ender_storage_component_256k" },
            "D": { "item": "ae2cs:purified_redstone_crystal" },
            "E": { "item": "ae2cs:purified_quantum_crystal" },
            "F": { "item": "ae2cs:purified_energized_fluix_crystal" },
            "G": { "item": "neoecoae:eco_source_cell_housing" },
            "H": { "item": "ae2omnicells:omni_cell_component_256k" },
            "I": { "item": "neoecoae:eco_fe_cell_housing" },
            "J": { "item": "ae2cs:purified_rose_quartz" },
            "K": { "item": "ae2cs:purified_nether_quartz_crystal" },
            "L": { "item": "neoecoae:eco_lightning_cell_housing" },
            "M": { "item": "ae2omnicells:complex_omni_cell_component_256k" },
            "N": { "item": "neoecoae:eco_quantum_omni_cell_housing" },
            "O": { "item": "ae2cs:purified_fluix_crystal" },
            "P": { "item": "ae2cs:purified_irradiated_crystal" },
            "Q": { "item": "neoecoae:eco_complex_omni_cell_housing" },
            "R": { "item": "ae2omnicells:quantum_omni_cell_component_256k" },
            "S": { "item": "neoecoae:eco_omni_cell_housing" },
            "T": { "item": "ae2cs:purified_ender_quartz" },
            "U": { "item": "ae2cs:purified_link_crystal" },
            "V": { "item": "ae2cs:purified_entro_crystal" },
            "W": { "item": "ae2lt:lightning_cell_component_v" },
            "X": { "item": "neoecoae:cryotheum_crystal" },
            "Y": { "item": "ae2cs:purified_certus_quartz_crystal" }
        },
        "pattern": [
            "ABCDE",
            "FGHIJ",
            "KLMNO",
            "PQRST",
            "UVWXY"
        ],
        "result": {
            "count": 16,
            "id": "avaritia:infinity_catalyst"
        },
        "tier": 2
    }).id("mastery:recipes/avaritia/nether_crafting/shaped/infinity_catalyst")

    mastery.custom({
        "type": "avaritia:shaped_table",
        "key": {
            "A": { "item": "mysticalagriculture:tertium_essence" }
        },
        "pattern": [
            "AAAAA",
            "AAAAA",
            "AAAAA",
            "AAAAA",
            "AAAAA"
        ],
        "result": {
            "count": 1,
            "id": "mysticalagriculture:imperium_essence"
        },
        "tier": 2
    }).id("mastery:recipes/avaritia/nether_crafting/shaped/imperium_essence")

    mastery.custom({
        "type": "avaritia:shaped_table",
        "key": {
            "A": { "item": "minecraft:snowball" },
            "B": { "item": "ae2lt:lightning_collapse_matrix" },
            "C": { "item": "mysticalagradditions:creative_essence" },
            "D": { "item": "avaritia:infinity_catalyst" },
            "E": { "item": "mekanism_extras:alloy_spectrum" },
            "F": { "item": "ae2omnicells:creative_ae_cell_long" }
        },
        "pattern": [
            "ABCBA",
            "BDEDB",
            "CFDFC",
            "BDEDB",
            "ABCBA"
        ],
        "result": {
            "count": 1,
            "id": "avaritia:extreme_crafting_table"
        },
        "tier": 2
    }).id("mastery:recipes/avaritia/nether_crafting/shaped/extreme_crafting_table")
})