// Asynchronous

/*console.log("I ");
console.log("eat ");

setTimeout(() => {
    console.log("Icecream ");
}, 3000);
console.log("with");
console.log("Spoon ");

function one (call_two) {
    call_two();
    console.log("Step 1 complete. please call step 2");
}
function two () {
    console.log("Step 2");
}

one(two);*/

//callback hell
let stocks = {
    Fruits: ["strawberry", "grapes", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let order = (Fruit_name,call_production) =>{
    setTimeout(() => {   
        console.log(`${stocks.Fruits[Fruit_name]} was seleted`);
        call_production();
    }, 2000);
};

let production = () => {

    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("The Fruit has been Chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("Machine has been started");

                    setTimeout(() => {
                        console.log(`Icecream was placed on ${stocks.holder[0]}`);

                        setTimeout(() => {
                           console.log(`${stocks.toppings[1]} was added as toppings`); 

                           setTimeout(() => {
                               console.log("serve Icecream");
                           }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
}

order(0,production);


