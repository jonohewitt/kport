export type Theme = typeof lightTheme

const sharedValues = {
  scrollbar: "calc(100vw - 100%)",
  fullWidth: "calc(100vw - var(--scrollbar))",
}

export const lightTheme = {
  ...sharedValues,
  text: "#262626",
  lightText: "#373737",
  lowContrast: "#aaa",
  nav: "#fff",
  background: "#fff",
  transparentBG: "#fff0",
  feature: "#ececec",
  partners: "#f5f5f5",
  footer: "#25282f",
  footerText: "#ececec",
  highlight: "#dcbcc7",
  theme: "light",
}

export const darkTheme: Theme = {
  ...sharedValues,
  text: "#eee",
  lightText: "#ddd",
  lowContrast: "#757575",
  nav: "#1B1C22",
  background: "#1B1C22",
  transparentBG: "#1B1C2200",
  feature: "#121317",
  partners: "#272830",
  footer: "#0A0A0C",
  footerText: "#ececec",
  highlight: "#bd6b88",
  theme: "dark",
}
