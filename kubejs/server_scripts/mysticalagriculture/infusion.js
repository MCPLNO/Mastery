ServerEvents.recipes(event=> {
    event.custom({
    "type": "mysticalagriculture:infusion",
    "input": { "item": "minecraft:string" },
    "ingredients": [
        { "item": "minecraft:bone_meal" },
        { "item": "minecraft:iron_ingot" },
        { "item": "minecraft:bone_meal" },
        { "item": "minecraft:iron_ingot" },
        { "item": "minecraft:bone_meal" },
        { "item": "minecraft:iron_ingot" },
        { "item": "minecraft:bone_meal" },
        { "item": "minecraft:iron_ingot" }
    ],
    "result": { "id": "minecraft:ghast_tear", "count": 8}
}).id("mastery:recipes/mysticalagriculture/infusion/coal_block")
})