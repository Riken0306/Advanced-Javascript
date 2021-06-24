let stocks = {
    Fruits: ["strawberry", "grapes", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = false;

function time(ms){
    return new Promise((resolve, reject)=>{
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("Shop is closed"));
        }
    })
}

async function kitchen () {
    try{
        await time(2000);
        console.log(`${stocks.Fruits[1]} was selected`);

        await time(0000);
        console.log("start the production");

        await time(2000);
        console.log("Cut the Fruit");

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added `);

        await time(1000);
        console.log("Start the Maachine");

        await time(2000);
        console.log(`Icecream Placed on ${stocks.holder[2]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was topped`);

        await time(2000);
        console.log("Served the Icecream");
    }
    catch(error){
        console.log("Customer Left",error);
    }
    finally{
        console.log("Day Ended");
    }
}

kitchen();