// kubejs/startup_scripts/portal.js

let $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const CustomPortalBuilder = Java.loadClass("net.kyrptonaught.customportalapi.api.CustomPortalBuilder");

StartupEvents.postInit((event) => {

    CustomPortalBuilder.beginPortal()
        .frameBlock($ResourceLocation.parse("ae2omnicells:singularity_block"))
        .destDimID($ResourceLocation.parse("masterycore:crystal_world"))
        .lightWithItem($ResourceLocation.parse("ae2:singularity"))
        .tintColor(97, 208, 160)
        .registerPortal();

});
