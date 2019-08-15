import React from "react";
import MenuItem from "../MenuItem/menu-item.component";
import './directory.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectSections} from "../../store/directory/directory.selectors";


const Directory = ({sections}) => {

    const sectionsContent = sections.map((item)=>(
        <MenuItem key={item.id} title={item.title} imageUrl={item.imageUrl} size={item.size} linkUrl={item.linkUrl} /> 
    ));
    
    return (<div className="directory-menu" >
    {sectionsContent}
    </div>);
};

const mapStateToProps = createStructuredSelector({
    sections: selectSections
});

export default connect(mapStateToProps)(Directory);
