function ProfilePicture(){
  const imageUrl = './src/assets/pp.png';

  const handleClick = () => console.log("OUCH");  

  return(
    <img onClick={handleClick} src={imageUrl}></img>
  );
}

export default ProfilePicture