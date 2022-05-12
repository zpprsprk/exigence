// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Pedestals recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {


event.custom({
  "type": "pedestals:pedestal_cobblegen",
  "ingredient": Ingredient.of('compressium:andesite_3').toJson(),
  "result": Item.of('minecraft:andesite', 1).toResultJson()
})
event.custom({
  "type": "pedestals:pedestal_cobblegen",
  "ingredient": Ingredient.of('compressium:diorite_3').toJson(),
  "result": Item.of('minecraft:diorite', 1).toResultJson()
})
event.custom({
  "type": "pedestals:pedestal_cobblegen",
  "ingredient": Ingredient.of('compressium:granite_3').toJson(),
  "result": Item.of('minecraft:granite', 1).toResultJson()
})
event.remove({id: 'pedestals:pedestal_cobblegen/netherrack'})
event.remove({id: 'pedestals:pedestal_cobblegen/endstone'})
event.remove({id: 'pedestals:pedestal_cobblegensilk/nether_bricks'})
event.remove({id: 'pedestals:pedestal_cobblegensilk/end_stone_bricks'})
event.custom({
  "type": "pedestals:pedestal_cobblegen",
  "ingredient": Ingredient.of('compressium:netherrack_3').toJson(),
  "result": Item.of('minecraft:netherrack', 1).toResultJson()
})
event.custom({
  "type": "pedestals:pedestal_cobblegen",
  "ingredient": Ingredient.of('compressium:endstone_3').toJson(),
  "result": Item.of('minecraft:end_stone', 1).toResultJson()
})
event.custom({
  "type": "pedestals:pedestal_cobblegen",
  "ingredient": Ingredient.of('compressium:soulsand_3').toJson(),
  "result": Item.of('minecraft:soul_sand', 1).toResultJson()
})


})