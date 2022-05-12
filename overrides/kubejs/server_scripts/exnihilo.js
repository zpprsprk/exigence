// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Ex Nihilo Sequentia recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {

event.custom({
    "type": "exnihilosequentia:fluid_transform",
    "fluidInTank": {
        "fluid": "minecraft:water"
    },
    "catalyst": {
        "tag": "forge:dusts/salt"
    },
    "result": {
        "fluid": "exnihilosequentia:sea_water"
    }
})	
	
// Ex Nihilo Hammer
event.remove({id: 'exnihilosequentia:hammer/ens_cobblestone'})
event.custom({
	"type": "exnihilosequentia:hammer",
	"results": [
	{
	  "chance": 1.0,
	  "item": "exnihilosequentia:pebble_stone",
	  "count": 2
	},
	{
	  "chance": 0.5,
	  "item": "exnihilosequentia:pebble_stone",
	  "count": 2
	},
	{
	  "chance": 0.5,
	  "item": "exnihilosequentia:pebble_andesite",
	  "count": 1
	},
	{
	  "chance": 0.5,
	  "item": "exnihilosequentia:pebble_diorite",
	  "count": 1
	},
	{
	  "chance": 0.5,
	  "item": "exnihilosequentia:pebble_granite",
	  "count": 1
	},
	{
	  "chance": 0.5,
	  "item": "exnihilosequentia:pebble_basalt",
	  "count": 1
	},
	{
	  "chance": 0.5,
	  "item": "exnihilosequentia:pebble_blackstone",
	  "count": 1
	}
	],
	"input": {
	  "item": "minecraft:stone"
	}
})
event.custom({
  "type": "excompressum:compressed_hammer",
  "input": {
    "tag":"forge:storage_blocks/compressed_stone"
  },
  "lootTable": {
    "type": "minecraft:block",
    "pools": [
      {
        "rolls": 3,
        "entries": [
          {
            "type": "minecraft:item",
            "name": "exnihilosequentia:pebble_stone",
            "functions": [
              {
                "function": "minecraft:set_count",
                "count": {
                  "min": 9.0,
                  "max": 18.0,
                  "type": "minecraft:uniform"
                }
              },
              {
                "function": "minecraft:apply_bonus",
                "enchantment": "minecraft:fortune",
                "formula": "minecraft:uniform_bonus_count",
                "parameters": {
                  "bonusMultiplier": 1
                }
              }
            ]
          },
		  {
            "type": "minecraft:item",
            "name": "exnihilosequentia:pebble_andesite",
            "functions": [
              {
                "function": "minecraft:set_count",
                "count": {
                  "min": 4.0,
                  "max": 9.0,
                  "type": "minecraft:uniform"
                }
              },
              {
                "function": "minecraft:apply_bonus",
                "enchantment": "minecraft:fortune",
                "formula": "minecraft:uniform_bonus_count",
                "parameters": {
                  "bonusMultiplier": 1
                }
              }
            ]
          },
          {
            "type": "minecraft:item",
            "name": "exnihilosequentia:pebble_diorite",
            "functions": [
              {
                "function": "minecraft:set_count",
                "count": {
                  "min": 4.0,
                  "max": 9.0,
                  "type": "minecraft:uniform"
                }
              },
              {
                "function": "minecraft:apply_bonus",
                "enchantment": "minecraft:fortune",
                "formula": "minecraft:uniform_bonus_count",
                "parameters": {
                  "bonusMultiplier": 1
                }
              }
            ]
          },
          {
            "type": "minecraft:item",
            "name": "exnihilosequentia:pebble_granite",
            "functions": [
              {
                "function": "minecraft:set_count",
                "count": {
                  "min": 4.0,
                  "max": 9.0,
                  "type": "minecraft:uniform"
                }
              },
              {
                "function": "minecraft:apply_bonus",
                "enchantment": "minecraft:fortune",
                "formula": "minecraft:uniform_bonus_count",
                "parameters": {
                  "bonusMultiplier": 1
                }
              }
            ]
          },
          {
            "type": "minecraft:item",
            "name": "exnihilosequentia:pebble_basalt",
            "functions": [
              {
                "function": "minecraft:set_count",
                "count": {
                  "min": 4.0,
                  "max": 9.0,
                  "type": "minecraft:uniform"
                }
              },
              {
                "function": "minecraft:apply_bonus",
                "enchantment": "minecraft:fortune",
                "formula": "minecraft:uniform_bonus_count",
                "parameters": {
                  "bonusMultiplier": 1
                }
              }
            ]
          },
          {
            "type": "minecraft:item",
            "name": "exnihilosequentia:pebble_blackstone",
            "functions": [
              {
                "function": "minecraft:set_count",
                "count": {
                  "min": 4.0,
                  "max": 9.0,
                  "type": "minecraft:uniform"
                }
              },
              {
                "function": "minecraft:apply_bonus",
                "enchantment": "minecraft:fortune",
                "formula": "minecraft:uniform_bonus_count",
                "parameters": {
                  "bonusMultiplier": 1
                }
              }
            ]
          }
        ],
        "conditions": []
      },
      {
        "rolls": 1,
        "entries": [
          {
            "type": "minecraft:item",
            "name": "exnihilosequentia:pebble_stone",
            "functions": [
              {
                "function": "minecraft:set_count",
                "count": {
                  "min": 9.0,
                  "max": 18.0,
                  "type": "minecraft:uniform"
                }
              },
              {
                "function": "minecraft:apply_bonus",
                "enchantment": "minecraft:fortune",
                "formula": "minecraft:uniform_bonus_count",
                "parameters": {
                  "bonusMultiplier": 1
                }
              }
            ]
          }
        ],
        "conditions": []
      }	  
    ]
  }
})
event.custom({
	"type": "exnihilosequentia:hammer",
	"results": [
	{
	  "chance": 1.0,
	  "item": "exnihilosequentia:dust",
	  "count": 1
	}
	],
	"input": {
	  "item": "minecraft:red_sand"
	}
})
event.custom({
	"type": "exnihilosequentia:hammer",
	"results": [
	{
	  "chance": 1.0,
	  "item": "exnihilosequentia:dust",
	  "count": 1
	}
	],
	"input": {
	  "item": "forbidden_arcanus:soulless_sand"
	}
})


// fluid on top
event.remove({id: 'exnihilosequentia:fluid_on_top/ens_cobblestone'})
event.custom({
  "type": "exnihilosequentia:fluid_on_top",
  "fluidInTank": {
    "fluid": "minecraft:water"
  },
  "fluidOnTop": {
    "fluid": "minecraft:lava"
  },
  "result": {
    "item": "minecraft:stone"
  }
})

// Heat
event.custom({
	"type": "exnihilosequentia:heat",
	"block": "minecraft:campfire",
	"amount": 5
})
event.custom({
	"type": "exnihilosequentia:heat",
	"block": "minecraft:soul_campfire",
	"amount": 5
})
event.custom({
	"type": "exnihilosequentia:heat",
	"block": "botania:blaze_block",
	"amount": 50
})
event.custom({
	"type": "exnihilosequentia:heat",
	"block": "createaddition:heater",
	"amount": 100
})
event.custom({
	"type": "exnihilosequentia:heat",
	"block": "mekanism:superheating_element",
	"amount": 250
})
event.custom({
	"type": "exnihilosequentia:heat",
	"block": "extendedcrafting:the_ultimate_block",
	"amount": 1000
})


})