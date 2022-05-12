// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {

event.shapeless(Item.of('minecraft:chest'), ['#forge:chests/wooden'])
event.shapeless(Item.of('minecraft:dragon_breath', 1), ['minecraft:glass_bottle', 'forbidden_arcanus:golden_dragon_scale', 'mysticalagriculture:air_essence'])
event.shapeless(Item.of('ironfurnaces:rainbow_plating', 4), ['minecraft:furnace', '#forge:furnaces/copper', '#forge:furnaces/iron', '#forge:furnaces/silver', '#forge:furnaces/gold', '#forge:furnaces/diamond', '#forge:furnaces/emerald', '#forge:furnaces/crystal', '#forge:furnaces/obsidian'])
event.shapeless(Item.of('ceramicbucket:ceramic_bucket', 1), ['ceramics:clay_bucket'])
event.shapeless(Item.of('ceramicbucket:ceramic_bucket', 1), ['ceramics:cracked_clay_bucket'])
event.shapeless(Item.of('create:dough', 1), ['create:wheat_flour',Item.of('ceramicbucket:filled_ceramic_bucket', {Fluid:{FluidName:"minecraft:water",Amount:1000}})])
event.shapeless(Item.of('compactmachines:tunnel', {definition:{id:"compactmachines:item"}}), ['#forge:storage_blocks/redstone', 'minecraft:hopper', 'compactmachines:wall'])
event.shapeless(Item.of('appliedenergistics2:charged_certus_quartz_crystal', 1), ['emendatusenigmatica:charged_certus_quartz_gem'])
event.shapeless(Item.of('emendatusenigmatica:charged_certus_quartz_gem', 1), ['appliedenergistics2:charged_certus_quartz_crystal'])
event.shapeless(Item.of('appliedenergistics2:certus_quartz_crystal', 1), ['emendatusenigmatica:certus_quartz_gem'])
event.shapeless(Item.of('emendatusenigmatica:certus_quartz_gem', 1), ['appliedenergistics2:certus_quartz_crystal'])
event.shapeless(Item.of('emendatusenigmatica:potassium_nitrate_dust', 1), ['#forge:dusts/niter'])
event.shapeless(Item.of('emendatusenigmatica:potassium_nitrate_gem', 1), ['#forge:gems/niter'])
event.shapeless(Item.of('immersiveengineering:logic_circuit', 1), ['immersiveengineering:circuit_board', 'immersiveengineering:electron_tube', '#forge:wires/electrum', 'createaddition:capacitor'])

})
