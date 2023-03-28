import React from 'react'
import RequestedServices from '../../components/OtherPages/RequestedServices'
import Service from '../../components/OtherPages/Service';

const SixthPage = () => {
  const requestedServices = ["QSR franchise design","Retail franchise design","Passive house design","Fitness franchise design"
  ,"EV charging tation design","Hotel MEP deign","Residential MEP deign","Healthcare MEP deign","Office MEP deign"]
    return (
    <div className=' bg-black  text-white text-center py-20 px-40'>
        <h2 className='text-5xl uppercase'>NEED A SPECIFIC SERVICE SOLUTION FROM US?</h2>
        <div className=' w-5 bg-bgOrange2 h-[2px]'></div>
        <h4 className=' font-jost mb-5'>Some of our most requested services</h4>
        <Service></Service>
        <div>
            <h3 className=' text-2xl font-bold uppercase text-left'>most requested services</h3>
            <div className=' w-5 h-[1px] bg-bgOrange2 text-left'></div>
            <div className='flex flex-col gap-2 md:grid md:grid-cols-3 md:grid-flow-row'>
            {
                requestedServices.map((i)=><RequestedServices name={i} ></RequestedServices>)
            }
            </div>
        </div>

    </div>
  )
}

export default SixthPage