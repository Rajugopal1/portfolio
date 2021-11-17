import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
import {GoLocation } from 'react-icons/go'
import { GiTie} from 'react-icons/gi'

const Bar = () => {
    return (
        <div>
            <img src='https://sumitdey.netlify.app/static/media/max.9d3a6d3e.jpg'
             alt="use avatar"
             className='w-32 h-32 mx-auto rounded-full ' />
            <h3 className = 'my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-blue-400'>Raju  </span>
                gopal
            </h3>
              <p  className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
              <a href=""  className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' download='name'> 
              <GiTie className='w-6 h-6'/>Download Resume</a>
              
              {/* {social icons} */}
              <div className='flex justify-around my-5 text-blue-500'>
                  <a href="">
                      <AiFillGithub className= 'w-6 h-8 cursor-pointer'/>
                  </a>
                  <a href="">
                      <AiFillLinkedin className= 'w-6 h-8 cursor-pointer'/>
                  </a>
                   <a href="">
                      <AiFillInstagram className= 'w-6 h-8 cursor-pointer'/>
                  </a>
              </div>

              {/* {address} */}
              <div className='py-4 my-5 bg-gray-200' 
              style = {{marginLeft:'-1rem',marginRight:'-1rem' }}>
                  <div className= 'flex items-center justify-center space-x-2'> 
                  <GoLocation/>
                      <span> hybd,India</span>
                  </div>
                  <p className='my-2'>raju@gmail.com</p>
                  <p className='my-2'>7093134158</p>
              </div>
              <button className = 'w-8/12 px-2 py-2 my-2 rounded-full bg-gradient-to-r from-blue-400 to-white '>Emsil me</button>
              <button className = 'w-8/12 px-2 py-2 my-2 rounded-full bg-gradient-to-r from-blue-400 to-white '>Toggle</button>
        </div>
    )
}

export default Bar
