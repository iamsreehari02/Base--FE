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
    label: "sign in with google",
    icon: GoogleIcon,
    bgColor: "white",
    fontColor: "black",
  },
  {
    id: 2,
    label: "sign in with facebook",
    icon: FacebookIcon,
    bgColor: "white",
    fontColor: "black",
  },
];
