import { useEffect, useState } from "react";
import DarkMode from "../../assets/website/dark-mode-button.png";
import LightMode from "../../assets/website/light-mode-button.png";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  console.log(theme);
  useEffect(() => {
    theme === "dark"
      ? (element.classList.add("dark"), localStorage.setItem("theme", "dark"))
      : (element.classList.remove("dark"),
        localStorage.setItem("theme", "light"));
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={LightMode}
        alt=""
        className={`w-12 cursor-pointer drop-shadow-sm transition-all duration-300 absolute z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />

      <img
        src={DarkMode}
        alt=""
        className="w-12 cursor-pointer drop-shadow-sm transition-all duration-300"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default Darkmode;
