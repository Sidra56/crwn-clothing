import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.style.scss";
import { Directory_Data } from "./directory.data";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: Directory_Data,
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id , ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
