export const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format.";
    return null;
  };


   export const validatePassword = (password:string) => {
    if (password.length < 6) return "Password must be at least 6 characters long.";
    return null;
  };

   export const validatePhone = (phone:string) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) return "Phone number must be 10 digits.";
    return null;
  };