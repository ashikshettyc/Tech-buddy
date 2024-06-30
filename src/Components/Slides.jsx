import React, { useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
const queries = [
  {
    id: 0,
    query: 'What is React?',
    reply:
      "React is a popular JavaScript library for building user interfaces. It follows a component-based approach, allowing developers to create reusable UI components that efficiently update and render when the underlying data changes. React's virtual DOM and efficient diffing algorithm contribute to its performance and make it a preferred choice for building modern web applications.",
  },
  {
    id: 1,
    query: 'What are React Hooks?',
    reply:
      'React Hooks are functions in React that allow functional components to use state and lifecycle features without writing a class, enabling simpler and more concise code.',
  },
  {
    id: 2,
    query: 'What are Single Page Applications?',
    reply:
      'Single Page Applications (SPAs) are web applications that operate within a single web page, dynamically updating the content as users navigate without the need for page reloads, resulting in a more seamless and interactive user experience.',
  },
  {
    id: 3,
    query: 'What is Redux?',
    reply:
      'Redux is a JavaScript library for managing application state in a predictable and centralized manner, commonly used in conjunction with frameworks like React, Angular, or Vue.js.',
  },
];

function Slides() {
  const [slider, setSlider] = useState([]);
  const handleClick = (id) => {
    setSlider(prev =>  {
      if(prev.includes(id)) {
     
        return prev.filter(prev => prev !== id)
      
      }else {
        return [...prev,id]
      }
    }
     
    )
    console.log(slider)
  //  setSlider(prev => prev === id ? null : id)
  };

  return (
    <div className="flex flex-col gap-4 w-2/3 items-center">
      {queries.map((data) => (
        <div
          key={data.id}
          className="border-2 rounded-md p-6 border-black w-full"
        >
          <div className="flex items-center justify-between">
           
            <h1 className="flex justify-start">{data.query}</h1>
            <div onClick={() => handleClick(data.id)}>
              
              {slider.includes(data.id) ? (
                <AiFillMinusCircle />
              ) : (
                <AiFillPlusCircle />
              )}
            </div>
          </div>
          <div>
            {slider.includes(data.id) && (
              <p className="text-sm border-t-2 border-black">{data.reply}</p>
            ) }
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slides;
