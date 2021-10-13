export type Theme = typeof lightTheme

const sharedValues = {
  scrollbar: "calc(100vw - 100%)",
  fullWidth: "calc(100vw - var(--scrollbar))",
}

export const lightTheme = {
  ...sharedValues,
  text: "#262626",
  nav: "#fff",
  background: "#fff",
  feature: "#f5f5f5",
  partners: "#f5f5f5",
  footer: "#25282f",
  footerText: "#ececec",
  highlight: "#dcbcc7",
  theme: "light",
}

export const darkTheme: Theme = {
  ...sharedValues,
  text: "#eee",
  nav: "#1B1C22",
  background: "#1B1C22",
  feature: "#1B1C22",
  partners: "#272830",
  footer: "#0A0A0C",
  footerText: "#ececec",
  highlight: "#bd6b88",
  theme: "dark",
}
