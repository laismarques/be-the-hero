import React from 'react';


export default function Header ({children}){
   return( <header>
        <h1>{children}</h1>
    </header>
   );
}
/**let [counter, setCounter]  = useState(0);

  function increment(){
    setCounter(counter ++);
    console.log(counter);
  } */