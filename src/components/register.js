import React from 'react';

const Register = () => {
    return (
    <form className = "registerForm" method = "post" action="#">
         
            <h3 className = "regHeading">Регистрация</h3>
            <input type = "text" className = "registerItem" name = "name" placeholder = "Имя"/> <br/>
            <input type = "text" className = "registerItem" name = "surname" placeholder = "Фамилия"/> <br/>
            <input type = "date" className = "registerItem" onchange="this.className=(this.value!=''?'has-value':'')" name = "birthday" placeholder = "Дата рождения_"/><br/>
            <input type = "email" className = "registerItem" name = "email" placeholder = "e-mail"/><br/>
            <input type = "password" className = "registerItem" name = "password" placeholder = "Пароль"/><br/>
            <input type = "password" className = "registerItem" name = "password" placeholder = "Повторить пароль"/><br/>
            <button type = "submit" className = "registerButton">Зарегистрироваться</button>
         
    </form>
    )
};

export default Register;