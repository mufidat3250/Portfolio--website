import { useState } from "react"
import {motion} from 'framer-motion'
const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    let navtab = [
        {
            title:'About',
            link:'about'
        },
        {
            title:'Work',
            link:'work'
        },
        {
            title:'Contact',
            link:'contact'
        },
    ]
  return (
    <nav className='NavbarWrapper'>
        <div className="navTab--container">
        <motion.div initial={{opacity:0, x:-200}} animate={{ opacity:1, x:0}} viewport={{once:true}} transition ={{ease:'linear', delay:1, duration:0.5}}>
            <h1>Wahab</h1>
        </motion.div>
        <div className="info">
          <motion.div className="info-data" initial={{opacity:0, x:200}} animate={{ opacity:1, x:0}} transition ={{ease:'linear', delay:1, duration:0.5}} viewport={{once:true}}> 
          {navtab.map((tab, index)=> 
            <a key={index} href={`#${tab.link}`} >{tab.title}</a>
        )}  
          </motion.div>
            <img src="/menu-line.svg" alt=""  className="img" onClick={()=>setToggle(true)}/>        
        </div>        
        </div>
        <div className={`mobilenav ${toggle && 'open'} `}>
            <span className="cancel" onClick={()=>setToggle(false)}>
                <img src="/close.svg" alt="" />
            </span>
        {navtab.map((tab, index)=> <p key={index}>{tab.title}</p>)}
        </div>        

    </nav>
  )
}

export default NavBar