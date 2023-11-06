export const paginationApiData = [
  {
    id: 1,
    propsName: "currentPage",
    propsType: "number",
    propsDescription: "Current page number.",
    default: "1",
  },
  {
    id: 2,
    propsName: "prevNextShape",
    propsType: ["circle", "round", "roundSquare", "none"],
    propsDescription: "Shape of the previous and next buttons.",
    default: "none",
  },
  {
    id: 3,
    propsName: "goToShape",
    propsType: ["circle", "round", "roundSquare", "none"],
    propsDescription: "Shape of the go-to page input field.",
    default: "none",
  },
  {
    id: 4,
    propsName: "activeCurrentPageShape",
    propsType: ["circle", "roundSquare"],
    propsDescription: "Shape of the active/current page number.",
    default: '"roundSquare"',
  },
  {
    id: 5,
    propsName: "layout",
    propsType: ["navigation", "pagination", "table"],
    propsDescription: "Layout style.",
    default: "pagination",
  },
  {
    id: 6,
    propsName: "onPageChange",
    propsType: "function",
    propsDescription: "Function to be called when a page is changed.",
    default: "function",
  },
  {
    id: 7,
    propsName: "iconWithText",
    propsType: "boolean",
    propsDescription: "Whether to display icons with text.",
    default: "false",
  },
  {
    id: 8,
    propsName: "iconWithOutText",
    propsType: "boolean",
    propsDescription: "Whether to display icons without text.",
    default: "false",
  },
  {
    id: 9,
    propsName: "paginateWithBorder",
    propsType: "boolean",
    propsDescription: "Whether to add borders to pagination elements.",
    default: "false",
  },
  {
    id: 10,
    propsName: "showGoToPaginate",
    propsType: "boolean",
    propsDescription: "Whether to show the go-to page input field.",
    default: "false",
  },
  {
    id: 11,
    propsName: "totalPages",
    propsType: "number",
    propsDescription: "Total number of pages.",
    default: "30",
  },
];
