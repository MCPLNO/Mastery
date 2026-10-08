ServerEvents.recipes(event => {
    event.recipes.occultism.ritual(
        'minecraft:diamond',
        ['minecraft:coal', 'minecraft:coal', 'minecraft:iron_ingot'],
        'minecraft:flint',
        'occultism:112233'
    ).dummy('mastery:112233');
});