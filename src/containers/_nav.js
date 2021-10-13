import React from "react";
import CIcon from "@coreui/icons-react";

export const superAdminNav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Tablero",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "Nuevo",
  //   },
  // },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Super-Admin"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Cuentas",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Crear Cuenta",
        to: "/account",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Lista de Cuentas",
        to: "/account/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Recinto",
    route: "/warehouse",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Crear Recinto",
        to: "/warehouse/create",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Lista de Recintos",
        to: "/warehouse/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Anfitrión",
    route: "/host",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Crear Anfitrión",
        to: "/host/create",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Lista de Anfitriones",
        to: "/host/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Agendar Cita",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Escanear QR",
        to: "/appointment/scan",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Citas Agendadas",
        to: "/appointment/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Reporte Administrador",
        to: "/appointment/Admin/List",
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Calendario de Citas",
      //   to: "/appointment/calendar",
      // },
    ],
  },
];

export const adminNav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Tablero",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Administrador"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Agendar Cita",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Citas Agendadas",
        to: "/appointment/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Escanear QR",
        to: "/appointment/scan",
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Calendario de Citas",
      //   to: "/appointment/calendar",
      // },
    ],
  },
];

export const operNav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Tablero",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Operador"],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Citas Agendadas",
        to: "/appointment/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Escanear QR",
        to: "/appointment/scan",
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Calendario de Citas",
      //   to: "/appointment/calendar",
      // },
    ],
  },
];

export const authorityNav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Tablero",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Autoridad"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Reporte Administrador",
        to: "/appointment/Admin/List",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Reporte Operador",
        to: "/appointment/Oper/List",
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Calendario de Citas",
      //   to: "/appointment/calendar",
      // },
    ],
  },
];

export const userNav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Dashboard",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Usuario"],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Agendar Cita",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Citas Agendadas",
        to: "/appointment/list",
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Calendario de Citas",
      //   to: "/appointment/calendar",
      // },
    ],
  },
];

export const hostNav = [
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Dashboard",
  //   to: "/dashboard",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Anfitrion"],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Citas Agendadas",
        to: "/appointment/list",
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Calendario de Citas",
      //   to: "/appointment/calendar",
      // },
    ],
  },
];

export const guestNav = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["Invitado"],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Agendar Cita",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Citas Agendadas",
        to: "/appointment",
      },
    ],
  },
];
