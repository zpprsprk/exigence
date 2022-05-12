// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Cyclic recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {


event.custom({
  "type": "cyclic:solidifier",
  "inputTop": {
    "item": "rftoolspower:dimensionalcell_creative"
  },
  "inputMiddle": {
    "item": "rftoolspower:dimensionalcell_creative"
  },
  "inputBottom": {
    "item": "rftoolspower:dimensionalcell_creative"
  },
  "mix": {
    "fluid": "mekanismgenerators:fusion_fuel",
    "count": 1000
  },
  "result": {
    "item": "cyclic:battery_infinite",
	"count": 3
  }
})

//"mekanismgenerators:fusion_fuel"

})


