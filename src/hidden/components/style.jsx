
   


// Style component to conditionally apply className
// export default function Style({ children, className ,clickHandler}) {


//     return<>
//      <p className={className}>{children}</p>
//      <button onClick={clickHandler}>Toogle</button>
//      </>
// }

export function Input({ type, className, placeholder }) {
  return <input type={type} className={className} placeholder={placeholder} />;
}
