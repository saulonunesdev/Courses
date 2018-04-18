var car = {
    make: "volvo",
    color : "red",
    speed : 200,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons: [{ maker: "BMW"}, { maker: "BMW2"}]
    },
    drive : function() {
         return "drive" ;
    },
};

var drivers = [
    "Jhon",
    "Doe",
    "foo",
    "bar"
];

var array = [
    "string", 
    100, 
    ["embed", 200], 
    {car: "ford"},
    function () { return "driver";}
];

console.log(car.drive(), "-", car.engine.pistons[0].maker)

function name( fullname ) {
    return fullname.firstname + " " + fullname.lastname;
}

console.log(name( { firstname: "Jhon", lastname: "Doe"}));

function nameCallBack( fullnameCB ) {
    return fullnameCB();
}

console.log(nameCallBack( function() { return "Get Back Jhon Snow";}));