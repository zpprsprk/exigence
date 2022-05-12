// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Astral Sorcery recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {

event.remove({id: 'astralsorcery:altar/illumination_powder'})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 60,
  "starlight": 400,
  "pattern": [
    "_____",
    "__A__",
    "_ABA_",
    "__A__",
    "_____"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:luminessence"
    },
    "B": {
      "item": "astralsorcery:aquamarine"
    }
  },
  "output": [
    {
      "item": "astralsorcery:illumination_powder",
      "count": 16
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_discovery_central_beam"
  ]
})

event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 3,
  "duration": 600,
  "starlight": 4000,
  "pattern": [
    "ABCDE",
    "BFGHD",
    "CIJKC",
    "LMNOP",
    "QLCPR"
  ],
  "key": {
    "A": Ingredient.of('elementalcraft:watercrystal').toJson(),
    "B": Ingredient.of('elementalcraft:water_lense').toJson(),
    "C": Ingredient.of('elementalcraft:purecrystal').toJson(),
    "D": Ingredient.of('elementalcraft:fire_lense').toJson(),
    "E": Ingredient.of('elementalcraft:firecrystal').toJson(),
    "F": Ingredient.of('elementalcraft:pristine_water_gem').toJson(),
	"G": Item.of('elementalcraft:reservoir_water').toJson(),
    "H": Ingredient.of('elementalcraft:pristine_fire_gem').toJson(),
    "I": Item.of('elementalcraft:reservoir_air').toJson(),
    "J": Ingredient.of('mekanism:creative_chemical_tank').toJson(),
    "K": Item.of('elementalcraft:reservoir_fire').toJson(),
    "L": Ingredient.of('elementalcraft:air_lense').toJson(),
    "M": Ingredient.of('elementalcraft:pristine_air_gem').toJson(),
    "N": Item.of('elementalcraft:reservoir_earth').toJson(),
    "O": Ingredient.of('elementalcraft:pristine_earth_gem').toJson(),
    "P": Ingredient.of('elementalcraft:earth_lense').toJson(),
    "Q": Ingredient.of('elementalcraft:aircrystal').toJson(),
    "R": Ingredient.of('elementalcraft:earthcrystal').toJson()
  },
  "output": [
    {
      "item": 'elementalcraft:tank_creative',
      "count": 1
    }
  ],
  "relay_inputs": [
    Item.of('elementalcraft:powerful_water_shard').toJson(),
    Item.of('elementalcraft:powerful_fire_shard').toJson(),
    Item.of('elementalcraft:powerful_earth_shard').toJson(),
    Item.of('elementalcraft:powerful_air_shard').toJson()
  ],
  "effects": [
    "astralsorcery:built_in_effect_constellation_finish",
    "astralsorcery:built_in_effect_trait_relay_highlight",
    "astralsorcery:built_in_effect_discovery_central_beam",
    "astralsorcery:built_in_effect_trait_focus_circle",
    "astralsorcery:altar_default_sparkle",
    "astralsorcery:built_in_effect_constellation_lines",
    "astralsorcery:built_in_effect_attunement_sparkle"
  ]
})


})