import React from 'react';

const iotPage = () => (
    <div>
        <section className='m-8 text-xl font-bold'>Description: The OwlEye Smart Control and Monitoring System is designed to enhance the efficiency and reliability of energy management by providing real-time monitoring and control over a wide range of infrastructure devices, 
        including diesel generator sets, rectifiers, solar panels, precision air conditioners, batteries, and access control systems.
        </section>
        <section className='m-8 text-xl font-bold'>
            Technology stacks: 
                            <p>Frontend: Angular 11, Ant design UI, Apache Echarts</p>
                            <p>Backend: Java Spring Boot, MySQL, Redis, Ngnix, Docker, AWS cloud platform</p>
        </section>
        <div>
            <img src="/iot_1.png" alt="iot 1" height={"100%"} />
        </div>
        <div className='mt-8'>
            <img src="/iot_2.png" alt="iot 2" height={"100%"} />
        </div>
        <div className='mt-8'>
            <img src="/iot_3.png" alt="iot 2" height={"100%"} />
        </div>
    </div>
  );


  export default iotPage;