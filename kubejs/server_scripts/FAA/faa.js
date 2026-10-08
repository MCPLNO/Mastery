// server_scripts/example.js
ServerEvents.recipes(event => {
    event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('ars_nouveau:novice_spell_book')
        ),
        'ars_nouveau:worn_notebook'        // 锻炉中央：磨损的笔记
    )
    .addInput('ae2lt:pigmee_fumo', 1)      // 基座上：Pigmee Fumo
    .tier(1)
    .matchTierExact(false)
    event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('forbidden_arcanus:netherite_blacksmith_gavel')
        ),
        'minecraft:white_concrete'
    )
    .addInput('minecraft:light_gray_concrete', 8)
    .tier(1)
    .matchTierExact(false)
    event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('mekanism:metallurgic_infuser')
        ),
        'minecraft:white_concrete'
    )
    .addInput('minecraft:light_gray_concrete', 1)
    .tier(1)
    .matchTierExact(false)
        // 化学氧化机：2白色混凝土 + 2淡灰色混凝土
    event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('mekanism:chemical_oxidizer')
        ),
        'minecraft:white_concrete'        // 锻炉中央：白色混凝土
    )
    .addInput('minecraft:white_concrete', 1)           // 基座1：白色混凝土
    .addInput('minecraft:light_gray_concrete', 2)      // 基座2：淡灰色混凝土 ×2
    .tier(1)
    .matchTierExact(false)
        // 种植站：1白色混凝土 + 1黑色混凝土
    event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('mekmm:planting_station')
        ),
        'minecraft:white_concrete'         // 锻炉中央：白色混凝土
    )
    .addInput('minecraft:black_concrete', 1)  // 基座：黑色混凝土
    .tier(1)
    .matchTierExact(false)
    event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('minecraft:crafting_table')
        ),
        'minecraft:white_concrete'        // 锻炉中央：白色混凝土
    )
    .addInput('minecraft:white_concrete', 3)  // 基座：3个白色混凝土
    .addInput('minecraft:light_gray_concrete', 1)  // 基座：1个淡灰色混凝土
    .tier(1)
    .matchTierExact(false)
    event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('mekanism:pressurized_reaction_chamber')
        ),
        'mekanism:metallurgic_infuser'      // 锻炉中央：冶金灌注机
    )
    .addInput('minecraft:black_concrete', 8)  // 基座：8个黑色混凝土
    .tier(1)
    .matchTierExact(false)
    event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('16x minecraft:ender_pearl')
        ),
        'mekanism:alloy_infused'             // 锻炉中央：灌注合金
    )
    .addInput('mekanism:alloy_atomic', 8)    // 基座：8个原子合金
    .tier(1)
    .matchTierExact(false)

    event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('8x occultism:otherrock')
        ),
        'mekanism:alloy_atomic'              // 锻炉中央：原子合金
    )
    .addInput('minecraft:cobblestone', 8)    // 基座：8个圆石
    .essences(1, 1, 1, 0)
    .tier(1)
    .matchTierExact(false)
        event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('occultism:chalk_void')
        ),
        'mekanism_extras:alloy_radiance'     // 锻炉中央：辐光合金
    )
    .addInput('minecraft:white_concrete', 8) // 基座：8个白色混凝土
    .tier(2)                                 // 锻炉2级
    .matchTierExact(false)
        event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('8x mekanism_extras:alloy_radiance')
        ),
        'mekanism_extras:enriched_radiance'      // 锻炉中央：辐光精华
    )
    .addInput('mekanism:alloy_atomic', 8)        // 基座：8个原子合金
    .tier(2)                                     // 需要锻炉2级
    .matchTierExact(false)
        event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of("mekanism:yellow_cake_uranium", )
        ),
        "mekanism:ingot_uranium"
    )
    .addInput("avaritia:crystal_matrix", 8)
    .tier(1)
    .matchTierExact(false)
        event.recipes.forbidden_arcanus.ritual(
        RitualResults.ofCreateItemResult(
            Item.of('mysticalagriculture:aluminum_seeds')
        ),
        'ae2:singularity'
    )
    .addInput("ae2omnicells:singularity_block", 4)
    .addInput("mysticalagriculture:inferium_essence", 4)
    .tier(2)
    .matchTierExact(false)
        event.recipes.forbidden_arcanus.ritual(
            RitualResults.ofCreateItemResult(
                Item.of("create:mechanical_press", )
            ),
            "create:andesite_casing"
        )
        .addInput("create:shaft", 4)
        .addInput("minecraft:iron_block", 4)
        .tier(3)
        .matchTierExact(false)

})
