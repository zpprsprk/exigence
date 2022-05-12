// priority: 10000

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {

event.shaped(Item.of('minecraft:stick', 8), ['L', 'L'], {L: '#minecraft:logs'})

event.shaped(Item.of('armorplus:wooden_rod', 2), ['SS','SS'], {S: '#forge:rods/wooden'})

event.shaped(item.of('emendatusenigmatica:enigmatic_hammer', 1), [' IH',' SI','S  '],
{
I: '#forge:ingots/iron',
H: '#forge:fiber_hemp',
S: '#forge:rods/treated_wood'
})

event.shaped(item.of('immersiveengineering:hammer', 1), [' IH',' SI','S  '],
{
I: '#forge:ingots/steel',
H: '#forge:string',
S: '#forge:rods/wooden'
})

event.shaped(item.of('immersiveengineering:workbench', 1), ['   ','SLL','T F'],
{
S: '#forge:ingots/steel',
L: '#forge:treated_wood_slab',
T: 'immersiveengineering:craftingtable',
F: 'immersiveengineering:treated_fence'
})

event.shaped(Item.of('mining_dimension:teleporter', 1), ['LPL','PAP','LPL'],
{
L: '#minecraft:logs',
P: '#minecraft:planks',
A: 'immersiveengineering:pickaxe_steel'
})

event.shaped(Item.of('minecraft:paper', 1), ['SSS'], 
{
S: '#forge:dusts/wood'
})

event.shaped(Item.of('minecraft:paper', 2), ['SS', 'SS'], 
{
S: 'minecraft:bamboo'
})

event.shaped(Item.of('mekanism:advanced_control_circuit', 1), [' P ','ACA',' P '],
{
P: 'create:precision_mechanism',
A: '#mekanism:alloys/infused',
C: 'mekanism:basic_control_circuit'
})

event.shaped(Item.of('mekanism:elite_control_circuit', 1), [' P ','ACA',' P '],
{
P: 'immersiveengineering:logic_circuit',
A: '#mekanism:alloys/reinforced',
C: 'mekanism:advanced_control_circuit'
})

event.shaped(Item.of('mekanism:ultimate_control_circuit', 1), [' P ','ACA',' P '],
{
P: 'pneumaticcraft:printed_circuit_board',
A: '#mekanism:alloys/atomic',
C: 'mekanism:elite_control_circuit'
})

event.shaped(Item.of('mekanism:metallurgic_infuser', 1), ['IFI','ROR','IFI'],
{
I: '#forge:ingots/iron',
F: 'thermal:machine_smelter',
R: 'extendedcrafting:redstone_ingot',
O: 'mekanism:steel_casing'
})

event.shaped(Item.of('rftoolsbase:machine_frame', 1), ['IBI','GFG','IBI'],
{
I: '#forge:ingots/iron',
B: '#forge:dyes/blue',
G: '#forge:nuggets/gold',
F: 'industrialforegoing:machine_frame_simple'
})

event.shaped(Item.of('powah:energy_cable_starter', 12), ['RRR','WCW','RRR'],
{
R: 'powah:dielectric_rod_horizontal',
W: '#forge:wires/copper',
C: 'powah:capacitor_basic_tiny'
})

event.shaped(Item.of('quantumstorage:chestiron', 1), ['PSP','ICI','PSP'],
{
P: '#minecraft:planks',
S: 'rftoolsstorage:storage_module0',
I: '#forge:ingots/iron',
C: 'ironchest:iron_chest'
})

event.shaped(Item.of('quantumstorage:chestgold', 1), ['PSP','ICI','PSP'],
{
P: '#minecraft:planks',
S: 'quantumstorage:chestiron',
I: '#forge:ingots/gold',
C: 'ironchest:gold_chest'
})

event.shaped(Item.of('quantumstorage:chestdiamond', 1), ['PSP','ICI','PSP'],
{
P: '#minecraft:planks',
S: 'quantumstorage:chestgold',
I: '#forge:gems/diamond',
C: 'ironchest:diamond_chest'
})

event.shaped(Item.of('quantumstorage:qsu', 1), ['ISI','ICI','ISI'],
{
S: 'quantumstorage:chestdiamond',
I: '#forge:ingots/steel',
C: 'powah:ender_core'
})

event.shaped(Item.of('rftoolsstorage:modular_storage', 1), ['BCB','RPR','QIQ'],
{
B: 'powah:battery_starter',
C: 'create:precision_mechanism',
R: 'immersiveengineering:reinforced_crate',
P: '#industrialforegoing:machine_frame/pity',
Q: 'create:polished_rose_quartz',
I: 'immersiveengineering:logic_circuit'
})

event.shaped(Item.of('appliedenergistics2:controller', 1), ['SXS','FPM','SXS'],
{
S: 'appliedenergistics2:sky_stone_small_brick',
X: '#forge:storage_blocks/fluix',
F: 'cyclic:fan',
P: 'appliedenergistics2:engineering_processor',
M: 'thermal:machine_frame'
})

event.shaped(Item.of('appliedenergistics2:inscriber', 1), ['IPI','XFI','IPI'],
{
I: '#forge:storage_blocks/iron',
P: 'create:sticky_mechanical_piston',
X: '#forge:storage_blocks/fluix',
F: '#industrialforegoing:machine_frame/advanced'
})

event.shaped(Item.of('appliedenergistics2:1k_cell_component', 1), ['BRB','CLX','BQB'],
{
B: 'mekanism:basic_control_circuit',
R: 'extendedcrafting:redstone_ingot',
C: 'appliedenergistics2:purified_certus_quartz_crystal',
L: 'appliedenergistics2:logic_processor',
X: 'appliedenergistics2:purified_fluix_crystal',
Q: 'appliedenergistics2:purified_nether_quartz_crystal'
})

event.shaped(Item.of('appliedenergistics2:4k_cell_component', 1), ['CPC','SGS','CSC'],
{
C: 'mekanism:advanced_control_circuit',
P: 'appliedenergistics2:calculation_processor',
S: 'appliedenergistics2:1k_cell_component',
G: 'appliedenergistics2:quartz_glass'
})

event.shaped(Item.of('appliedenergistics2:16k_cell_component', 1), ['CPC','SGS','CSC'],
{
C: 'mekanism:elite_control_circuit',
P: 'appliedenergistics2:calculation_processor',
S: 'appliedenergistics2:4k_cell_component',
G: 'appliedenergistics2:quartz_glass'
})

event.shaped(Item.of('appliedenergistics2:64k_cell_component', 1), ['CPC','SGS','CSC'],
{
C: 'mekanism:ultimate_control_circuit',
P: 'appliedenergistics2:engineering_processor',
S: 'appliedenergistics2:16k_cell_component',
G: 'appliedenergistics2:quartz_glass'
})

event.shaped(Item.of('appliedenergistics2:interface', 1), ['CGC','APF','CGC'],
{
C: '#forge:ingots/compressed_iron',
G: 'appliedenergistics2:quartz_glass',
A: 'appliedenergistics2:annihilation_core',
P: 'pneumaticcraft:printed_circuit_board',
F: 'appliedenergistics2:formation_core'
})

event.shaped(Item.of('appliedenergistics2:fluid_interface', 1), ['CGC','APF','CGC'],
{
C: '#forge:ingots/compressed_iron',
G: '#forge:dyes/green',
A: 'appliedenergistics2:annihilation_core',
P: 'pneumaticcraft:printed_circuit_board',
F: 'appliedenergistics2:formation_core'
})

event.shaped(Item.of('extendedcrafting:basic_component', 1), ['PGP', 'GSG', 'PGP'],
{
P: 'astralsorcery:illumination_powder',
G: '#forge:ingots/iron',
S: 'extendedcrafting:black_iron_slate'
})

event.shaped(Item.of('immersiveengineering:capacitor_lv', 1), ['CCC','SLS','WRW'],
{
C: 'createaddition:capacitor',
S: 'createaddition:copper_spool',
L: '#forge:ingots/lead',
W: '#forge:treated_wood',
R: 'extendedcrafting:redstone_ingot'
})
event.shaped(Item.of('immersiveengineering:capacitor_mv', 1), ['CCC','SLS','WRW'],
{
C: 'createaddition:capacitor',
S: 'immersiveengineering:coil_mv',
L: '#forge:sheetmetals/lead',
W: 'immersiveengineering:capacitor_lv',
R: 'extendedcrafting:redstone_ingot_block'
})
event.shaped(Item.of('immersiveengineering:capacitor_hv', 1), ['CCC','SLS','WRW'],
{
C: 'pneumaticcraft:capacitor',
S: 'immersiveengineering:coil_hv',
L: '#forge:storage_blocks/lead',
W: 'immersiveengineering:capacitor_mv',
R: 'extendedcrafting:redstone_ingot_block'
})

event.shaped(Item.of('create:mechanical_press', 1), [' A ','CFC',' B '],
{
A: 'create:andesite_alloy',
B: 'enviromats:hardened_stone',
C: 'create:cogwheel',
F: 'create:andesite_casing'
})

event.shaped(Item.of('powah:energy_cell_basic', 1), ['ICI','EDE','ICI'],
{
I: '#forge:ingots/iron',
C: 'powah:capacitor_basic',
E: 'powah:energy_cell_starter',
D: 'powah:dielectric_casing'
})

event.shaped(Item.of('minecraft:hopper', 1), ['I I','ICI',' I '],
{
I: '#forge:plates/iron',
C: '#forge:chests/wooden'
})
event.shaped(Item.of('minecraft:hopper', 1), ['ILI','ILI',' I '],
{
I: '#forge:plates/iron',
L: '#minecraft:logs'
})
event.shaped(Item.of('minecraft:bucket', 1), ['I I',' I '],
{
I: '#forge:plates/iron'
})
event.shaped(Item.of('industrialforegoing:dryrubber', 1), [' E ','EEE',' E '],
{
E: 'mysticalagriculture:rubber_essence'
})
event.shaped(Item.of('thermal:rubber', 3), ['EEE','E E','EEE'],
{
E: 'mysticalagriculture:rubber_essence'
})
event.shaped(Item.of('storagedrawers:creative_storage_upgrade',1), ['SSS','NUN','SSS'],
{
S: '#forge:rods/wooden',
N: 'extendedcrafting:ender_star',
U: 'storagedrawers:emerald_storage_upgrade'
})
event.shaped(Item.of('undergarden:catalyst', 1), ['GIG','IDI','GIG'],
{
G: '#forge:plates/gold',
I: '#forge:plates/iron',
D: '#forge:gears/diamond'
})
event.shaped(Item.of('thermal:rf_coil', 1), [' WR','WCW','RW '],
{
R: 'morered:red_alloy_ingot',
C: 'immersiveengineering:coil_mv',
W: 'immersiveengineering:wirecoil_redstone'
})
event.shaped(Item.of('mob_grinding_utils:gm_chicken_feed_cursed', 1), ['BEB','RFO','BGB'],
{
B: 'exnihilosequentia:bucket_witchwater',
E: 'minecraft:spider_eye',
R: 'minecraft:rotten_flesh',
F: 'mob_grinding_utils:gm_chicken_feed',
O: '#forge:bones',
G: '#forge:gunpowder'
})
event.shaped(Item.of('storagedrawers:compacting_drawers_3', 1), ['SSS','PDP','BIB'],
{
S: 'minecraft:stone',
P: 'create:mechanical_press',
D: '#storagedrawers:drawers',
B: 'create:basin',
I: '#forge:storage_blocks/iron'
})
event.shaped(Item.of('envirocore:kyronite_frame', 1), ['CIC','QFQ','CDC'],
{
C: '#forge:ingots/cloggrum',
I: 'envirocore:kyronite_interconnect',
Q: '#forge:gems/quartz',
F: 'envirocore:erodium_frame',
D: '#forge:gems/diamond'
})
event.shaped(Item.of('envirocore:pladium_frame', 1), ['CIC','QFQ','CDC'],
{
C: '#forge:ingots/froststeel',
I: 'envirocore:pladium_interconnect',
Q: '#forge:gems/quartz',
F: 'envirocore:kyronite_frame',
D: '#forge:gems/emerald'
})
event.shaped(Item.of('envirocore:ionite_frame', 1), ['CIC','QFQ','CDC'],
{
C: '#forge:ingots/utherium',
I: 'envirocore:ionite_interconnect',
Q: '#forge:ender_pearls',
F: 'envirocore:pladium_frame',
D: '#forge:nether_stars'
})
event.shaped(Item.of('envirocore:aethium_frame', 1), ['CIC','QFQ','CDC'],
{
C: '#forge:ingots/regalium',
I: 'envirocore:aethium_interconnect',
Q: '#forge:ender_pearls',
F: 'envirocore:ionite_frame',
D: '#forge:nether_stars'
})
event.shaped(Item.of('emendatusenigmatica:sulfur_gem', 8), ['E E',' E '],
{
E: 'mysticalagriculture:sulfur_essence'
})
event.shaped(Item.of('minecraft:elytra', 1), ['MSM','MEM','MEM'],
{
M: 'minecraft:phantom_membrane',
S: 'forbidden_arcanus:dragon_scale',
E: 'mysticalagriculture:air_essence'
})
event.shaped(Item.of('powah:ender_cell_starter', 1), ['ONO','NCN','ONO'], {
O: 'powah:energy_cell_starter',
N: '#forge:nuggets/iron',
C: 'powah:ender_core'
})
event.shaped(Item.of('powah:capacitor_basic_tiny', 1), ['PIP','IRI','PIP'], {
P: 'powah:dielectric_paste',
I: '#forge:nuggets/iron',
R: '#forge:storage_blocks/redstone'
})
event.shaped(Item.of('powah:capacitor_basic', 1), ['PIP','IRI','PIP'], {
P: 'powah:dielectric_paste',
I: '#forge:ingots/iron',
R: 'powah:capacitor_basic_tiny'
})
event.shaped(Item.of('powah:capacitor_basic_large', 1), ['PIP','IRI','PIP'], {
P: 'powah:dielectric_paste',
I: '#forge:storage_blocks/iron',
R: 'powah:capacitor_basic'
})
event.shaped(Item.of('powah:capacitor_hardened', 1), ['PIP','IRI','PIP'], {
P: 'powah:dielectric_paste',
I: 'powah:steel_energized',
R: 'powah:capacitor_basic_large'
})
event.shaped(Item.of('powah:capacitor_blazing', 1), ['PIP','IRI','PIP'], {
P: 'powah:dielectric_paste',
I: 'powah:crystal_blazing',
R: 'powah:capacitor_hardened'
})
event.shaped(Item.of('angelring:itemring', 1), ['LBG','BDB','EBE'], {
L: 'ars_nouveau:belt_of_levitation',
B: '#forge:storage_blocks/arcane_gold',
G: 'xreliquary:rending_gale',
D: 'angelring:itemdiamondring',
E: 'forbidden_arcanus:orb_of_temporary_flight'
})
event.shaped(Item.of('appliedenergistics2:silicon', 8), ['E E',' E '], {
E: 'mysticalagriculture:silicon_essence'
})
event.shaped(Item.of('powah:dielectric_casing',1), ['IHI','VCV','IHI'], {
I: '#forge:ingots/iron',
H: 'powah:dielectric_rod_horizontal',
V: 'powah:dielectric_rod',
C: 'create:andesite_casing'
})
event.shaped(Item.of('minecraft:furnace', 1), ['CCC','COC','CSC'], {
C: '#forge:storage_blocks/compressed_cobblestone',
O: '#minecraft:coals',
S: 'minecraft:cobblestone_slab'
})
event.shaped(Item.of('industrialforegoing:latex_processing_unit', 1), ['PRP','WML','PFP'], {
P: '#forge:plates/iron',
R: '#forge:storage_blocks/redstone',
W: '#forge:water/water',
M: 'industrialforegoing:machine_frame_pity',
L: 'industrialforegoing:latex_bucket',
F: '#forge:furnaces/iron'
})
event.shaped(Item.of('mekanism:basic_fluid_tank', 1), ['RIR','IBI','RIR'], {
R: '#mekanism:alloys/basic',
I: '#forge:ingots/iron',
B: 'minecraft:bucket'
})
event.shaped(Item.of('immersiveengineering:cloche', 1), ['GVG','GPG','TCT'], {
G: '#forge:glass',
V: 'immersiveengineering:electron_tube',
P: '#botanypots:hopper_botany_pots',
T: '#forge:treated_wood',
C: 'immersiveengineering:component_iron'
})
event.shaped(Item.of('quantumstorage:tank', 1), ['NUN','NSN','NUN'], {
N: '#forge:ingots/netherite',
U: 'mekanism:ultimate_fluid_tank',
S: 'industrialforegoing:machine_frame_supreme'
})
event.shaped(Item.of('compactmachines:machine_tiny', 1), ['WBW','BCB','WBW'], {
W: 'compactmachines:wall',
B: '#minecraft:planks',
C: 'thermal:machine_frame'
})
event.shaped(Item.of('compactmachines:machine_small', 1), ['WBW','BCB','WBW'], {
W: 'compactmachines:wall',
B: '#forge:storage_blocks/iron',
C: 'compactmachines:machine_tiny'
})
event.shaped(Item.of('compactmachines:machine_normal', 1), ['WBW','BCB','WBW'], {
W: 'compactmachines:wall',
B: '#forge:storage_blocks/gold',
C: 'compactmachines:machine_small'
})
event.shaped(Item.of('compactmachines:machine_large', 1), ['WBW','BCB','WBW'], {
W: 'compactmachines:wall',
B: '#forge:obsidian',
C: 'compactmachines:machine_normal'
})
event.shaped(Item.of('compactmachines:machine_giant', 1), ['WBW','BCB','WBW'], {
W: 'compactmachines:wall',
B: '#forge:storage_blocks/diamond',
C: 'compactmachines:machine_large'
})
event.shaped(Item.of('compactmachines:machine_maximum', 1), ['WBW','BCB','WBW'], {
W: 'compactmachines:wall',
B: '#forge:storage_blocks/emerald',
C: 'compactmachines:machine_giant'
})
event.shaped(Item.of('compactmachines:tunnel', {definition:{id:"compactmachines:redstone_in"}}), ['RRR','RTR','RRR'], {
R: '#forge:dusts/redstone',
T: {'type':'forge:nbt','item':'compactmachines:tunnel','nbt':{'definition':{'id':'compactmachines:item'}}} 
})
event.shaped(Item.of('elementalcraft:powerful_earth_shard', 1), ['EEE','ESE','EEE'], {
E: 'mysticalagriculture:earth_essence',
S: 'minecraft:prismarine_shard'
})
event.shaped(Item.of('elementalcraft:powerful_fire_shard', 1), ['EEE','ESE','EEE'], {
E: 'mysticalagriculture:fire_essence',
S: 'minecraft:prismarine_shard'
})
event.shaped(Item.of('elementalcraft:powerful_air_shard', 1), ['EEE','ESE','EEE'], {
E: 'mysticalagriculture:air_essence',
S: 'minecraft:prismarine_shard'
})
event.shaped(Item.of('elementalcraft:powerful_water_shard', 1), ['EEE','ESE','EEE'], {
E: 'mysticalagriculture:water_essence',
S: 'minecraft:prismarine_shard'
})
event.shaped(Item.of('emendatusenigmatica:nickel_ingot', 4), ['EEE','E E','EEE'], {
E: 'mysticalagriculture:nickel_essence'
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "IGI",
    "G G",
    "IGI"
  ],
  "key": {
    "I": {
      "item": "minecraft:iron_ingot"
    },
    "G": {
      "tag": "forge:glass"
    }
  },
  "result": {
    "item": "biggerreactors:reactor_manifold",
    "count": 4
  }
})
event.custom({
	"type": "minecraft:crafting_shapeless",
	
	"ingredients":
	[
    {
      "tag": "forge:tool_pot"
    },
    {
      "tag": "forge:crops/oats"
    },
    {
      "tag": "forge:crops/peach"
    },
	{
      "tag": "forge:cream"
    },
	{
      "tag": "forge:water"
    }


	],
	
	"result": {"item": "pamhc2foodextended:peachesandcreamoatmealitem",
	"count": 1}
	
})
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": "minecraft:dirt"
  },
  "cast_consumed": true,
  "fluid": {
    "name": "tconstruct:magma",
    "amount": 1000
  },
  "result": "tconstruct:ichor_slime_dirt",
  "cooling_time": 40
})
})
