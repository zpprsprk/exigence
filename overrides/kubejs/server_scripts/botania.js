// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Botania recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {

event.custom({
  "type": "botania:pure_daisy",
  "input": {
    "type": "block",
    "block": "create:limestone"
  },
  "output": {
    "name": "botania:livingrock"
  }
})
event.custom({
  "type": "botania:pure_daisy",
  "input": {
    "type": "tag",
    "tag": "forbidden_arcanus:mysterywood_logs"
  },
  "output": {
    "name": "botania:livingwood"
  }
})

event.custom({
  'type': 'botania:runic_altar',
  'output': {
    'item': 'bloodmagic:altar'
  },
  'mana': 16000,
  'ingredients': [
    Item.of('forbidden_arcanus:arcane_dragon_egg'),
    Item.of('botania:runic_altar'),
    Item.of('naturesaura:nature_altar'),
    Item.of('astralsorcery:altar_radiance'),
    Item.of('apotheosis:prismatic_altar'),
    Item.of('xreliquary:alkahestry_altar'),
    Item.of('naturesaura:animal_spawner'),
    Item.of('mysticalagriculture:infusion_altar'),
	Item.of('elementalcraft:binder_improved'),
    Item.of('industrialforegoing:ether_gas_bucket')
  ]
})
event.custom({
  'type': 'botania:runic_altar',
  'output': Item.of('envirocore:litherite_crystal', 8).toResultJson(),
  'mana': 5200,
  'ingredients': [
    Ingredient.of('botanicalmachinery:mana_emerald'),
    Ingredient.of('#forge:gems/quartz'),
    Ingredient.of('#forge:gems/quartz'),
    Ingredient.of('#forge:gems/quartz'),
    Ingredient.of('#forge:gems/quartz'),
    Ingredient.of('#forge:ender_pearls'),
    Ingredient.of('#forge:ender_pearls'),
    Ingredient.of('#forge:ender_pearls'),
    Ingredient.of('#forge:ender_pearls')
  ]
})

event.custom({
  'type': 'botania:runic_altar',
  'output': Item.of('mysticalagriculture:infusion_altar', 1).toResultJson(),
  'mana': 10400,
  'ingredients': [
    Ingredient.of('createaddition:gold_spool'),
    Ingredient.of('createaddition:gold_spool'),
    Ingredient.of('minecraft:red_carpet'),
    Ingredient.of('minecraft:red_carpet'),
    Ingredient.of('minecraft:red_carpet'),
    Ingredient.of('minecraft:stone'),
    Ingredient.of('minecraft:stone'),
    Ingredient.of('minecraft:stone'),
    Ingredient.of('minecraft:stone')
  ]
})

event.custom({
  'type': 'botania:runic_altar',
  'output': Item.of('mysticalagriculture:infusion_pedestal', 1).toResultJson(),
  'mana': 2600,
  'ingredients': [
    Ingredient.of('createaddition:gold_spool'),
    Ingredient.of('minecraft:red_carpet'),
    Ingredient.of('minecraft:red_carpet'),
    Ingredient.of('minecraft:stone'),
    Ingredient.of('minecraft:stone')
  ]
})

event.custom({
  'type': 'botania:runic_altar',
  'output': Item.of('waterstrainer:super_worm', 1).toResultJson(),
  'mana': 26000,
  'ingredients': [
    Ingredient.of('#botania:runes/greed'),
    Ingredient.of('aquaculture:worm'),
    Ingredient.of('aquaculture:worm'),
    Ingredient.of('exnihilosequentia:silkworm'),
    Ingredient.of('exnihilosequentia:silkworm'),
    Ingredient.of('waterstrainer:worm'),
    Ingredient.of('waterstrainer:worm')
  ]
})

event.custom({
  "type": "botania:mana_infusion",
  "input": Ingredient.of('#enviromats:marble_blocks'),
  "output": Item.of('quark:marble').toResultJson(),
  "mana": 400,
  "group": "botania:marble_cycle",
  "catalyst": {
    "name": "botania:alchemy_catalyst"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": Ingredient.of('quark:marble'),
  "output": Item.of('astralsorcery:marble_raw').toResultJson(),
  "mana": 400,
  "group": "botania:marble_cycle",
  "catalyst": {
    "name": "botania:alchemy_catalyst"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": Ingredient.of('astralsorcery:marble_raw'),
  "output": Item.of('enviromats:marble').toResultJson(),
  "mana": 400,
  "group": "botania:marble_cycle",
  "catalyst": {
    "name": "botania:alchemy_catalyst"
  }
})

})