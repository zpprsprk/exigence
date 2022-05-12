// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Industrial Foregoing recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {
event.custom({
  "input": {
    "item": "forbidden_arcanus:mysterywood_log"
  },
  "result": "forbidden_arcanus:stripped_mysterywood_log",
  "breakChance": 0.005,
  "output": "{FluidName:\"industrialforegoing:latex\",Amount:8}",
  "defaultRecipe": false,
  "type": "industrialforegoing:fluid_extractor"
})
event.custom({
  "input": {
    "item": "forbidden_arcanus:stripped_mysterywood_log"
  },
  "result": "minecraft:air",
  "breakChance": 0.005,
  "output": "{FluidName:\"industrialforegoing:latex\",Amount:2}",
  "defaultRecipe": false,
  "type": "industrialforegoing:fluid_extractor"
})

event.custom({
  "input": [
    {
      "tag": "forge:ingots/uranium"
    }
  ],
  "inputFluid": "{FluidName:\"pneumaticcraft:etching_acid\",Amount:250}",
  "processingTime": 200,
  "output": {
    "item": "biggerreactors:cyanite_ingot",
    "count": 1
  },
  "outputFluid": "{FluidName:\"biggerreactors:fluid_yellorium\",Amount:144}",
  "type": "industrialforegoing:dissolution_chamber"
})
event.custom({
  "input": [
    {
      "tag": "forge:ingots/iron"
    },
    {
      "tag": "forge:ingots/iron"
    },
    {
      "tag": "forge:ingots/iron"
    },
    {
      "tag": "forge:ingots/graphite"
    },
    {
      "tag": "forge:ingots/graphite"
    },
    {
      "tag": "forge:ingots/iron"
    },
    {
      "tag": "forge:ingots/iron"
    },
    {
      "tag": "forge:ingots/iron"
    }	
  ],
  "inputFluid": "{FluidName:\"biggerreactors:fluid_yellorium\",Amount:144}",
  "processingTime": 200,
  "output": {
    "item": "biggerreactors:reactor_fuel_rod",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
event.custom({
  "output": {
    "item": 'astralsorcery:rock_crystal_ore'
  },
  "rarity": [
    {
      "whitelist": {},
      "blacklist": {
        "type": "minecraft:worldgen/biome",
        "values": [
          "minecraft:the_end",
          "minecraft:the_void",
          "minecraft:small_end_islands",
          "minecraft:end_barrens",
          "minecraft:end_highlands",
          "minecraft:end_midlands"
        ]
      },
      "depth_min": 5,
      "depth_max": 16,
      "weight": 28
    },
    {
      "whitelist": {},
      "blacklist": {
        "type": "minecraft:worldgen/biome",
        "values": [
          "minecraft:the_end",
          "minecraft:the_void",
          "minecraft:small_end_islands",
          "minecraft:end_barrens",
          "minecraft:end_highlands",
          "minecraft:end_midlands"
        ]
      },
      "depth_min": 0,
      "depth_max": 255,
      "weight": 4
    }
  ],
  "pointer": 0,
  "catalyst": {
    "item": 'industrialforegoing:laser_lens0'
  },
  "type": "industrialforegoing:laser_drill_ore"
})
event.custom({
  "output": {
    "item": 'elementalcraft:crystalore'
  },
  "rarity": [
    {
      "whitelist": {},
      "blacklist": {
        "type": "minecraft:worldgen/biome",
        "values": [
          "minecraft:the_end",
          "minecraft:the_void",
          "minecraft:small_end_islands",
          "minecraft:end_barrens",
          "minecraft:end_highlands",
          "minecraft:end_midlands"
        ]
      },
      "depth_min": 5,
      "depth_max": 16,
      "weight": 28
    },
    {
      "whitelist": {},
      "blacklist": {
        "type": "minecraft:worldgen/biome",
        "values": [
          "minecraft:the_end",
          "minecraft:the_void",
          "minecraft:small_end_islands",
          "minecraft:end_barrens",
          "minecraft:end_highlands",
          "minecraft:end_midlands"
        ]
      },
      "depth_min": 0,
      "depth_max": 255,
      "weight": 4
    }
  ],
  "pointer": 0,
  "catalyst": {
    "item": 'industrialforegoing:laser_lens8'
  },
  "type": "industrialforegoing:laser_drill_ore"
})
event.custom({
  "output": {
    "item": 'forbidden_arcanus:arcane_crystal_ore'
  },
  "rarity": [
    {
      "whitelist": {},
      "blacklist": {
        "type": "minecraft:worldgen/biome",
        "values": [
          "minecraft:the_end",
          "minecraft:the_void",
          "minecraft:small_end_islands",
          "minecraft:end_barrens",
          "minecraft:end_highlands",
          "minecraft:end_midlands"
        ]
      },
      "depth_min": 5,
      "depth_max": 16,
      "weight": 28
    },
    {
      "whitelist": {},
      "blacklist": {
        "type": "minecraft:worldgen/biome",
        "values": [
          "minecraft:the_end",
          "minecraft:the_void",
          "minecraft:small_end_islands",
          "minecraft:end_barrens",
          "minecraft:end_highlands",
          "minecraft:end_midlands"
        ]
      },
      "depth_min": 0,
      "depth_max": 255,
      "weight": 4
    }
  ],
  "pointer": 0,
  "catalyst": {
    "item": 'industrialforegoing:laser_lens8'
  },
  "type": "industrialforegoing:laser_drill_ore"
})
event.custom({
  "type": "forge:conditional",
  "recipes": [
    {
      "conditions": [
        {
          "value": {
            "tag": "forge:silicon",
            "type": "forge:tag_empty"
          },
          "type": "forge:not"
        }
      ],
      "recipe": {
        "input": {
          "item": "exnihilosequentia:dust"
        },
        "output": {
          "tag": "forge:silicon"
        },
        "type": "industrialforegoing:crusher"
      }
    }
  ]
})
event.custom({
  "input": {
    "tag": "forge:sand"
  },
  "output": {
    "item": "exnihilosequentia:dust"
  },
  "type": "industrialforegoing:crusher"
})


})