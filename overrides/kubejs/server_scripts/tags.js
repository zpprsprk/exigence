// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Adjusting Tags')

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	event.remove('forge:ingots/uranium', ['bigreactors:yellorium_ingot'])
	event.remove('forge:dusts/uranium', ['bigreactors:yellorium_dust'])
	event.remove('forge:ores/uranium', ['bigreactors:yellorite_ore'])
	console.info("ALERTTHISISHERE" + event.get('forge:ingots/uranium'))
//	event.get('forge:dusts/uranium').remove('bigreactors:yellorium_dust')
//	event.get('forge:ores/uranium').remove('bigreactors:yellorite_ore')
})