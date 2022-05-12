// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Botany Pots recipe script here!  (You will see this line every time server resources reload)')




events.listen('recipes', event => {

event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagriculture:apatite"
		}
	],
	"seed": {
		"item": "mysticalagriculture:apatite_seeds"
	},
	"categories": [
		"prudentium"
	],
	"growthTicks": 2400,
	"display": {
		"block": "mysticalagriculture:apatite_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:apatite_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:apatite_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})

// tier 3
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagriculture:slimesteel"
		}
	],
	"seed": {
		"item": "mysticalagriculture:slimesteel_seeds"
	},
	"categories": [
		"tertium"
	],
	"growthTicks": 3600,
	"display": {
		"block": "mysticalagriculture:slimesteel_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:slimesteel_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:slimesteel_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagriculture:tinkers_bronze"
		}
	],
	"seed": {
		"item": "mysticalagriculture:tinkers_bronze_seeds"
	},
	"categories": [
		"tertium"
	],
	"growthTicks": 3600,
	"display": {
		"block": "mysticalagriculture:tinkers_bronze_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:tinkers_bronze_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:tinkers_bronze_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagriculture:pig_iron"
		}
	],
	"seed": {
		"item": "mysticalagriculture:pig_iron_seeds"
	},
	"categories": [
		"tertium"
	],
	"growthTicks": 3600,
	"display": {
		"block": "mysticalagriculture:pig_iron_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:pig_iron_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:pig_iron_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})

// Tier 4
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagriculture:cobalt"
		}
	],
	"seed": {
		"item": "mysticalagriculture:cobalt_seeds"
	},
	"categories": [
		"imperium"
	],
	"growthTicks": 4000,
	"display": {
		"block": "mysticalagriculture:cobalt_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:cobalt_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:cobalt_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagriculture:rose_gold"
		}
	],
	"seed": {
		"item": "mysticalagriculture:rose_gold_seeds"
	},
	"categories": [
		"imperium"
	],
	"growthTicks": 4000,
	"display": {
		"block": "mysticalagriculture:rose_gold_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:rose_gold_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:rose_gold_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})

// Tier 5
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagriculture:hepatizon"
		}
	],
	"seed": {
		"item": "mysticalagriculture:hepatizon_seeds"
	},
	"categories": [
		"supremium"
	],
	"growthTicks": 4500,
	"display": {
		"block": "mysticalagriculture:hepatizon_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:hepatizon_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:hepatizon_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagriculture:queens_slime"
		}
	],
	"seed": {
		"item": "mysticalagriculture:queens_slime_seeds"
	},
	"categories": [
		"supremium"
	],
	"growthTicks": 4500,
	"display": {
		"block": "mysticalagriculture:queens_slime_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:queens_slime_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:queens_slime_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagriculture:manyullyn"
		}
	],
	"seed": {
		"item": "mysticalagriculture:manyullyn_seeds"
	},
	"categories": [
		"supremium"
	],
	"growthTicks": 4500,
	"display": {
		"block": "mysticalagriculture:manyullyn_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:manyullyn_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:manyullyn_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})

// Tier 6
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagradditions:nitro_crystal"
		}
	],
	"seed": {
		"item": "mysticalagriculture:nitro_crystal_seeds"
	},
	"categories": [
		"insanium"
	],
	"growthTicks": 5000,
	"display": {
		"block": "mysticalagriculture:nitro_crystal_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:nitro_crystal_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:nitro_crystal_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})
event.remove({id: 'mysticalagriculture:crops/nether_star'})
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagradditions:nether_star"
		}
	],
	"seed": {
		"item": "mysticalagriculture:nether_star_seeds"
	},
	"categories": [
		"insanium"
	],
	"growthTicks": 5000,
	"display": {
		"block": "mysticalagriculture:nether_star_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:nether_star_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:nether_star_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})
event.remove({id: 'mysticalagriculture:crops/dragon_egg'})
event.custom({
	"type": "botanypots:crop",
	"conditions": [
		{
			"type": "forge:mod_loaded",
			"modid": "mysticalagriculture"
		},
		{
			"type": "mysticalagriculture:crop_enabled",
			"crop": "mysticalagradditions:dragon_egg"
		}
	],
	"seed": {
		"item": "mysticalagriculture:dragon_egg_seeds"
	},
	"categories": [
		"insanium"
	],
	"growthTicks": 5000,
	"display": {
		"block": "mysticalagriculture:dragon_egg_crop",
		"properties": {
			"age": 7
		}
	},
	"results": [
		{
			"chance": 0.75,
			"output": {
				"item": "mysticalagriculture:dragon_egg_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.05,
			"output": {
				"item": "mysticalagriculture:dragon_egg_seeds"
			},
			"minRolls": 1,
			"maxRolls": 1
		},
		{
			"chance": 0.01,
			"output": {
				"item": "mysticalagriculture:fertilized_essence"
			},
			"minRolls": 1,
			"maxRolls": 1
		}
	]
})

})