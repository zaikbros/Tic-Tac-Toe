import React from 'react';
import { useState } from 'react'
import  {Input}  from'./components/style';
// 


// export default function App() {
//      const [add,setAdd]=React.useState(false);
//     function deleteHandler(){
//         setAdd(true)
//     }

//     function proceedHandler(){
//         setAdd(false)
//     }
//     return (
//       <div>
//         {add ? <div data-testid="alert" id="alert">
//           <h2>Are you sure?</h2>
//           <p>These changes can't be reverted!</p>
//           <button onClick={proceedHandler}>Proceed</button>
//         </div>:null}
//         {!add?<button onClick={deleteHandler}>Delete</button>:null}
//       </div>      
//     );
// }





// Don't change the component name "App"
export default function App() {
    // let [isStyle, setIsStyle] = useState(false);

    // function clickHandler() {
    //     setIsStyle(!isStyle); // Toggles the value of isStyle
    // }

    // Style component to conditionally apply className
    // function Style({ children, className }) {
    //     return <p className={className}>{children}</p>;
    // }

    return (
        // // <div>
        //     {/* Render Style component with conditional className */}
        //     {/* <Style className={isStyle ? 'subscribe-button' : null} clickHandler={clickHandler}>Style me!</Style> */}
        //     {/* Button to toggle style */}
        //     {/* <button onClick={clickHandler}>Toggle style</button> */}
        // // </div>

        <div className="login-form">
            <h2>Login</h2>
            <Input type="text" className="form-input" placeholder="Username" />
            <Input type="password" className="form-input" placeholder="Password" />

            {/* <input type="text" className="form-input" placeholder="Username" /> */}
            {/* <input type="password" className="form-input" placeholder="Password" /> */}
            <button className="login-button">Login with Facebook</button>
        </div>


    );
}
