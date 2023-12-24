import { createSlice } from "@reduxjs/toolkit";
import time from "../assets/images/timer.png";
import avesha from "../assets/images/avesha.png";
import Solitaire from "../assets/images/Solitaire.png";
import home from "../assets/images/home.png";
import about from "../assets/images/user.png";
import portfolio from "../assets/images/suitcase.png";
import education from "../assets/images/skills.png";
import mortarboard from "../assets/images/mortarboard.png";
const initialState = {
  theme: "white",
  toggleBar: false,
  currentPage: "Home",
  menuList: [
    { icon: home, title: "Home" },
    { icon: about, title: "About" },
    { icon: portfolio, title: "Projects" },
    { icon: education, title: "Skills" },
    { icon: mortarboard, title: "Education" },
  ],
  position: ["Frontend Developer", "JavaScript Developer", "React Developer"],
  objective: `Dedicated Front End Developer with expertise in React, JavaScript, HTML, and CSS, 
  seeking opportunities to contribute creative solutions 
  in a dynamic development environment.`,

  portfolio: [
    {
      image: time,
      link: "https://aman241192.github.io/Timer/",
      title: "Timer",
      type: "Javascript",
    },
    {
      image: avesha,
      link: "https://aman241192.github.io/Avesha/",
      title: "Avesha",
      type: "Css",
    },
    {
      image: Solitaire,
      link: "https://aman241192.github.io/Solitaire_CSS/",
      title: "Solitaire",
      type: "Css",
    },
  ],

  personalInfo: [
    {
      name: "Aman Khare",
      position: "JavaScript Developer",
      aboutDescription: `
    Hi, my name is Adriano Smith and I began using WordPress 
    when it first began. I’ve spent most of my waking hours for 
    the last ten years designing, programming and operating WordPress sites.
    One of my specialties is taking an idea from scratch and creating a 
    full-fledged platform. I go beyond to produce sites with a unique, outstanding, 
    contemporary look-and-feel. With extensive knowledge of web mechanics, 
    I’m able to optimize complex integrations to require little-to-no maintenance 
    while running on their own for years.
    `,
      email: "aman.khare2411@gmail.com",
      phone: "9807441776",
      git: "https://github.com/aman241192",
    },
  ],

  skills: [
    { title: "Html", value: 90 },
    { title: "Css", value: 90 },
    { title: "Scss", value: 90 },
    { title: "Javascript", value: 85 },
    { title: "Jquery", value: 85 },
    { title: "React", value: 85 },
    { title: "Node", value: 70 },
    { title: "Express", value: 70 },
    { title: "MongoDb", value: 70 },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    themeAction: (state, action) => {
      state.theme = action.payload;
    },

    currentPageAction: (state, action) => {
      state.currentPage = action.payload;
    },

    toggleAction: (state, action) => {
      state.toggleBar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { themeAction, currentPageAction, toggleAction } =
  counterSlice.actions;

export default counterSlice.reducer;
