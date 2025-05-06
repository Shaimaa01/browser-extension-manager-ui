
import LightLogo from "/assets/images/Lightlogo.svg";
import DarkLogo from "/assets/images/DarkLogo.svg";

export function Logo() {
   

  return (
    <div>
        <img src={LightLogo} alt="logo" className="dark:hidden"/>
        <img src={DarkLogo} alt="logo" className="hidden dark:block"/>
    </div>
  )
}

