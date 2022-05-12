// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Extended Crafting recipe script here!  (You will see this line every time server resources reload)')


events.listen('recipes', event => {


event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "PGP",
    "GSG",
    "PGP"
  ],
  "key": {
    "P": 'astralsorcery:illumination_powder',
    "G": '#forge:ingots/gold',
    "S": 'extendedcrafting:black_iron_slate'
  },
  "result": {
    "item": "extendedcrafting:advanced_component",
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "PSSDP",
    "DDDDD",
    "SSSDS",
    "SSSDS",
    "PSSDP"
  ],
  "key": {
    "P": 'astralsorcery:illumination_powder',
    "D": '#forge:gems/diamond',
    "S": 'extendedcrafting:black_iron_slate'
  },
  "result": {
    "item": "extendedcrafting:elite_component",
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "IAAAI",
    "OISIO",
    "OIFIO",
    "OIEIO",
    "ITTTI"
  ],
  "key": {
    "I": 'extendedcrafting:black_iron_ingot',
    "A": 'extendedcrafting:elite_catalyst',
    "O": 'extendedcrafting:elite_component',
    "S": 'envirocore:assembler',
    "F": 'extendedcrafting:frame',
    "E": 'powah:energizing_orb',
    "T": 'extendedcrafting:black_iron_slate'
  },
  "result": {
    "item": "extendedcrafting:crafting_core",
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "PSSSESP",
    "SSSSESS",
    "EEEEEEE",
    "SSSSESS",
    "SSSSESS",
    "SSSSESS",
    "PSSSESP"
  ],
  "key": {
    "P": 'astralsorcery:illumination_powder',
    "E": '#forge:gems/emerald',
    "S": 'extendedcrafting:black_iron_slate'
  },
  "result": {
    "item": "extendedcrafting:ultimate_component",
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "PSSSISP",
    "SSSSISS",
    "IIIIIII",
    "SSSSISS",
    "SSSSISS",
    "SSSSISS",
    "PSSSISP"
  ],
  "key": {
    "P": 'astralsorcery:illumination_powder',
    "I": 'extendedcrafting:redstone_ingot',
    "S": 'extendedcrafting:black_iron_slate'
  },
  "result": {
    "item": "extendedcrafting:redstone_component",
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "PSSSISP",
    "SSSSISS",
    "IIIIIII",
    "SSSSISS",
    "SSSSISS",
    "SSSSISS",
    "PSSSISP"
  ],
  "key": {
    "P": 'astralsorcery:illumination_powder',
    "I": 'extendedcrafting:ender_ingot',
    "S": 'extendedcrafting:black_iron_slate'
  },
  "result": {
    "item": "extendedcrafting:ender_component",
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "PSSSISP",
    "SSSSISS",
    "IIIIIII",
    "SSSSISS",
    "SSSSISS",
    "SSSSISS",
    "PSSSISP"
  ],
  "key": {
    "P": 'astralsorcery:illumination_powder',
    "I": 'extendedcrafting:enhanced_ender_ingot',
    "S": 'extendedcrafting:black_iron_slate'
  },
  "result": {
    "item": "extendedcrafting:enhanced_ender_component",
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "PSSSISP",
    "SSSSISS",
    "IIIIIII",
    "SSSSISS",
    "SSSSISS",
    "SSSSISS",
    "PSSSISP"
  ],
  "key": {
    "P": 'astralsorcery:illumination_powder',
    "I": 'extendedcrafting:crystaltine_ingot',
    "S": 'extendedcrafting:black_iron_slate'
  },
  "result": {
    "item": "extendedcrafting:crystaltine_component",
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "PSSSISP",
    "SSSSISS",
    "IIIIIII",
    "SSSSISS",
    "SSSSISS",
    "SSSSISS",
    "PSSSISP"
  ],
  "key": {
    "P": 'astralsorcery:illumination_powder',
    "I": 'extendedcrafting:the_ultimate_ingot',
    "S": 'extendedcrafting:black_iron_slate'
  },
  "result": {
    "item": "extendedcrafting:the_ultimate_component",
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AZaEaFaZB",
	"bcklklkcb",
	"bQdefedYb",
	"JmgnIngmO",
	"KRgIPIgXN",
	"LmgnIngmM",
	"bSdhijdWb",
	"bcTlUlVcb",
	"CZaHaGaZD"
  ],
  "key": {
    A: '#botania:runes/water',
    B: '#botania:runes/fire',
    C: '#botania:runes/earth',
    D: '#botania:runes/air',
    E: '#botania:runes/spring',
    F: '#botania:runes/summer',
    G: '#botania:runes/autumn',
    H: '#botania:runes/winter',
    I: '#botania:runes/mana',
    J: '#botania:runes/lust',
    K: '#botania:runes/gluttony',
    L: '#botania:runes/greed',
    M: '#botania:runes/sloth',
    N: '#botania:runes/wrath',
    O: '#botania:runes/envy',
    P: '#botania:runes/pride',
    Q: 'mythicbotany:asgard_rune',
    R: 'mythicbotany:vanaheim_rune',
    S: 'mythicbotany:alfheim_rune',
    T: 'mythicbotany:midgard_rune',
    U: 'mythicbotany:joetunheim_rune',
    V: 'mythicbotany:muspelheim_rune',
    W: 'mythicbotany:niflheim_rune',
    X: 'mythicbotany:nidavellir_rune',
    Y: 'mythicbotany:helheim_rune',
	Z: 'mythicbotany:alfsteel_armor_upgrade',
	a: 'botania:gaia_ingot',
	b: 'botania:fabulous_pool',
	c: 'mythicbotany:alfsteel_pylon',
	d: {'type':'forge:nbt','item':'botania:mana_tablet','nbt':{'mana':500000}},
	e: 'botania:mana_bottle',
	f: 'botania:hourglass',
	g: 'botania:life_essence',
	h: 'botania:drum_wild',
	i: 'botania:drum_gathering',
	j: 'botania:drum_canopy',
	k: '#forge:pellets/polonium',
	l: 'extendedcrafting:the_ultimate_catalyst',
	m: 'mythicbotany:aura_ring_greatest',
	n: 'extendedcrafting:ender_star'
  },
  "result": Item.of('botania:mana_tablet', {mana:500000,creative:true})
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABCCCCCBA",
    "ABCDDDCBA",
    "ABCDEDCBA",
    "ABCDDDCBA",
    "ABCCCCCBA",
    "ABBBBBBBA",
    "AAAAAAAAA",
  ],
  "key": {
    A: 'appliedenergistics2:quantum_entangled_singularity',
    B: 'appliedenergistics2:controller',
	C: 'appliedenergistics2:dense_energy_cell',
	D: 'appliedenergistics2:energy_acceptor',
	E: 'immersiveengineering:capacitor_creative'
  },
  "result": {
    "item": 'appliedenergistics2:creative_energy_cell',
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBBBBBA",
    "BBBCCCBBB",
    "BBCCCCCBB",
    "BCCCCCCCB",
    "BCCCDCCCB",
    "BCCCCCCCB",
    "BBCCCCCBB",
    "BBBCCCBBB",
    "ABBBBBBBA",
  ],
  "key": {
    A: 'appliedenergistics2:1k_cell_component',
    B: 'exnihilosequentia:pebble_stone',
	C: 'botania:pebble',
	D: 'storagedrawers:creative_vending_upgrade'
  },
  "result": {
    "item": 'appliedenergistics2:creative_storage_cell',
    "count": 1
  }
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBKBBBA",
    "BCDFGFDCB",
    "BDELLLEDB",
    "BFMHIHMFB",
    "KGNJPJNGK",
    "BFOHIHOFB",
    "BDEQQQEDB",
    "BCDFGFDCB",
    "ABBBKBBBA",
  ],
  "key": {
    A: 'rftoolspower:ender_monitor',
    B: 'rftoolsbase:machine_frame',
	C: 'rftoolspower:endergenic',
	D: '#forge:ender_pearls',
	E: 'extendedcrafting:ultimate_catalyst',
	F: '#forge:pellets/polonium',
	G: 'rftoolspower:pearl_injector',
	H: 'mekanism:quantum_entangloporter',
	I: '#forge:pellets/plutonium',
	J: '#forge:pellets/antimatter',
	K: 'extendedcrafting:the_ultimate_block',
	L: 'enviroenergy:xerothium_solar_cell',
	M: 'mekanismgenerators:advanced_solar_generator',
	N: 'powah:solar_panel_nitro',
	O: 'create:creative_motor',
	P: 'enviroenergy:xerothium_solar_ccu',
	Q: 'solarflux:sp_8'
  },
  "result": Item.of('rftoolspower:dimensionalcell_creative')
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABBBABBBA",
    "BCCCCCCCB",
    "BCDDDDDCB",
    "BCDEFEDCB",
    "ACDFGFDCA",
    "BCDEFEDCB",
    "BCDDDDDCB",
    "BCCCCCCCB",
    "ABBBABBBA",
  ],
  "key": {
    A: 'cyclic:battery_infinite',
    B: 'immersiveengineering:heavy_engineering',
	C: 'immersiveengineering:generator',
	D: 'immersiveengineering:capacitor_hv',
	E: 'extendedcrafting:the_ultimate_component',
	F: '#forge:pellets/polonium',
	G: 'extendedcrafting:the_ultimate_catalyst'
  },
  "result": Item.of('immersiveengineering:capacitor_creative')
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "ABBBABBBA",
    "ABJBCBJBA",
    "ABBBOBBBA",
    "AACOPOCAA",
    "ABBBOBBBA",
    "ABJBCBJBA",
    "ABBBABBBA",
    "AAAAAAAAA",
  ],
  "key": {
    A: 'botania:spark',
    B: 'minecraft:cake',
	C: 'botania:gaia_spreader',
	J: 'botania:kekimurus',
	O: 'botania:creative_pool',
	P: 'botanicalmachinery:mana_battery'
  },
  "result": Item.of('botanicalmachinery:mana_battery_creative', 1)
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "KAAAJAAAK",
    "ABLMNOPBA",
    "ACDDDDDCA",
    "ACDEFEDCA",
    "JCDGHIDCJ",
    "ACDEFEDCA",
    "ACDDDDDCA",
    "AQCCCCCQA",
    "KAAAJAAAK",
  ],
  "key": {
    A: 'storagedrawers:creative_storage_upgrade',
    B: 'industrialforegoing:supreme_black_hole_unit',
	C: 'ae2extras:16m_cell_component',
	D: 'extendedcrafting:the_ultimate_block',
	E: 'extendedcrafting:ender_star',
	F: 'extendedcrafting:the_ultimate_catalyst',
	G: 'mekanism:creative_fluid_tank',
	H: 'powah:energy_cell_creative',
	I: 'mekanism:creative_chemical_tank',
	J: 'bloodmagic:etherealslate',
	K: 'mysticalagradditions:creative_essence',
	L: 'bloodmagic:corrosivedemoncrystal',
	M: 'bloodmagic:destructivedemoncrystal',
	N: 'bloodmagic:rawdemoncrystal',
	O: 'bloodmagic:vengefuldemoncrystal',
	P: 'bloodmagic:steadfastdemoncrystal',
	Q: 'botanicalmachinery:mana_battery_creative'
  },
  "result": Item.of('storagedrawers:creative_vending_upgrade', 2)
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AABBCBBAA",
    "ADDEFEDDA",
    "BDGCCCGDB",
    "BECHIHCEB",
    "CECIJICEC",
    "BECHIHCEB",
    "BDGCCCGDB",
    "ADDEEEDDA",
    "AABBCBBAA",
  ],
  "key": {
    A: 'pneumaticcraft:pressure_chamber_wall',
    B: 'pneumaticcraft:reinforced_brick_tile',
	C: 'mekanism:ultimate_pressurized_tube',
	D: 'immersiveengineering:blastbrick_reinforced',
	E: 'mekanismadditions:light_gray_reinforced_plastic',
	F: 'mekanismadditions:black_reinforced_plastic',
	G: '#thermal:glass/hardened',
	H: 'pneumaticcraft:advanced_pressure_tube',
	I: 'pneumaticcraft:creative_compressor',
	J: 'mekanism:ultimate_chemical_tank'
  },
  "result": Item.of('mekanism:creative_chemical_tank', 1)
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDEDCBA",
    "BFGHIHGFB",
    "CGJEKEJGC",
    "DHELMLEHD",
    "EIKMNMKIE",
    "DHELMLEHD",
    "CGJEKEJGC",
    "BFGHIHGFB",
    "ABCDEDCBA",
  ],
  "key": {
    A: 'industrialforegoing:ether_gas_bucket',
    B: 'undergarden:virulent_mix_bucket',
	C: 'pneumaticcraft:huge_tank',
	D: 'create:fluid_pipe',
	E: 'mekanism:ultimate_mechanical_pipe',
	F: 'naturesaura:color_changer',
	G: 'mekanismadditions:black_slick_plastic',
	H: 'immersiveengineering:fluid_pipe',
	I: 'immersiveengineering:capacitor_creative',
	J: 'industrialforegoing:supreme_black_hole_tank',
	K: 'mekanism:ultimate_universal_cable',
	L: 'mekanism:ultimate_fluid_tank',
	M: 'mekanism:rotary_condensentrator',
	N: 'mekanism:creative_chemical_tank'
  },
  "result": Item.of('mekanism:creative_fluid_tank', 1)
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABABABABA",
    "BCCDEDCCB",
    "ACFGHGFCA",
    "BDGIJIGDB",
    "AEHJKJHEA",
    "BDGIJIGDB",
    "ACFGHGFCA",
    "BCCDEDCCB",
    "ABABABABA",
  ],
  "key": {
    A: 'botania:shimmerrock',
    B: 'botania:shimmerwood_planks',
    C: '#botania:runes/mana',
    D: 'botania:spark_upgrade_recessive',
    E: 'botania:spark_upgrade_dispersive',
    F: 'botanicalmachinery:mechanical_mana_pool',
    G: 'botania:corporea_spark_master',
    H: {'type':'forge:nbt','item':'botania:mana_tablet','nbt':{'mana':500000,'creative':true}},
    I: 'botania:spark_upgrade_dominant',
    J: 'botania:spark',
    K: 'botania:fabulous_pool'
  },
  "result": Item.of('botania:creative_pool', 1)
})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "ABBBCDBBA",
    "ABEECDEBA",
    "ABFFCDEBA",
    "ABFGHDDDI",
    "ABFFCDEBA",
    "ABEECDEBA",
    "ABBBCDBBA",
    "AAAAAAAAA",
  ],
  "key": {
    A: 'pneumaticcraft:pressure_chamber_wall',
    B: 'extendedcrafting:the_ultimate_ingot',
    C: 'pneumaticcraft:flux_compressor',
    D: 'pneumaticcraft:advanced_pressure_tube',
    E: 'industrialforegoing:plastic',
    F: '#envirocore:xerothium_blocks',
    G: 'extendedcrafting:ender_star',
    H: 'rftoolspower:dimensionalcell_creative',
    I: 'pneumaticcraft:pressure_chamber_valve'
  },
  "result": Item.of('pneumaticcraft:creative_compressor', 1)
})
event.remove({id: 'extendedcrafting:crystaltine_ingot'})
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "DLLLLLD",
    "DGINIGD",
    "DGINIGD",
    "DLLLLLD"
  ],
  "key": {
    D: 'tetra:pristine_diamond',
    L: 'tetra:pristine_lapis',
    N: '#forge:nether_stars',
    I: '#forge:ingots/iron',
    G: '#forge:ingots/gold'
  },
  "result": Item.of('extendedcrafting:crystaltine_ingot', 1)
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "envirocore:obsidian_plate"
  },
  "ingredients": [
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    },
    {
      "item": "minecraft:redstone"
    }
  ],
  "result": {
    "item": "envirocore:redstone_imbued_obsidian_plate"
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "envirocore:redstone_imbued_obsidian_plate"
  },
  "ingredients": [
    {
      "item": "envirocore:litherite_crystal"
    }
  ],
  "result": {
    "item": "envirocore:litherite_interconnect"
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "envirocore:redstone_imbued_obsidian_plate"
  },
  "ingredients": [
    {
      "item": "envirocore:erodium_crystal"
    },
    {
      "item": "envirocore:erodium_crystal"
    }
  ],
  "result": {
    "item": "envirocore:erodium_interconnect"
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "envirocore:redstone_imbued_obsidian_plate"
  },
  "ingredients": [
    {
      "item": "envirocore:kyronite_crystal"
    },
    {
      "item": "envirocore:kyronite_crystal"
    },
    {
      "item": "envirocore:kyronite_crystal"
    },
    {
      "item": "envirocore:kyronite_crystal"
    }
  ],
  "result": {
    "item": "envirocore:kyronite_interconnect"
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "envirocore:redstone_imbued_obsidian_plate"
  },
  "ingredients": [
    {
      "item": "envirocore:pladium_crystal"
    },
    {
      "item": "envirocore:pladium_crystal"
    },
    {
      "item": "envirocore:pladium_crystal"
    },
    {
      "item": "envirocore:pladium_crystal"
    }
  ],
  "result": {
    "item": "envirocore:pladium_interconnect"
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "envirocore:redstone_imbued_obsidian_plate"
  },
  "ingredients": [
    {
      "item": "envirocore:ionite_crystal"
    },
    {
      "item": "envirocore:ionite_crystal"
    },
    {
      "item": "envirocore:ionite_crystal"
    },
    {
      "item": "envirocore:ionite_crystal"
    }
  ],
  "result": {
    "item": "envirocore:ionite_interconnect"
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "envirocore:redstone_imbued_obsidian_plate"
  },
  "ingredients": [
    {
      "item": "envirocore:aethium_crystal"
    },
    {
      "item": "envirocore:aethium_crystal"
    },
    {
      "item": "envirocore:aethium_crystal"
    },
    {
      "item": "envirocore:aethium_crystal"
    }
  ],
  "result": {
    "item": "envirocore:aethium_interconnect"
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "envirocore:redstone_imbued_obsidian_plate"
  },
  "ingredients": [
    {
      "item": "envirocore:nanorite_crystal"
    },
    {
      "item": "envirocore:nanorite_crystal"
    },
    {
      "item": "envirocore:nanorite_crystal"
    },
    {
      "item": "envirocore:nanorite_crystal"
    }
  ],
  "result": {
    "item": "envirocore:nanorite_interconnect"
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 10000,
  "input": {
    "item": "envirocore:redstone_imbued_obsidian_plate"
  },
  "ingredients": [
    {
      "item": "envirocore:xerothium_crystal"
    },
    {
      "item": "envirocore:xerothium_crystal"
    },
    {
      "item": "envirocore:xerothium_crystal"
    },
    {
      "item": "envirocore:xerothium_crystal"
    }
  ],
  "result": {
    "item": "envirocore:xerothium_interconnect"
  }
})
event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 100,
  "input": {
    "tag": 'forge:plates/gold'
  },
  "ingredients": [
    {
      "item": 'create:cogwheel'
    },
    {
      "item": 'create:large_cogwheel'
    },
    {
      "tag": 'forge:nuggets/iron'
    },
    {
      "item": 'create:cogwheel'
    },
    {
      "item": 'create:large_cogwheel'
    },
    {
      "tag": 'forge:nuggets/iron'
    },
    {
      "item": 'create:cogwheel'
    },
    {
      "item": 'create:large_cogwheel'
    },
    {
      "tag": 'forge:nuggets/iron'
    },
    {
      "item": 'create:cogwheel'
    },
    {
      "item": 'create:large_cogwheel'
    },
    {
      "tag": 'forge:nuggets/iron'
    },
    {
      "item": 'create:cogwheel'
    },
    {
      "item": 'create:large_cogwheel'
    },
    {
      "tag": 'forge:nuggets/iron'
    },
    {
      "item": 'create:cogwheel'
    },
    {
      "item": 'create:large_cogwheel'
    },
    {
      "tag": 'forge:nuggets/iron'
    }
  ],
  "result": {
    "item": 'create:precision_mechanism'
  }
})

})