function makeCoffe(sugar,milk) {
    var instructions = "Boil water,";

    instructions += " pour into cup,";

    instructions += " add coffe granules,";

    instructions += " add " + sugar + " spoons of sugar, ";

    instructions += " add " + milk + "% milk.";

    return instructions;
};

console.log(makeCoffe(2,3));