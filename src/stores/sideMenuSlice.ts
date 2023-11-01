import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: "Home",
      pathname: "/",
      title: "Inicio",
    },
    {
      icon: "MessageSquare",
      pathname: "/messages",
      title: "Mensajes",
    },
    "divider",
    {
      icon: "Folder",
      pathname: "/page-2",
      title: "Gestión Obra Social",
      subMenu: [
        {
          icon: "Inbox",
          pathname: "/os/requests",
          title: "Solicitudes",
        },
        {
          icon: "Calendar",
          pathname: "/os/calendar",
          title: "Turnos",
        },
        {
          icon: "Users",
          pathname: "/os/affiliates",
          title: "Afiliados",
        },
        {
          icon: "Building",
          pathname: "/os/clinics",
          title: "Clínicas",
        },
        {
          icon: "Stethoscope",
          pathname: "/os/medics",
          title: "Médicos",
        },
        {
          icon: "Cross",
          pathname: "/os/health-insurances",
          title: "Obras Sociales",
        },
      ],
    },
    {
      icon: "Folder",
      pathname: "/page-2",
      title: "Gestión Proveedores",
      subMenu: [
        {
          icon: "Inbox",
          pathname: "/page-2",
          title: "Solicitudes",
        },
        {
          icon: "DollarSign",
          pathname: "/page-2",
          title: "Panel Cotizaciones",
        },
        {
          icon: "Users",
          pathname: "/page-2",
          title: "Afiliados",
        },
        {
          icon: "Building",
          pathname: "/page-2",
          title: "Clínicas",
        },
        {
          icon: "Stethoscope",
          pathname: "/page-2",
          title: "Médicos",
        },
        {
          icon: "Calendar",
          pathname: "/page-2",
          title: "Calendario",
        },
      ],
    },
    {
      icon: "Folder",
      pathname: "/page-2",
      title: "Gestión Médicos",
      subMenu: [
        {
          icon: "Inbox",
          pathname: "/page-2",
          title: "Solicitudes",
        },
        {
          icon: "Calendar",
          pathname: "/page-2",
          title: "Turnos",
        },
        {
          icon: "Users",
          pathname: "/page-2",
          title: "Afiliados",
        },
        {
          icon: "Building",
          pathname: "/page-2",
          title: "Clínicas",
        },
        {
          icon: "Stethoscope",
          pathname: "/page-2",
          title: "Perfil médico",
        },
        {
          icon: "Cross",
          pathname: "/page-2",
          title: "Obras Sociales",
        },
      ],
    },
    {
      icon: "Folder",
      pathname: "/page-2",
      title: "Gerenciadora",
      subMenu: [
        {
          icon: "Inbox",
          pathname: "/page-2",
          title: "Solicitudes",
        },
        {
          icon: "Calendar",
          pathname: "/page-2",
          title: "Calendario",
        },
        {
          icon: "Users",
          pathname: "/page-2",
          title: "Afiliados",
        },
        {
          icon: "Building",
          pathname: "/page-2",
          title: "Clínicas",
        },
        {
          icon: "Stethoscope",
          pathname: "/page-2",
          title: "Médicos",
        },
        {
          icon: "Cross",
          pathname: "/page-2",
          title: "Obras Sociales",
        },
        {
          icon: "Truck",
          pathname: "/page-2",
          title: "Proveedores",
        },
        {
          icon: "FileBarChart",
          pathname: "/page-2",
          title: "Reportes",
        },
       
      ],
    },
    "divider",
    {
      icon: "Settings",
      pathname: "/page-2",
      title: "Configuración",
      subMenu: [
        {
          icon: "Users",
          pathname: "/page-2",
          title: "Usuarios",
        },
        {
          icon: "Settings",
          pathname: "/page-2",
          title: "Configuración",
        },
        {
          icon: "Flag",
          pathname: "/page-2",
          title: "Log de Accesos",
        },
        {
          icon: "Key",
          pathname: "/page-2",
          title: "Privilegios y Roles",
        },
        {
          icon: "PieChart",
          pathname: "/page-2",
          title: "Parametrización",
        }
      ],
    },
    {
      icon: "Info",
      pathname: "/page-2",
      title: "Ayuda",
      subMenu: [
        {
          icon: "HelpCircle",
          pathname: "/page-2",
          title: "Ayuda",
        },
        {
          icon: "Info",
          pathname: "/page-2",
          title: "Acerca de",
        },
        {
          icon: "FileText",
          pathname: "/page-2",
          title: "Términos y condiciones",
        }
      ],
    },
    "divider"

  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
