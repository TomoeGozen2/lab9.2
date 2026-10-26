// components/TextInput/TextInput.tsx
import React from 'react';
import type { CharacterCounterProps } from '../../types';
import { useState } from "react";
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import TextInput from '../TextInput/TextInput';
 
export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25, 
  maxWords, 
  targetReadingTime,
}) =>   {  
    const [text, setText] = useState("");{

    }
    function onTextChange(text:string){
        setText(text);
        console.log(text)
    }
  return (
    <div className="w-full">
      
      
      <TextInput onTextChange = {onTextChange}/>
    </div>
  );
};

// export default function CharacterCounter() {
//   const [text, setText] = useState("");

//     function onTextChange(){
        



//     }
//   return (
//     <div className="w-full">
      
//       <StatsDisplay />
//       <TextInput onTextChange = {onTextChange}/>
//     </div>
//   );

// }