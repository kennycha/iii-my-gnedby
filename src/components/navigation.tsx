import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <div>
      <div className="flex gap-2 border-t border-[#264532] bg-[#1b3124] px-4 pb-3 pt-2">
        <Link
          to="/"
          className={`just flex flex-1 flex-col items-center justify-end gap-1 rounded-full ${
            location?.pathname === "/" ? "text-white" : "text-[#96c5a9]"
          }`}
        >
          <div
            className="text-white flex h-8 items-center justify-center"
            data-icon="House"
            data-size="24px"
            data-weight="fill"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill={location?.pathname === "/" ? "white" : "#96c5a9"}
              viewBox="0 0 256 256"
            >
              <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
            </svg>
          </div>
        </Link>
        <Link
          to="/search"
          className={`just flex flex-1 flex-col items-center justify-end gap-1 ${
            location?.pathname === "/search" ? "text-white" : "text-[#96c5a9]"
          }`}
        >
          <div
            className="flex h-8 items-center justify-center"
            data-icon="MagnifyingGlass"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
        </Link>
        <Link
          to="/auth"
          className={`just flex flex-1 flex-col items-center justify-end gap-1 ${
            location?.pathname === "/auth" ? "text-white" : "text-[#96c5a9]"
          }`}
        >
          <div
            className="flex h-8 items-center justify-center"
            data-icon="User"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
            </svg>
          </div>
        </Link>
      </div>
      <div className="h-5 bg-[#1b3124]"></div>
    </div>
  );
}
