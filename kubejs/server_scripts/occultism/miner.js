ServerEvents.recipes(event => {
    const prefix = "mastery:recipes/occultism/miner/"

    const recipes = [
        {
            "output": 'forbidden_arcanus:stellarite_piece',
            "weight": 700,
            "input": 'occultism:miner_foliot_unspecialized',
            "id": "stellarite_piece"
        },
        {
            "output": 'forbidden_arcanus:xpetrified_orb',
            "weight": 700,
            "input": 'occultism:miner_foliot_unspecialized',
            "id": "xpetrified_orb"
        }
    ]

    recipes.forEach(recipe => {
        let output = Item.of(recipe.output)
        event.recipes.occultism.miner(
            WeightedRecipeResult.of(output.getId(), output.getCount(), recipe.weight),
            recipe.input
        ).id(prefix + recipe.id)
    })
})