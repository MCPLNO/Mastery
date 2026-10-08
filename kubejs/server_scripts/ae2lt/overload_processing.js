ServerEvents.recipes(event => {
    event.custom({type: 'ae2lt:overload_processing',
        inputs: [
        {ingredient: { item: 'justdirethings:polymorphic_catalyst' },count: 64}, 
        {ingredient: { item: 'justdirethings:time_crystal' },count: 64}
        ],
        inputFluid: {id: 'minecraft:water',amount: 64000},
        resultFluid: {id: 'justdirethings:time_fluid_source',amount: 64000},
        totalEnergy: 20000,
        lightningCost: 1,
        lightningTier: 'high_voltage'
    });
});