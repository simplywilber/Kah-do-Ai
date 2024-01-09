import { Link } from "react-router-dom";

export default function Logo() {
  return (
    //This is used in the welcome screen
    <div className="fadeIn flex justify-center h-screen w-screen items-center dark:bg-zinc-800 dark:text-zinc-50">
      <Link
        to={"/home"}
        className="floatingTitle w-fit hover:scale-120 cursor-pointer w-80 h-auto flex flex-col gap-4 text-center"
      >
        <h1 className="text-8xl">カード </h1>
        <h2>
          <p
            style={{ fontFamily: `'Noto Sans KR', sans-serif` }}
            className="text-lg"
          >
            &quot;Kah-do&quot;
          </p>
        </h2>
      </Link>
    </div>
  );
}
