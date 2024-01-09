import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <nav className="flex justify-between items-center w-screen h-20 bg-white transition dark:bg-zinc-800 dark:text-zinc-50">
      <div className="flex ml-2">
        <Link to={"/"}>
          <h1 className="text-7xl sm:text-5xl cursor-pointer transition hover:scale-110">
            カード{" "}
          </h1>
        </Link>
      </div>
      <ThemeButton />
    </nav>
  );
}
