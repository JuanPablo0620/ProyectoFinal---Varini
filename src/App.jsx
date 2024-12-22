import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './componentes/NavBar/NavBar.jsx'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer nota = "Esta es una tienda virtual de remeras de futbol importadas :)"/>
    </>
    )
}

export default App