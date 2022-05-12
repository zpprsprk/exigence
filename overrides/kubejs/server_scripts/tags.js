// Listen to item tag event
onEvent('item.tags', event => {
  event.add('forge:clay/porcelain','exnihilosequentia:porcelain_clay')
  event.add('forge:clay/porcelain','ceramics:unfired_porcelain')
  
  event.add('naturesaura:ancient_logs','naturesaura:ancient_log')
  event.add('naturesaura:ancient_logs','naturesaura:ancient_bark')
  
  event.add('appliedenergistics2:dusts/ender','thermal:ender_pearl_dust')
  event.add('appliedenergistics2:dusts/ender','emendatusenigmatica:ender_dust')
  
  event.add('forge:rubber/raw','industrialforegoing:dryrubber')
  event.add('forge:rubber/raw','thermal:rubber')
  
  event.add('forge:storage_blocks/gunpowder', 'quark:gunpowder_sack')
  
  event.add('appliedenergistics2:silicon', 'emendatusenigmatica:silicon_gem')
  
  event.add('forge:gems', 'rftoolsbase:dimensionalshard')
  event.add('forge:gems/dimensional', 'rftoolsbase:dimensionalshard')
  
  event.add('forge:bitumen', 'emendatusenigmatica:bitumen_gem')
  
  event.add('forge:storage_blocks/mana', 'emendatusenigmatica:arcane_block')
  
  event.add('forge:storage_blocks/compressed_cobblestone', 'compressium:cobblestone_1')
  event.add('forge:storage_blocks/compressed_cobblestone', 'excompressum:compressed_cobblestone')
  event.add('forge:storage_blocks/compressed_gravel', 'compressium:gravel_1')
  event.add('forge:storage_blocks/compressed_gravel', 'excompressum:compressed_gravel')
  event.add('forge:storage_blocks/compressed_sand', 'compressium:sand_1')
  event.add('forge:storage_blocks/compressed_sand', 'excompressum:compressed_sand')
  event.add('forge:storage_blocks/compressed_dirt', 'compressium:dirt_1')
  event.add('forge:storage_blocks/compressed_dirt', 'excompressum:compressed_dirt')
  event.add('forge:storage_blocks/compressed_netherrack', 'compressium:netherrack_1')
  event.add('forge:storage_blocks/compressed_netherrack', 'excompressum:compressed_netherrack')
  event.add('forge:storage_blocks/compressed_soulsand', 'compressium:soulsand_1')
  event.add('forge:storage_blocks/compressed_soulsand', 'excompressum:compressed_soul_sand')
  event.add('forge:storage_blocks/compressed_endstone', 'compressium:endstone_1')
  event.add('forge:storage_blocks/compressed_endstone', 'excompressum:compressed_end_stone')
  event.add('forge:storage_blocks/compressed_diorite', 'compressium:diorite_1')
  event.add('forge:storage_blocks/compressed_diorite', 'excompressum:compressed_diorite')
  event.add('forge:storage_blocks/compressed_andesite', 'compressium:andesite_1')
  event.add('forge:storage_blocks/compressed_andesite', 'excompressum:compressed_andesite')
  event.add('forge:storage_blocks/compressed_granite', 'compressium:granite_1')
  event.add('forge:storage_blocks/compressed_granite', 'excompressum:compressed_granite')
  event.add('forge:storage_blocks/compressed_stone', 'compressium:stone_1')
  event.add('forge:storage_blocks/double_compressed_stone', 'compressium:stone_2')
  event.add('forge:storage_blocks/triple_compressed_stone', 'compressium:stone_3')
  event.add('forge:storage_blocks/double_compressed_dirt', 'compressium:dirt_2')
  event.add('forge:storage_blocks/compressed_obsidian', 'compressium:obsidian_1')
  event.add('forge:storage_blocks/double_compressed_obsidian', 'compressium:obsidian_2')
  
  event.add('forge:storage_blocks/fluix', 'appliedenergistics2:fluix_block')
  
  event.add('forge:dusts/ender_pearl', 'emendatusenigmatica:ender_dust')
  event.add('forge:dusts/ender_pearl','appliedenergistics2:ender_dust')
  event.add('forge:dusts/ender_pearl','potionsmaster:ender_powder')

  event.remove('forge:ores/platinum', 'exnihilosequentia:chunk_platinum')
  event.remove('forge:gears/iron', 'titanium:iron_gear')
  event.remove('forge:gears/gold', 'titanium:gold_gear')
  
  event.remove('mekanism:alloys/basic', 'minecraft:redstone')
  event.add('mekanism:alloys/basic', 'morered:red_alloy_ingot')

})
onEvent('block.tags', event => {
  event.add('minecraft:guarded_by_piglins', '#forge:ores')
})