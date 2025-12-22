import { User } from "@/src/models/User";
import { RouteNames } from "@/src/routes";
import { DashboardNavProp } from "@/src/routes/NavigationTypes";
import { useNavigation } from "@react-navigation/native";
import React from "react";



const useLoginViewModel = () =>{

  const navigation = useNavigation<DashboardNavProp>();

  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const handleInputChange = (field: string, value: string) => {
    // console.log("Field:", field, "Value:", value);
    setFormData({
      ...formData,
      [field]: value
    });
  }

  const onPressLogin = async () => {
    // Handle login logic here
    console.log("Logging in with:", formData);
    try{
    const reqBody = {
      email: (formData.email).toLowerCase().trim(),
      password: (formData.password).trim()
    };
    const response = await fetch('http://10.66.96.251:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data: User = await response.json();
      console.log("Response status:", data);
      navigation.navigate(RouteNames.DASHBOARD, data);
    }catch(error){
      console.error("Login error:", error);
    }
  }

    return {
        formData,
        setFormData,
        handleInputChange,
        onPressLogin,
        passwordVisible,
        setPasswordVisible
    }

}

export default useLoginViewModel;