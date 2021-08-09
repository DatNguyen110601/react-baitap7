import React, { useState } from 'react';
import './Subnav.scss';
import { FaPaste,FaCog,FaPeopleCarry,FaSignOutAlt,FaSun ,FaLanguage,FaKeyboard,FaGlobe } from 'react-icons/fa';
import Subnavitem from './SubnavItem/Subnavitem';
import img from '../../images/2.jpg';
function Subnav() {
    const menusubnav = [
        {icon: <FaPaste></FaPaste>, subtitle: 'Kênh của bạn'},
        {icon: <FaCog></FaCog>, subtitle: 'Youtube Studio'},
        {icon: <FaPeopleCarry></FaPeopleCarry>, subtitle: 'Chuyển đổi tài khoảng'},
        {icon: <FaSignOutAlt></FaSignOutAlt>, subtitle: 'Đăng xuất'},
        {icon: <FaSun></FaSun>, subtitle: 'Giao diện : Sáng'},
        {icon: <FaLanguage></FaLanguage>, subtitle: 'Ngôn ngữ tiếng việt'},
        {icon: <FaGlobe></FaGlobe>, subtitle: 'Địa điểm: Việt Nam'},
        {icon: <FaKeyboard></FaKeyboard>, subtitle: 'Cài đặt'},
        {icon: <FaPaste></FaPaste>, subtitle: 'Dữ liệu của bạn trong youtube'},
        {icon: <FaPaste></FaPaste>, subtitle: 'Trợ giúp'},
        {icon: <FaPaste></FaPaste>, subtitle: 'Gửi phản hồi'},
        {icon: <FaPaste></FaPaste>, subtitle: 'Phím tắt'},

    ]
    const mang = menusubnav.map((item, index) =>{
        return(
            <Subnavitem icon={item.icon} subtitle={item.subtitle} Key={index}></Subnavitem>
        )
    });

    const [classNames, setclassNames] = useState('subnav--hidden');
  const handleclassNames = () => {
    if(classNames === 'subnav--hidden'){
        setclassNames('subnav');
    }
    else{
        setclassNames('subnav--hidden');
    }
  };


    return ( 
        <div className="navbar">
            <div className="navbar__img">
                <img src={img} alt="anh" className="img" onClick={handleclassNames}></img>
                <div className={classNames}>
                    <div className="subnav__info">
                        <img src={img} alt="" className="img-info"></img>
                        <div className="channel">
                            <span className="channel__name">Dat Nguyen</span>
                            <a href="./" className="channel__link">Quản lý tài khoản Google của bạn</a>
                        </div>
                    </div>

                   {mang}
                </div>

            </div>
        </div>
    );
}

export default Subnav;