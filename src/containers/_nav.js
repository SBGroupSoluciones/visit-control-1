import React from "react";
import CIcon from "@coreui/icons-react";

export const adminNav = [
  {
    _tag: "CSidebarNavItem",
    name: "Tablero",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Administrador"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Anfitrion",
    route: "/host",
    icon: "cil-user",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/base/breadcrumbs",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Citas",
    route: "/appointment",
    icon: "cil-calendar-plus",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/base/breadcrumbs",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Cuentas",
    route: "/base",
    icon: "cil-calendar-plus",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/base/breadcrumbs",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Personas",
    route: "/base",
    icon: "cil-user",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/base/breadcrumbs",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Recintos",
    route: "/site",
    icon: "cil-building",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Añadir",
        to: "/base/breadcrumbs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Listar",
        to: "/base/breadcrumbs",
      },
    ],
  },

  {
    _tag: "CSidebarNavDivider",
  },
];

export const userNav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Admin"],
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
  {
    _tag: "CSidebarNavDropdown",
    name: "Personas",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Personas registradas",
        to: "/person/list",
      }
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Vehículos",
    route: "/apointment",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Vehículos de Carga",
        to: "/appointment",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Vehículos Personales",
        to: "/appointment",
      }
    ],
  }
];
