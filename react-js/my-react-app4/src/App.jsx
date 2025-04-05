import Student from "./Student.jsx";

function App() {
  return(
    <>
      <Student name="Bob" age={20} isStudent={true}/>
      <Student name="Pop" age={22} isStudent={false}/>
      <Student name="Wong" age={35} isStudent={false}/>
      <Student name="Sandy" age={25} isStudent={true}/>
      <Student name="bob"/>
    </>
  );
}

export default App
