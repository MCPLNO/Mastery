ServerEvents.recipes(event => {
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000,
        input_fluid: {
            amount: 1000,
            ingredient: { fluid: 'minecraft:water' }
        },
        input_items: [
            { amount: 1, ingredient: { item: 'justdirethings:polymorphic_catalyst' } },
            { amount: 1, ingredient: { item: 'justdirethings:time_crystal' } }
        ],
        output: {
            "#": 1000,
            "#t": "ae2:f",
            "id": "justdirethings:time_fluid_source"
        }
    })
    event.custom({
        type: 'advanced_ae:reaction',
        input_energy: 1000000,
        input_fluid: {
            amount: 16000,
            ingredient: { fluid: 'advanced_ae:quantum_infusion_source' }
        },
        input_items: [
            { amount: 64, ingredient: { item: 'ae2:singularity' } },
            { amount: 16, ingredient: { item: 'minecraft:nether_star' } },
            { amount: 32, ingredient: { item: 'advanced_ae:quantum_alloy_plate' } }
        ],
        output: {
            "#": 1,
            "#t": "ae2:i",
            "id": "extendedae_plus:oblivion_singularity"
        }
    })

})