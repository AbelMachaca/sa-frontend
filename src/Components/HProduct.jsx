import React from 'react'

const HProduct = ({Image, Image2, Title, Description}) => {
  return (
    <div className="col">
          <div className="card shadow-sm">
                <img src={Image} alt="" style={{height: "349px", width:"auto", objectFit: "cover"}}/>
            <div className="card-body d-flex">
                <img src={Image2} alt="" className='w-25 h-25'/>
                <div>
                    <strong>{Title}</strong>
                    <p>{Description}</p>
                </div>
            </div>
          </div>
        </div>
  )
}

export default HProduct