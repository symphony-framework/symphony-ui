import { Link, useLocation } from "@remix-run/react";

export default function Sidebar() {
  const { pathname } = useLocation();

  const getPath = (pathname: string) => {
    while (pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }

    return pathname.split("/").at(-1);
  };

  const currentPath = getPath(pathname);
  const linkClass =
    "flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700";
  const selectedLinkClass = `${linkClass}  bg-gray-100 text-gray-700`;
  
  return (
    <div className="flex h-screen flex-col justify-between border-r bg-white max-w-xs">
      <div className="px-4 py-6">
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <Link
            to="/dashboard"
            className={
              currentPath === "dashboard" ? selectedLinkClass : linkClass
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>

            <span className="text-sm font-medium">Overview</span>
          </Link>

          <Link
            to="/dashboard/LiveRooms"
            className={currentPath === "LiveRooms" ? selectedLinkClass : linkClass}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <span className="text-sm font-medium">Live Rooms</span>
            {
            currentPath === "LiveRooms" 
            ? null
            :
              (
                <svg height="100" width="100" className="blinking">
                  <circle cx="50" cy="50" r="8" fill="#29ea8a" />
                  Sorry, your browser does not support inline SVG.  
                </svg> 
              )
            }
          </Link>

          <Link
            to="/dashboard/rooms"
            className={currentPath === "rooms" ? selectedLinkClass : linkClass}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>

            <span className="text-sm font-medium">Rooms</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
