function List(props){

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

  // const fruits = [{id:1, name: "apple", calories: 95}, 
  //                 {id:2, name:"orange", calories:90}, 
  //                 {id:3, name: "banana", calories:108}, 
  //                 {id:4, name:"pizza", calories:159}];

  // fruits.sort();
  //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALHPABETICAL
  //fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALHPABETICAL
  //fruits.sort((a,b) => b.calories - a.calories); //ALHPABETICAL
  // fruits.sort((a,b) => a.calories - b.calories); //Reverse ALHPABETICAL

  // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);

  // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);
  
  // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);

  // const listItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>);
  
  // const listItems = highCalFruit.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b></li>);

  // return(<ol>{listItems}</ol>);

  return (
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-item">{listItems}</ol>
    </>
  );

}

export default List