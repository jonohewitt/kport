import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react"

import { lightTheme, darkTheme, Theme } from "../theme/themeVariables"

interface State {
  theme: string
}

interface ReducerAction {
  type: string
  payload?: any
}

const GlobalState = createContext<{
  state: State
  dispatch: Dispatch<ReducerAction>
}>(undefined)

export const useGlobalState = () => useContext(GlobalState)

export const GlobalProvider = ({ children }) => {
  const initialState: State = {
    theme: undefined,
  }

  useEffect(() => {
    const theme = document.documentElement.attributes["theme"].value
    dispatch({ type: "setInitialTheme", payload: theme })
  }, [])

  const reducer = (state: State, action: ReducerAction) => {
    switch (action.type) {
      case "setInitialTheme": {
        return {
          ...state,
          theme: action.payload,
        }
      }

      case "setTheme": {
        const root = document.documentElement

        const setCSSVariables = (theme: Theme) => {
          Object.entries(theme).forEach(([name, value]) =>
            root.style.setProperty(`--${name}`, value)
          )
        }

        switch (action.payload) {
          case "dark":
            setCSSVariables(darkTheme)
            break
          case "light":
            setCSSVariables(lightTheme)
            break
        }

        localStorage.setItem("theme", action.payload)
        root.setAttribute("theme", action.payload)

        return { ...state, theme: action.payload }
      }

      // case "example": {
      //   return {
      //     ...state,
      //     example: action.payload,
      //   }
      // }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <GlobalState.Provider value={contextValue}>{children}</GlobalState.Provider>
  )
}
