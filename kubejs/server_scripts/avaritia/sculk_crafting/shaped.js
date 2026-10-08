ServerEvents.recipes(event => {
    event.custom({
        "type": "avaritia:shaped_table",
        "key": {
            "A": { "item": "minecraft:charcoal" },
            "B": { "item": "minecraft:nether_star" }
        },
        "pattern": [
            "AAA",
            "ABA",
            "AAA"
        ],
        "result": {
            "count": 64,
            "id": "powah:dielectric_paste"
        },
        "tier": 1
    }).id("mastery:recipes/avaritia/sculk_crafting/shaped/dielectric_paste")
        event.custom({
        "type": "avaritia:shaped_table",
        "key": {
            "A": { "item": "minecraft:gold_ingot" },
            "B": { "item": "powah:dielectric_paste" },
            "C": { "item": "minecraft:stone" }
        },
        "pattern": [
            "ABA",
            " C ",
            "CCC"
        ],
        "result": {
            "count": 1,
            "id": "mysticalagriculture:infusion_altar"
        },
        "tier": 1
    }).id("mastery:recipes/avaritia/sculk_crafting/shaped/infusion_altar")

    event.custom({
        "type": "avaritia:shaped_table",
        "key": {
            "A": { "item": "minecraft:gold_ingot" },
            "B": { "item": "powah:dielectric_paste" },
            "C": { "item": "minecraft:stone" }
        },
        "pattern": [
            "ABA",
            " C ",
            " C "
        ],
        "result": {
            "count": 1,
            "id": "mysticalagriculture:infusion_pedestal"
        },
        "tier": 1
    }).id("mastery:recipes/avaritia/sculk_crafting/shaped/infusion_pedestal")
    event.custom({
        "type": "avaritia:shaped_table",
        "key": {
            "A": { "item": "minecraft:blaze_powder" },
            "B": { "item": "mysticalagriculture:prosperity_shard" },
            "C": { "item": "mysticalagriculture:prudentium_essence" },
            "D": { "item": "justdirethings:gooblock_tier1" }
        },
        "pattern": [
            "ABA",
            "CDC",
            "ABA"
        ],
        "result": {
            "count": 1,
            "id": "justdirethings:gooblock_tier2"
        },
        "tier": 1
    }).id("mastery:recipes/avaritia/sculk_crafting/shaped/gooblock_tier2")
})