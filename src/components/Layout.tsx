
import { NavLink, Outlet } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Bot } from "lucide-react";

const NavLinks = () => (
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item">
      <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`} end>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/buttons" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Buttons
      </NavLink>
    </li>
    <li>
      <NavLink to="/modals" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Modals
      </NavLink>
    </li>
    <li>
      <NavLink to="/alerts" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Alerts
      </NavLink>
    </li>
    <li>
      <NavLink to="/cards" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Cards
      </NavLink>
    </li>
    <li>
      <NavLink to="/dropdowns" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Dropdowns
      </NavLink>
    </li>
    <li>
      <NavLink to="/forms" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Forms
      </NavLink>
    </li>
    <li>
      <NavLink to="/jumbotron" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Jumbotron
      </NavLink>
    </li>
    <li>
      <NavLink to="/hero" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Hero
      </NavLink>
    </li>
    <li>
      <NavLink to="/badges" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Badges
      </NavLink>
    </li>
    <li>
      <NavLink to="/breadcrumbs" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Breadcrumbs
      </NavLink>
    </li>
    <li>
      <NavLink to="/sidebar" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Sidebar
      </NavLink>
    </li>
    <li>
      <NavLink to="/list-groups" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        List Groups
      </NavLink>
    </li>
    <li>
      <NavLink to="/features" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Features
      </NavLink>
    </li>
    <li>
      <NavLink to="/headers" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Headers
      </NavLink>
    </li>
    <li>
      <NavLink to="/footers" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Footers
      </NavLink>
    </li>
    <li>
      <NavLink to="/carousel" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Carousel
      </NavLink>
    </li>
    <li>
      <NavLink to="/playground" className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-body'}`}>
        Playground
      </NavLink>
    </li>
  </ul>
);


const Layout = () => {
  return (
    <div className="d-flex bg-body-tertiary" style={{ minHeight: "100vh" }}>
      {/* Desktop Sidebar */}
      <aside className="d-none d-md-flex flex-column flex-shrink-0 p-3 bg-body-secondary" style={{ width: "280px" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-body text-decoration-none">
          <Bot className="me-2" />
          <span className="fs-4">Blade UI</span>
        </a>
        <hr />
        <div className="--bs-body-color">
          <NavLinks />
        </div>
      </aside>

      <main className="flex-grow-1 p-4 overflow-auto">
        {/* Mobile Header */}
        <header className="d-md-none d-flex justify-content-between align-items-center mb-4">
           <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <Bot className="me-2" />
            <span className="fs-4">Blade UI</span>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-body-secondary">
               <nav className="d-flex flex-column p-4">
                  <a href="/" className="d-flex align-items-center mb-3 text-body text-decoration-none">
                    <Bot className="me-2" />
                    <span className="fs-4">Blade UI</span>
                  </a>
                  <hr />
                  <NavLinks />
               </nav>
            </SheetContent>
          </Sheet>
        </header>
        <div className="bg-body p-4 rounded-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
