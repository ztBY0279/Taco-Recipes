import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.

  const ourData = JSON.parse(recipeJSON);

 



  if(req.body.choice === "chicken"){

    console.log("first is working now:");

    let obj1 = ourData[0];

    let topping1 =  ourData[0].ingredients.toppings[0].quantity +" of " + ourData[0].ingredients.toppings[0].name ;

    

    let topping2 = ourData[0].ingredients.toppings[1].quantity +" of " + ourData[0].ingredients.toppings[1].name ;

    let topping3 = ourData[0].ingredients.toppings[2].quantity +" of " + ourData[0].ingredients.toppings[2].name ;

    let topping4 = ourData[0].ingredients.toppings[3].quantity +" of " + ourData[0].ingredients.toppings[3].name ;
  
  

   
    

    res.render("index.ejs",{main : obj1,protein :obj1.ingredients.protein,salsa: obj1.ingredients.salsa,top1:topping1,top2:topping2,top3:topping3,top4:topping4});

  }
  else if(req.body.choice === "beef"){

    console.log("second is working:");

    const ourData = JSON.parse(recipeJSON);

    let obj1 = ourData[1];
    console.log(obj1.ingredients.toppings[0].name);
    console.log(obj1.ingredients.toppings[0].quantity
      );

      console.log(obj1.ingredients.toppings[1].name);
      console.log(obj1.ingredients.toppings[1].quantity
        );
   
    
      let topping1 = obj1.ingredients.toppings[0].name + " of " + obj1.ingredients.toppings[0].quantity;
       let topping2 = obj1.ingredients.toppings[1].name + " of " + obj1.ingredients.toppings[1].quantity;
       let topping3 = obj1.ingredients.toppings[0].name + " of " + obj1.ingredients.toppings[0].quantity;
       let topping4 = obj1.ingredients.toppings[1].name + " of " + obj1.ingredients.toppings[1].quantity;
      
  

   
    

    res.render("index.ejs",{main : obj1,protein :obj1.ingredients.protein,salsa: obj1.ingredients.salsa,top1:topping1,top2:topping2,top3:topping3,top4:topping4});

  }
  else{

    const ourData = JSON.parse(recipeJSON);

    let obj1 = ourData[2];

    console.log(obj1.ingredients.toppings[0].quantity);

     let topping1 =  obj1.ingredients.toppings[0].quantity +" of " + ourData[2].ingredients.toppings[0].name ;

    

    let topping2 = obj1.ingredients.toppings[1].quantity +" of " + ourData[2].ingredients.toppings[1].name ;

     let topping3 = obj1.ingredients.toppings[2].quantity +" of " + ourData[2].ingredients.toppings[2].name ;

    // let topping4 = obj1.ingredients.toppings[3].quantity +" of " + ourData[2].ingredients.toppings[3].name ;
  
  let topping4 = "empty things"

   
    

    res.render("index.ejs",{main : obj1,protein :obj1.ingredients.protein,salsa: obj1.ingredients.salsa,top1:topping1,top2:topping2,top3:topping3,top4:topping4});

  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
