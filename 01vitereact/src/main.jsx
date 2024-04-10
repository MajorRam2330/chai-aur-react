import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//     return(
//         <div>
//             <h1>Custom App | Chai</h1>
//         </div>
//     )
// }

// const reactElement = {
//     type: 'a',
//     props : {
//         href: 'http://google.com',
//         target : '_parent'
//     },
//     children:'Click me to visit google',
//   }
  
// const anotherElement = (
//     <a href="http://google.com" target='_blank'>Visit Google</a>
// )

const anotherElement = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'http://google.com',target:'_blank'},
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
    
)
