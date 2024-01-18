import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro142 from "./pages/MacBookPro142";
import MacBookPro147 from "./pages/MacBookPro147";
import MacBookPro146 from "./pages/MacBookPro146";
import MacBookPro143 from "./pages/MacBookPro143";
import MacBookPro144 from "./pages/MacBookPro144";
import MacBookPro145 from "./pages/MacBookPro145";
import MacBookPro141 from "./pages/MacBookPro141";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-14-7":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-14-6":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-14-3":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-14-4":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-14-5":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-14-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookPro142 />} />
      <Route path="/macbook-pro-14-7" element={<MacBookPro147 />} />
      <Route path="/macbook-pro-14-6" element={<MacBookPro146 />} />
      <Route path="/macbook-pro-14-3" element={<MacBookPro143 />} />
      <Route path="/macbook-pro-14-4" element={<MacBookPro144 />} />
      <Route path="/macbook-pro-14-5" element={<MacBookPro145 />} />
      <Route path="/macbook-pro-14-1" element={<MacBookPro141 />} />
    </Routes>
  );
}
export default App;
