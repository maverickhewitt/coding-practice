import profilePic from "./assets/captainaiheroPP.png"

function Card(){
  return(
    <div className="card">
      <img className="card-image" src={profilePic} alt="my image" />
      <h2 className="card-title">Minkaco</h2>
      <p className="card-text">I am gonna be a future founder or a company boss</p>
    </div>
  );
}

export default Card