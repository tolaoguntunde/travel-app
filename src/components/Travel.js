import React from 'react'
import '../Travel.css'
// import '../App.css'

export default function Travel(props) {
  return (
    <div >
        <main className='Main'>
            <div className='Main-image'>
            <img src={props.infoData.imageUrl} alt="" />
            </div>
            
            <div className='Main-body'>
            <h6><i className="fa-solid fa-location-dot icolor"></i> {props.infoData.location}</h6>
             <h2>{props.infoData.title}</h2>
             <h5>{props.infoData.startDate} - {props.infoData.endDate}</h5>
            <p>{props.infoData.description}</p>
            </div>
        </main>
        <div className='Spacer'></div>

    </div>
  )
}
