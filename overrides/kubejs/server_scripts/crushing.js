// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Crushing recipe script here!  (You will see this line every time server resources reload)')


events.listen('recipes', event => {
  // crushing
  event.remove({id: 'create:crushing/netherrack'})
  event.remove({id: 'create:crushing/gravel'})
  event.remove({id: 'create:crushing/sand'})
  // milling
  event.remove({id: 'create:milling/diorite'})
  event.remove({id: 'create:milling/andesite'})
  event.remove({id: 'create:milling/granite'})
  event.remove({id: 'create:milling/sand'})
  event.remove({id: 'create:milling/gravel'})
  event.remove({id: 'create:milling/cobblestone'})
  event.remove({id: 'create:milling/terracotta'})
  event.remove({id: 'create:milling/clay'})
  // pedestal crushing
  event.remove({id: 'pedestals:pedestal_crushing/cobblestone'})
  event.remove({id: 'pedestals:pedestal_crushing/gravel'})
  event.remove({id: 'pedestals:pedestal_crushing/sand'})
  
  const crushCreate = (output, input) => {
    event.recipes.create.crushing(output, input).processingTime(30)
    event.recipes.create.milling(output, input).processingTime(30)
  }
  const crushPed = (outputItemResult, inputItemOrTag) => {
	event.custom({
	  "type": "pedestals:pedestal_crushing",
	  "ingredient": Ingredient.of(inputItemOrTag).toJson(),
	  "result": Item.of(outputItemResult).toResultJson()
	})
  }
  const crushPedCreate = (outputItemResult, inputItemOrTag) => {
	crushCreate(outputItemResult, inputItemOrTag)
	crushPed(outputItemResult, inputItemOrTag)
  }
  const crushAll = (outputItemResult, inputItemOrTag) => {
	crushPedCreate(outputItemResult, inputItemOrTag)
	event.recipes.mekanism.crushing(outputItemResult, inputItemOrTag)
	event.recipes.thermal.pulverizer(outputItemResult, inputItemOrTag)
  }

  crushAll('exnihilosequentia:crushed_netherrack', 'minecraft:netherrack')
  crushAll('exnihilosequentia:crushed_end_stone', 'minecraft:end_stone')
  crushAll('exnihilosequentia:crushed_granite', 'minecraft:granite')
  crushAll('exnihilosequentia:crushed_andesite', 'minecraft:andesite')
  crushAll('exnihilosequentia:crushed_diorite', 'minecraft:diorite')
  crushPedCreate('exnihilosequentia:dust', '#forge:sand')
  crushPedCreate('minecraft:gravel', '#forge:cobblestone')
  crushPedCreate('minecraft:sand', '#forge:gravel')
  crushCreate([
    Item.of('exnihilosequentia:pebble_stone', 2),
    Item.of('exnihilosequentia:pebble_stone', 2).withChance(0.5),
    Item.of('exnihilosequentia:pebble_andesite').withChance(0.5),
    Item.of('exnihilosequentia:pebble_diorite').withChance(0.5),
    Item.of('exnihilosequentia:pebble_granite').withChance(0.5),
    Item.of('exnihilosequentia:pebble_basalt').withChance(0.5),
    Item.of('exnihilosequentia:pebble_blackstone').withChance(0.5)
  ],'minecraft:stone')


})