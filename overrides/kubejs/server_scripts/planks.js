// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Planks recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {
event.remove({id: 'minecraft:oak_planks'})
event.remove({id: 'minecraft:spruce_planks'})
event.remove({id: 'minecraft:birch_planks'})
event.remove({id: 'minecraft:jungle_planks'})
event.remove({id: 'minecraft:acacia_planks'})
event.remove({id: 'minecraft:dark_oak_planks'})
event.remove({id: 'minecraft:crimson_planks'})
event.remove({id: 'minecraft:warped_planks'})
event.remove({id: 'ars_nouveau:archwood_planks'})
event.remove({id: 'forbidden_arcanus:cherrywood_planks'})
event.remove({id: 'forbidden_arcanus:mysterywood_planks'})
event.remove({id: 'undergarden:smogstem_planks'})
event.remove({id: 'undergarden:wigglewood_planks'})
event.remove({id: 'undergarden:grongle_planks'})
event.remove({id: 'naturesaura:ancient_planks'})
event.remove({id: 'naturesaura:ancient_planks_from_bark'})
event.remove({id: 'forbidden_arcanus:edelwood_planks'})
event.remove({id: 'aquaculture:planks_from_driftwood'})
event.remove({id: 'tconstruct:world/wood/skyroot/planks'})
event.remove({id: 'tconstruct:world/wood/bloodshroom/planks'})
event.remove({id: 'tconstruct:world/wood/greenheart/planks'})
event.remove({id: 'botania:livingwood_planks'})
event.remove({id: 'botania:dreamwood_planks'})

event.remove({id: 'create:cutting/oak_wood'})
event.remove({id: 'create:cutting/oak_log'})
event.remove({id: 'create:cutting/spruce_wood'})
event.remove({id: 'create:cutting/spruce_log'})
event.remove({id: 'create:cutting/acacia_wood'})
event.remove({id: 'create:cutting/acacia_log'})
event.remove({id: 'create:cutting/dark_oak_wood'})
event.remove({id: 'create:cutting/dark_oak_log'})
event.remove({id: 'create:cutting/jungle_wood'})
event.remove({id: 'create:cutting/jungle_log'})
event.remove({id: 'create:cutting/birch_wood'})
event.remove({id: 'create:cutting/birch_log'})
event.remove({id: 'create:cutting/warped_hyphae'})
event.remove({id: 'create:cutting/warped_stem'})
event.remove({id: 'create:cutting/crimson_hyphae'})
event.remove({id: 'create:cutting/crimson_stem'})
event.remove({id: 'create:cutting/stripped_oak_wood'})
event.remove({id: 'create:cutting/stripped_oak_log'})
event.remove({id: 'create:cutting/stripped_spruce_wood'})
event.remove({id: 'create:cutting/stripped_spruce_log'})
event.remove({id: 'create:cutting/stripped_acacia_wood'})
event.remove({id: 'create:cutting/stripped_acacia_log'})
event.remove({id: 'create:cutting/stripped_dark_oak_wood'})
event.remove({id: 'create:cutting/stripped_dark_oak_log'})
event.remove({id: 'create:cutting/stripped_jungle_wood'})
event.remove({id: 'create:cutting/stripped_jungle_log'})
event.remove({id: 'create:cutting/stripped_birch_wood'})
event.remove({id: 'create:cutting/stripped_birch_log'})
event.remove({id: 'create:cutting/stripped_warped_hyphae'})
event.remove({id: 'create:cutting/stripped_warped_stem'})
event.remove({id: 'create:cutting/stripped_crimson_hyphae'})
event.remove({id: 'create:cutting/stripped_crimson_stem'})

event.remove({id: 'pedestals:pedestal_sawing/log_oak_to_planks'})
event.remove({id: 'pedestals:pedestal_sawing/log_spruce_to_planks'})
event.remove({id: 'pedestals:pedestal_sawing/log_acacia_to_planks'})
event.remove({id: 'pedestals:pedestal_sawing/log_birch_to_planks'})
event.remove({id: 'pedestals:pedestal_sawing/log_jungle_to_planks'})
event.remove({id: 'pedestals:pedestal_sawing/log_doak_to_planks'})
event.remove({id: 'pedestals:pedestal_sawing/log_crimson_to_planks'})
event.remove({id: 'pedestals:pedestal_sawing/log_warped_to_planks'})

