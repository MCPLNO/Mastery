StartupEvents.registry('item', event => {
    // 紫水晶（晶簇）系列
    event.create('kubejs:cluster_press')
        .texture('kubejs:item/cluster_press')
    
    event.create('kubejs:cluster_circuit_board')
        .texture('kubejs:item/cluster_circuit_board');
    
    event.create('kubejs:cluster_processor')
        .texture('kubejs:item/cluster_processor');
});