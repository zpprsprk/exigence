// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Thermal recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {

event.recipes.thermal.smelter([Item.of('powah:dielectric_paste', 16)], ['minecraft:clay_ball', '#minecraft:coals'])
event.recipes.thermal.smelter(['extendedcrafting:black_iron_ingot'], ['#forge:ingots/iron', '#forge:dyes/black'])
event.recipes.thermal.smelter(['extendedcrafting:redstone_ingot'], ['#forge:ingots/iron', '#forge:dusts/redstone'])
event.recipes.thermal.smelter(['extendedcrafting:ender_ingot'], ['#forge:ingots/iron', '#forge:ender_pearls'])
event.recipes.thermal.smelter(['morered:red_alloy_ingot'], ['#forge:ingots/copper', Ingredient.of('#forge:dusts/redstone', 4)])

  
event.custom({
  "type": "thermal:compression_fuel",
  "ingredient": {
    "fluid": "immersiveengineering:creosote",
    "amount": 1000
  },
  "energy": 20000
})
event.custom({
  "type": "thermal:compression_fuel",
  "ingredient": {
    "fluid": "immersiveengineering:biodiesel",
    "amount": 1000
  },
  "energy": 1000000
})
event.custom({
  "type": "thermal:compression_fuel",
  "ingredient": {
    "fluid": "immersivepetroleum:diesel",
    "amount": 1000
  },
  "energy": 1000000
})
event.custom({
  "type": "thermal:compression_fuel",
  "ingredient": {
    "fluid": "pneumaticcraft:biodiesel",
    "amount": 1000
  },
  "energy": 1000000
})

})