import React, { useEffect,useRef, useState } from 'react';
import styles from './dropdownStyles.module.css';

function Dropdown() {

  const [isActive,setIsActive] = useState(false);
  const ref = useRef()
  
  const [items,setItem] = useState(['a','b','c','d'])
 
  const toggleDropdown = () => {
     setIsActive(!isActive)
  }

  useEffect(()=>{
        const onBodyClick = (e) =>{
            if(ref && ref.current?.contains(e.target)) return;
            setIsActive(false);
        };

        document.body.addEventListener("mousedown",onBodyClick);

        return () => {
            document.body.removeEventListener("mousedown",onBodyClick);
        }
  },[ref])

  return (
        <span ref={ref} className="dropdown">
          <button className={`${styles.dropbtn}`} onClick={toggleDropdown}>Dropdown</button>
          { isActive && 
             <div className={`${styles.dropdown_content}`}>
              {items.map((item) => {
                return <>
                   <p className="text-center" key={item}>Item</p>
                </>
              })
              }
            </div>
          }
        </span>
  );
}

export default Dropdown;