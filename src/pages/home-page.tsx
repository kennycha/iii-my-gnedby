import { Link } from "react-router-dom";
import { useAuth } from "../store/auth-context";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="flex size-full flex-col justify-between">
      <div>
        <Link target="_blank" to={"https://github.com/kennycha"}>
          <p className="text-gray-500 text-base font-normal leading-normal px-4 py-1 text-center">
            @kennycha
          </p>
        </Link>
        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 py-2 text-center">
          Is it in my GNEDBY?
        </h2>
        <p className="text-white text-base font-normal leading-normal px-4 py-2 text-center">
          No more duplicates
        </p>
      </div>
      <div className="flex px-4 py-3 justify-center mb-10">
        <Link to={user ? "/search" : "/sample-search"}>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#38e07b] text-[#122118] gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">
              {user ? "Start Searching" : "Try Sample Search"}
            </span>
          </button>
        </Link>
      </div>
      <div />
    </div>
  );
}
