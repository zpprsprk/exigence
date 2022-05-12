// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Sieve recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {
  event.remove({id: 'exnihilosequentia:sieve/ens_blaze_powder'})
  event.remove({id: 'exnihilosequentia:sieve/ens_bone_meal'})
  event.remove({id: 'exnihilosequentia:sieve/ens_coal'})
  event.remove({id: 'exnihilosequentia:sieve/ens_cocoa_beans'})
  event.remove({id: 'exnihilosequentia:sieve/ens_diamond'})
  event.remove({id: 'exnihilosequentia:sieve/ens_emerald'})
  event.remove({id: 'exnihilosequentia:sieve/ens_flint'})
  event.remove({id: 'exnihilosequentia:sieve/ens_glowstone'})
  event.remove({id: 'exnihilosequentia:sieve/ens_gunpowder'})
  event.remove({id: 'exnihilosequentia:sieve/ens_lapis_lazuli'})
  event.remove({id: 'exnihilosequentia:sieve/ens_pebble_andesite'})
  event.remove({id: 'exnihilosequentia:sieve/ens_pebble_basalt'})
  event.remove({id: 'exnihilosequentia:sieve/ens_pebble_blackstone'})
  event.remove({id: 'exnihilosequentia:sieve/ens_pebble_diorite'})
  event.remove({id: 'exnihilosequentia:sieve/ens_pebble_granite'})
  event.remove({id: 'exnihilosequentia:sieve/ens_pebble_stone'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_aluminum_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_copper_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_gold_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_iron_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_iron_sand'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_lead_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_nickel_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_silver_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_tin_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_uranium_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_piece_zinc_gravel'})
  event.remove({id: 'exnihilosequentia:sieve/ens_prismarine_crystals'})
  event.remove({id: 'exnihilosequentia:sieve/ens_prismarine_shard'})
  event.remove({id: 'exnihilosequentia:sieve/ens_redstone'})
  event.remove({id: 'exnihilosequentia:sieve/ens_seagrass'})
  event.remove({id: 'exnihilosequentia:sieve/ens_sea_grass'})
  event.remove({id: 'exnihilosequentia:sieve/ens_seed_blue_coral'})
  event.remove({id: 'exnihilosequentia:sieve/ens_seed_pickle'})
  event.remove({id: 'exnihilosequentia:sieve/ens_seed_pink_coral'})
  event.remove({id: 'exnihilosequentia:sieve/ens_seed_purple_coral'})
  event.remove({id: 'exnihilosequentia:sieve/ens_seed_red_coral'})
  event.remove({id: 'exnihilosequentia:sieve/ens_seed_yellow_coral'})
  
  event.remove({id: 'excompressum:sieve/sea_grass'})
  
  event.remove({id: 'exnihiloae:sieve/ens_certus_dust'})
  event.remove({id: 'exnihiloae:sieve/ens_fluix_dust'})
  event.remove({id: 'exnihiloae:sieve/ens_nether_quartz_dust'})
  event.remove({id: 'exnihiloae:sieve/ens_sky_dust'})

  event.remove({id: 'exnihilomekanism:sieve/ens_piece_osmium_1'})
  event.remove({id: 'exnihilomekanism:sieve/ens_piece_osmium_2'})
  event.remove({id: 'exnihilomekanism:sieve/ens_piece_osmium_3'})
  
  event.remove({id: 'exnihilothermal:sieve/ens_apatite'})
  event.remove({id: 'exnihilothermal:sieve/ens_cinnabar'})
  event.remove({id: 'exnihilothermal:sieve/ens_niter'})
  event.remove({id: 'exnihilothermal:sieve/ens_sulfur'})


  const doSieve = (input, output, mesh, chance, waterlogged) => {
    event.custom({
      'type': 'exnihilosequentia:sieve',
      'rolls': [
        {
          'chance': chance,
          'mesh': mesh
        }
      ],
      'input': {
        'item': input
      },
      'result': {
        'item': output
      },
	  'waterlogged': waterlogged
    })
  }

  const sieveAltStoneStd = (output, input) => {
	doSieve(input, output, 'flint', 0.1, false)
	doSieve(input, output, 'iron', 0.15, false)
	doSieve(input, output, 'diamond', 0.2, false)
	doSieve(input, output, 'emerald', 0.25, false)
	doSieve(input, output, 'netherite', 0.45, false)
  }

  const sieveAltStoneGem = (output, input) => {
	doSieve(input, output, 'iron', 0.05, false)
	doSieve(input, output, 'diamond', 0.1, false)
	doSieve(input, output, 'emerald', 0.15, false)
	doSieve(input, output, 'netherite', 0.25, false)
  }

  // crushed alt stone
  sieveAltStoneStd('exnihilosequentia:piece_silver','exnihilosequentia:crushed_diorite')
  sieveAltStoneStd('exnihilosequentia:piece_nickel','exnihilosequentia:crushed_diorite')
  sieveAltStoneStd('exnihilosequentia:piece_aluminum','exnihilosequentia:crushed_diorite')
  sieveAltStoneStd('exnihilosequentia:piece_tin','exnihilosequentia:crushed_diorite')
  sieveAltStoneGem('mysticalagriculture:prosperity_shard','exnihilosequentia:crushed_diorite')
  sieveAltStoneStd('exnihilosequentia:piece_lead','exnihilosequentia:crushed_andesite')
  sieveAltStoneStd('exnihilosequentia:piece_zinc','exnihilosequentia:crushed_andesite')
  sieveAltStoneStd('exnihilosequentia:piece_uranium','exnihilosequentia:crushed_andesite')
  sieveAltStoneStd('exnihilosequentia:piece_osmium','exnihilosequentia:crushed_andesite')
  sieveAltStoneStd('exnihilosequentia:piece_iron','exnihilosequentia:crushed_granite')
  sieveAltStoneStd('exnihilosequentia:piece_gold','exnihilosequentia:crushed_granite')
  sieveAltStoneStd('exnihilosequentia:piece_copper','exnihilosequentia:crushed_granite')
  sieveAltStoneStd('tetra:metal_scrap','undergarden:deepsoil')

  //
  // SOUL SAND
  //
  doSieve('minecraft:soul_sand', 'minecraft:wither_rose', 'diamond', 0.005, true)
  doSieve('minecraft:soul_sand', 'minecraft:wither_rose', 'emerald', 0.01, true)
  doSieve('minecraft:soul_sand', 'minecraft:wither_rose', 'netherite', 0.02, true)

  //
  // DIRT
  //
  
  // string mesh
  doSieve('minecraft:dirt', 'exnihilosequentia:pebble_stone', 'string', 0.75, true)
  doSieve('minecraft:dirt', 'exnihilosequentia:pebble_andesite', 'string', 0.75, true)
  doSieve('minecraft:dirt', 'exnihilosequentia:pebble_diorite', 'string', 0.75, true)
  doSieve('minecraft:dirt', 'exnihilosequentia:pebble_granite', 'string', 0.75, true)
  doSieve('minecraft:dirt', 'exnihilosequentia:pebble_blackstone', 'string', 0.75, true)
  doSieve('minecraft:dirt', 'exnihilosequentia:pebble_basalt', 'string', 0.75, true)

  //
  // GRAVEL
  //
  
  // string mesh
  doSieve('minecraft:gravel', 'minecraft:flint', 'string', 0.25, false)
  doSieve('minecraft:gravel', 'thermal:apatite', 'string', 0.25, true)

  // flint mesh
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_iron', 'flint', 0.05, false)
  doSieve('minecraft:gravel', 'minecraft:flint', 'flint', 0.05, false)
  doSieve('minecraft:gravel', 'minecraft:coal', 'flint', 0.15, false)

  // iron mesh
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_iron', 'iron', 0.1, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_zinc', 'iron', 0.1, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_copper', 'iron', 0.1, false)
  doSieve('minecraft:gravel', 'minecraft:diamond', 'iron', 0.025, true)
  doSieve('minecraft:gravel', 'thermal:cinnabar', 'iron', 0.025, true)
  doSieve('minecraft:gravel', 'minecraft:lapis_lazuli', 'iron', 0.05, true)
  doSieve('minecraft:gravel', 'mekanism:fluorite_gem', 'iron', 0.02, true)
  
  // diamond mesh
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_silver', 'diamond', 0.1, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_gold', 'diamond', 0.1, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_lead', 'diamond', 0.1, true)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_uranium', 'diamond', 0.1, true)
  doSieve('minecraft:gravel', 'minecraft:emerald', 'diamond', 0.025, true)
  doSieve('minecraft:gravel', 'minecraft:diamond', 'diamond', 0.05, true)
  
  // emerald mesh
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_aluminum', 'emerald', 0.1, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_nickel', 'emerald', 0.1, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_osmium', 'emerald', 0.1, true)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_tin', 'emerald', 0.1, true)
  doSieve('minecraft:gravel', 'minecraft:emerald', 'emerald', 0.05, true)
  
  // netherite mesh
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_iron', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_gold', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_silver', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_nickel', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_aluminum', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_tin', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_osmium', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_lead', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_zinc', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_uranium', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'exnihilosequentia:piece_copper', 'netherite', 0.15, false)
  doSieve('minecraft:gravel', 'minecraft:diamond', 'netherite', 0.11, true)
  doSieve('minecraft:gravel', 'minecraft:emerald', 'netherite', 0.11, true)
  doSieve('minecraft:gravel', 'minecraft:lapis_lazuli', 'netherite', 0.12, true)

  //
  // SAND
  //
  
  // string mesh
  doSieve('minecraft:sand', 'minecraft:cocoa_beans', 'string', 0.25, false)
  doSieve('minecraft:red_sand', 'minecraft:cocoa_beans', 'string', 0.25, false)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_kelp', 'string', 0.05, true)

  // flint mesh
  doSieve('minecraft:sand', 'mekanism:salt', 'flint', 0.05, false)
  doSieve('minecraft:red_sand', 'mekanism:salt', 'flint', 0.05, false)
  doSieve('minecraft:sand', 'exnihilosequentia:seed_pickle', 'flint', 0.05, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_pickle', 'flint', 0.05, true)

  // iron mesh
  doSieve('minecraft:sand', 'minecraft:seagrass', 'iron', 0.05, true)
  doSieve('minecraft:red_sand', 'minecraft:seagrass', 'iron', 0.05, true)
  doSieve('minecraft:sand', 'minecraft:prismarine_shard', 'iron', 0.1, true)
  doSieve('minecraft:red_sand', 'minecraft:prismarine_shard', 'iron', 0.1, true)
  
  // diamond mesh
  doSieve('minecraft:sand', 'exnihilosequentia:seed_red_coral', 'diamond', 0.05, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_red_coral', 'diamond', 0.05, true)
  doSieve('minecraft:sand', 'exnihilosequentia:seed_blue_coral', 'diamond', 0.05, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_blue_coral', 'diamond', 0.05, true)
  doSieve('minecraft:sand', 'minecraft:prismarine_crystals', 'diamond', 0.075, true)
  doSieve('minecraft:red_sand', 'minecraft:prismarine_crystals', 'diamond', 0.075, true)
  
  // emerald mesh
  doSieve('minecraft:sand', 'exnihilosequentia:seed_purple_coral', 'diamond', 0.05, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_purple_coral', 'diamond', 0.05, true)
  doSieve('minecraft:sand', 'exnihilosequentia:seed_pink_coral', 'diamond', 0.05, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_pink_coral', 'diamond', 0.05, true)
  doSieve('minecraft:sand', 'exnihilosequentia:seed_yellow_coral', 'diamond', 0.05, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_yellow_coral', 'diamond', 0.05, true)
  
  // netherite mesh
  doSieve('minecraft:sand', 'emendatusenigmatica:bitumen_gem', 'netherite', 0.2, false)
  doSieve('minecraft:red_sand', 'emendatusenigmatica:bitumen_gem', 'netherite', 0.2, false)
  doSieve('minecraft:sand', 'minecraft:prismarine_shard', 'netherite', 0.17, true)
  doSieve('minecraft:red_sand', 'minecraft:prismarine_shard', 'netherite', 0.17, true)
  doSieve('minecraft:sand', 'minecraft:prismarine_crystals', 'netherite', 0.14, true)
  doSieve('minecraft:red_sand', 'minecraft:prismarine_crystals', 'netherite', 0.14, true)
  doSieve('minecraft:sand', 'exnihilosequentia:seed_red_coral', 'netherite', 0.1, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_red_coral', 'netherite', 0.1, true)
  doSieve('minecraft:sand', 'exnihilosequentia:seed_blue_coral', 'netherite', 0.1, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_blue_coral', 'netherite', 0.1, true)
  doSieve('minecraft:sand', 'exnihilosequentia:seed_purple_coral', 'netherite', 0.1, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_purple_coral', 'netherite', 0.1, true)
  doSieve('minecraft:sand', 'exnihilosequentia:seed_pink_coral', 'netherite', 0.1, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_pink_coral', 'netherite', 0.1, true)
  doSieve('minecraft:sand', 'exnihilosequentia:seed_yellow_coral', 'netherite', 0.1, true)
  doSieve('minecraft:red_sand', 'exnihilosequentia:seed_yellow_coral', 'netherite', 0.1, true)

  //
  // DUST
  //
  
  // string mesh
  doSieve('exnihilosequentia:dust', 'minecraft:bone_meal', 'string', 0.125, false)
  doSieve('exnihilosequentia:dust', 'minecraft:clay_ball', 'string', 0.125, true)
  
  // flint mesh
  doSieve('exnihilosequentia:dust', 'minecraft:blaze_powder', 'flint', 0.03, false)
  doSieve('exnihilosequentia:dust', 'minecraft:gunpowder', 'flint', 0.125, true)
  
  // iron mesh
  doSieve('exnihilosequentia:dust', 'minecraft:redstone', 'iron', 0.05, false)
  doSieve('exnihilosequentia:dust', 'exnihilosequentia:dust_obsidian', 'iron', 0.25, true)

  // diamond mesh
  doSieve('exnihilosequentia:dust', 'minecraft:redstone', 'diamond', 0.1, false)
  doSieve('exnihilosequentia:dust', 'minecraft:glowstone_dust', 'diamond', 0.075, false)

  // emerald mesh
  doSieve('exnihilosequentia:dust', 'appliedenergistics2:nether_quartz_dust', 'emerald', 0.05, false)
  doSieve('exnihilosequentia:dust', 'appliedenergistics2:certus_quartz_dust', 'emerald', 0.05, false)
  doSieve('exnihilosequentia:dust', 'appliedenergistics2:fluix_dust', 'emerald', 0.05, false)

  // netherite mesh
  doSieve('exnihilosequentia:dust', 'appliedenergistics2:nether_quartz_dust', 'netherite', 0.1, false)
  doSieve('exnihilosequentia:dust', 'appliedenergistics2:certus_quartz_dust', 'netherite', 0.1, false)
  doSieve('exnihilosequentia:dust', 'appliedenergistics2:fluix_dust', 'netherite', 0.1, false)
  doSieve('exnihilosequentia:dust', 'appliedenergistics2:sky_dust', 'netherite', 0.075, false)
  doSieve('exnihilosequentia:dust', 'minecraft:redstone', 'netherite', 0.15, false)
  doSieve('exnihilosequentia:dust', 'minecraft:glowstone_dust', 'netherite', 0.15, false)

  //
  // NETHERRACK
  //
  
  // iron mesh
  doSieve('exnihilosequentia:crushed_netherrack', 'thermal:sulfur', 'iron', 0.125, true)
  doSieve('exnihilosequentia:crushed_netherrack', 'thermal:niter', 'iron', 0.125, true)
  
  //
  // END STONE
  //
  
  // iron mesh
  doSieve('exnihilosequentia:crushed_end_stone', 'minecraft:chorus_fruit', 'iron', 0.1, false)
  doSieve('exnihilosequentia:crushed_end_stone', 'minecraft:chorus_flower', 'iron', 0.05, true)
  

})