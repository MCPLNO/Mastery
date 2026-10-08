StartupEvents.registry("mekanism:chemical", (event) => {
    // 白色混凝土
    event.create("mekanism:white_concrete")
        .tint("#FFFFFF")
        .displayName("白色混凝土");
    
    // 淡灰色混凝土
    event.create("mekanism:light_gray_concrete")
        .tint("#C0C0C0")
        .displayName("淡灰色混凝土");
    
    // 黑色混凝土
    event.create("mekanism:black_concrete")
        .tint("#1A1A1A")
        .displayName("黑色混凝土");

    event.create("mastery:lava")
        .tint("#FF4500")
        .displayName("Lava")
});
