import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "./SmoothScroll";

const Layout = ({ children }) => {
  return (
    <SmoothScroll>
      {children} <Analytics />
    </SmoothScroll>
  );
};

export default Layout;
