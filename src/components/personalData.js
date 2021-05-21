import React from 'react';
import photo from './img/photo.jpg';

const PersonalData = () => {
    return (
        <div className = "personalData">
            <img src = {photo} className = "photo"></img>
            <form className = "personalDataForm" method = "post" action="#">
            <h3 className = "regHeading">Личные данные</h3>
            <input type = "text" className = "registerItem profile" name = "name" placeholder = "Имя"/>
            <input type = "text" className = "registerItem profile" name = "surname" placeholder = "Фамилия"/> <br/>
            <input type = "date" className = "registerItem profile" onchange="this.className=(this.value!=''?'has-value':'')" name = "birthday" placeholder = "Дата рождения_"/>
            <input type = "email" className = "registerItem profile" name = "email" placeholder = "e-mail"/><br/>
            <input type = "password" className = "registerItem profile" name = "password" placeholder = "Пароль"/>
            <input type = "password" className = "registerItem profile" name = "password" placeholder = "Повторить пароль"/><br/>
            <button type = "submit" className = "registerButton">Внести изменения</button>
            </form>
        </div>
    )
};

export default PersonalData;