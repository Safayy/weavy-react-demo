// import logo from './logo.svg';
// import './App.css';
// import "@weavy/themes/dist/weavy-default.css";


import React from 'react';
import { WeavyClient, WeavyProvider, Messenger } from '@weavy/uikit-react';
// import s from '@weavy/themes/scss/default/default.scss';
import '@weavy/themes/scss/default.scss';
// import 'https://cdn.jsdelivr.net/npm/@weavy/themes/dist/weavy-default.css';

const getToken = () => {
   return new Promise(function (resolve, reject) {
       // typically an api call to your backend which returns a JWT
      //  var token = getTokenFromSomewhere();
       var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnZXQud2VhdnkuaW8iLCJzdWIiOjI1MDksImRpciI6IlNhbmRib3giLCJnaXZlbl9uYW1lIjoiU2FmYSIsImZhbWlseV9uYW1lIjoiWW91c2lmIiwiZW1haWwiOiJtZUBzYWZhLmNvZGVzIiwiZXhwIjoxNjY0MDMzNjIzfQ.S7ttDxyoSm70vt_ZQcHhmQYrO3NqB2ij4IZ7xi9Smhk";
       
       if (token) {
           resolve(token);
       } else {
           reject("Failed to retrieve token");
       }
   });
}

const weavyClient = new WeavyClient({ url: "https://vodevi-test.weavy.io", tokenFactory: getToken})

function App() {
   return (
       <div className="App">
           <WeavyProvider client={weavyClient}>
               {/* <Chat/> */}
               <Messenger/>
           </WeavyProvider>
       </div>
   )
}

export default App;
