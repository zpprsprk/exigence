// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Elementalcraft recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {

event.custom({
  "type": "elementalcraft:binding",
  "element_type": "earth",
  "element_amount": 5000,
  "ingredients": [
    {
      "tag": "elementalcraft:gems/fine_earth"
    },
    {
      "item": "elementalcraft:whiterock"
    }
  ],
  "output": {
    "item": "tetra:geode"
  }
})

})