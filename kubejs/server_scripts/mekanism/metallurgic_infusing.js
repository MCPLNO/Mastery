ServerEvents.recipes(event => {
    // 白色气体 + 淡灰色混凝土 -> 黑色混凝土
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:black_concrete',
        'minecraft:light_gray_concrete',
        '1000x mekanism:white_concrete'
    )
    
    // 黑色气体 + 白色混凝土 -> 淡灰色混凝土
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:light_gray_concrete',
        'minecraft:white_concrete',
        '1000x mekanism:black_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:redstone',
        'mekanism:alloy_infused',
        '10x mekanism:black_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'mekanism:ingot_osmium',
        'minecraft:redstone',
        '10x mekanism:black_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:iron_ingot',
        'mekanism:ingot_osmium',
        '10x mekanism:white_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'ae2:certus_quartz_crystal',
        'minecraft:gold_ingot',
        '10x mekanism:white_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:diamond',
        'minecraft:redstone',
        '10x mekanism:light_gray_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:coal',
        'minecraft:cobblestone',
        '10x mekanism:black_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'neoecoae:tungsten_ingot', 
        'neoecoae:aluminum_alloy_ingot',
         '10x mekanism:black_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        '8x mekanism_extras:alloy_shining',
         'createmoremachines:end_alloy', 
         '320x mekanism_extras:shining'
    )
    // 黑曜石：圆石 + 白色气体（高压压缩？）
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:obsidian',
        'minecraft:cobblestone',
        '20x mekanism:white_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:lapis_lazuli',
        'minecraft:coal',
        '10x mekanism:black_concrete'
    )
        // 金锭：铁锭 + 白色气体
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:gold_ingot',
        'mekanism:ingot_steel',
        '10x mekanism:white_concrete'
    )

    // 锡锭：铁锭 + 淡灰色气体
    event.recipes.mekanism.metallurgic_infusing(
        'mekanism:ingot_tin',
        'minecraft:iron_ingot',
        '10x mekanism:light_gray_concrete'
    )

    // 铀锭：锇锭 + 黑色气体
    event.recipes.mekanism.metallurgic_infusing(
        'mekanism:ingot_uranium',
        'mekanism:ingot_osmium',
        '10x mekanism:black_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:quartz',
        'ae2:certus_quartz_crystal',
        '10x mekanism:white_concrete'
    )
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:copper_ingot',
        'mekanism:ingot_uranium',
        '10x mekanism:light_gray_concrete'
    )
        event.recipes.mekanism.metallurgic_infusing(
        'occultism:otherstone',
        'occultism:otherrock',
        '10x mekanism:white_concrete'
    )
})
