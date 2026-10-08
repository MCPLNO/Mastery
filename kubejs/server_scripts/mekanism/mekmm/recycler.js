ServerEvents.recipes(event => {
    event.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 1,
            "item": "mekanism:ingot_uranium"
        },
        "chance": 1.0,
        "output": {
            "count": 1,
            "id": "mekanism:yellow_cake_uranium"
        }
    }).id("mastery:mekmm/recycler/from_uranium_ingot")
    event.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 1,
            "item": "mekanism_extras:alloy_radiance"
        },
        "chance": 1.0,
        "output": {
            "count": 16,
            "id": "minecraft:ender_pearl"
        }
    }).id("mastery:mekmm/recycler/alloy_radiance")
        event.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 4,
            "item": "mekanism:alloy_atomic"
        },
        "chance": 1.0,
        "output": {
            "count": 1,
            "id": "mekanism_extras:alloy_radiance"
        }
    }).id("mastery:mekmm/recycler/from_alloy_atomic")
        event.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 1,
            "item": "mekanism_extras:alloy_radiance"
        },
        "chance": 1.0,
        "output": {
            "count": 16,
            "id": "minecraft:ender_pearl"
        }
    }).id("mastery:mekmm/recycler/alloy_radiance")
    event.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 4,
            "item": "occultism:otherrock"
        },
        "chance": 1.0,
        "output": {
            "count": 8,
            "id": "ae2:sky_dust"
        }
    }).id("mastery:mekmm/recycler/from_otherrock")
            event.custom({
        "type": "mekmm:recycler",
        "input": {
            "count": 4,
            "item": "extendedae_plus:infinity_core"
        },
        "chance": 1.0,
        "output": {
            "count": 64,
            "id": "mekmm:scrap"
        }
    }).id("mastery:mekmm/recycler/from_otherrock")
})
