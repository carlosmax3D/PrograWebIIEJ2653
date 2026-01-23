import React, { createContext, useContext, useState, useEffect } from 'react'; 

const AuthContext = createContext(); 
export function useAuth() { 
    return useContext(AuthContext); 
} 

export function AuthProvider({ children }) { 
const [user, setUser] = useState(()=>{
    const cacheUser = localStorage.getItem('PrograWebIIEJ2653_user');
    return cacheUser ? JSON.parse(cacheUser)
    : null
});

useEffect(()=>{
    if (user){
        localStorage.setItem('PrograWebIIEJ2653_user', JSON.stringify(user))
    }else{
        localStorage.removeItem('PrograWebIIEJ2653_user')
    }
}, [user])

const login = (userData) => { 
// Lógica de inicio de sesión aquí 
setUser(userData); 
};
const logout = () => { // Lógica para cerrar sesión aquí 
    setUser(null);
}; 
return ( 
<AuthContext.Provider value={{ user, login, logout }}> 
    {children}
</AuthContext.Provider> 
); 

}