import LayoutWrapper from "@/layouts/LayoutWrapper";
import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ideal Bath Solutions",
  description: "Ideal Bath Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className={inter.className}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LayoutWrapper>{children}</LayoutWrapper>
          </ThemeProvider>
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