event.remove({id: 'immersiveengineering:sawmill/oak_log'})
event.remove({id: 'immersiveengineering:sawmill/stripped_oak_log'})
event.remove({id: 'immersiveengineering:sawmill/spruce_log'})
event.remove({id: 'immersiveengineering:sawmill/stripped_spruce_log'})
event.remove({id: 'immersiveengineering:sawmill/acacia_log'})
event.remove({id: 'immersiveengineering:sawmill/stripped_acacia_log'})
event.remove({id: 'immersiveengineering:sawmill/birch_log'})
event.remove({id: 'immersiveengineering:sawmill/stripped_birch_log'})
event.remove({id: 'immersiveengineering:sawmill/jungle_log'})
event.remove({id: 'immersiveengineering:sawmill/stripped_jungle_log'})
event.remove({id: 'immersiveengineering:sawmill/dark_oak_log'})
event.remove({id: 'immersiveengineering:sawmill/stripped_dark_oak_log'})

event.remove({id: 'thermal:machine/sawmill/sawmill_oak_logs'})
event.remove({id: 'thermal:machine/sawmill/sawmill_spruce_logs'})
event.remove({id: 'thermal:machine/sawmill/sawmill_acacia_logs'})
event.remove({id: 'thermal:machine/sawmill/sawmill_birch_logs'})
event.remove({id: 'thermal:machine/sawmill/sawmill_jungle_logs'})
event.remove({id: 'thermal:machine/sawmill/sawmill_dark_oak_logs'})

event.remove({id: 'mekanism:sawing/log/oak'})
event.remove({id: 'mekanism:sawing/log/spruce'})
event.remove({id: 'mekanism:sawing/log/acacia'})
event.remove({id: 'mekanism:sawing/log/birch'})
event.remove({id: 'mekanism:sawing/log/jungle'})
event.remove({id: 'mekanism:sawing/log/dark_oak'})

const sawing = (outputItem, inputTagOrItem) => {
  event.shapeless(outputItem, [inputTagOrItem])
  event.custom({
    "type": "pedestals:pedestal_sawing",
    "ingredient": Ingredient.of(inputTagOrItem).toJson(),
    "result": Item.of(outputItem, 3).toResultJson()
  })
  event.custom({
    "type": "thermal:sawmill",
    "ingredient": Ingredient.of(inputTagOrItem).toJson(),
    "result": [
      {
        "item": outputItem,
        "count": 6
      },
      {
        "item": "thermal:sawdust",
        "chance": 1.25
      }
    ],
    "energy": 1000
  })
  event.recipes.mekanism.sawing(Item.of(outputItem, 8), inputTagOrItem, Item.of('mekanism:sawdust').withChance(0.25))
}
const sawingStripped = (outputItem, strippedItem, inputItem) => {
  event.recipes.create.cutting(Item.of(outputItem, 2), strippedItem)
  event.recipes.create.cutting(strippedItem, inputItem)
  event.recipes.immersiveengineering.sawmill(Item.of(outputItem, 4), strippedItem, [{stripping:false, output:'immersiveengineering:dust_wood'}])
  event.recipes.immersiveengineering.sawmill(Item.of(outputItem, 4), inputItem, [{stripping:true, output:'immersiveengineering:dust_wood'},{stripping:false, output:'immersiveengineering:dust_wood'}], strippedItem)
}
const sawingNoStripped = (outputItem, inputTagOrItem) => {
  event.recipes.create.cutting(Item.of(outputItem, 2), inputTagOrItem)
  event.recipes.immersiveengineering.sawmill(Item.of(outputItem, 4), inputTagOrItem, [{stripping:false, output:'immersiveengineering:dust_wood'}])
}

