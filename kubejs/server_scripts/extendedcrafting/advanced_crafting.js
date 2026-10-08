ServerEvents.recipes(event => {
    event.custom({
        type: "extendedcrafting:shaped_table",
        tier: 2,
        pattern: [
            "AIUIA",
            "IAUAI",
            "UURUU",
            "IAUAI",
            "AIUIA"
        ],
        key: {
            A: { item: "mekanism_extras:alloy_radiance" },
            I: { item: "minecraft:iron_ingot" },
            U: { item: "mekanism:ultimate_control_circuit" },
            R: { item: "avaritia:diamond_lattice_block" }
        },
        result: { id: "actuallyadditions:atomic_reconstructor" }
    }).id("mastery:recipes/extendedcrafting/advanced_table/atomic_reconstructor")
})
