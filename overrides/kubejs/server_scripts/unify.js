// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Unifying inputs and outputs')

onEvent('recipes', event => {
    //
	// Unify inputs here
    //
	event.replaceInput({}, '#forge:plates/iron', '#forge:plates/iron')

    //
    // Unify outputs here
    //
	
	// plates
	event.replaceOutput({}, '#forge:plates/iron', 'immersiveengineering:plate_iron')
	
	// ingots
	event.replaceOutput({}, '#forge:ingots/steel', 'immersiveengineering:ingot_steel')
	
	// nuggets
	event.replaceOutput({}, '#forge:nuggets/steel', 'immersiveengineering:nugget_steel')
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})