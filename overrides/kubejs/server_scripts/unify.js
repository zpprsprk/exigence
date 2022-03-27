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

	// plates
	event.replaceInput({}, '#forge:plates/iron', '#forge:plates/iron')
	event.replaceInput({}, '#forge:plates/copper', '#forge:plates/copper')
	event.replaceInput({}, '#forge:plates/steel', '#forge:plates/steel')
	event.replaceInput({}, '#forge:plates/lead', '#forge:plates/lead')
	event.replaceInput({}, '#forge:plates/bronze', '#forge:plates/bronze')
	event.replaceInput({}, '#forge:plates/aluminum', '#forge:plates/aluminum')
	event.replaceInput({}, '#forge:plates/tin', '#forge:plates/tin')
	event.replaceInput({}, '#forge:plates/gold', '#forge:plates/gold')
	event.replaceInput({}, '#forge:plates/iridium', '#forge:plates/iridium')
	event.replaceInput({}, '#forge:plates/silver', '#forge:plates/silver')
	event.replaceInput({}, '#forge:plates/nickel', '#forge:plates/nickel')
	event.replaceInput({}, '#forge:plates/uranium', '#forge:plates/uranium')
	event.replaceInput({}, '#forge:plates/constantan', '#forge:plates/constantan')
	event.replaceInput({}, '#forge:plates/electrum', '#forge:plates/electrum')
	event.replaceInput({}, '#forge:plates/brass', '#forge:plates/brass')
	event.replaceInput({}, '#forge:plates/zinc', '#forge:plates/zinc')

	// rods
	event.replaceInput({}, '#forge:rods/iron', '#forge:rods/iron')
	event.replaceInput({}, '#forge:rods/copper', '#forge:rods/copper')
	event.replaceInput({}, '#forge:rods/gold', '#forge:rods/gold')
	event.replaceInput({}, '#forge:rods/brass', '#forge:rods/brass')
	event.replaceInput({}, '#forge:rods/steel', '#forge:rods/steel')
	event.replaceInput({}, '#forge:rods/aluminum', '#forge:rods/aluminum')

	// ingots
	event.replaceInput({}, '#forge:ingots/zinc', '#forge:ingots/zinc')

	// blocks
	event.replaceInput({}, '#forge:storage_blocks/zinc', '#forge:storage_blocks/zinc')

    //
    // Unify outputs here
    //
	
	// plates
	event.replaceOutput({}, '#forge:plates/iron', 'immersiveengineering:plate_iron')
	event.replaceOutput({}, '#forge:plates/copper', 'immersiveengineering:plate_copper')
	event.replaceOutput({}, '#forge:plates/aluminum', 'immersiveengineering:plate_aluminum')
	event.replaceOutput({}, '#forge:plates/lead', 'immersiveengineering:plate_lead')
	event.replaceOutput({}, '#forge:plates/silver', 'immersiveengineering:plate_silver')
	event.replaceOutput({}, '#forge:plates/steel', 'immersiveengineering:plate_steel')
	event.replaceOutput({}, '#forge:plates/bronze', 'indreb:bronze_plate')
	event.replaceOutput({}, '#forge:plates/tin', 'indreb:tin_plate')
	event.replaceOutput({}, '#forge:plates/gold', 'immersiveengineering:plate_gold')
	event.replaceOutput({}, '#forge:plates/iridium', 'indreb:iridium_plate')
	event.replaceOutput({}, '#forge:plates/nickel', 'immersiveengineering:plate_nickel')
	event.replaceOutput({}, '#forge:plates/uranium', 'immersiveengineering:plate_uranium')
	event.replaceOutput({}, '#forge:plates/constantan', 'immersiveengineering:plate_constantan')
	event.replaceOutput({}, '#forge:plates/electrum', 'immersiveengineering:plate_electrum')
	event.replaceOutput({}, '#forge:plates/brass', 'create:brass_sheet')
	event.replaceOutput({}, '#forge:plates/zinc', 'create:zinc_sheet')

	// rods
	event.replaceOutput({}, '#forge:rods/iron', 'immersiveengineering:stick_iron')
	event.replaceOutput({}, '#forge:rods/copper', 'createaddition:copper_rod')
	event.replaceOutput({}, '#forge:rods/gold', 'createaddition:gold_rod')
	event.replaceOutput({}, '#forge:rods/brass', 'createaddition:brass_rod')
	event.replaceOutput({}, '#forge:rods/steel', 'immersiveengineering:stick_steel')
	event.replaceOutput({}, '#forge:rods/aluminum', 'immersiveengineering:stick_aluminum')

	// blocks
	event.replaceOutput({}, '#forge:storage_blocks/zinc', 'create:zinc_block')

	// ingots
	event.replaceOutput({}, '#forge:ingots/steel', 'immersiveengineering:ingot_steel')
	event.replaceOutput({}, '#forge:ingots/aluminum', 'immersiveengineering:ingot_aluminum')
	event.replaceOutput({}, '#forge:ingots/zinc', 'create:zinc_ingot')

	// nuggets
	event.replaceOutput({}, '#forge:nuggets/steel', 'immersiveengineering:nugget_steel')
	event.replaceOutput({}, '#forge:nuggets/aluminum', 'immersiveengineering:nugget_aluminum')
	event.replaceOutput({}, '#forge:nuggets/zinc', 'create:zinc_nugget')

	// yellorium from uranium essence fix
	event.remove({id: 'mysticalagriculture:essence/common/uranium_ingot'})
	event.shaped('2x immersiveengineering:ingot_uranium', [
        'EEE',
        'E E',
        'EEE'
      ], {
        E: 'mysticalagriculture:uranium_essence'
    })

})
