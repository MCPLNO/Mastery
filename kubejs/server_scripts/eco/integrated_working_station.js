ServerEvents.recipes(event => {
  event.custom({
    type: "neoecoae:integrated_working_station",
    energy: 1000,
    inputFluid: {
      amount: 1000,
      fluid: "mekanism:nutritional_paste"
    },
    inputItems: [
      { count: 16, item: "minecraft:dirt" }
    ],
    itemOutput: {
      count: 16,
      id: "mysticalagriculture:inferium_essence"
    }
  }).id("mastery:inferium_essence_from_dirt")
})
