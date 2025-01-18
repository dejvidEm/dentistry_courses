import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  // Rozdelenie URL cesty na časti
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-600" aria-label="Breadcrumbs">
      <ol className="flex items-center space-x-2">
        {/* Hlavná stránka */}
        <li>
          <Link
            to="/"
            className="hover:underline transition"
          >
            Homepage
          </Link>
        </li>

        {/* Šípka medzi úrovňami */}
        {pathnames.map((value, index) => {
            
          // Vytvorenie cesty pre jednotlivé úrovne
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={index}>
              <span className="mx-2 text-gray-400">›</span>
              <li>
                {isLast ? (
                  <span className="text-gray-500">{decodeURIComponent(value)}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-blue-500 hover:underline transition"
                  >
                    {decodeURIComponent(value)}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;