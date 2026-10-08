ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.crush(
        'mekanism:crusher',
        [
            {
                stack: 'ae2:singularity',
                chance: 1.0,
                maxRange: 1
            }
        ]
    ).id('mastery:crush/crusher_to_singularity')
})
