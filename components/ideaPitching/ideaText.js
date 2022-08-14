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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>

                </div>
            </div>
        )
    };
}

export default IdeaText;