// Static datas

// Onboarding screen data
import OnboardingIMG1 from "../assets/images/onboardingIMG/onBoarding3.jpg";
import OnboardingIMG2 from "../assets/images/onboardingIMG/onBoarding2.jpg";
import OnboardingIMG3 from "../assets/images/onboardingIMG/onBoarding1.jpg";

export const onBoardingData = [
  { id: 1, text: "Classy from head to toe", image: OnboardingIMG1 },
  { id: 2, text: "Classy from ", image: OnboardingIMG2 },
  { id: 3, text: "Classy from head to toe", image: OnboardingIMG3 },
];

// ---------------------------------------------------------------------------------- //

//Login screen data
export const loginInputData = [
  { id: 1, placeholder: "Email" },
  { id: 2, placeholder: "Password" },
];

import GoogleIcon from "../assets/svg/google.svg";
import FacebookIcon from "../assets/svg/facebook.svg";

export const socialLoginButtons = [
  {
    id: 1,
    label: "Sign in with google",
    icon: GoogleIcon,
    bgColor: "white",
    fontColor: "black",
  },
  {
    id: 2,
    label: "Sign in with facebook",
    icon: FacebookIcon,
    bgColor: "white",
    fontColor: "black",
  },
];

//Sign up screen input data
export const singupInputData = [
  { id: 1, placeholder: "First Name" },
  { id: 2, placeholder: "Last Name" },
  { id: 3, placeholder: "Phone Number", inputType: "numeric" },
  {
    id: 4,
    placeholder: "Password",
    secureTextEntry: true,
  },
  {
    id: 5,
    placeholder: "Confirm Password",
    secureTextEntry: true,
  },
];

// ------------------------------------------------------ //

//Home tabs
import HomeTabIcon from "../assets/svg/homeTabIcon.svg";
import WishlistTabIcon from "../assets/svg/wishlistTabIcon.svg";
import CartTabIcon from "../assets/svg/cartTabIcon.svg";
import SearchTabIcon from "../assets/svg/searchTabIcon.svg";
import AccountTabIcon from "../assets/svg/profileTabIcon.svg";

export const homeTabData = [
  { id: 1, label: "Home", icon: HomeTabIcon },
  { id: 2, label: "Wishlist", icon: WishlistTabIcon },
  { id: 3, label: "Cart", icon: CartTabIcon },
  { id: 4, label: "Search", icon: SearchTabIcon },
  { id: 5, label: "Account", icon: AccountTabIcon },
];
