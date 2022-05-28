// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Removing some recipes...')

onEvent('recipes', event => {
	// Change recipes here
	event.remove({id: 'immersiveengineering:crafting/cokebrick'})
	event.remove({id: 'immersiveengineering:crafting/blastbrick'})
	event.remove({id: 'immersiveengineering:crafting/alloybrick'})
	event.remove({id: 'immersiveengineering:crafting/treated_wood_horizontal'})
	event.remove({id: 'refinedstorage:crafter'})
	event.remove({id: 'refinedstorage:crafter_manager'})
	event.remove({id: 'refinedstorage:pattern'})
	event.remove({id: 'refinedstorage:crafting_monitor'})
	event.remove({id: 'refinedstorage:wireless_crafting_monitor'})
	event.remove({id: 'refinedstorage:pattern_grid/pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/white_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/white_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/white_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/white_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/white_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/orange_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/orange_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/orange_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/orange_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/orange_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/magenta_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/magenta_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/magenta_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/magenta_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/magenta_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/yellow_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/yellow_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/yellow_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/yellow_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/yellow_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/lime_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/lime_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/lime_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/lime_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/lime_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/pink_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/pink_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/pink_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/pink_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/pink_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/gray_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/gray_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/gray_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/gray_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/gray_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/light_gray_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/light_gray_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/light_gray_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/light_gray_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/light_gray_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/cyan_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/cyan_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/cyan_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/cyan_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/cyan_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/purple_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/purple_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/purple_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/purple_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/purple_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/blue_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/blue_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/blue_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/blue_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/blue_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/brown_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/brown_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/brown_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/brown_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/brown_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/green_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/green_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/green_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/green_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/green_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/red_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/red_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/red_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/red_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/red_crafting_monitor'})
	event.remove({id: 'refinedstorage:coloring_recipes/black_crafter'})
	event.remove({id: 'refinedstorage:coloring_recipes/black_crafter_manager'})
	event.remove({id: 'refinedstorage:coloring_recipes/black_pattern_grid'})
	event.remove({id: 'refinedstorage:pattern_grid/black_pattern_grid'})
	event.remove({id: 'refinedstorage:coloring_recipes/black_crafting_monitor'})
	event.remove({id: 'advgenerators:crafting/controller'})
	event.remove({id: 'electrodynamics:ingotsteel_ingot_smelting'})
	event.remove({id: 'immersiveengineering:crafting/light_engineering'})
	event.remove({id: 'extendedcrafting:black_iron_slate'})
	event.remove({id: 'extendedcrafting:black_iron_ingot'})
	event.remove({id: 'extendedcrafting:redstone_ingot'})
	event.remove({id: 'extendedcrafting:ender_ingot'})
	event.remove({id: 'mysticalagriculture:inferium_farmland'})
	event.remove({id: 'mysticalagriculture:inferium_farmland_till'})
	event.remove({id: 'mysticalagriculture:prudentium_farmland'})
	event.remove({id: 'mysticalagriculture:prudentium_farmland_till'})
	event.remove({id: 'mysticalagriculture:tertium_farmland'})
	event.remove({id: 'mysticalagriculture:tertium_farmland_till'})
	event.remove({id: 'mysticalagriculture:imperium_farmland'})
	event.remove({id: 'mysticalagriculture:imperium_farmland_till'})
	event.remove({id: 'mysticalagriculture:supremium_farmland'})
	event.remove({id: 'mysticalagriculture:supremium_farmland_till'})
	event.remove({id: 'mysticalagradditions:insanium_farmland'})
	event.remove({id: 'mysticalagradditions:insanium_farmland_till'})
	event.remove({id: 'minecraft:ender_eye'})
	event.remove({id: 'electrodynamics:coalcoke_blasting'})
	event.remove({id: 'electrodynamics:coalcoke_smelting'})
	event.remove({id: 'armorplus:crafting/shaped/chicken/chicken_boots_alt'})
	event.remove({id: 'armorplus:crafting/shaped/coal/coal_boots_alt'})
	event.remove({id: 'armorplus:crafting/shaped/lapis/lapis_boots_alt'})
	event.remove({id: 'armorplus:crafting/shaped/redstone/redstone_boots_alt'})
	event.remove({id: 'armorplus:crafting/shaped/slime/slime_boots_alt'})
	event.remove({id: 'mythicbotany:alfsteel_boots_smithing'})
	event.remove({id: 'immersiveengineering:crafting/stick_iron'})
	event.remove({id: 'advgenerators:turbines/rotor_tier5_enderium'})
	event.remove({id: 'advgenerators:turbines/kit_tier5_enderium'})
	event.remove({id: 'electrodynamics:geariron'})
	event.remove({id: 'electrodynamics:gearcopper'})
	event.remove({id: 'electrodynamics:geartin'})
	event.remove({id: 'electrodynamics:gearsteel'})
	event.remove({id: 'electrodynamics:gearbronze'})
	event.remove({id: 'assemblylinemachines:crafting/gears/pure_copper'})
	event.remove({id: 'assemblylinemachines:crafting/gears/pure_gold'})
	event.remove({id: 'assemblylinemachines:crafting/gears/pure_iron'})
	event.remove({id: 'assemblylinemachines:crafting/gears/pure_steel'})
	event.remove({id: 'assemblylinemachines:crafting/gears/pure_titanium'})
	event.remove({id: 'thermal:parts/iron_gear'})
	event.remove({id: 'thermal:parts/gold_gear'})
	event.remove({id: 'thermal:parts/copper_gear'})
	event.remove({id: 'thermal:parts/netherite_gear'})
	event.remove({id: 'thermal:parts/lapis_gear'})
	event.remove({id: 'thermal:parts/diamond_gear'})
	event.remove({id: 'thermal:parts/emerald_gear'})
	event.remove({id: 'thermal:parts/quartz_gear'})
	event.remove({id: 'thermal:parts/tin_gear'})
	event.remove({id: 'thermal:parts/lead_gear'})
	event.remove({id: 'thermal:parts/silver_gear'})
	event.remove({id: 'thermal:parts/nickel_gear'})
	event.remove({id: 'thermal:parts/bronze_gear'})
	event.remove({id: 'thermal:parts/electrum_gear'})
	event.remove({id: 'thermal:parts/invar_gear'})
	event.remove({id: 'thermal:parts/constantan_gear'})
	event.remove({id: 'thermal:parts/signalum_gear'})
	event.remove({id: 'thermal:parts/lumium_gear'})
	event.remove({id: 'thermal:parts/enderium_gear'})
})
