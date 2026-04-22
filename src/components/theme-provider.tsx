"use client";

import * as React from "react";

export type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: Theme;
  storageKey?: string;
  disableTransitionOnChange?: boolean;
};

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

const THEME_TRANSITION_STYLE_ID = "theme-transition-disabler";

const disableTransitions = () => {
  const style = document.createElement("style");
  style.id = THEME_TRANSITION_STYLE_ID;
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{-webkit-transition:none!important;transition:none!important}"
    )
  );
  document.head.appendChild(style);

  return () => {
    window.getComputedStyle(document.body);
    style.remove();
  };
};

const applyTheme = (
  theme: Theme,
  attribute: ThemeProviderProps["attribute"] = "class",
  shouldDisableTransitions = false
) => {
  const cleanupTransitions =
    shouldDisableTransitions && typeof window !== "undefined"
      ? disableTransitions()
      : null;

  const root = document.documentElement;

  if (attribute === "class") {
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  } else {
    root.setAttribute(attribute, theme);
  }

  cleanupTransitions?.();
};

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  storageKey = "portfolio-theme",
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const nextTheme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : defaultTheme;

    setThemeState(nextTheme);
    applyTheme(nextTheme, attribute, disableTransitionOnChange);
  }, [attribute, defaultTheme, disableTransitionOnChange, storageKey]);

  const setTheme = React.useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      window.localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme, attribute, disableTransitionOnChange);
    },
    [attribute, disableTransitionOnChange, storageKey]
  );

  const value = React.useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}