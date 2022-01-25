import Bar from '../components/SideBar'
import Navabr from '../components/Navabr'
import '../styles/globals.css'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
   return   (
      <div className= 'grid grid-cols-12 gap-6 px-5 lg:x-48 my-14 sm:px-20 md:px-32' >

    <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl'>
       <Bar/>
    </div>
    <div className='flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl'>
      <Navabr />
    <Component {...pageProps} />
    </div>

  </div>
  
 )
}


export default MyApp
