import React from 'react';

const energyPage = () => (
    <div>
        <section className='m-8 text-xl font-bold'>Description: it's a energy consumption data platform, which provides detailed data on energy consumption in Inner Mongolia, China. 
             It tracks and reports the annual electricity energy consumption figures in different industry, offering a comprehensive view of the energy landscape in the region.
        </section>
        <section className='m-8 text-xl font-bold'>
            Technology stacks: 
                            <p>Frontend: Angular 11, Ant design UI, Apache Echarts</p>
                            <p>Backend: Java Spring Boot, MySQL, Redis, Ngnix, Docker, Alibaba cloud platform</p>
        </section>
        <div>
            <img src="/energy_consumption_1.png" alt="Energy consumption" height={"100%"} />
        </div>
        <div className='mt-8'>
            <img src="/energy_consumption_2.png" alt="Energy consumption" height={"100%"} />
        </div>
    </div>
  );


  export default energyPage;