ServerEvents.recipes(event => {

    event.remove({ id: 'immersiveengineering:crafting/plate_nickel_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_electrum_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_silver_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_iron_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_copper_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_lead_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_constantan_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_steel_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_gold_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_uranium_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_aluminum_hammering' })

    event.remove({ id: 'ironfurnaces:upgrades/upgrade_silver'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_silver2'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_gold'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_gold2'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_iron'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_iron2'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_obsidian'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_obsidian2'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_diamond'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_copper'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_netherite'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_crystal'})
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_emerald'})
    event.remove({ id: 'ironfurnaces:furnaces/silver_furnace2'})
    event.remove({ id: 'ironfurnaces:furnaces/iron_furnace2'})
    event.remove({ id: 'ironfurnaces:furnaces/gold_furnace2'})
    event.remove({ id: 'ironfurnaces:furnaces/obsidian_furnace2'})

    event.remove({ id: 'extendedcrafting:black_iron_slate' })

    event.remove({ id: 'cyclic:crafting/chest'})
    event.remove({ id: 'cyclic:uncrafter'})
    event.remove({ id: 'cyclic:stonecutting/dark_glass'})

    //event.remove({ id: 'minecraft:netherite_helmet'})
    //event.remove({ id: 'minecraft:netherite_chestplate'})
    //event.remove({ id: 'minecraft:netherite_leggings'})
    //event.remove({ id: 'minecraft:netherite_boots'})
    
    
    
    event.replaceInput(
        { input: 'minecraft:redstone' }, 
        'minecraft:redstone', 
        Ingredient.of('#forge:nuggets/redstone_ingot') 
       
    )
    event.replaceInput(
        { mod: "sophisticatedstorage" }, 
        "minecraft:iron_ingot", 
        Ingredient.of("#forge:plates/iron") 
       
    )
})






