import user from '../../utils/icons/user.svg'
import calendar from "../../utils/icons/calendar.svg";
import search from "../../utils/icons/search.svg";
import location from "../../utils/icons/location.svg";
import disabled from "../../utils/icons/disabled.svg";
import wifi from "../../utils/icons/wifi.svg";
import swim from "../../utils/icons/swim.svg";
import star from "../../utils/icons/star.svg";
import menu from "../../utils/icons/menu.svg";
import close from "../../utils/icons/close.svg";
import facebook from "../../utils/icons/facebook.svg";
import instagram from "../../utils/icons/instagram.svg";
import twitter from "../../utils/icons/twitter.svg";
import linkedin from "../../utils/icons/linkedin.svg";
import favorite from "../../utils/icons/favorite.svg";
import closeBlack from "../../utils/icons/closeBlack.svg";
import visibility from '../../utils/icons/visibility.svg'
import wfacebook from "../../utils/icons/wfacebook.svg";
import winstagram from "../../utils/icons/winstagram.svg";
import wtwitter from "../../utils/icons/wtwitter.svg";
import wlinkedin from "../../utils/icons/wlinkedin.svg";
import locationEmpty from "../../utils/icons/locationEmpty.svg";
import back from "../../utils/icons/back.svg";
import emptyStar from "../../utils/icons/emptyStar.svg";
import emptyHeart from "../../utils/icons/emptyHeart.svg";
import share from "../../utils/icons/share.svg";
import pets from "../../utils/icons/pets.svg";
import parking from "../../utils/icons/parking.svg";
import television from "../../utils/icons/television.svg";
import kitchen from "../../utils/icons/kitchen.svg";
import clock from "../../utils/icons/clock.svg";
import card from "../../utils/icons/card.svg";
import airConditioner from "../../utils/icons/airConditioner.svg";
import noSmoking from "../../utils/icons/noSmoking.svg";
import noParty from "../../utils/icons/noParty.svg";
import smoke from "../../utils/icons/smoke.svg";
import bWifi from "../../utils/icons/bWifi.svg";
import bEmptyHeart from "../../utils/icons/bEmptyHeart.svg";
import bShare from "../../utils/icons/bShare.svg";
import bFavorite from "../../utils/icons/bFavorite.png";

const IconsList = {
  user: user,
  calendar: calendar,
  search: search,
  location: location,
  disabled: disabled,
  wifi: wifi,
  swim: swim,
  star: star,
  menu: menu,
  close: close,
  twitter: twitter,
  linkedin: linkedin,
  favorite: favorite,
  facebook: facebook,
  instagram: instagram,
  closeBlack: closeBlack,
  visibility: visibility,
  wfacebook: wfacebook,
  winstagram: winstagram,
  wtwitter: wtwitter,
  wlinkedin: wlinkedin,
  locationEmpty: locationEmpty,
  back: back,
  emptyStar: emptyStar,
  emptyHeart: emptyHeart,
  share: share,
  pets: pets,
  parking: parking,
  kitchen: kitchen,
  clock: clock,
  smoke: smoke,
  card: card,
  airConditioner: airConditioner,
  noSmoking: noSmoking,
  noParty: noParty,
  television: television,
  bWifi: bWifi,
  bEmptyHeart: bEmptyHeart,
  bShare: bShare,
  bFavorite:bFavorite,
}; ;
export const KeysIconsList=Object.keys(IconsList)
const IconWidth={
    xs:'14px',
    sm:'18px',
    md:'22px',
    lg:'25px'
}
export const getIcon = (icon) => IconsList[icon];
export const getWidth = (size) => IconWidth[size];