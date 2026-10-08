
const $Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks")

// 监听无限流体生成事件（Forge 原生事件）
NativeEvents.onEvent("net.neoforged.neoforge.event.level.block.CreateFluidSourceEvent", event => {
    try {
        const fluid = event.getFluidState().getType()
        const level = event.getLevel()
        const pos = event.getPos()
        const fluidName = fluid.toString()

        // 阻止熔岩无限生成
        if (fluidName === "minecraft:lava") {
            event.setCanceled(true)
            const player = level.getNearestPlayer(pos.x, pos.y, pos.z, 10, null)
            if (player) {
                player.tell('§c[MasteryAE] Lava cannot form an infinite source here!')
            }
        }

        // 阻止水无限生成
        if (fluidName === "minecraft:water") {
            event.setCanceled(true)
            const player = level.getNearestPlayer(pos.x, pos.y, pos.z, 10, null)
            if (player) {
                player.tell('§c[MasteryAE] Water cannot form an infinite source here!')
            }
        }

    } catch (err) {
        console.warn("CreateFluidSourceEvent error: " + err.message)
    }
})

// 阻止玩家放置熔岩桶
ItemEvents.rightClicked(event => {
    const { player, item } = event
    if (item.id === 'minecraft:lava_bucket') {
        event.cancel()
        player.tell('§c[MasteryAE] You cannot place lava in this world!')
    }
})
