import React from 'react';

const plantPage = () => (
    <div>
        <section className='m-8 text-xl font-bold'>Description: The Virtual Power Plant platform is a sophisticated system designed to optimize the operation of a virtual power plant, which is crucial for managing the dispatch of these resources 
                    to meet the electricity demand efficiently and cost-effectively.
        </section>
        <section className='m-8 text-xl font-bold'>
            Technology stacks: 
                            <p>MEVN stack: MongoDB, Express.js, Vue.js, and Node.js</p>
        </section>
        <div>
            <img src="/virtual_plant1.png" alt="Virtual Plant 1" height={"100%"} />
        </div>
        <div className='mt-8'>
            <img src="/virtual_plant2.png" alt="Virtual Plant 2" height={"100%"} />
        </div>
    </div>
  );


  export default plantPage;