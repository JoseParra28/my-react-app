import profilePic from './assets/pexels-samad-ismayilov-231721-757307.jpg'

function Card (){
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile Picture" />
            <h2 className='card-tittle'>JoseDev</h2>
            <p className='card-p'>React practice</p>
        </div>
    );

}

export default Card