function removeEggs(foods) {
    return foods.filter(value => value !=='egg');
}
console.log(removeEggs(['apple','egg','ham','egg','egg','grape']));