// startup_scripts/infinity_cells.js
StartupEvents.registry("item", event => {

    // ---- 空白样板无限元件 ----
    event.create("blank_pattern_cell", "custom_infinity_cell")
        .texture("kubejs:item/blank_pattern_cell")
        .itemType("ae2:blank_pattern")
        .cellModel("kubejs:block/drive/blank_pattern_cell");

    // ---- 反物质粒 ----
    event.create("pellet_antimatter_cell", "custom_infinity_cell")
        .texture("kubejs:item/pellet_antimatter_cell")
        .itemType("mekanism:pellet_antimatter")
        .cellModel("kubejs:block/drive/pellet_antimatter_cell");
});