import React from 'react'
import './Navbar.css'
import {BsFillClockFill} from 'react-icons/bs'
import {BsWatch} from 'react-icons/bs'
import {RiFocusLine, RiReactjsFill} from 'react-icons/ri'
import {RiTimerLine}from 'react-icons/ri'
import {IoIosAlarm}from 'react-icons/io'
import {ImStopwatch}from 'react-icons/im'
import {GiWorld} from 'react-icons/gi'
import {GoSignIn}from 'react-icons/go'
import {AiFillSetting}from 'react-icons/ai'
import {MdDarkMode}from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
const Navbar = (props) => {
    return (
        <div>

            <div className="nav_container ">
               <div className="nav_title">
                <div className="title_img"> <BsFillClockFill/><b className='px-1'>Clock</b></div>
          
           
           <MdDarkMode  className="Mode" onClick={props.toggle}/>
           <a href=""><CgProfile/></a>
           </div>
            <div className="nav_items py-3">
            
                <ul className='items1'>
                    <li><BsWatch/><a href="" className='px-1'>Watch-Time </a></li>
                    <li><RiFocusLine/><a href="" className='px-1'>Focus session </a></li>
                    <li><RiTimerLine/><a href=""className='px-1'>Timer </a></li>
                    <li><IoIosAlarm/><a href=""className='px-1'>Alarm </a></li>
                    <li><ImStopwatch/><a href=""className='px-1'>Stopwatch </a></li>
                    <li><GiWorld/><a href=""className='px-1'>World clock </a></li>
                   
                </ul>

                <ul className='items2'>
                    <li><GoSignIn/><a href=""className='px-1'>Sign in</a></li>
                    <li><AiFillSetting/><a href=""className='px-1'>Setting</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
