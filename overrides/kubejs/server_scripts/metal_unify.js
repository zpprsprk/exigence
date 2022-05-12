// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Metal unify script here!  (You will see this line every time server resources reload)')



events.listen('recipes', event => {

const unifyEmendatus = (type) => {
  event.replaceOutput({}, '#forge:ingots/' + type, 'emendatusenigmatica:' + type + '_ingot')
  event.replaceOutput({}, '#forge:nuggets/' + type, 'emendatusenigmatica:' + type + '_nugget')
  unifyEmendatusParts(type)
}
const unifyEmendatusParts = (type) => {
  event.replaceOutput({}, '#forge:plates/' + type, 'emendatusenigmatica:' + type + '_plate')
  event.replaceOutput({}, '#forge:rods/' + type, 'emendatusenigmatica:' + type + '_rod')
  event.replaceOutput({}, '#forge:dusts/' + type, 'emendatusenigmatica:' + type + '_dust')
}
unifyEmendatusParts('iron')
unifyEmendatusParts('gold')
unifyEmendatus('copper')
unifyEmendatus('aluminum')
unifyEmendatus('silver')
unifyEmendatus('lead')
unifyEmendatus('nickel')
unifyEmendatus('uranium')
unifyEmendatus('osmium')
unifyEmendatus('tin')
unifyEmendatus('zinc')
unifyEmendatus('cobalt')
unifyEmendatus('bronze')
unifyEmendatus('brass')
unifyEmendatus('constantan')
unifyEmendatus('electrum')
unifyEmendatus('steel')
unifyEmendatus('invar')
unifyEmendatus('signalum')
unifyEmendatus('lumium')
unifyEmendatus('enderium')

event.replaceOutput({}, '#forge:dusts/niter', 'emendatusenigmatica:potassium_nitrate_dust')
event.replaceOutput({}, '#forge:dusts/saltpeter', 'emendatusenigmatica:potassium_nitrate_dust')
event.replaceOutput({}, '#forge:gems/niter', 'emendatusenigmatica:potassium_nitrate_gem')
event.replaceOutput({}, '#forge:gems/saltpeter', 'emendatusenigmatica:potassium_nitrate_gem')
event.replaceOutput({}, '#forge:dusts/diamond', 'emendatusenigmatica:diamond_dust')


})