

function Button (){

    
    const handleClick = () => console.log("You have clicked me ")

    const handleClickTwo = (name) => console.log(`${name} Stop clicking me`)

    const styles = {
            backgroundColor: "hsl(200,100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",   
    }

    return (
        <button onClick={() => handleClickTwo('Bro')} style={styles}>Click me</button>
    )
}

export default Button