import React from 'react';

const DataCollectionPage = () => (
    <div>
        <section className='m-8 text-xl font-bold'>Description: The Data Point Collection and Manage System is for Green Flag GolfGrade Lawn Care to 
                                                   enhance service quality by collecting and analyzing data on technicians' arrival and departure times, 
                                                   job duration, service quality ratings, steps taken, and assign tasks to technicians thereby addressing the company's current operational inefficiencies and data insight gaps..
        </section>
        <section className='m-8 text-xl font-bold'>
            Technology stacks: 
                            <p>ASP.NET Web API, .NET Core, RESTful APIs, MySQL, Next.js, Ant Design UI, Tailwind CSS, Docker, and Azure</p>
        </section>
        <div>
            <img src="/data_collection_1.png" alt="data collection 1" height={"100%"} />
        </div>
        <div className='mt-8'>
            <img src="/data_collection_3.png" alt="data collection 2" height={"100%"} />
        </div>
        <div className='mt-8'>
            <img src="/data_collection_2.png" alt="data collection 3" height={"100%"} />
        </div>
    </div>
  );


  export default DataCollectionPage;