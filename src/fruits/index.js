import React from 'react'
import './styled.css'

export const Fruit = () => {
  return (
    <div className='main'>
        <div className='img'></div>
        <div className='details'>
            <div className='top'>
                
                    <h1 className='name'>Celery Stalk</h1>
                    <button className='button'>Add</button>
            </div>
            <div className='bottom'>


            <div className='data'>
                <p className='title'>UOM</p>
                <p className='value'>02</p>
            </div>
            
            <div className='data'> 
            
            <p className='title'>Pack Size</p>
                <p className='value'>02</p>

                </div>
            
            <div className='data'>
                 <p className='title'>Per Unit</p>
                <p className='value'>02</p>
                </div>

            
            <div className='data'>
                 <p className='title'>Total</p>
                <p className='value'>02</p>
                </div>
            


            </div>

        </div>
    </div>
  )
}

export default Fruit