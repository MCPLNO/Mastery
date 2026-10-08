// server_scripts/FAA/upgrade_ritual.js
const $RitualInput = Java.loadClass("com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.RitualInput")

ServerEvents.recipes(event => {
    const prefix = "mastery:forbidden_arcanus/upgrade_ritual/"

    const recipes = [
        {
            "upgrade_tier": 2,
            "input": "forbidden_arcanus:arcane_crystal_block",
            "inputs": [
                "avaritia:crystal_matrix",
                "avaritia:crystal_matrix",
                "avaritia:crystal_matrix",
                "avaritia:crystal_matrix",
                "avaritia:crystal_matrix",
                "avaritia:crystal_matrix",
                "avaritia:crystal_matrix",
                "avaritia:crystal_matrix"
            ],
            "duration": 2.0,
            "essence": [0, 0, 0, 0],
            "tier": 1,
            "id": "hephaestus_forge_tier_2"
        },
        {
            "upgrade_tier": 3,
            "input": "create:andesite_casing",
            "inputs": [
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:mundabitur_dust",
                "forbidden_arcanus:mundabitur_dust"
            ],
            "duration": 3.0,
            "essence": [0, 0, 0, 0],
            "tier": 2,
            "id": "hephaestus_forge_tier_3"
        }
    ]

    recipes.forEach(recipe => {
        const i = []
        recipe.inputs.forEach(input => {
            i.push(new $RitualInput(input, 1))
        })

        event.recipes.forbidden_arcanus.ritual(
            RitualResults.ofUpgradeTierResult(recipe.upgrade_tier),
            recipe.input
        )
        .inputs(i)
        .duration(recipe.duration)
        .essences(recipe.essence[0], recipe.essence[1], recipe.essence[2], recipe.essence[3])
        .forgeTier(recipe.tier)
        .magicCircles("forbidden_arcanus:upgrade_tier")
        .id(prefix + recipe.id)
    })
})
