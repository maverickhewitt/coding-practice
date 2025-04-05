//Chap 5 CONDITIONAL RENDERING
import UserGreeting from "./UserGreeting.jsx"

function App() {
  return (
    <>
     <UserGreeting isLoggedIn={true} username="Minkaco"></UserGreeting>
    </>
  )
}

export default App
