//CHAP 6 RENDER LIST
import List from "./List.jsx"

function App() {

  const fruits = [{id:1, name: "apple", calories: 95}, 
                    {id:2, name:"orange", calories:90}, 
                    {id:3, name: "banana", calories:108}, 
                    {id:4, name:"pizza", calories:159}];

  const vegetables = [{id:1, name: "kangkung", calories: 95}, 
                    {id:2, name:"kentang", calories:90}, 
                    {id:3, name: "kailan", calories:108}, 
                    {id:4, name:"peria", calories:159}];

  return (
    <>
      {/* <List></List> */}
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
  )
}

export default App
