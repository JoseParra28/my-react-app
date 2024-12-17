
function List(){
    const fruits = [{"apple"}, 
                    {"orange"}, 
                    {"coconut"},
                     {"bananas"}, 
                     {"pineapple"};
    const listItem = fruits.map(fruits => <li>Fruit</li>);

    return(<ol>{listItem}</ol>);
}

export default List