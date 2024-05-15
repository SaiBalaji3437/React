import ProfilePic from './assets/Screenshot 2024-05-12 190240.png'
function card()
{
    return(
        <div className="card">
            <img className="card-image"src={ProfilePic} alt="image" />
            <h2 className='card-title'>Balaji</h2>
            <p>i am student pursuing 3rd year in cbit</p>
        </div>

    );
}
export default card