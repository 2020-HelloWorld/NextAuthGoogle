import React from 'react';
import IdeaText from './ideaPitching/ideaText';

class ideaPitching extends React.Component{
    render(){
        return(
            <div>
                <IdeaText company={this.props.company} abstract={this.props.abstract}/>
                {/* <Graphs></Graphs>
                <Contact></Contact> */}
            </div>  
        )
    };
}

export default ideaPitching;