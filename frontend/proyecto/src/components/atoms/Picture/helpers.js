import logo from '../../utils/images/logo.svg'
import successbooking from '../../utils/images/successbooking.jpg'
import warning from "../../utils/images/warning.svg";
const ImagesList = {
  logo: logo,
  successbooking: successbooking,
  warning: warning,
};
const ImageWidth = {
    xxs:'30px',
    xs: "71px",
    // sm: "18px",
    // md: "22px",
    // lg: "25px",
};
const ImageHeight = {
    xs: '52px',
//   sm: "18px",
//   md: "22px",
//   lg: "25px",
};
export const getImage = (image) => ImagesList[image];
export const getWidth=(width)=>ImageWidth[width];
export const getHeight = (heigth) => ImageHeight[heigth];

