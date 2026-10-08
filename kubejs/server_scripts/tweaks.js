// server_scripts/tweaks.js
ServerEvents.tick(event => {
    const { server } = event

    // 关掉天气（永远晴天）
    server.runCommandSilent('weather clear 1000000')

    // 锁定时间（设为中午）
    server.runCommandSilent('time set noon')
    server.runCommandSilent('gamerule doDaylightCycle false')
})

// 加载世界时执行一次
ServerEvents.loaded(event => {
    const { server } = event

    // 关掉生物生成
    server.runCommandSilent('gamerule doMobSpawning false')

    // 关掉游商
    server.runCommandSilent('gamerule doTraderSpawning false')

    // 关掉天气
    server.runCommandSilent('gamerule doWeatherCycle false')
    server.runCommandSilent('weather clear 1000000')

    // 锁定时间
    server.runCommandSilent('time set noon')
    server.runCommandSilent('gamerule doDaylightCycle false')
    server.runCommandSilent('gamerule waterSourceConversion false')
})
