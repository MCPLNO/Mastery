StartupEvents.registry("item", e => {
    e.create('mastery:112233', 'occultism:ritual_dummy')
        .pentacleType('summon')
        .displayName(Text.translate("item.mastery.112233"))
        .ritualTooltip(Text.translate("item.mastery.112233.tooltip"))
});