const {prompt} = require("inquirer");
const db = require("./queries");

const main = async () => {
   const response = await prompt({
        message:"Hey welcome to thirty one flavors what do you want to do?",
        type: "list",
        name: "choice",
        choices: [
        {name:"View All Flavors", value: "view flavors"}, 
        {name:"View All Toppings", value: "view toppings"}, 
        {name:"View All Containers", value: "view containers"},
        {name: "Add A Flavor", value: "add flavors"},
        {name: "Add A Topping", value: "add toppings"},
        {name: "Add A Container", value: "add containers"},
        {name: "Delete A Flavor", value: "delete flavors"},
        {name: "Delete A Topping", value: "delete toppings"},
        {name: "Delete A Container", value: "delete containers"}
    ]
    })
    const [method, argument] = response.choice.split(" ") //["view", "flavors"]
    const result = await db[method](argument);
    console.table(result);
    setTimeout(main, 1500);
}

main();