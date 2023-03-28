import React from "react";
import ReactDOM from "react-dom/client"

// header of the app
const Header= ()=>{
    return (
        <div className="head">
            <a href="#">
                <img src="https://tse1.mm.bing.net/th?id=OIP.TBcbm8lq0v742YnwhCa-xgAAAA&pid=Api&P=0"></img>
            </a>
            <div className="rightNav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Body component
const WowMomo= {
    name: "WowMomo",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/0/21060/0cb452738b52f85d710adae3752a6fb2_o2_featured_v2.jpg?output-format=webp",
    cusines: ["momos", "fast food"],
    rating: "4.3",
  };
  const HotKatiRolls= {
    name: "Hotkatirolls",
    image:
      "https://b.zmtcdn.com/data/pictures/2/22082/339f747f4b0b2e53db0e87aa6e3eb140_o2_featured_v2.jpg?output-format=webp",
    cusines: ["Rolls"],
    rating: "2.5",
  };
  const Pizzahut= {
    name: "pizzahut",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/7/20407/c8e3d85b773066868ec333d6f17782cb_o2_featured_v2.jpg?output-format=webp",
    cusines: ["pizzas", "dessert"],
    rating: "3.9",
  };
  const KFC= {
    name: "KFC",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/7/20287/70372b1137630455e2dbf24bb142c14b_o2_featured_v2.jpg?output-format=webp",
    cusines: ["biryani", "Burger","fries","coke"],
    rating: "4.3",
  };
  const Dominos = {
    name: "Dominos",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be66rnc0tj2jgdadiviu",
    cusines: ["pizzas", "Italian"],
    rating: "4.2",
  };
  const BurgerKing={
      name: "Burger King",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d5olayxk8jvojgmzctdi",
      cusines: ["burgers", "American"],
      rating: "4.5",
  }
  const Restaurants = [BurgerKing, Dominos,Pizzahut,WowMomo,HotKatiRolls,KFC];

//Static data
/*
  const Carditem =()=>{
    return (
    <div className="card">
        <img src={Restaurants[0].image}></img>
        <h1>{Restaurants[0].name}</h1>
        <p>{Restaurants[0].cusines.join(",")}</p>
        <p>{Restaurants[0].rating}</p>
    </div>
    )
  }
const Body=()=>{
    return (
        <div className="main">
            <Carditem/>
            <Carditem/>
            <Carditem/>
            <Carditem/>
            <Carditem/>
            <Carditem/>
        </div>
    )
}

*/

/*

// Using props
const Carditem =(props)=>{
    return (
    <div className="card">
        <img src={props.restaurant.image}></img>
        <h1>{props.restaurant.name}</h1>
        <p>{props.restaurant.cusines.join(",")}</p>
        <p>{props.restaurant.rating} Stars</p>
    </div>
    )
  }
const Body=()=>{
    return (
        <div className="main">
            <Carditem restaurant={Restaurants[0]}/>
            <Carditem restaurant={Restaurants[1]}/>
            <Carditem restaurant={Restaurants[2]}/>
            <Carditem restaurant={Restaurants[3]}/>
            <Carditem restaurant={Restaurants[4]}/>
            <Carditem restaurant={Restaurants[5]}/>
        </div>
    )
}

*/

/*
// destructuring

const Carditem =({restaurant})=>{
    const{name,image,cusines,rating}=restaurant;
    return (
    <div className="card">
        <img src={image}></img>
        <h1>{name}</h1>
        <p>{cusines.join(",")}</p>
        <p>{rating} Stars</p>
    </div>
    )
  }
const Body=()=>{
    return (
        <div className="main">
            <Carditem restaurant={Restaurants[0]}/>
            <Carditem restaurant={Restaurants[1]}/>
            <Carditem restaurant={Restaurants[2]}/>
            <Carditem restaurant={Restaurants[3]}/>
            <Carditem restaurant={Restaurants[4]}/>
            <Carditem restaurant={Restaurants[5]}/>
        </div>
    )
}
*/

//spread operator
const Carditem =({name,image,cusines,rating})=>{
    return (
    <div className="card">
        <img src={image}></img>
        <h1>{name}</h1>
        <p>{cusines.join(",")}</p>
        <p>{rating} Stars</p>
    </div>
    )
  }

const Body=()=>{
    return (
        <div className="main">

            {
                Restaurants.map(x=>{
                    return <Carditem {...x}/>;
                })
            }
            {/* <Carditem {...Restaurants[0]}/>
            <Carditem {...Restaurants[1]}/>
            <Carditem {...Restaurants[2]}/>
            <Carditem {...Restaurants[3]}/>
            <Carditem {...Restaurants[4]}/>
            <Carditem {...Restaurants[5]}/> */}
        </div>
    )
}


const AppLayout =()=>{
    return(
        <>
        <Header/>
        <Body/>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)