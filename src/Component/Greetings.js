import User from "./User";
import Guest from "./Guest";
function Greetings(props) {
    
        const isLoggedIn=Boolean(props.isLoggedIn);//flag
        //const isLoggedIn=Boolean(false);

        if(isLoggedIn==true) 
        {return <Guest/>}
        else{
            return <User/>
        }  
        
        //Boolean(isLoggedIn)?<User/>:<Guest/>
    
}

export default Greetings;