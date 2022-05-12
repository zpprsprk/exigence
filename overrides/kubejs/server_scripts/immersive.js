// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Immersive recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {
 
event.recipes.immersiveengineering.arc_furnace(['morered:red_alloy_ingot'], '#forge:ingots/copper', [Ingredient.of('#forge:dusts/redstone', 4)])
event.recipes.immersiveengineering.arc_furnace(['extendedcrafting:black_iron_ingot'], '#forge:ingots/iron', ['#forge:dyes/black'])
event.recipes.immersiveengineering.arc_furnace(['extendedcrafting:redstone_ingot'], '#forge:ingots/iron', ['#forge:dusts/redstone'])
event.recipes.immersiveengineering.arc_furnace(['extendedcrafting:ender_ingot'], '#forge:ingots/iron', ['#forge:ender_pearls'])
event.recipes.immersiveengineering.arc_furnace(['industrialforegoing:machine_frame_pity'], 'immersiveengineering:light_engineering', ['#forge:storage_blocks/redstone'])
event.recipes.immersiveengineering.arc_furnace([Item.of('powah:dielectric_paste', 16)], 'minecraft:clay_ball', ['#minecraft:coals'])
event.recipes.immersiveengineering.arc_furnace([Item.of('pneumaticcraft:reinforced_stone', 8)], Ingredient.of('enviromats:hardened_stone', 8), ['#forge:ingots/compressed_iron'])
event.recipes.immersiveengineering.arc_furnace(['minecraft:netherite_ingot'], Ingredient.of('minecraft:netherite_scrap', 4), [Ingredient.of('#forge:ingots/gold', 4)])
event.recipes.immersiveengineering.alloy('morered:red_alloy_ingot', '#forge:ingots/copper', Ingredient.of('#forge:dusts/redstone', 4))
event.recipes.immersiveengineering.alloy('extendedcrafting:black_iron_ingot', '#forge:ingots/iron', '#forge:dyes/black')
event.recipes.immersiveengineering.alloy('extendedcrafting:redstone_ingot', '#forge:ingots/iron', '#forge:dusts/redstone')
event.recipes.immersiveengineering.alloy('extendedcrafting:ender_ingot', '#forge:ingots/iron', '#forge:ender_pearls')
event.recipes.immersiveengineering.alloy('minecraft:netherite_ingot', Ingredient.of('minecraft:netherite_scrap', 4), Ingredient.of('#forge:ingots/gold', 4))

event.recipes.immersiveengineering.metal_press('minecraft:blaze_rod', 'botania:blaze_block', 'immersiveengineering:mold_rod')
event.recipes.immersiveengineering.metal_press('appliedenergistics2:logic_processor_press', '#forge:storage_blocks/iron', 'appliedenergistics2:printed_logic_processor')
event.recipes.immersiveengineering.metal_press('appliedenergistics2:calculation_processor_press', '#forge:storage_blocks/iron', 'appliedenergistics2:printed_calculation_processor')
event.recipes.immersiveengineering.metal_press('appliedenergistics2:engineering_processor_press', '#forge:storage_blocks/iron', 'appliedenergistics2:printed_engineering_processor')
event.recipes.immersiveengineering.metal_press('appliedenergistics2:silicon_press', '#forge:storage_blocks/iron', 'appliedenergistics2:printed_silicon')

event.remove({id: 'immersivepetroleum:reservoirs/aquifer'})
event.remove({id: 'immersivepetroleum:reservoirs/lava'})
event.remove({id: 'immersivepetroleum:reservoirs/oil'})
event.custom({
  "type": "immersivepetroleum:reservoirs",
  "fluid": "immersivepetroleum:oil",
  "fluidminimum": 2500000,
  "fluidcapacity": 15000000,
  "fluidtrace": 0,
  "weight": 40,
  "dimension": {
    "whitelist": [],
    "blacklist": [
      "minecraft:the_end"
    ]
  },
  "biome": {
    "whitelist": [],
    "blacklist": []
  },
  "name": "immersive oil"
})
event.custom({
  "type": "immersivepetroleum:reservoirs",
  "fluid": "pneumaticcraft:oil",
  "fluidminimum": 2500000,
  "fluidcapacity": 15000000,
  "fluidtrace": 0,
  "weight": 40,
  "dimension": {
    "whitelist": [],
    "blacklist": [
      "minecraft:the_end"
    ]
  },
  "biome": {
    "whitelist": [],
    "blacklist": []
  },
  "name": "pneumaticcraft oil"
})
event.custom({
  "type": "immersivepetroleum:reservoirs",
  "fluid": "thermal:crude_oil",
  "fluidminimum": 2500000,
  "fluidcapacity": 15000000,
  "fluidtrace": 0,
  "weight": 20,
  "dimension": {
    "whitelist": [],
    "blacklist": [
      "minecraft:the_end"
    ]
  },
  "biome": {
    "whitelist": [],
    "blacklist": []
  },
  "name": "thermal oil"
})

})