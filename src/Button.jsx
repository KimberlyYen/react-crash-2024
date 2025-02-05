// import { useState } from "react";
import ProfileLogo from "./ProfileLogo";

const Button = () => {
//   const [showProfileLogo, setShowProfileLogo] = useState(false);

  const handleClick = (e) => {
    // setShowProfileLogo((prev) => !prev);
    e.target.style.display = 'none'
  };

  return (
    <div>
      <button onClick={handleClick}>
        <ProfileLogo />
      </button>
    </div>
  );
};

export default Button;
