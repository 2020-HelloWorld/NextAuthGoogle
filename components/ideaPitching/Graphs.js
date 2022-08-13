import React from 'react';
import PieChart from './charts/pieChart.js';
import LineChart from './charts/lineChart.js';

class Graphs extends React.Component{
    render(){
        return(
            <div className='graph-box'>
               <div className='graphs'>
                <PieChart ></PieChart>
               
                <LineChart></LineChart>
               </div>
            </div>  
        )
    };
}

export default Graphs;