// server_scripts/startup.js
PlayerEvents.loggedIn(event => {
    const { player } = event
    player.tell('§a[MasteryAE] §fYou are playing MasteryAE, created by CurseForge creator NotPlayMine. Completely free!')
})
