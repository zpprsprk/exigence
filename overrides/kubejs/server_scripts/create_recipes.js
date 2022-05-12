// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Create recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {
  // crushing wheel
  event.recipes.create.crushing([
    'create:cinder_flour',
    Item.of('create:cinder_flour').withChance(0.5)
  ], 'exnihilosequentia:crushed_netherrack').processingTime(30)
  event.recipes.create.crushing('immersiveengineering:dust_coke', '#forge:coal_coke').processingTime(30)
  event.recipes.create.crushing(Item.of('immersiveengineering:dust_coke', 9), '#forge:storage_blocks/coal_coke').processingTime(30)
  event.recipes.create.crushing([
	Item.of('tetra:pristine_diamond', 1).withChance(0.04),
	Item.of('tetra:pristine_emerald', 1).withChance(0.02),
	Item.of('tetra:pristine_lapis', 1).withChance(0.05),
	Item.of('minecraft:diamond', 1).withChance(0.08),
	Item.of('minecraft:emerald', 1).withChance(0.04),
	Item.of('minecraft:lapis_lazuli', 3).withChance(0.1)
  ], 'tetra:geode').processingTime(30)
  event.recipes.create.compacting('minecraft:obsidian', [
		'#forge:dusts/obsidian', '#forge:dusts/obsidian', 
		'#forge:dusts/obsidian', '#forge:dusts/obsidian'])
  // mixing
  event.recipes.create.mixing('emendatusenigmatica:steel_dust', ['#forge:dusts/iron','#forge:dusts/coal_coke']).superheated()
  event.recipes.create.mixing(Item.of('immersiveengineering:alloybrick', 1), ['#forge:ingots/brick', '#forge:sandstone']).heated()
  event.recipes.create.mixing(Item.of('immersiveengineering:cokebrick', 3), ['#forge:storage_blocks/clay', 'minecraft:bricks', '#forge:sandstone']).heated()
  event.recipes.create.mixing(Item.of('immersiveengineering:blastbrick', 3), ['minecraft:nether_bricks', 'minecraft:bricks', '#forge:magma_block']).heated()
  event.recipes.create.mixing(Item.of('create:limesand', 2), ['exnihilosequentia:dust', 'minecraft:bone_block', {fluid: 'minecraft:water', amount: 250}]).heated()
  event.recipes.create.mixing('create:limesand', ['#forge:sand', '#forge:fruits/lime']).heated()
  event.recipes.create.mixing('immersiveengineering:coal_coke', ['minecraft:coal']).superheated()
  event.recipes.create.mixing('minecraft:slime_block', ['#forge:mushrooms', {fluid: 'exnihilosequentia:witchwater', amount: 250}])
  event.recipes.create.mixing('minecraft:soul_sand', ['#forge:sand', {fluid: 'exnihilosequentia:witchwater', amount: 250}])
  event.recipes.create.mixing('minecraft:brown_mushroom_block', ['exnihilosequentia:ancient_spores', {fluid: 'exnihilosequentia:witchwater', amount: 250}])
  event.recipes.create.mixing('minecraft:red_mushroom_block', ['minecraft:brown_mushroom_block', {fluid: 'exnihilosequentia:witchwater', amount: 250}])
  event.recipes.create.mixing('extendedcrafting:black_iron_ingot', ['#forge:ingots/iron','#forge:dyes/black']).heated()
  event.recipes.create.mixing('extendedcrafting:redstone_ingot', ['#forge:ingots/iron','#forge:dusts/redstone']).heated()
  event.recipes.create.mixing('extendedcrafting:ender_ingot', ['#forge:ingots/iron','#forge:ender_pearls']).heated()
  event.recipes.create.mixing('morered:red_alloy_ingot', ['#forge:ingots/copper', '#forge:dusts/redstone', '#forge:dusts/redstone', '#forge:dusts/redstone', '#forge:dusts/redstone']).heated()
  event.recipes.create.mixing(Item.of('powah:dielectric_paste', 16), ['#minecraft:coals','minecraft:clay_ball']).heated()
  event.recipes.create.mixing('immersiveengineering:treated_wood_horizontal', ['#minecraft:planks', {fluid: 'immersiveengineering:creosote', amount: 125}])
  event.recipes.create.mixing('immersiveengineering:treated_wood_horizontal', ['#minecraft:planks', {fluid: 'thermal:creosote', amount: 125}])
  event.recipes.create.mixing(Item.of('tconstruct:grout', 2), ['#forge:slag', '#forge:sand', '#forge:gravel'])
  event.recipes.create.mixing(Item.of('tconstruct:nether_grout', 2), ['minecraft:magma_cream', '#forge:soul_sand', '#forge:gravel'])
  event.recipes.create.mixing('minecraft:netherite_ingot', ['minecraft:netherite_scrap', 'minecraft:netherite_scrap', 'minecraft:netherite_scrap', 'minecraft:netherite_scrap', '#forge:ingots/gold', '#forge:ingots/gold', '#forge:ingots/gold', '#forge:ingots/gold']).heated()
  
  // splashing
  event.remove({id: 'rftoolsbase:dimensionalshard'})
  event.remove({id: 'create:splashing/soul_sand'})
  event.remove({id: 'create:splashing/gravel'})
  event.remove({id: 'create:splashing/sand'})
  event.recipes.create.splashing([
    Item.of('minecraft:netherite_scrap').withChance(0.01),
	Item.of('exnihilosequentia:piece_cobalt').withChance(0.35),
	Item.of('minecraft:gold_nugget', 5).withChance(0.10)
  ],'exnihilosequentia:crushed_netherrack').processingTime(50)
  event.recipes.create.splashing([
    Item.of('minecraft:glowstone_dust').withChance(0.10),
    Item.of('minecraft:nether_wart').withChance(0.05),
	Item.of('minecraft:quartz').withChance(0.25),
	Item.of('wstweaks:fragment').withChance(0.005),
	Item.of('mysticalagriculture:soulium_dust').withChance(0.01),
	Item.of('mysticalagriculture:soul_dust').withChance(0.05),
	Item.of('minecraft:ghast_tear').withChance(0.05)
  ],'minecraft:soul_sand').processingTime(50)
  event.recipes.create.splashing([
    Item.of('minecraft:diamond').withChance(0.05),
    Item.of('minecraft:emerald').withChance(0.05),
    Item.of('minecraft:coal').withChance(0.25),
	Item.of('minecraft:flint').withChance(0.125),
	Item.of('minecraft:lapis_lazuli').withChance(0.10),
	Item.of('thermal:niter').withChance(0.05),
	Item.of('thermal:sulfur').withChance(0.05),
	Item.of('thermal:apatite').withChance(0.05),
	Item.of('thermal:cinnabar').withChance(0.05),
	Item.of('mekanism:fluorite_gem').withChance(0.05)
  ],'#forge:gravel').processingTime(50)
  event.recipes.create.splashing([
    Item.of('minecraft:prismarine_shard').withChance(0.10),
    Item.of('minecraft:prismarine_crystals').withChance(0.08),
    Item.of('astralsorcery:aquamarine').withChance(0.11),
	Item.of('appliedenergistics2:certus_quartz_crystal').withChance(0.125),
	Item.of('appliedenergistics2:charged_certus_quartz_crystal').withChance(0.09)
  ],'#forge:sand').processingTime(50)
  event.recipes.create.splashing([
    Item.of('minecraft:gunpowder').withChance(0.15),
    Item.of('minecraft:bone_meal').withChance(0.25),
    Item.of('minecraft:blaze_powder').withChance(0.10),
	Item.of('minecraft:redstone').withChance(0.20),
	Item.of('minecraft:glowstone_dust').withChance(0.10),
	Item.of('appliedenergistics2:nether_quartz_dust').withChance(0.05),
	Item.of('appliedenergistics2:certus_quartz_dust').withChance(0.05),
	Item.of('appliedenergistics2:sky_dust').withChance(0.05)
  ],'exnihilosequentia:dust').processingTime(50)
  event.recipes.create.splashing([
	Item.of('exnihilosequentia:piece_lead').withChance(0.75),
	Item.of('exnihilosequentia:piece_zinc').withChance(0.75),
	Item.of('exnihilosequentia:piece_uranium').withChance(0.75),
	Item.of('exnihilosequentia:piece_osmium').withChance(0.75)
  ],'exnihilosequentia:crushed_andesite').processingTime(50)
  event.recipes.create.splashing([
	Item.of('exnihilosequentia:piece_iron').withChance(0.75),
	Item.of('exnihilosequentia:piece_gold').withChance(0.75),
	Item.of('exnihilosequentia:piece_copper').withChance(0.75),
  ],'exnihilosequentia:crushed_granite').processingTime(50)
  event.recipes.create.splashing([
	Item.of('exnihilosequentia:piece_silver').withChance(0.75),
	Item.of('exnihilosequentia:piece_nickel').withChance(0.75),
	Item.of('exnihilosequentia:piece_aluminum').withChance(0.75),
	Item.of('exnihilosequentia:piece_tin').withChance(0.75),
  ],'exnihilosequentia:crushed_diorite').processingTime(50)
  event.recipes.create.splashing([
    Item.of('minecraft:ender_pearl').withChance(0.05),
    Item.of('appliedenergistics2:fluix_dust').withChance(0.10),
    Item.of('appliedenergistics2:ender_dust').withChance(0.25),
    Item.of('minecraft:chorus_fruit').withChance(0.25),
	Item.of('minecraft:chorus_flower').withChance(0.01),
	Item.of('rftoolsbase:dimensionalshard').withChance(0.10),
	Item.of('mysticalagriculture:prosperity_shard').withChance(0.25),
  ],'exnihilosequentia:crushed_end_stone').processingTime(50)
  event.recipes.create.splashing([
    Item.of('minecraft:ice')
  ],'minecraft:water_bucket').processingTime(50)

  // mechanical crafting
  event.recipes.create.mechanical_crafting('extendedcrafting:basic_table', [
  ' BOB ',
  'BCCCB',
  'OCACO',
  'BCCCB',
  ' BOB '], {
	  B: 'extendedcrafting:black_iron_ingot',
	  O: 'extendedcrafting:basic_component',
	  C: 'minecraft:crafting_table',
	  A: 'extendedcrafting:basic_catalyst'
  })
  event.recipes.create.mechanical_crafting('extendedcrafting:advanced_table', [
  ' OAO ',
  'OBEBO',
  'ATBTA',
  'OBEBO',
  ' OAO '], {
	  O: 'extendedcrafting:advanced_component',
	  A: 'extendedcrafting:advanced_catalyst',
	  B: 'extendedcrafting:black_iron_block',
	  E: 'extendedcrafting:ender_ingot_block',
	  T: 'extendedcrafting:basic_table'
  })
  event.recipes.create.mechanical_crafting('extendedcrafting:elite_table', [
  ' SOS ',
  'MBEBM',
  'OTATO',
  'MBEBM',
  ' SOS '], {
	  S: 'extendedcrafting:ender_star',
	  O: 'extendedcrafting:elite_component',
	  M: 'create:mechanical_crafter',
	  B: 'extendedcrafting:black_iron_block',
	  E: 'extendedcrafting:ender_ingot_block',
	  T: 'extendedcrafting:advanced_table',
	  A: 'extendedcrafting:elite_catalyst'
  })
  event.recipes.create.mechanical_crafting('extendedcrafting:ultimate_table', [
  'SURUS',
  'UEARU',
  'EATAE',
  'URAEU',
  'SURUS'], {
	  S: 'extendedcrafting:ender_star',
	  U: 'extendedcrafting:the_ultimate_component',
	  R: 'extendedcrafting:redstone_catalyst',
	  E: 'extendedcrafting:ender_catalyst',
	  A: 'extendedcrafting:ultimate_catalyst',
	  T: 'extendedcrafting:elite_table'
  })
  event.recipes.create.mechanical_crafting('create:creative_motor', [
  'ABCBA',
  'BDEDB',
  'CEFEC',
  'BDEDB',
  'ABCBA'], {
	  A: 'mekanism:module_charge_distribution_unit',
	  B: 'create:large_cogwheel',
	  C: 'create:water_wheel',
	  D: 'mekanism:module_solar_recharging_unit',
	  E: 'create:white_sail',
	  F: 'create:windmill_bearing'
  })
  event.recipes.create.mechanical_crafting('powah:energy_cell_creative', [
  'ENE',
  'NCN',
  'ENE'], {
	  C: 'mekanism:creative_energy_cube', 
	  N: 'powah:nitro_crystal_block',
	  E: 'elementalcraft:tank_creative'
  })
  
  event.recipes.createSequencedAssembly([
    Item.of('create:precision_mechanism')
  ], '#forge:plates/electrum', [
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'createaddition:capacitor']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:brass_hand']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:wires/iron'])
  ]).transitionalItem('create:incomplete_precision_mechanism').loops(4)


})