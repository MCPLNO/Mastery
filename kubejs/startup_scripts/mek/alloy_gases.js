// startup_scripts/alloy_gases.js
StartupEvents.registry("mekanism:chemical", (event) => {
    // === Mekanism 原版合金 ===
    
    // 灌注合金 -> 红色
    event.create("mastery:infused_alloy_gas")
        .tint("#FF0000") // 红色
        .fuel(10, 1000)
        .displayName("Infused Alloy Gas")

    // 强化合金 -> 亮蓝色
    event.create("mastery:reinforced_alloy_gas")
        .tint("#00BFFF") // 亮蓝色
        .fuel(1000, 4000)
        .displayName("Reinforced Alloy Gas")

    // 原子合金 -> 亮紫色
    event.create("mastery:atomic_alloy_gas")
        .tint("#8B00FF") // 亮紫色
        .fuel(10000, 8000)
        .displayName("Atomic Alloy Gas")

    // === MEKE 扩展合金 ===
    
    // 辐光合金 -> 亮黄色
    event.create("mastery:radiance_alloy_gas")
        .tint("#FFD700")
        .fuel(100000, 16000)
        .displayName("Radiance Alloy Gas")

    // 热核合金 -> 橙红色
    event.create("mastery:thermonuclear_alloy_gas")
        .tint("#FF4500")
        .fuel(1000000, 32000)
        .displayName("Thermonuclear Alloy Gas")

    // 闪耀合金 -> 亮粉色
    event.create("mastery:shining_alloy_gas")
        .tint("#FF69B4")
        .fuel(10000000, 64000)
        .displayName("Shining Alloy Gas")

    // 光谱合金 -> 白色
    event.create("mastery:spectrum_alloy_gas")
        .tint("#FFFFFF")
        .fuel(100000000, 128000)
        .displayName("Spectrum Alloy Gas")
})
