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


            <div className='data1'>
                <p className='title'>UOM</p>
                <p className='value'>02</p>
            </div>
            
            <div className='data2'> 
            <p className='title'>UOM</p>
                <p className='value'>02</p>
                </div>
            
            <div className='data3'>
                 <p className='title'>UOM</p>
                <p className='value'>02</p>
                </div>

            
            <div className='data4'> <p className='title'>UOM</p>
                <p className='value'>02</p>
                </div>
            


            </div>

        </div>
    </div>
  )
}

export default Fruit