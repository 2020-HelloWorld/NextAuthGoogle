import React from 'react';
import IdeaText from './ideaPitching/ideaText';
import Graphs from './ideaPitching/Graphs';
import Contacts from './ideaPitching/Contacts';

class ideaPitching extends React.Component{
    render(){
        return(
            <div className='ideaPitch-body'>
                <IdeaText company={this.props.company} abstract={this.props.abstract}/>
                <Graphs></Graphs>
                <Contacts></Contacts>
            </div>  
        )
    };
}

export default ideaPitching;