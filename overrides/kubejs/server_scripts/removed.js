// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({id: 'immersiveengineering:crafting/cokebrick'})
	event.remove({id: 'immersiveengineering:crafting/blastbrick'})
	event.remove({id: 'immersiveengineering:crafting/alloybrick'})
	event.remove({id: 'immersiveengineering:crafting/treated_wood_horizontal'})
	event.remove({id: 'refinedstorage:crafter'})
	event.remove({id: 'refinedstorage:crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/white_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/white_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/orange_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/orange_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/magenta_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/magenta_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/yellow_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/yellow_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/lime_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/lime_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/pink_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/pink_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/gray_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/gray_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/light_gray_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/light_gray_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/cyan_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/cyan_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/purple_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/purple_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/blue_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/blue_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/brown_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/brown_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/green_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/green_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/red_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/red_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/black_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/black_crafter_manager'})
	event.remove({id: 'advgenerators:crafting/controller'})
	event.remove({id: 'electrodynamics:ingotsteel_ingot_smelting'})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})