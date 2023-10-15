LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:grass")
        .randomChance(0.9) // 30% chance
        .thenAdd("minecraft:pumpkin_seeds");
});