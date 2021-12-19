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
  feature: "#f0f0f0",
  partners: "#f5f5f5",
  footer: "#16191e",
  footerText: "#ececec",
  highlight: "#dcbcc7",
  theme: "light",
  colourHighlight: "rgb(28, 130, 140)",
  linkUnderline: "rgba(28, 130, 140, .22)",
  linkHover: "rgba(28, 130, 140, 0.3)",
  linkActive: "rgba(28, 130, 140, .5)",
  gallery: "#ddd",
  media: "#fff",
  mediaOutline: "#fff",
}

export const darkTheme: Theme = {
  ...sharedValues,
  text: "#fff",
  lightText: "#eee",
  lowContrast: "#757575",
  nav: "#1c2026",
  background: "#1c2026",
  transparentBG: "#1B1C2200",
  feature: "#13161a",
  partners: "#181b20",
  footer: "#0A0A0C",
  footerText: "#ececec",
  highlight: "#bd6b88",
  theme: "dark",
  colourHighlight: "rgb(119, 215, 174)",
  linkUnderline: "rgba(168, 249, 214, 0.35)",
  linkHover: "rgba(168, 249, 214, 0.45)",
  linkActive: "rgba(168, 249, 214, 0.6)",
  gallery: "#060606",
  media: "#060606",
  mediaOutline: "#333",
}
