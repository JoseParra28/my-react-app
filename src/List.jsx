
function List(){
    const fruits = [{id: 1 , name:"apple", calories: 95}, 
                    {id: 2 , name:"orange", calories: 45}, 
                    {id: 3 , name:"coconut", calories: 120},
                    {id: 4 , name:"bananas", calories:99}, 
                    {id: 5 , name:"pineapple", calories: 65}];

    // fruits.sort((a,b) =>a.name.localeCompare(b.name))
    fruits.sort((a,b) =>a.calories - b.calories)
    // fruits.sort((a,b) => a.id - b.id)

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    const listItem = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
                                                            {lowCalFruits.name}: &nbsp;
                                                            <b>{lowCalFruits.calories}</b></li>);

    return(<ol>{listItem}</ol>);
}

export default List