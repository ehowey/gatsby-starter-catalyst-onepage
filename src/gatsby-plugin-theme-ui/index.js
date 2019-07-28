import merge from "deepmerge";
import { baseTheme } from "gatsby-theme-catalyst-core";

export default merge(baseTheme, {
  //Updated theme options go here.
  sizes: {
    headerHeight: "60px", // Sets the height of the header on screens before the first breakpoint, 767px and below by default
    headerHeightTablet: "80px", // Sets the height of the header after the first breakpoint, 768px to 1023px by default
    headerHeightLaptop: "80px", // Sets the height of the header after the second breakpoint, 1024px and up by default
    mainMarginTop: "60px", // Makes sure the content comes below the fixed header, should be the same values as headerHeight
    mainMarginTopTablet: "160px", // Makes sure the content comes below the fixed header, should be the same values as headerHeight
    mainMarginTopLaptop: "80px" // Makes sure the content comes below the fixed header, should be the same values as headerHeight
  },
  catalystOptions: {
    headerPosition: "fixed" //Fix the header for single page navigation ease
  }
});
