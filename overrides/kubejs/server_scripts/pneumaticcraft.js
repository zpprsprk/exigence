// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Pneumaticcraft recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": Ingredient.of('#industrialforegoing:machine_frame/advanced'),
  "result": {
    "item": "thermal:machine_frame",
    "count": 1
  },
  "program": "laser"
})
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": Ingredient.of('#forge:ingots/gold'),
  "result": {
    "item": 'appliedenergistics2:printed_logic_processor',
    "count": 1
  },
  "program": "laser"
})
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": Ingredient.of('#forge:gems/diamond'),
  "result": {
    "item": 'appliedenergistics2:printed_engineering_processor',
    "count": 1
  },
  "program": "laser"
})
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": Ingredient.of('appliedenergistics2:purified_certus_quartz_crystal'),
  "result": {
    "item": 'appliedenergistics2:printed_calculation_processor',
    "count": 1
  },
  "program": "laser"
})
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": Ingredient.of('#appliedenergistics2:silicon'),
  "result": {
    "item": 'appliedenergistics2:printed_silicon',
    "count": 1
  },
  "program": "laser"
})
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": Ingredient.of('mysticalagriculture:inferium_seeds'),
  "result": {
    "item": 'mysticalagriculture:prosperity_seed_base',
    "count": 1
  },
  "program": "laser"
})

event.custom({
  "type": "pneumaticcraft:pressure_chamber",
  "inputs": [
    {
      "type": "pneumaticcraft:stacked_item",
      "item": 'mysticalagriculture:prosperity_ingot_block',
      "count": 2
    },
    {
      "type": "pneumaticcraft:stacked_item",
      "item": 'mysticalagriculture:prosperity_gemstone',
      "count": 2
    },
	{
	  'tag': 'forge:seeds'
	}
  ],
  "pressure": 3.5,
  "results": [
    {
      "item": 'mysticalagriculture:prosperity_seed_base'
    }
  ]
})

})