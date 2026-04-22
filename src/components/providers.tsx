import SocketContextProvider from "@/contexts/socketio";
import { ThemeProvider } from "@/components/theme-provider";
import Preloader from "./preloader";
import { Toaster } from "./ui/toaster";

import { TooltipProvider } from "./ui/tooltip";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    disableTransitionOnChange
  >
    <Preloader>
      <SocketContextProvider>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Toaster />
      </SocketContextProvider>
    </Preloader>
  </ThemeProvider>;
};
