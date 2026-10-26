// components/TextInput/TextInput.tsx
import React from 'react';
import type { CharacterCounterProps } from '../../types';
import { useState } from "react";
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import TextInput from '../TextInput/TextInput';

// export const CharacterCounter: React.FC<CharacterCounterProps> = ({
//   minWords = 25, 
//   maxWords, 
//   targetReadingTime,
// }) =>   {  
//     const [text, setText] = useState("");


//     function onTextChange(text:string){
//         setText(text);
//         console.log(text)
//     }
//   return (
//     <div className="w-full">


//       <TextInput onTextChange = {onTextChange}/>
//     </div>
//   );
// };

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [wordCount, setCount] = useState(text.split(' ').length - 1);
  let characters = document.querySelector("textarea");
  function onTextChange(text: string) {


    setText(text);
     // TypeScript infers 'count' is a number

    // Function to handle button click
    
      // Use the setter function to update the state
      // Pass the new value directly
      setCount(wordCount);
      // Note: Avoid count++ or ++count - modify state via the setter!
    

  }
  return (
    <div className="w-full">


      <TextInput onTextChange={onTextChange} />
      <div>Character counter: {text.length}</div>
      <div>Word counter: {wordCount} </div>
    </div>
  );

}