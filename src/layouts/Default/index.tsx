import { useTheme } from "app/state/application/hooks";
import { FC, useEffect } from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: FC<Props> = ({ children }) : JSX.Element => {
  const theme = useTheme();
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="z-0 flex flex-col items-center w-full bg-neutral">
      {children}
    </div>
  );
};

export default Layout;
