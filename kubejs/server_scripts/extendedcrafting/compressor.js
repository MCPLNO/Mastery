// server_scripts/extendedcrafting/compressor.js
ServerEvents.recipes(event => {
    const prefix = "mastery:extendedcrafting/compressor/"
    event.custom({
        "type": "extendedcrafting:compressor",
        "power_cost": 21000000,
        "ingredient": {
            "item": "avaritia:crystal_matrix",
            "count": 200
        },
        "catalyst": {
            "item": "avaritia:crystal_matrix"
        },
        "result": {
            "id": "avaritia:diamond_lattice"
        }
    }).id(prefix + "diamond_lattice")
    event.custom({
        "type": "extendedcrafting:compressor",
        "power_cost": 21000000,
        "ingredient": {
            "item": "extendedae_plus:infinity_core",
            "count": 64
        },
        "catalyst": {
            "item": "extendedae_plus:infinity_core"
        },
        "result": {
            "id": "mekanism:creative_chemical_tank"
        }
    }).id(prefix + "diamond_lattice")
})
