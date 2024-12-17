import List from "./List";


function App() {
  return (
    <>
  const fruits = [{id: 1 , name:"apple", calories: 95}, 
                  {id: 2 , name:"orange", calories: 45}, 
                  {id: 3 , name:"coconut", calories: 120},
                  {id: 4 , name:"bananas", calories:122}, 
                  {id: 5 , name:"pineapple", calories: 65}];
   <List items={fruits} category={'Fruits'} />

    </>
  );
}


export default App
