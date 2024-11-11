 import React,  {useState} from "react";

function PlantCard({plant}) {
  
  const [isInStock, setIsInStock] = useState(true)

  let handleClick = () => setIsInStock(!isInStock)

  return (
    <li className="card" data-testid="plant-item">
      <img src={ plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}

 </li>
);
}

export default PlantCard;
