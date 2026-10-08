ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "item_input": { "count": 4, "item": "avaritia:sculk_crafting_table" },
        "chemical_input": { "amount": 3, "chemical": "mekanism:antimatter" },
        "output": { "count": 1, "id": "avaritia:nether_crafting_table" },
        "duration": 90,
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "item_input": { "count": 1, "item": "mysticalagriculture:prudentium_essence" },
        "chemical_input": { "amount": 3, "chemical": "mekanism:antimatter" },
        "output": { "count": 32, "id": "mysticalagriculture:tertium_essence" },
        "duration": 9,
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "item_input": { "count": 16, "item": "extendedae_plus:infinity_core" },
        "chemical_input": { "amount": 10000, "chemical": "mekmm:uu_matter" },
        "output": { "count": 32, "id": "extendedae_plus:infinity_core"},
        "duration": 9,
        "per_tick_usage": false
    })
    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "item_input": { "count": 16, "item": "mekmm:empty_crystal"},
        "chemical_input": { "amount": 10000, "chemical": "mekanism:antimatter" },
        "output": { "count": 32, "id": "mekmm:uu_matter"},
        "duration": 9,
        "per_tick_usage": false
    })


})