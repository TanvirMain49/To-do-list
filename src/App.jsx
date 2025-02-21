import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function App() {


  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Outlet/>
    </div>
    <Footer />
    </>
  )
}

export default App
