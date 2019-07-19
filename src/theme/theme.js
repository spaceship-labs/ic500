const Colors = {
  Yellow: "#e3ad55",
  Gray: "#adb2ba",
  LGray: "#e5e5e5",
  White: "#ffffff",
  Black: "#1f191a",
  DYellow: "#d58e1b",
  DGray: "#7f8082",
}
const ButtonsColors = {
  Yellow: {
    text: Colors.White,
    bg: Colors.Yellow,
  },
  Gray: {
    text: Colors.Black,
    bg: Colors.Gray,
  },
  Black: {
    text: Colors.White,
    bg: Colors.Black,
  },
  DYellow: {
    text: Colors.White,
    bg: Colors.DYellow,
  },
  DGray: {
    text: Colors.Black,
    bg: Colors.DGray,
  },
  DBlack: {
    text: Colors.White,
    bg: Colors.DGray,
  },
}
export const Theme = {
  Yellow: Colors.Yellow,
  Gray: Colors.Gray,
  LGray: Colors.LGray,
  White: Colors.White,
  Black: Colors.Black,
  Green: "#05860545",
  Font: "'Montserrat', sans-serif",
  ContainerSmall: 580,
  ContainerMedium: 730,
  ContainerCommon: 840,
  ContainerLarge: 1100,
  //media query
  largeBreakPoint:
    "@media only screen and (min-width: 1400px), only screen and (min-width: 500px) and (min-resolution: 2dppx)",
  averageBreakPoint: "@media only screen and (max-width: 1250px)",
  mediumBreakPoint: "@media only screen and (max-width: 1000px)",
  smallBreakPoint: "@media only screen and (max-width: 750px)",
  extraSmallBreakPoint: "@media only screen and (max-width: 450px)",

  //Buttons
  GetButtonTextColor: color =>
    ButtonsColors[color]
      ? ButtonsColors[color].text
      : ButtonsColors.Yellow.text,
  GetButtonBgColor: color =>
    ButtonsColors[color] ? ButtonsColors[color].bg : ButtonsColors.Yellow.bg,
}
