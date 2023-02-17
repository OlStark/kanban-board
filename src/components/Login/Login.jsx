import style from'./Login.module.css'
import UserAvatar from '../../images/user-menu.png'
import { useState, useEffect } from 'react';

function useDelayUnmount(isMounted) {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    let timeOutId;
    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeOutId = setTimeout(() => { setShowDiv(false)})
    }
  return () => clearTimeout(timeOutId)
  },
    [isMounted, showDiv]);

  return showDiv;
}

function Login() {
  const [isMounted, setIsMounted] = useState(false);
  const showDiv = useDelayUnmount(isMounted, 250)

  const mountedStyle = { animation: "inAnimation 250ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"

  };
  return ( 
    <div className={style.login_wrapper} onClick={()=>setIsMounted(!isMounted)}>
      <img src={UserAvatar} alt="user-avatar" className={style.user_avatar}/>
      <div className={isMounted ? style.icon + ' ' + style.isopen : style.icon}/>
      {showDiv &&
        <div
          className={style.login_dropdown}
          style={isMounted ? mountedStyle : unmountedStyle}
        >
          <button className={style.login_dropdown_button}>Login</button>
          <button className={style.login_dropdown_button}>Profile</button>
        </div>
      }
    </div>
   );
}

export default Login;