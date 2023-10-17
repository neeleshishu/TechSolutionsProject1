import { animateScroll as scroll } from "react-scroll";

export const scrollTo = (element) => {
  scroll.scrollTo(element, {
    duration: 800, // You can adjust the scroll duration
    delay: 0,
    smooth: "easeInOutQuint", // You can adjust the easing function
  });
};