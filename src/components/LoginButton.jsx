import './Button.css';
import { useNavigate } from "react-router-dom";

const LoginButton = () => {

  const navigate = useNavigate();
  return (

    <div className="button_box">
      <div className="rotating_border_ring"></div>
      <button className="buttonClass" type="button" onClick={() => navigate("/login")}>Login</button>

    </div>



  );
};

export default LoginButton;
