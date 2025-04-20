import { ButtonConteiner } from "./styles";

const Button = ({label,onClick}) => {

    console.log(onClick);

    return (
      <ButtonConteiner onClick={onClick}>
        {label}
      </ButtonConteiner>
    );
  }
  
  export default Button;