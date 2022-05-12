// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Mystical Agriculture recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {

event.custom({
  "type": "mysticalagriculture:infusion",
  "input": {
    "tag": 'forge:seeds'
  },
  "ingredients": [
    {
      "item": 'mysticalagriculture:inferium_block'
    },
    {
      "item": 'mysticalagriculture:prosperity_ingot_block'
    },
    {
      "item": 'mysticalagriculture:inferium_block'
    },
    {
      "item": 'mysticalagriculture:prosperity_gemstone'
    },
    {
      "item": 'mysticalagriculture:inferium_block'
    },
    {
      "item": 'mysticalagriculture:prosperity_ingot_block'
    },
    {
      "item": 'mysticalagriculture:inferium_block'
    },
    {
      "item": 'mysticalagriculture:prosperity_gemstone'
    }
  ],
  "result": {
    "item": 'mysticalagriculture:inferium_seeds'
  }
})
event.custom({
  "type": "mysticalagriculture:infusion",
  "input": {
    "item": 'bloodmagic:etherealslate'
  },
  "ingredients": [
    {
      "item": 'undergarden:forgotten_block'
    },
    {
      "item": 'mysticalagradditions:insanium_block'
    },
    {
      "item": 'undergarden:forgotten_block'
    },
    {
      "item": 'mysticalagradditions:insanium_block'
    },
    {
      "item": 'undergarden:forgotten_block'
    },
    {
      "item": 'mysticalagradditions:insanium_block'
    },
    {
      "item": 'undergarden:forgotten_block'
    },
    {
      "item": 'mysticalagradditions:insanium_block'
    }
  ],
  "result": {
    "item": 'mysticalagradditions:creative_essence'
  }
})
event.custom({
  "type": "mysticalagriculture:farmland_till",
  "group": "mysticalagriculture:farmland_till",
  "ingredients": [
    {
      "type": "mysticalagriculture:all_hoes"
    },
    {
      "item": "undergarden:deepsoil"
    }
  ],
  "result": {
    "item": "undergarden:deepsoil_farmland",
    "count": 1
  }
})

})