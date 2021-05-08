class Dessert {
    constructor(calories_var = 100, ingredients_var = [] ){
        this.ingredients = ingredients_var;
        this.ingredients.push("şeker", "süt");
        this.calories= calories_var
    }

    static isGood = true;

    addIngredients(ingredients_var)
    {
        this.ingredients.push(ingredients_var);
    }
    
    getIngredients()
    {
        console.log(this.ingredients);
    }
}

let sambali = new Dessert(200, ["irmik"]);
//console.log(sambali.calories);
let sutlac = new Dessert();
//console.log(sutlac.calories);

sambali.addIngredients("irmik");
sambali.addIngredients("fıstık");
sambali.addIngredients("yumurta");
sambali.getIngredients();

sutlac.addIngredients("pirinç");
sutlac.addIngredients("tuz");
sutlac.getIngredients();

class Icecream extends Dessert{
   constructor(calories_var = 100, ingredients_var = [], flavour_var, toppings){
        super(calories_var,ingredients_var );
        this.flavour= flavour_var;
        this.toppings = toppings;
   }
   getIcecream(){
       console.log(`Bu ${this.flavour} aromalı, üstü ${this.toppings}lı bir dondurmadır.`);
   }
}

let strawberryChocolate = new Icecream(650, ["sahlep", "kaymak"], "çilek", "çikolataparçacık");
console.log(strawberryChocolate.calories);
strawberryChocolate.calories= 1000;
console.log(strawberryChocolate.calories);
strawberryChocolate.getIngredients();
strawberryChocolate.getIcecream();
