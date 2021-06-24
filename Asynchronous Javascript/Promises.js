let stocks = {
    Fruits: ["strawberry", "grapes", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

let order = (time, work) =>{
    return new Promise( (resolve, reject) => {
        if(is_shop_open){
            setTimeout(() => {    
                resolve(work());
            }, time);
        }
        else{
            reject(console.log("Our shop is closed"))
        }
    })
}

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>{
    return order(0000, ()=>console.log("Production has started"));
})
.then(() =>{
    return order(2000, ()=>console.log("The fruit were chopped"))
})
.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})
.then(()=>{
    return order(1000, ()=>console.log("Started the machine"));
})
.then(()=>{
    return order(2000, ()=>console.log(`Icecream was added to ${stocks.holder[1]}`))
})
.then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]} was added on Icecream`))
})
.then(()=>{
    return order(1000, ()=>console.log("Served the Icecream"))
})

.catch(()=>{
    console.log("Customer Left");
})

.finally(()=>{
    console.log("Day ended shop is closed");
})
