import './App.css'

function App() {
    let x="Kris";
    let array=["user1","user2","user3","user4"]

  return (
    <>
    {x}
    {array.map((user, index) => {return <h2 key={index}>{user}</h2>})}
    </>
  )
}

export default App
