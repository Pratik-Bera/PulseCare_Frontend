import React from "react";



const useLoginViewModel = () =>{

     const [username, setUsername] = React.useState('');       // refers at username field.
     const [email, setEmail] = React.useState('');       // refers at email field.
      const [password, setPassword] = React.useState('');       // 

      //This is the function trigger at login button press. that takes the username and password.
      const handleLogin = () => {
        console.log('Logging in with', username,email, password);
        setUsername('');
        setEmail('');
        setPassword('');
      };


    return {
        username,
        setUsername,
        password,
        setPassword,
        handleLogin
    }

}

export default useLoginViewModel;