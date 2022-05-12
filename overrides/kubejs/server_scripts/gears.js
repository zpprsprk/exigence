// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Gears recipe script here!  (You will see this line every time server resources reload)')



events.listen('recipes', event => {

  //REMOVE RECIPES
  
event.remove({id: 'industrialforegoing:iron_gear'})
event.remove({id: 'industrialforegoing:gold_gear'})
event.remove({id: 'industrialforegoing:diamond_gear'})

event.remove({id: 'jaopca:thermal_expansion.material_to_gear.aluminum'})
event.remove({id: 'jaopca:thermal_expansion.material_to_gear.uranium'})
event.remove({id: 'jaopca:thermal_expansion.material_to_gear.osmium'})
event.remove({id: 'jaopca:thermal_expansion.material_to_gear.zinc'})
event.remove({id: 'jaopca:thermal_expansion.material_to_gear.brass'})
event.remove({id: 'jaopca:thermal_expansion.material_to_gear.steel'})

event.remove({id: 'emendatusenigmatica:gear_from_gem/diamond'})
event.remove({id: 'emendatusenigmatica:gear_from_gem/lapis'})
event.remove({id: 'emendatusenigmatica:gear_from_gem/emerald'})
event.remove({id: 'emendatusenigmatica:gear_from_gem/quartz'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/iron'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/gold'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/copper'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/tin'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/lead'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/silver'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/nickel'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/bronze'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/electrum'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/invar'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/constantan'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/signalum'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/lumium'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/enderium'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/aluminum'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/uranium'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/osmium'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/zinc'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/brass'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/steel'})
event.remove({id: 'emendatusenigmatica:gear_from_ingot/cobalt'})

event.remove({id: 'immersiveengineering:metalpress/gear_iron'})
event.remove({id: 'immersiveengineering:metalpress/gear_gold'})
event.remove({id: 'immersiveengineering:metalpress/gear_copper'})
event.remove({id: 'immersiveengineering:metalpress/gear_tin'})
event.remove({id: 'immersiveengineering:metalpress/gear_lead'})
event.remove({id: 'immersiveengineering:metalpress/gear_silver'})
event.remove({id: 'immersiveengineering:metalpress/gear_nickel'})
event.remove({id: 'immersiveengineering:metalpress/gear_bronze'})
event.remove({id: 'immersiveengineering:metalpress/gear_electrum'})
event.remove({id: 'immersiveengineering:metalpress/gear_invar'})
event.remove({id: 'immersiveengineering:metalpress/gear_constantan'})
event.remove({id: 'immersiveengineering:metalpress/gear_signalum'})
event.remove({id: 'immersiveengineering:metalpress/gear_lumium'})
event.remove({id: 'immersiveengineering:metalpress/gear_enderium'})
event.remove({id: 'immersiveengineering:metalpress/gear_aluminum'})
event.remove({id: 'immersiveengineering:metalpress/gear_uranium'})
event.remove({id: 'immersiveengineering:metalpress/gear_osmium'})
event.remove({id: 'immersiveengineering:metalpress/gear_zinc'})
event.remove({id: 'immersiveengineering:metalpress/gear_brass'})
event.remove({id: 'immersiveengineering:metalpress/gear_steel'})

event.remove({id: 'thermal:machine/press/press_bronze_ingot_to_gear'})
event.remove({id: 'thermal:parts/iron_gear'})
event.remove({id: 'thermal:machine/press/press_iron_ingot_to_gear'})
event.remove({id: 'thermal:parts/gold_gear'})
event.remove({id: 'thermal:machine/press/press_gold_ingot_to_gear'})
event.remove({id: 'thermal:parts/diamond_gear'})
event.remove({id: 'thermal:parts/emerald_gear'})
event.remove({id: 'thermal:parts/lapis_gear'})
event.remove({id: 'thermal:parts/quartz_gear'})
event.remove({id: 'thermal:parts/copper_gear'})
event.remove({id: 'thermal:machine/press/press_copper_ingot_to_gear'})
event.remove({id: 'thermal:parts/silver_gear'})
event.remove({id: 'thermal:machine/press/press_silver_ingot_to_gear'})
event.remove({id: 'thermal:parts/lead_gear'})
event.remove({id: 'thermal:machine/press/press_lead_ingot_to_gear'})
event.remove({id: 'thermal:parts/nickel_gear'})
event.remove({id: 'thermal:machine/press/press_nickel_ingot_to_gear'})
event.remove({id: 'thermal:parts/tin_gear'})
event.remove({id: 'thermal:machine/press/press_tin_ingot_to_gear'})
event.remove({id: 'thermal:parts/constantan_gear'})
event.remove({id: 'thermal:machine/press/press_constantan_ingot_to_gear'})
event.remove({id: 'thermal:parts/electrum_gear'})
event.remove({id: 'thermal:machine/press/press_electrum_ingot_to_gear'})
event.remove({id: 'thermal:parts/invar_gear'})
event.remove({id: 'thermal:machine/press/press_invar_ingot_to_gear'})
event.remove({id: 'thermal:parts/signalum_gear'})
event.remove({id: 'thermal:machine/press/press_signalum_ingot_to_gear'})
event.remove({id: 'thermal:parts/lumium_gear'})
event.remove({id: 'thermal:machine/press/press_lumium_ingot_to_gear'})
event.remove({id: 'thermal:parts/enderium_gear'})
event.remove({id: 'thermal:machine/press/press_enderium_ingot_to_gear'})

event.remove({id: 'pneumaticcraft:compressed_iron_gear'})

const addGear = (outputItem, inputTagOrItem) => {
  event.recipes.immersiveengineering.metal_press(outputItem, Ingredient.of(inputTagOrItem, 4), 'immersiveengineering:mold_gear')
  event.recipes.thermal.press(outputItem, [Ingredient.of(inputTagOrItem, 3), 'thermal:press_gear_die'])
}

addGear('emendatusenigmatica:diamond_gear', '#forge:gems/diamond')
addGear('emendatusenigmatica:lapis_gear', '#forge:gems/lapis')
addGear('emendatusenigmatica:emerald_gear', '#forge:gems/emerald')
addGear('emendatusenigmatica:quartz_gear', '#forge:gems/quartz')

addGear('emendatusenigmatica:iron_gear', '#forge:ingots/iron')
addGear('emendatusenigmatica:gold_gear', '#forge:ingots/gold')
addGear('emendatusenigmatica:copper_gear', '#forge:ingots/copper')
addGear('emendatusenigmatica:aluminum_gear', '#forge:ingots/aluminum')
addGear('emendatusenigmatica:tin_gear', '#forge:ingots/tin')
addGear('emendatusenigmatica:lead_gear', '#forge:ingots/lead')
addGear('emendatusenigmatica:silver_gear', '#forge:ingots/silver')
addGear('emendatusenigmatica:nickel_gear', '#forge:ingots/nickel')
addGear('emendatusenigmatica:bronze_gear', '#forge:ingots/bronze')
addGear('emendatusenigmatica:electrum_gear', '#forge:ingots/electrum')
addGear('emendatusenigmatica:invar_gear', '#forge:ingots/invar')
addGear('emendatusenigmatica:constantan_gear', '#forge:ingots/constantan')
addGear('emendatusenigmatica:signalum_gear', '#forge:ingots/signalum')
addGear('emendatusenigmatica:lumium_gear', '#forge:ingots/lumium')
addGear('emendatusenigmatica:enderium_gear', '#forge:ingots/enderium')
addGear('emendatusenigmatica:uranium_gear', '#forge:ingots/uranium')
addGear('emendatusenigmatica:osmium_gear', '#forge:ingots/osmium')
addGear('emendatusenigmatica:cobalt_gear', '#forge:ingots/cobalt')
addGear('emendatusenigmatica:zinc_gear', '#forge:ingots/zinc')
addGear('emendatusenigmatica:brass_gear', '#forge:ingots/brass')
addGear('emendatusenigmatica:steel_gear', '#forge:ingots/steel')
addGear('pneumaticcraft:compressed_iron_gear','#forge:ingots/compressed_iron')


const addPlateCreate = (outputItem, inputTagOrItem) => {
  event.recipes.create.pressing(outputItem, Ingredient.of(inputTagOrItem, 1))
}

const addPlateImmersive = (outputItem, inputTagOrItem) => {
  event.recipes.immersiveengineering.metal_press(outputItem, Ingredient.of(inputTagOrItem, 1), 'immersiveengineering:mold_plate')
}

const addPlateImmersiveHammer = (outputItem, inputTagOrItem) => {
  event.shapeless(Item.of(outputItem),[Ingredient.of(inputTagOrItem, 1),Ingredient.of('immersiveengineering:hammer', 1)])
}

const addPlateThermal = (outputItem, inputTagOrItem) => {
  event.recipes.thermal.press(outputItem, [Ingredient.of(inputTagOrItem, 1)])
}

addPlateCreate('emendatusenigmatica:diamond_plate', '#forge:gems/diamond')
addPlateCreate('emendatusenigmatica:emerald_plate', '#forge:gems/emerald')
addPlateCreate('emendatusenigmatica:lapis_plate', '#forge:gems/lapis')
addPlateCreate('emendatusenigmatica:aluminum_plate', '#forge:ingots/aluminum')
addPlateCreate('emendatusenigmatica:silver_plate', '#forge:ingots/silver')
addPlateCreate('emendatusenigmatica:lead_plate', '#forge:ingots/lead')
addPlateCreate('emendatusenigmatica:nickel_plate', '#forge:ingots/nickel')
addPlateCreate('emendatusenigmatica:uranium_plate', '#forge:ingots/uranium')
addPlateCreate('emendatusenigmatica:osmium_plate', '#forge:ingots/osmium')
addPlateCreate('emendatusenigmatica:tin_plate', '#forge:ingots/tin')
addPlateCreate('emendatusenigmatica:cobalt_plate', '#forge:ingots/cobalt')
addPlateCreate('emendatusenigmatica:bronze_plate', '#forge:ingots/bronze')
addPlateCreate('emendatusenigmatica:constantan_plate', '#forge:ingots/constantan')
addPlateCreate('emendatusenigmatica:electrum_plate', '#forge:ingots/electrum')
addPlateCreate('emendatusenigmatica:steel_plate', '#forge:ingots/steel')
addPlateCreate('emendatusenigmatica:invar_plate', '#forge:ingots/invar')
addPlateCreate('emendatusenigmatica:signalum_plate', '#forge:ingots/signalum')
addPlateCreate('emendatusenigmatica:lumium_plate', '#forge:ingots/lumium')
addPlateCreate('emendatusenigmatica:enderium_plate', '#forge:ingots/enderium')

addPlateImmersive('emendatusenigmatica:diamond_plate', '#forge:gems/diamond')
addPlateImmersive('emendatusenigmatica:emerald_plate', '#forge:gems/emerald')
addPlateImmersive('emendatusenigmatica:lapis_plate', '#forge:gems/lapis')
addPlateImmersive('emendatusenigmatica:signalum_plate', '#forge:ingots/signalum')
addPlateImmersive('emendatusenigmatica:lumium_plate', '#forge:ingots/lumium')
addPlateImmersive('emendatusenigmatica:enderium_plate', '#forge:ingots/enderium')

addPlateImmersiveHammer('emendatusenigmatica:diamond_plate', '#forge:gems/diamond')
addPlateImmersiveHammer('emendatusenigmatica:emerald_plate', '#forge:gems/emerald')
addPlateImmersiveHammer('emendatusenigmatica:lapis_plate', '#forge:gems/lapis')
addPlateImmersiveHammer('emendatusenigmatica:osmium_plate', '#forge:ingots/osmium')
addPlateImmersiveHammer('emendatusenigmatica:tin_plate', '#forge:ingots/tin')
addPlateImmersiveHammer('emendatusenigmatica:zinc_plate', '#forge:ingots/zinc')
addPlateImmersiveHammer('emendatusenigmatica:cobalt_plate', '#forge:ingots/cobalt')
addPlateImmersiveHammer('emendatusenigmatica:bronze_plate', '#forge:ingots/bronze')
addPlateImmersiveHammer('emendatusenigmatica:brass_plate', '#forge:ingots/brass')
addPlateImmersiveHammer('emendatusenigmatica:invar_plate', '#forge:ingots/invar')
addPlateImmersiveHammer('emendatusenigmatica:signalum_plate', '#forge:ingots/signalum')
addPlateImmersiveHammer('emendatusenigmatica:lumium_plate', '#forge:ingots/lumium')
addPlateImmersiveHammer('emendatusenigmatica:enderium_plate', '#forge:ingots/enderium')

addPlateThermal('emendatusenigmatica:diamond_plate', '#forge:gems/diamond')
addPlateThermal('emendatusenigmatica:lapis_plate', '#forge:gems/lapis')
addPlateThermal('emendatusenigmatica:emerald_plate', '#forge:gems/emerald')
addPlateThermal('emendatusenigmatica:zinc_plate', '#forge:ingots/zinc')
addPlateThermal('emendatusenigmatica:aluminum_plate', '#forge:ingots/aluminum')
addPlateThermal('emendatusenigmatica:osmium_plate', '#forge:ingots/osmium')
addPlateThermal('emendatusenigmatica:cobalt_plate', '#forge:ingots/cobalt')
addPlateThermal('emendatusenigmatica:brass_plate', '#forge:ingots/brass')
addPlateThermal('emendatusenigmatica:steel_plate', '#forge:ingots/steel')


})