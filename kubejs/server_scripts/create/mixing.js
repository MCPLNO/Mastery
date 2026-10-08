ServerEvents.recipes(event=>{
event.recipes.create.mixing(['8x createmoremachines:beyond_alloy'], ['32x mekanism_extras:alloy_spectrum', '4x extendedae_plus:infinity_core', 'ars_nouveau:summon_focus']).superheated()
event.recipes.create.mixing(["8x createmoremachines:end_alloy"], ['16x createmoremachines:netherite_alloy', Fluid.of('justdirethings:time_fluid_source', 1000), '16x ae2:sky_dust', "16x forbidden_arcanus:eternal_stella"]).superheated()
})