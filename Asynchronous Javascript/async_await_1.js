let stocks = {
    Fruits: ["strawberry", "grapes", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

async function order (){
    try{
        await abc;
    }
    catch(error){
        console.log("abc doesn't exists", error);
    }
    finally{
        console.log("runs code anyways");
    }
}

order()
.then(()=>{
    console.log('asdfg;llkjh');
})