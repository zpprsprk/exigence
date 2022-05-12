// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Tinkers Construct recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {

event.custom({
  "type": "tconstruct:melting",
  "ingredient": [
    {
      "tag": "forge:dusts/ender_pearl"
    }
  ],
  "result": {
    "fluid": "tconstruct:molten_ender",
    "amount": 250
  },
  "temperature": 477,
  "time": 25
})


})