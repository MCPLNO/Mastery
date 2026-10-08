ServerEvents.recipes(event => {
    event.stonecutting('kubejs:cluster_press', 'ae2cs:blank_print_press')
    const prefix = "kubejs:ae2/inscriber/";
    const recipes = [
        {
            top: 'kubejs:cluster_press',
            middle: 'minecraft:amethyst_shard',
            bottom: false,
            mode: 2,
            output: 'kubejs:cluster_circuit_board',
            output_amount: 1,
            id: 'cluster_circuit_board'
        },

        {
            top: 'kubejs:cluster_circuit_board',
            middle: 'minecraft:redstone',
            bottom: 'ae2:printed_silicon',
            mode: 1,
            output: 'kubejs:cluster_processor',
            output_amount: 1,
            id: 'cluster_processor'
        }
    ];

    recipes.forEach(recipe => {
        const mode = recipe.mode === 1 ? "press" : "inscribe";
        const ingredients = { middle: { item: recipe.middle }, top: { item: recipe.top } };
        if (recipe.bottom !== false) {
            ingredients.bottom = { item: recipe.bottom };
        }

        event.custom({
            type: "ae2:inscriber",
            ingredients: ingredients,
            mode: mode,
            result: { id: recipe.output, count: recipe.output_amount }
        }).id(prefix + recipe.id);
    });
});