// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Blood magic recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {




event.recipes.bloodmagic.altar('bloodmagic:etherealslate', 'bloodmagic:demonslate').upgradeLevel(4).altarSyphon(50000).consumptionRate(20).drainRate(20)
event.recipes.bloodmagic.altar('extendedcrafting:the_ultimate_ingot', 'extendedcrafting:crystaltine_ingot').upgradeLevel(4).altarSyphon(5000).consumptionRate(20).drainRate(20)




})