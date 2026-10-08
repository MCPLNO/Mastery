

ServerEvents.recipes(event=>{
event.recipes.createSequencedAssembly(
    [Item.of('minecraft:oak_slab')],
    'minecraft:oak_log',
    [
        event.recipes.createCutting('mekanism:sawdust', 'mekanism:sawdust'),
        event.recipes.createPressing('mekanism:sawdust', 'mekanism:sawdust'),
        event.recipes.createDeploying('mekanism:sawdust', ['mekanism:sawdust', 'createmoremachines:beyond_alloy']),
        event.recipes.createDeploying('mekanism:sawdust', ['mekanism:sawdust', 'create:precision_mechanism']),
        event.recipes.createFilling('mekanism:sawdust', ['mekanism:sawdust', Fluid.of('justdirethings:time_fluid_source', 100)]),
        event.recipes.createDeploying('mekanism:sawdust', ['mekanism:sawdust', 'ae2lt:railgun_module_overload_execution']).keepHeldItem(),
        event.recipes.createDeploying('mekanism:sawdust', ['mekanism:sawdust', 'extendedae_plus:infinity_core']).keepHeldItem(),
        event.recipes.createDeploying('mekanism:sawdust', ['mekanism:sawdust', 'forbidden_arcanus:netherite_blacksmith_gavel']).keepHeldItem(),
        event.recipes.createCutting('mekanism:sawdust', 'mekanism:sawdust'),
        event.recipes.createPressing('mekanism:sawdust', 'mekanism:sawdust'),
        event.recipes.createDeploying('mekanism:sawdust', ['mekanism:sawdust', 'ae2:creative_energy_cell']).keepHeldItem(),
    ]
).transitionalItem('mekanism:sawdust').loops(32).id('mastery:recipes/create/sequenced_assembly/oak_slab')
})