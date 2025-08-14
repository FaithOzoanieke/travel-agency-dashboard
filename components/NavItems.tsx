import React from "react";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const NavItems = () => {
  return (
    <section className="nav-items">
      <Link to="/" className="">
        <img src="/assets/icons/logo.svg" alt="Logo" className="size-[80px]" />
        {/* <h1>Tour with Uju</h1>  */}
        <div className="container">
          <nav>
            {sidebarItems.map(({ id, href, icon, label }) => (
              <NavLink key={id} to={href}>
                {({ isActive }: { isActive: boolean }) => (
                  <div className={isActive ? "active" : ""}>
                    <img src={`/assets/icons/${icon}.svg`} alt={label} />
                    <span>{label}</span>
                  </div>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </Link>
    </section>
  );
};

export default NavItems;
