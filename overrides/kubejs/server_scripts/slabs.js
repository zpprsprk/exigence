// priority: 5

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello World!  Slabs recipe script here!  (You will see this line every time server resources reload)')


events.listen('recipes', event => {

const undoSlabs = (outputItem, inputTagOrItem) => {
event.shaped(Item.of(outputItem, 1), ['S','S'], {S: inputTagOrItem})
}
undoSlabs('minecraft:oak_planks','minecraft:oak_slab')
undoSlabs('minecraft:spruce_planks','minecraft:spruce_slab')
undoSlabs('minecraft:acacia_planks','minecraft:acacia_slab')
undoSlabs('minecraft:birch_planks','minecraft:birch_slab')
undoSlabs('minecraft:jungle_planks','minecraft:jungle_slab')
undoSlabs('minecraft:dark_oak_planks','minecraft:dark_oak_slab')
undoSlabs('minecraft:warped_planks','minecraft:warped_slab')
undoSlabs('minecraft:crimson_planks','minecraft:crimson_slab')
undoSlabs('minecraft:stone','minecraft:stone_slab')
undoSlabs('minecraft:blackstone','minecraft:blackstone_slab')
undoSlabs('minecraft:polished_blackstone','minecraft:polished_blackstone_slab')
undoSlabs('minecraft:polished_blackstone_bricks','minecraft:polished_blackstone_brick_slab')
undoSlabs('minecraft:smooth_stone','minecraft:smooth_stone_slab')
undoSlabs('minecraft:sandstone','minecraft:sandstone_slab')
undoSlabs('minecraft:cut_sandstone','minecraft:cut_sandstone_slab')
undoSlabs('minecraft:smooth_sandstone','minecraft:smooth_sandstone_slab')
undoSlabs('minecraft:cobblestone','minecraft:cobblestone_slab')
undoSlabs('minecraft:mossy_cobblestone','minecraft:mossy_cobblestone_slab')
undoSlabs('minecraft:bricks','minecraft:brick_slab')
undoSlabs('minecraft:stone_bricks','minecraft:stone_brick_slab')
undoSlabs('minecraft:mossy_stone_bricks','minecraft:mossy_stone_brick_slab')
undoSlabs('minecraft:nether_bricks','minecraft:nether_brick_slab')
undoSlabs('minecraft:red_nether_bricks','minecraft:red_nether_brick_slab')
undoSlabs('minecraft:quartz_block','minecraft:quartz_slab')
undoSlabs('minecraft:smooth_quartz','minecraft:smooth_quartz_slab')
undoSlabs('minecraft:red_sandstone','minecraft:red_sandstone_slab')
undoSlabs('minecraft:cut_red_sandstone','minecraft:cut_red_sandstone_slab')
undoSlabs('minecraft:smooth_red_sandstone','minecraft:smooth_red_sandstone_slab')
undoSlabs('minecraft:purpur_block','minecraft:purpur_slab')
undoSlabs('minecraft:prismarine','minecraft:prismarine_slab')
undoSlabs('minecraft:prismarine_bricks','minecraft:prismarine_brick_slab')
undoSlabs('minecraft:dark_prismarine','minecraft:dark_prismarine_slab')
undoSlabs('minecraft:granite','minecraft:granite_slab')
undoSlabs('minecraft:polished_granite','minecraft:polished_granite_slab')
undoSlabs('minecraft:andesite','minecraft:andesite_slab')
undoSlabs('minecraft:polished_andesite','minecraft:polished_andesite_slab')
undoSlabs('minecraft:diorite','minecraft:diorite_slab')
undoSlabs('minecraft:polished_diorite','minecraft:polished_diorite_slab')
undoSlabs('minecraft:end_stone_bricks','minecraft:end_stone_brick_slab')
//undoSlabs('minecraft:','minecraft:_slab')

})