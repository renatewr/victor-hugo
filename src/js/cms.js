import React from "react";
import CMS from "netlify-cms";

import PostPreview from "./cms-preview-templates/post";
import BlogPreview from "./cms-preview-templates/blog";
import ProductsPreview from "./cms-preview-templates/products";
import PackagesPreview from "./cms-preview-templates/packages";
import TreatmentsPreview from "./cms-preview-templates/treatments";
import CarouselPreview from "./cms-preview-templates/carousel";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("blog", BlogPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("packages", PackagesPreview);
CMS.registerPreviewTemplate("treatments", TreatmentsPreview);
CMS.registerPreviewTemplate("carousel", CarouselPreview);
CMS.registerWidget("color", ColorControl);
