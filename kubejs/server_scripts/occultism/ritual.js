// server_scripts/occultism/ritual.js
ServerEvents.recipes(event => {
    const prefix = "mastery:occultism/ritual/"

    // 异界树苗：8辐光合金 + 水晶矩阵块 → 修菲斯的倒转之塔
    event.recipes.occultism.ritual(
        'occultism:otherworld_sapling',              // 输出
        [                                            // 输入（8个）
            'mekanism_extras:alloy_radiance',
            'mekanism_extras:alloy_radiance',
            'mekanism_extras:alloy_radiance',
            'mekanism_extras:alloy_radiance',
            'mekanism_extras:alloy_radiance',
            'mekanism_extras:alloy_radiance',
            'mekanism_extras:alloy_radiance',
            'mekanism_extras:alloy_radiance'
        ],
        'avaritia:crystal_matrix',
        'occultism:craft_marid'                     // 修菲斯的倒转之塔
    ).duration(10).id(prefix + 'otherworld_sapling')
        event.recipes.occultism.ritual(
        'justdirethings:gooblock_tier1',
        [
            'occultism:otherworld_log',
            'mekanism_extras:alloy_radiance',
            'forbidden_arcanus:arcane_crystal_block',
            'avaritia:diamond_lattice_block',
            'occultism:otherworld_log',
            'mekanism_extras:alloy_radiance',
            'forbidden_arcanus:arcane_crystal_block',
            'avaritia:diamond_lattice_block'
        ],
        "extendedcrafting:basic_table",
        'occultism:craft_foliot'
    ).duration(10).id('mastery:occultism/ritual/gooblock_tier1')
})
