import { useTheme } from "app/state/application/hooks";
import { useEffect } from "react";

// @ts-ignore TYPE NEEDS FIXING
const Layout = ({ children }) => {
  const theme = useTheme();
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="z-0 flex flex-col items-center w-full h-screen bg-[#F5F5F5]">
      {children}
    </div>
  );
};

export default Layout;
