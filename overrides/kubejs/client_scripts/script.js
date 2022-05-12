// priority: 0

console.info('Hello, World! JEI Hiding Script here! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
  // Hide items in JEI here
  event.hide('titanium:gold_gear')
  event.hide('titanium:iron_gear')
  event.hide('titanium:diamond_gear')

  event.hide('thermal:diamond_gear')
  event.hide('thermal:lapis_gear')
  event.hide('thermal:emerald_gear')
  event.hide('thermal:quartz_gear')

  event.hide('thermal:iron_gear')
  event.hide('thermal:gold_gear')
  event.hide('thermal:copper_gear')
  event.hide('thermal:tin_gear')
  event.hide('thermal:lead_gear')
  event.hide('thermal:silver_gear')
  event.hide('thermal:nickel_gear')
  event.hide('thermal:bronze_gear')
  event.hide('thermal:electrum_gear')
  event.hide('thermal:invar_gear')
  event.hide('thermal:constantan_gear')
  event.hide('thermal:signalum_gear')
  event.hide('thermal:lumium_gear')
  event.hide('thermal:enderium_gear')
  
  // iron
  event.hide('immersiveengineering:dust_iron')
  event.hide('mekanism:dust_iron')
  event.hide('pedestals:dustiron')
  event.hide('appliedenergistics2:iron_dust')
  event.hide('thermal:iron_dust')
//  event.hide('mahoutsukai:powdered_iron')
  event.hide('bloodmagic:ironsand')
  event.hide('immersiveengineering:plate_iron')
  event.hide('thermal:iron_plate')
  event.hide('create:iron_sheet')
  event.hide('immersiveengineering:stick_iron')
  event.hide('createaddition:iron_rod')

  // gold
  event.hide('immersiveengineering:dust_gold')
  event.hide('create:golden_sheet')
  event.hide('bloodmagic:goldsand')
  event.hide('immersiveengineering:plate_gold')
  event.hide('mekanism:dust_gold')
  event.hide('pedestals:dustgold')
  event.hide('thermal:gold_dust')
  event.hide('thermal:gold_plate')
  event.hide('appliedenergistics2:gold_dust')
//  event.hide('mahoutsukai:powdered_gold')
  event.hide('createaddition:gold_rod')
  
  // copper
  event.hide('create:copper_ingot')
  event.hide('immersiveengineering:ingot_copper')
  event.hide('mekanism:ingot_copper')
  event.hide('thermal:copper_ingot')
  event.hide('exnihilosequentia:ingot_copper')
  event.hide('tconstruct:copper_ingot')
  event.hide('create:copper_sheet')
  event.hide('immersiveengineering:plate_copper')
  event.hide('thermal:copper_plate')
  event.hide('create:copper_nugget')
  event.hide('immersiveengineering:nugget_copper')
  event.hide('mekanism:nugget_copper')
  event.hide('thermal:copper_nugget')
  event.hide('exnihilosequentia:ingot_copper')
  event.hide('tconstruct:copper_nugget')
  event.hide('immersiveengineering:dust_copper')
  event.hide('mekanism:dust_copper')
  event.hide('pedestals:dustcopper')
  event.hide('thermal:copper_dust')
  event.hide('immersiveengineering:dust_copper')

  // aluminum
  event.hide('pedestals:dustaluminum')
  event.hide('immersiveengineering:plate_aluminum')
  event.hide('immersiveengineering:dust_aluminum')
  event.hide('immersiveengineering:nugget_aluminum')
  event.hide('immersiveengineering:ingot_aluminum')
  event.hide('exnihilosequentia:ingot_aluminum')
  event.hide('immersiveengineering:stick_aluminum')
  
  // silver
  event.hide('immersiveengineering:plate_silver')
  event.hide('immersiveengineering:dust_silver')
  event.hide('immersiveengineering:nugget_silver')
  event.hide('pedestals:dustsilver')
  event.hide('thermal:silver_ingot')
  event.hide('thermal:silver_nugget')
  event.hide('thermal:silver_dust')
  event.hide('thermal:silver_plate')
  event.hide('exnihilosequentia:ingot_silver')
  
  // lead
  event.hide('immersiveengineering:plate_lead')
  event.hide('immersiveengineering:dust_lead')
  event.hide('immersiveengineering:nugget_lead')
  event.hide('immersiveengineering:ingot_lead')
  event.hide('mekanism:dust_lead')
  event.hide('mekanism:ingot_lead')
  event.hide('mekanism:nugget_lead')
  event.hide('pedestals:dustlead')
  event.hide('thermal:lead_ingot')
  event.hide('thermal:lead_nugget')
  event.hide('thermal:lead_dust')
  event.hide('thermal:lead_plate')
  event.hide('exnihilosequentia:ingot_lead')
  
  // nickel
  event.hide('immersiveengineering:plate_nickel')
  event.hide('immersiveengineering:dust_nickel')
  event.hide('immersiveengineering:nugget_nickel')
  event.hide('immersiveengineering:ingot_nickel')
  event.hide('pedestals:dustnickel')
  event.hide('thermal:nickel_ingot')
  event.hide('thermal:nickel_nugget')
  event.hide('thermal:nickel_dust')
  event.hide('thermal:nickel_plate')
  event.hide('exnihilosequentia:ingot_nickel')
  
  // uranium
  event.hide('immersiveengineering:plate_uranium')
  event.hide('immersiveengineering:dust_uranium')
  event.hide('immersiveengineering:nugget_uranium')
  event.hide('immersiveengineering:ingot_uranium')
  event.hide('mekanism:dust_uranium')
  event.hide('mekanism:ingot_uranium')
  event.hide('mekanism:nugget_uranium')
  event.hide('pedestals:dusturanium')
  event.hide('biggerreactors:yellorium_ingot')
  event.hide('biggerreactors:yellorium_dust')
  event.hide('exnihilosequentia:ingot_uranium')
  
  // osmium
  event.hide('mekanism:dust_osmium')
  event.hide('mekanism:ingot_osmium')
  event.hide('mekanism:nugget_osmium')
  event.hide('pedestals:dustosmium')
  
  // tin
  event.hide('mekanism:dust_tin')
  event.hide('mekanism:ingot_tin')
  event.hide('mekanism:nugget:tin')
  event.hide('thermal:tin_ingot')
  event.hide('thermal:tin_nugget')
  event.hide('thermal:tin_dust')
  event.hide('thermal:tin_plate')
  event.hide('exnihilosequentia:ingot_tin')
  event.hide('pedestals:dusttin')
  
  
  // zinc
  event.hide('create:zinc_ingot')
  event.hide('exnihilosequentia:ingot_zinc')
  event.hide('create:zinc_nugget')
  event.hide('createaddition:zinc_sheet')

  // cobalt
  event.hide('tconstruct:cobalt_ingot')
  event.hide('tconstruct:cobalt_nugget')
  
  // bronze
  event.hide('mekanism:dust_bronze')
  event.hide('mekanism:ingot_bronze')
  event.hide('mekanism:nugget_bronze')
  event.hide('thermal:bronze_ingot')
  event.hide('thermal:bronze_nugget')
  event.hide('thermal:bronze_dust')
  event.hide('thermal:bronze_plate')
  
  // brass
  event.hide('create:brass_ingot')
  event.hide('create:brass_nugget')
  event.hide('create:brass_sheet')
  event.hide('createaddition:brass_rod')
  
  // constantan
  event.hide('immersiveengineering:plate_constantan')
  event.hide('immersiveengineering:dust_constantan')
  event.hide('immersiveengineering:nugget_constantan')
  event.hide('immersiveengineering:ingot_constantan')
  event.hide('thermal:constantan_ingot')
  event.hide('thermal:constantan_nugget')
  event.hide('thermal:constantan_dust')
  event.hide('thermal:constantan_plate')
  
  // electrum
  event.hide('immersiveengineering:plate_electrum')
  event.hide('immersiveengineering:dust_electrum')
  event.hide('immersiveengineering:ingot_electrum')
  event.hide('immersiveengineering:nugget_electrum')
  event.hide('thermal:electrum_ingot')
  event.hide('thermal:electrum_nugget')
  event.hide('thermal:electrum_dust')
  event.hide('thermal:electrum_plate')
  
  // steel
  event.hide('immersiveengineering:plate_steel')
  event.hide('immersiveengineering:dust_steel')
  event.hide('immersiveengineering:nugget_steel')
  event.hide('immersiveengineering:ingot_steel')
  event.hide('mekanism:dust_steel')
  event.hide('mekanism:ingot_steel')
  event.hide('mekanism:nugget_steel')
  
  // invar
  event.hide('thermal:invar_ingot')
  event.hide('thermal:invar_nugget')
  event.hide('thermal:invar_dust')
  event.hide('thermal:invar_plate')
  
  // signalum
  event.hide('thermal:signalum_ingot')
  event.hide('thermal:signalum_nugget')
  event.hide('thermal:signalum_dust')
  event.hide('thermal:signalum_plate')
  
  // lumium
  event.hide('thermal:lumium_ingot')
  event.hide('thermal:lumium_nugget')
  event.hide('thermal:lumium_dust')
  event.hide('thermal:lumium_plate')
  
  // enderium
  event.hide('thermal:enderium_ingot')
  event.hide('thermal:enderium_nugget')
  event.hide('thermal:enderium_dust')
  event.hide('thermal:enderium_plate')

  // hide Ardite
  event.hide('armorplus:ardite_helmet')
  event.hide('armorplus:ardite_chestplate')
  event.hide('armorplus:ardite_leggings')
  event.hide('armorplus:ardite_boots')
  
  event.hide('excompressum:uncompressed_coal')
  event.hide('immersiveengineering:furnace_heater')
  event.hide('mysticalagriculture:infusion_crystal')
  
  event.hide(Item.of('apotheosis:potion_charm', {Potion:"potionsmaster:platinum_sight",Damage:0}))
  event.hide(Item.of('extendedcrafting:singularity', {Id:"extendedcrafting:platinum"}))
  event.hide('mysticalagriculture:platinum_essence')
  event.hide('mysticalagriculture:platinum_seeds')
  event.hide(Item.of('minecraft:potion', {Potion:"potionsmaster:platinum_sight"}))
  event.hide(Item.of('minecraft:splash_potion', {Potion:"potionsmaster:platinum_sight"}))
  event.hide(Item.of('minecraft:tipped_arrow', {Potion:"potionsmaster:platinum_sight"}))
  event.hide(Item.of('minecraft:lingering_potion', {Potion:"potionsmaster:platinum_sight"}))
  event.hide('potionsmaster:platinum_powder')
  event.hide('potionsmaster:calcinatedplatinum_powder')
  
  event.hide('ceramics:unfired_clay_bucket')
  event.hide('ceramics:clay_bucket')
  event.hide('ceramics:milk_clay_bucket')
  event.hide('ceramics:cracked_clay_bucket')
  
//  event.hide('mahoutsukai:mortar_and_pestle')
//  event.hide('mahoutsukai:mortar')
//  event.hide('mahoutsukai:pestle')
})