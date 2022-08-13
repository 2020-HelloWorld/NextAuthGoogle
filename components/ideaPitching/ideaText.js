import React from 'react';
// import './style.css'
class IdeaText extends React.Component{
    render(){
        

        return(
            <div className='ideaText-box'>
                <h1  className='heading'>{this.props.company}</h1>
                <div className='outer-abstract'>
                <div className='abstract'>
                <h4 className='h4'>{this.props.abstract}</h4><br/>
                
                </div>
                <div className='abstract'>
                <h4 className='h4'>{this.props.abstract}</h4><br/>
                
                </div>
                </div>
            </div>
        )
    };
}

export default IdeaText;