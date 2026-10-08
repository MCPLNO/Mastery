ServerEvents.recipes(event => {
    event.custom({
        type: "ae2cs:crystal_aggregator_recipe_serializer",
        result: {
            count: 16,
            id: "forbidden_arcanus:mundabitur_dust"
        },
        input_a: {
            item: "minecraft:netherite_ingot",
            count: 8
        },
        input_b: {
            item: "create:andesite_alloy",
            count: 8
        },
        input_c: {
            item: "ae2cs:purified_certus_quartz_crystal",
            count: 8
        },
        energy_cost: 160.0
    }).id("mastery:recipes/ae2cs/aggregator/mundabitur_dust")
        event.custom({
        type: "ae2cs:crystal_aggregator_recipe_serializer",
        result: {
            count: 1,
            id: "ae2:quartz_cluster"
        },
        input_a: {
            item: "ae2:certus_quartz_crystal",
            count: 8
        },
        input_b: {
            item: "avaritia:crystal_matrix_ingot",
            count: 8
        },
        input_c: {
            item: "ae2cs:purified_certus_quartz_crystal",
            count: 8
        },
        energy_cost: 160.0
    }).id("mastery:recipes/ae2cs/aggregator/quartz_cluster")
})