sawingStripped('minecraft:oak_planks', 'minecraft:stripped_oak_log', 'minecraft:oak_log')
sawingStripped('minecraft:oak_planks', 'minecraft:stripped_oak_wood', 'minecraft:oak_wood')
sawingStripped('minecraft:spruce_planks', 'minecraft:stripped_spruce_log', 'minecraft:spruce_log')
sawingStripped('minecraft:spruce_planks', 'minecraft:stripped_spruce_wood', 'minecraft:spruce_wood')
sawingStripped('minecraft:acacia_planks', 'minecraft:stripped_acacia_log', 'minecraft:acacia_log')
sawingStripped('minecraft:acacia_planks', 'minecraft:stripped_acacia_wood', 'minecraft:acacia_wood')
sawingStripped('minecraft:dark_oak_planks', 'minecraft:stripped_dark_oak_log', 'minecraft:dark_oak_log')
sawingStripped('minecraft:dark_oak_planks', 'minecraft:stripped_dark_oak_wood', 'minecraft:dark_oak_wood')
sawingStripped('minecraft:jungle_planks', 'minecraft:stripped_jungle_log', 'minecraft:jungle_log')
sawingStripped('minecraft:jungle_planks', 'minecraft:stripped_jungle_wood', 'minecraft:jungle_wood')
sawingStripped('minecraft:birch_planks', 'minecraft:stripped_birch_log', 'minecraft:birch_log')
sawingStripped('minecraft:birch_planks', 'minecraft:stripped_birch_wood', 'minecraft:birch_wood')
sawingStripped('minecraft:warped_planks', 'minecraft:stripped_warped_hyphae', 'minecraft:warped_hyphae')
sawingStripped('minecraft:warped_planks', 'minecraft:stripped_warped_stem', 'minecraft:warped_stem')
sawingStripped('minecraft:crimson_planks', 'minecraft:stripped_crimson_hyphae', 'minecraft:crimson_hyphae')
sawingStripped('minecraft:crimson_planks', 'minecraft:stripped_crimson_stem', 'minecraft:crimson_stem')
sawingStripped('ars_nouveau:archwood_planks', 'ars_nouveau:stripped_blue_archwood_log', 'ars_nouveau:blue_archwood_log')
sawingStripped('ars_nouveau:archwood_planks', 'ars_nouveau:stripped_blue_archwood_wood', 'ars_nouveau:blue_archwood_wood')
sawingStripped('ars_nouveau:archwood_planks', 'ars_nouveau:stripped_green_archwood_log', 'ars_nouveau:green_archwood_log')
sawingStripped('ars_nouveau:archwood_planks', 'ars_nouveau:stripped_green_archwood_wood', 'ars_nouveau:green_archwood_wood')
sawingStripped('ars_nouveau:archwood_planks', 'ars_nouveau:stripped_red_archwood_log', 'ars_nouveau:red_archwood_log')
sawingStripped('ars_nouveau:archwood_planks', 'ars_nouveau:stripped_red_archwood_wood', 'ars_nouveau:red_archwood_wood')
sawingStripped('ars_nouveau:archwood_planks', 'ars_nouveau:stripped_purple_archwood_log', 'ars_nouveau:purple_archwood_log')
sawingStripped('ars_nouveau:archwood_planks', 'ars_nouveau:stripped_purple_archwood_wood', 'ars_nouveau:purple_archwood_wood')
sawingStripped('forbidden_arcanus:mysterywood_planks', 'forbidden_arcanus:stripped_mysterywood_log', 'forbidden_arcanus:mysterywood_log')
sawingStripped('forbidden_arcanus:mysterywood_planks', 'forbidden_arcanus:stripped_mysterywood', 'forbidden_arcanus:mysterywood')
sawingStripped('forbidden_arcanus:cherrywood_planks', 'forbidden_arcanus:stripped_cherrywood_log', 'forbidden_arcanus:cherrywood_log')
sawingStripped('forbidden_arcanus:cherrywood_planks', 'forbidden_arcanus:stripped_cherrywood', 'forbidden_arcanus:cherrywood')
sawingStripped('undergarden:smogstem_planks', 'undergarden:stripped_smogstem_log', 'undergarden:smogstem_log')
sawingStripped('undergarden:smogstem_planks', 'undergarden:stripped_smogstem_wood', 'undergarden:smogstem_wood')
sawingStripped('undergarden:wigglewood_planks', 'undergarden:stripped_wigglewood_log', 'undergarden:wigglewood_log')
sawingStripped('undergarden:wigglewood_planks', 'undergarden:stripped_wigglewood_wood', 'undergarden:wigglewood_wood')
sawingStripped('undergarden:grongle_planks', 'undergarden:stripped_grongle_log', 'undergarden:grongle_log')
sawingStripped('undergarden:grongle_planks', 'undergarden:stripped_grongle_wood', 'undergarden:grongle_wood')
sawingStripped('tconstruct:skyroot_planks', 'tconstruct:stripped_skyroot_log', 'tconstruct:skyroot_log')
sawingStripped('tconstruct:skyroot_planks', 'tconstruct:stripped_skyroot_wood', 'tconstruct:skyroot_wood')
sawingStripped('tconstruct:bloodshroom_planks', 'tconstruct:stripped_bloodshroom_log', 'tconstruct:bloodshroom_log')
sawingStripped('tconstruct:bloodshroom_planks', 'tconstruct:stripped_bloodshroom_wood', 'tconstruct:bloodshroom_wood')
sawingStripped('tconstruct:greenheart_planks', 'tconstruct:stripped_greenheart_log', 'tconstruct:greenheart_log')
sawingStripped('tconstruct:greenheart_planks', 'tconstruct:stripped_greenheart_wood', 'tconstruct:greenheart_wood')
sawingNoStripped('naturesaura:ancient_planks','#naturesaura:ancient_logs')
sawingNoStripped('forbidden_arcanus:edelwood_planks','forbidden_arcanus:edelwood_log')
sawingNoStripped('minecraft:oak_planks','aquaculture:driftwood')
sawingNoStripped('botania:livingwood_planks','botania:livingwood')
sawingNoStripped('botania:dreamwood_planks','botania:dreamwood')

