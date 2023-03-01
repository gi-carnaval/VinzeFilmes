/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
declare module 'jquery' {
  const jQuery: JQueryStatic
  export default jQuery
}
interface JQuery {
  slick: ({ infinite, dots, arrows }) => void
}
