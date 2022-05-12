// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Powah recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {


event.custom({
  "type": "powah:energizing",
  "ingredients": [
    {"item": 'mekanism:ultimate_energy_cube'},
	{"item": 'immersiveengineering:capacitor_creative'},
	{"item": 'immersiveengineering:capacitor_creative'},
	{"item": 'immersiveengineering:capacitor_creative'},
	{"item": 'immersiveengineering:capacitor_creative'}
  ],
  "energy": 2000000000,
  "result": Item.of('mekanism:creative_energy_cube', {mekData:{EnergyContainers:[{Container:0,stored:"18446744073709551615.9999"}]}})
})

})