sawing('minecraft:oak_planks','#minecraft:oak_logs') 
sawing('minecraft:spruce_planks','#minecraft:spruce_logs') 
sawing('minecraft:acacia_planks','#minecraft:acacia_logs') 
sawing('minecraft:birch_planks','#minecraft:birch_logs') 
sawing('minecraft:jungle_planks','#minecraft:jungle_logs') 
sawing('minecraft:dark_oak_planks','#minecraft:dark_oak_logs') 
sawing('minecraft:warped_planks','#minecraft:warped_stems') 
sawing('minecraft:crimson_planks','#minecraft:crimson_stems') 
sawing('ars_nouveau:archwood_planks','#minecraft:logs/archwood')
sawing('naturesaura:ancient_planks','#naturesaura:ancient_logs')
sawing('forbidden_arcanus:cherrywood_planks','#forbidden_arcanus:cherrywood_logs')
sawing('forbidden_arcanus:mysterywood_planks','#forbidden_arcanus:mysterywood_logs')
sawing('undergarden:smogstem_planks','#undergarden:smogstem_logs')
sawing('undergarden:wigglewood_planks','#undergarden:wigglewood_logs')
sawing('undergarden:grongle_planks','#undergarden:grongle_logs')
sawing('forbidden_arcanus:edelwood_planks','forbidden_arcanus:edelwood_log')
sawing('minecraft:oak_planks','aquaculture:driftwood')
sawing('tconstruct:skyroot_planks', '#tconstruct:skyroot_logs')
sawing('tconstruct:bloodshroom_planks', '#tconstruct:bloodshroom_logs')
sawing('tconstruct:greenheart_planks', '#tconstruct:greenheart_logs')
sawing('botania:livingwood_planks', 'botania:livingwood')
sawing('botania:dreamwood_planks', 'botania:dreamwood')

})