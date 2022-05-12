// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Compact Crafting recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {



event.custom({
  "type": "compactcrafting:miniaturization",
  "version": 1,
  "recipeSize": 3,
  "layers": [
    {
      "type": "compactcrafting:filled",
      "component": "C"
    },
    {
      "type": "compactcrafting:filled",
      "component": "C"
    },
    {
      "type": "compactcrafting:filled",
      "component": "C"
    }
  ],

  "catalyst": {
    "id": "minecraft:anvil",
    "Count": 1
  },

  "components": {
    "C": {
      "type": "compactcrafting:block",
	  "block": "minecraft:coal_block"
    }
  },

  "outputs": [
    {
      "id": "minecraft:diamond",
      "Count": 27
    }
  ]
})
event.custom({
  "type": "compactcrafting:miniaturization",
  "version": 1,
  "recipeSize": 3,
  "layers": [
    {
      "type": "compactcrafting:filled",
      "component": "C"
    },
    {
      "type": "compactcrafting:filled",
      "component": "C"
    },
    {
      "type": "compactcrafting:filled",
      "component": "C"
    }
  ],

  "catalyst": {
    "id": "minecraft:anvil",
    "Count": 1
  },

  "components": {
    "C": {
      "type": "compactcrafting:block",
	  "block": "thermal:charcoal_block"
    }
  },

  "outputs": [
    {
      "id": "minecraft:diamond",
      "Count": 27
    }
  ]
})

event.custom({
  "type": "compactcrafting:miniaturization",
  "version": 1,
  "recipeSize": 5,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
	    ["B","S","S","S","B"],
	    ["S","B","S","B","S"],
	    ["S","S","B","S","S"],
	    ["S","B","S","B","S"],
	    ["B","S","S","S","B"]
	  ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
	    ["S","B","S","B","S"],
	    ["B","A","A","A","B"],
	    ["S","A","A","A","S"],
	    ["B","A","A","A","B"],
	    ["S","B","S","B","S"]
	  ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
	    ["S","S","B","S","S"],
	    ["S","A","A","A","S"],
	    ["B","A","F","A","B"],
	    ["S","A","A","A","S"],
	    ["S","S","B","S","S"]
	  ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
	    ["S","B","S","B","S"],
	    ["B","A","A","A","B"],
	    ["S","A","A","A","S"],
	    ["B","A","A","A","B"],
	    ["S","B","S","B","S"]
	  ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
	    ["B","S","S","S","B"],
	    ["S","B","S","B","S"],
	    ["S","S","B","S","S"],
	    ["S","B","S","B","S"],
	    ["B","S","S","S","B"]
	  ]
    }
  ],

  "catalyst": {
    "id": "emendatusenigmatica:osmium_block",
    "Count": 1
  },

  "components": {
    "S": {
      "type": "compactcrafting:block",
	  "block": "immersiveengineering:sheetmetal_steel"
    },
    "B": {
      "type": "compactcrafting:block",
	  "block": "mekanism:block_steel"
    },
    "A": {
      "type": "compactcrafting:block",
	  "block": "immersiveengineering:steel_scaffolding_standard"
    },
    "F": {
      "type": "compactcrafting:block",
	  "block": "thermal:machine_frame"
    }
  },

  "outputs": [
    {
      "id": "mekanism:steel_casing",
      "Count": 2
    }
  ]
})

})