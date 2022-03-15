// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide('chiselsandbits:block_bit')
	event.hide('ae2:facade')
	event.hide('electrodynamics:coalcoke')
})