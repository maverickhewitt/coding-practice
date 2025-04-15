

function Button(){

  const handleClick = (e) => e.target.textContent = "OUCH 😳";
  // const handleClick = (e) => console.log(e);

  // let count = 0;
  // const handleClick = () => {
  //   if(count < 3 ){
  //     count++;
  //     console.log(`${name} yout click me ${count} times`);
  //   }
  //   else{
  //     console.log(`${name} stop clicking me`);
  //   }
  // };
  // const handleClick = () => console.log("OUCH");
  // const handleClick2 = (name) => console.log(`${name} Stop CLicking me`);
  return(
    <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
    // <button onClick={(e) => handleClick(e)}>Click Me</button>
  );
}

export default Button