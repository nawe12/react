import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  const iconStyles = {
    fontSize: "1.3rem",
    padding: "0px 10px 0px 25px",
  };
  return (
    <div>
      <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
      <span style={{ fontSize: "1.3rem" }}>0</span>
    </div>
  );
};

export default CartWidgetComponent;
