//importar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './mystyle.css'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
    

  )
}

export default App
