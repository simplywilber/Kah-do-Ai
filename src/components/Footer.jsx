import { Link } from "react-router-dom";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <div className="flex bg-zinc-50 mt-10 mb-1 h-20 w-screen justify-between items-center dark:bg-zinc-900 dark:text-zinc-50">
        <div className="flex ml-3">
          <Link to={"/"}>
            <h1 className="text-4xl cursor-pointer transition hover:scale-110">
              カード
            </h1>
          </Link>
        </div>
        <div className="flex text-xl gap-4">
          <Link to={"https://github.com/simplywilber"} target="_blank">
            <i className="duration-200 hover:scale-[1.3] px-1 py-[2px] fa-brands fa-github cursor-pointer"></i>
          </Link>
          <Link to={"https://www.instagram.com/simplywilber/"} target="_blank">
            <i className="duration-200 hover:scale-[1.3] px-1 py-[2px] fa-brands fa-instagram cursor-pointer"></i>
          </Link>
          <Link to={"https://www.tiktok.com/"} target="_blank">
            <i className="duration-200 hover:scale-[1.3] px-1 py-[2px] fa-brands fa-tiktok cursor-pointer"></i>
          </Link>
        </div>
        <div className="flex mr-3">
          <p>© {year} カード</p>
        </div>
      </div>
    </footer>
  );
}
