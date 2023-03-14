import React , {useState} from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../../cars/carsSlice';
import { useSelector } from 'react-redux'
const Header = () => {

  const [open,setOpen]  = useState(false)
  const listItems = ['Existing Inventory',
  'Used Inventory','Trade-In','CyberTruck','Roadster',
    'Solar Roof', 'Solar Panels', 'Powerwall', 'Demo Drive',
    'Insurance', 'Commercial Energy', 'Utilities', 'Charging', 'Find Us',
    'Investor Relations', 'Shop', 'Account',
]

  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <div className='header-container'>
        <a>
          <img src='/logo.svg' alt=""/>
        </a>
        <menu className='midMenu'>

          {cars && cars.map((car,index)=>{
            return <p key={index}><a href="#">{car}</a></p>;
          })}
         <p><a href="#">Model X</a></p>
         <p><a href="#">Model Y</a></p>
         <p><a href="#">Model 3</a></p>
        </menu>
        <menu className='rightMenu'>
          <a href="#">Shop</a>
          <a href="#">Tesla  Account</a>
          <menu className='ham'>
            <MenuIcon onClick={()=>{setOpen(true)}} />
          </menu>
        </menu>
        {/* hamNav */}
        <nav className={open == false ? 'hamNav hide' : 'hamNav'}>
          <div className='closeWrapper' >
          <CloseIcon className='close' onClick={()=>{
            setOpen(false)
          }}/>
          </div>
          {listItems.map((e,i)=>{
            return <li key={i}><a href="#">{e}</a></li>
          })}
        </nav>
    </div>
  )
}

export default Header