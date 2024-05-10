// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


import "@/styles/globals.css";
 
 
 
 
import React from 'react';
import SharedLayout from '../components/SharedLayout';
 
function App({ Component, pageProps }) {
  return (
        <SharedLayout>
          <Component {...pageProps} />
        </SharedLayout>
 );
}
 
export default App;