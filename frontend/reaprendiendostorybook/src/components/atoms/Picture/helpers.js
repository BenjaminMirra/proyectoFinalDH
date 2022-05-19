import logo from '../../utils/images/logo.svg'


const ImagesList={
    'logo':logo,
}
const ImageWidth = {
    xs: "71px",
    // sm: "18px",
    // md: "22px",
    // lg: "25px",
};
const ImageHeight = {
    xs: "52px",
//   sm: "18px",
//   md: "22px",
//   lg: "25px",
};
                                              'logo'
export const getImage = (image) => ImagesList[image];
export const getWidth=(width)=>ImageWidth[width];
export const getHeight = (heigth) => ImageHeight[heigth];

