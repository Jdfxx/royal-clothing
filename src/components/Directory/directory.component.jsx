import React, { Component } from "react";
import MenuItem from "../MenuItem/menu-item.component";
import './directory.styles.scss';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/women"
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/men"
        }
      ]
    };
  }

  render() {

    const {sections} = this.state;
    
    const sectionsContent = sections.map((item)=>(
        <MenuItem key={item.id} title={item.title} imageUrl={item.imageUrl} size={item.size} linkUrl={item.linkUrl} /> 
    ));
    
    return (<div className="directory-menu" >
    {sectionsContent}
    </div>);
  }
}

export default Directory;
