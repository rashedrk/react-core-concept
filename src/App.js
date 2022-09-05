import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const hero=['Jasim','Karim','Salman','Bappy'];
  const products=[
    {name:'Photoshop',price:'$99.99'},
    {name:'Illustrator',price:'$70.99'},
    {name:'PDF Reader',price:'$10.89'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            hero.map(name => <li>{name}</li>)
            
          }
        </ul>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name={hero[0]} naika='Sabnur'></Person>
        <Person name={hero[1]} naika='Jesica'></Person>
        <Person name={hero[2]} naika='Katrina'></Person>
      </header>
    </div>
  );
};

function Counter() {
  const [count,setCount]=useState(0) ;
  const handleIncrease= () =>{
   const newCount=count+1;
    setCount(newCount);
  };
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  );
}

function Users() {
  const [user, setUser]=useState([]);
  useEffect( ()=> {  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
      setUser(data);
  })},[])

  return(
    <div>
      <h3>Dynamic User: {user.length} </h3>
    <ul>
    {
        user.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>
  );
};

function Person(props) {
  // const personStyle={
  //   border:'solid 2px red',
  //   margin: '10px'
  // }
  return(
    <div style={{border:'solid 2px yellow', margin:'10px', width:'400px'}}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of {props.naika}</h3>
    </div>
  );
};
function Product(props) {

  const productStyle={
    border:'2px solid green',
    margin: '5px',
    borderRadius:'10px',
    backgroundColor:'white',
    color:'black',
    height:'200px',
    width:'200px'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h2>{props.product.price}</h2>
      <button>Buy Now</button>
    </div>
  );
}

export default App;

