import React from 'react'
import '../../styles/dashboardComponents/barGraph.css'

function barGraph({id}) {
  return (
    <div className='graphContainer'>
        <div className="barContainer">
            <div className='graph1-bg' id={`${id}-graph1-bg`}>
                {(id === "Mon" || id === "Wed" || id === "Thurs" || id == "Sat")?
                (<>
                    <div className='graph1-in-1' id={`${id}-graph1-in-1`}></div>
                    <div className='graph1-in-2' id={`${id}-graph1-in-2`}></div>
                </>) :(<div className='graph1-in' id={`${id}-graph1-in`}></div>)
                }   
            </div>

            <div className='graph2-bg' id={`${id}-graph2-bg`}>
                <div className='graph2-in' id={`${id}-graph2-in`}></div>
            </div>

            <div className='graph3-bg' id={`${id}-graph3-bg`}>
                <div className='graph3-in-1' id={`${id}-graph3-in-1`}></div>
                <div className='graph3-in-2' id={`${id}-graph3-in-2`}></div>
            </div>

            <div className='graph4-bg' id={`${id}-graph4-bg`}>
                <div className='graph4-in' id={`${id}-graph4-in`}></div>
            </div>
        </div>
        <label className='days'>{id}</label>
    </div>
  )
}

export default barGraph