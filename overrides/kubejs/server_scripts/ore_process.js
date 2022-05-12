// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Ore Processing script here!  (You will see this line every time server resources reload)')



events.listen('recipes', event => {

const addProcessingEmendatus = (type) => {
event.custom({
	"type": "mekanism:dissolution",
	"itemInput": {
		"ingredient": {
			"tag": "forge:ores/" + type
		}
	},
	"gasInput": {
		"amount": 1,
		"gas": "mekanism:sulfuric_acid"
	},
	"output": {
		"slurry": "emendatusenigmatica:dirty_" + type,
		"amount": 1000,
		"chemicalType": "slurry"
	}
})
event.custom({
	"type": "mekanism:washing",
	"fluidInput": {
		"amount": 5,
		"tag": "minecraft:water"
	},
	"slurryInput": {
		"amount": 1,
		"slurry": "emendatusenigmatica:dirty_" + type
	},
	"output": {
		"slurry": "emendatusenigmatica:clean_" + type,
		"amount": 1
	}
})
event.custom({
	"type": "mekanism:crystallizing",
	"chemicalType": "slurry",
	"input": {
		"amount": 200,
		"slurry": "emendatusenigmatica:clean_" + type
	},
	"output": {
		"item": "emendatusenigmatica:" + type + "_crystal"
	}
})
event.custom({
	"type": "mekanism:injecting",
	"itemInput": {
		"ingredient": {
			"tag": "mekanism:crystals/" + type
		}
	},
	"gasInput": {
		"amount": 1,
		"gas": "mekanism:hydrogen_chloride"
	},
	"output": {
		"item": "emendatusenigmatica:" + type + "_shard"
	}
})
event.custom({
	"type": "mekanism:injecting",
	"itemInput": {
		"ingredient": {
			"tag": "forge:ores/" + type
		}
	},
	"gasInput": {
		"amount": 1,
		"gas": "mekanism:hydrogen_chloride"
	},
	"output": {
		"item": "emendatusenigmatica:" + type + "_shard",
		"count": 4
	}
})
event.custom({
	"type": "mekanism:purifying",
	"itemInput": {
		"ingredient": {
			"tag": "mekanism:shards/" + type
		}
	},
	"gasInput": {
		"amount": 1,
		"gas": "mekanism:oxygen"
	},
	"output": {
		"item": "emendatusenigmatica:" + type + "_clump"
	}
})
event.custom({
	"type": "mekanism:purifying",
	"itemInput": {
		"ingredient": {
			"tag": "forge:ores/" + type
		}
	},
	"gasInput": {
		"amount": 1,
		"gas": "mekanism:oxygen"
	},
	"output": {
		"item": "emendatusenigmatica:" + type + "_clump",
		"count": 3
	}
})
event.custom({
	"type": "mekanism:crushing",
	"input": {
		"ingredient": {
			"tag": "mekanism:clumps/" + type
		}
	},
	"output": {
		"item": "emendatusenigmatica:" + type + "_dirty_dust"
	}
})
event.custom({
	"type": "mekanism:enriching",
	"input": {
		"ingredient": {
			"tag": "mekanism:dirty_dusts/" + type
		}
	},
	"output": {
		"item": "emendatusenigmatica:" + type + "_dust"
	}
})
event.custom({
	"type": "mekanism:enriching",
	"input": {
		"ingredient": {
			"tag": "forge:ores/" + type
		}
	},
	"output": {
		"item": "emendatusenigmatica:" + type + "_dust",
		"count": 2
	}
})
}
const finishProcessing = (itemType, metalType, resultItem) => {
event.custom({
	"type": "mekanism:crushing",
	"input": {
		"ingredient": {
			"tag": "forge:" + itemType + "/" + metalType
		}
	},
	"output": {
		"item": "emendatusenigmatica:" + metalType + "_dust"
	}
})
event.custom({
	"type": "minecraft:smelting",
	"result": resultItem,
	"ingredient": {
		"tag": "forge:dusts/" + metalType
	},
	"cookingtime": 200,
	"experience": 0.35
})
}

addProcessingEmendatus('cloggrum')
addProcessingEmendatus('froststeel')
addProcessingEmendatus('utherium')
addProcessingEmendatus('regalium')
finishProcessing('ingots', 'cloggrum', 'undergarden:cloggrum_ingot')
finishProcessing('ingots', 'froststeel', 'undergarden:froststeel_ingot')
finishProcessing('nuggets', 'utherium', 'undergarden:utherium_chunk')
finishProcessing('ingots', 'regalium', 'undergarden:regalium_ingot')

addProcessingEmendatus('aluminum')
addProcessingEmendatus('silver')
addProcessingEmendatus('nickel')
addProcessingEmendatus('zinc')
addProcessingEmendatus('cobalt')


})