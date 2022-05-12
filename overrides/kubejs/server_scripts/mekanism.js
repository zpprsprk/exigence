// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Mekanism recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {


event.recipes.mekanism.combining('extendedcrafting:black_iron_ingot', '#forge:ingots/iron', '#forge:dyes/black')
event.recipes.mekanism.combining('extendedcrafting:redstone_ingot', '#forge:ingots/iron', '#forge:dusts/redstone')
event.recipes.mekanism.combining('extendedcrafting:ender_ingot', '#forge:ingots/iron', '#forge:ender_pearls')
event.recipes.mekanism.combining('morered:red_alloy_ingot', '#forge:ingots/copper', Ingredient.of('#forge:dusts/redstone', 4))
event.recipes.mekanism.combining('mekanism:steel_casing', 'thermal:machine_frame', '#forge:ingots/steel')
event.recipes.mekanism.combining(Item.of('powah:dielectric_paste', 16), 'minecraft:clay_ball', '#minecraft:coals')

event.recipes.mekanism.enriching('minecraft:ender_pearl', '#forge:dusts/ender_pearl')
event.recipes.mekanism.enriching(Item.of('emendatusenigmatica:cobalt_dust', 2), '#forge:ores/cobalt')
event.recipes.mekanism.enriching(Item.of('emendatusenigmatica:aluminum_dust', 2), '#forge:ores/aluminum')
event.recipes.mekanism.enriching(Item.of('emendatusenigmatica:silver_dust', 2), '#forge:ores/silver')
event.recipes.mekanism.enriching(Item.of('emendatusenigmatica:nickel_dust', 2), '#forge:ores/nickel')
event.recipes.mekanism.enriching(Item.of('emendatusenigmatica:zinc_dust', 2), '#forge:ores/zinc')

event.remove({id: 'mekanism:control_circuit/basic'})
event.recipes.mekanism.metallurgic_infusing('mekanism:basic_control_circuit', 'logisticslasers:logic_chip', 'mekanism:redstone', 20)
event.remove({id: 'mekanism:metallurgic_infusing/alloy/infused'})
event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_infused', 'morered:red_alloy_ingot', 'mekanism:redstone', 20)

})