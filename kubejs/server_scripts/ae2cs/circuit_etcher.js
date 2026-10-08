// server_scripts/ae2cs/circuit_etcher.js
ServerEvents.recipes(event => {
    const prefix = "mastery:recipes/ae2cs/circuit_etcher/";

    // ---- 晶簇电路板 ----
    event.custom({
        type: "ae2cs:circuit_etcher_recipe_serializer",
        result: { count: 36, id: "kubejs:cluster_processor" },
        input_a: { item: "minecraft:amethyst_block", count: 9 },
        input_b: { tag: "c:storage_blocks/silicon", count: 4 },
        input_c: { item: "minecraft:redstone_block", count: 4 },
        energy_cost: 57600.0
    }).id(prefix + "cluster_circuit_board");
});