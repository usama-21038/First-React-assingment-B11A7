
import './App.css'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Action from './Action/Action'
import Footer from './Navbar/Footer/Footer'
import { ToastContainer } from 'react-toastify';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      <Navbar></Navbar>
      <Banner></Banner>
      <Action></Action>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
