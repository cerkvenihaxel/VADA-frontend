import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/SideMenu";
import SimpleMenu from "../layouts/SimpleMenu";
import TopMenu from "../layouts/TopMenu";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import DashboardAdmin from "../pages/DashboardOverview4";
import Tabulator from "../pages/Tabulator";
import CalendarAdmin from "../pages/Calendar";
import AfiliadosLayout from "../pages/UsersLayout2";
import Clinics from "../pages/SellerList";
import Medics from "../pages/UsersLayout3";
import HealthInsurances from "../pages/UsersLayout1";
import Profile from "../pages/ProfileOverview1";
import CrudForm from "../pages/CrudForm";
import Messages from "../pages/Inbox";
const TableTabulator = Tabulator;

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <DashboardAdmin />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/page-2",
          element: <Page2 />,
        },
        {
          path: "/os/requests",
          element: <TableTabulator />,
        },
        {
          path:"/os/calendar",
          element:<CalendarAdmin/>
        },
        {
          path:"/os/affiliates",
          element:<AfiliadosLayout/>
        },
        {
          path:"/os/clinics",
          element:<Clinics/>
        },
        {
          path:"/os/medics",
          element:<Medics/>
        },
        {
          path: "/os/health-insurances",
          element: <HealthInsurances />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/os/requests/add",
          element: <CrudForm />,
        }

      ],
    },
   
    {
      path: "/simple-menu",
      element: <SimpleMenu />,
      children: [
        {
          path: "page-1",
          element: <Page1 />,
        },
        {
          path: "page-2",
          element: <Page2 />,
        },
      ],
    },
    {
      path: "/top-menu",
      element: <TopMenu />,
      children: [
        {
          path: "page-1",
          element: <Page1 />,
        },
        {
          path: "page-2",
          element: <Page2 />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
