//here we are passing properties in function
function Welcome(props){
    return (
        <>
    <h1>Hello I am{props.name} </h1>
    {/* <h2>Marks: {props.mark}</h2> */}
    <h2>My Marks: {props.mark}</h2>
    </>);}
export default Welcome;
//pass props to compomnts from <Welcome>
// My Marks are {props.Marks}