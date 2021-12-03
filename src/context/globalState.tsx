import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react"

import { lightTheme, darkTheme, Theme } from "../theme/themeVariables"

export type ThemeName = "light" | "dark" | undefined

interface State {
  theme: ThemeName
}

interface ReducerAction {
  type: string
  payload?: ThemeName
}

interface GlobalContext {
  state: State
  dispatch: Dispatch<ReducerAction>
}

const GlobalState = createContext({} as GlobalContext)

export const GlobalProvider = ({ children }: { children: any }) => {
  const initialState: State = {
    theme: undefined,
  }

  const reducer = (state: State, action: ReducerAction) => {
    switch (action.type) {
      case "setInitialTheme": {
        return {
          ...state,
          theme: action.payload,
        }
      }

      case "setTheme": {
        const setCSSVariables = (theme: Theme) => {
          Object.entries(theme).forEach(([name, value]) =>
            document.documentElement.style.setProperty(`--${name}`, value)
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

        if (action.payload) localStorage.setItem("theme", action.payload)

        return { ...state, theme: action.payload }
      }

      // case "example": {
      //   return {
      //     ...state,
      //     example: action.payload,
      //   }
      // }

      default:
        return state
    }
  }

  const [state, dispatch]: [
    state: State,
    dispatch: ({ type, payload }: ReducerAction) => void
  ] = useReducer(reducer, initialState)

  useEffect(() => {
    const theme: ThemeName = document.documentElement.attributes.theme?.value
    dispatch({ type: "setInitialTheme", payload: theme })
  }, [])

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <GlobalState.Provider value={contextValue}>{children}</GlobalState.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalState)
