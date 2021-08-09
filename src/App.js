import { FaFire } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import { FaNewspaper } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';
import img1 from './images/1.webp';
import img6 from './images/6.webp';

// menu
import { FaSearch } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';
// 
import React, { useState } from 'react';
import './App.scss';
import Categories from './components/Categories/Categories';
import Propose from './components/Propose/Propose';
import Topvideo from './components/Topvideo/Topvideo';
import Subnav from './components/Subnav/Subnav';


function App() {
  let row2 =[
    {icon: <FaFire></FaFire>, content: "Thịnh hành"},
    {icon: <FaMusic></FaMusic>, content: "Âm nhạc"},    
    {icon: <FaGamepad></FaGamepad>, content: "Trò chơi"},
    {icon: <FaNewspaper></FaNewspaper>, content: "Tin tức"},    
    {icon: <FaTrophy></FaTrophy>, content: "Thể thao"},    
  ];

  const row3 =[
    {srcImg: img6, title:"Quách Thị Lan nỗ lực tuyệt vời để có mặt ở bán kết", channel: "HTV Sports", view:"456 N lượt xem", day: " 6 ngày trước" },
    {srcImg: img6, title:"Không tận dụng được cơ hội, Phi Vũ sớm bị loại trước", channel: "HTV Sports", view:"456 N lượt xem", day: " 6 ngày trước" },
    {srcImg: img6, title:"Quách Thị Lan nỗ lực tuyệt vời để có mặt ở bán kết", channel: "HTV Sports", view:"456 N lượt xem", day: " 6 ngày trước" },
    {srcImg: img6, title:"Không tận dụng được cơ hội, Phi Vũ sớm bị loại trước", channel: "HTV Sports", view:"456 N lượt xem", day: " 6 ngày trước" },
  ]

  const row4=[
    {srcImg: img6, title:"3107-3 | W/n x Nâu x Duongg x Titie | OFFICIAL MV", view:"9.1tr lượt xem", day:"1 tuần trước", description:"SUBSCRIBE CHANNEL: https://wn.fanlink.to/youtube #31073 #Wn #Winhmm #UFO #UMG #3107 #Win Streamlink : https://umvn.lnk.to/3107-3 Executive Producer: Nguyen Quy Cao Nguyen A" },
    {srcImg: img1, title:"SAI CÁCH YÊU | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO", view:"11 tr lượt xem", day:"1 tuần trước", description:"SAI CÁCH YÊU | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO #LeBaoBinh #SaiCachYeu #SCY Nghe Audio Độc quyền tại Zing MP3: https://zingmp3.vn/bai-hat/Sai-Cach-Yeu-Le-Bao-Binh/ZUOZE7EZ.html..." },
    {srcImg: img1, title:"3107-3 | W/n x Nâu x Duongg x Titie | OFFICIAL MV", view:"9.1tr lượt xem", day:"1 tuần trước", description:"SUBSCRIBE CHANNEL: https://wn.fanlink.to/youtube #31073 #Wn #Winhmm #UFO #UMG #3107 #Win Streamlink : https://umvn.lnk.to/3107-3 Executive Producer: Nguyen Quy Cao Nguyen A" },
    
  ]
  // 
  const [classNames, changeBackground] = useState('App__box');
  const handleChangeBackground = () => {
    if(classNames === 'App__box'){
      changeBackground('App__box--dark');
    }
    else{
      changeBackground('App__box');
    }
  };
  // 
  const [search , changeSearch] = useState('');
  const input = (event)=> {
    changeSearch(event.target.value);
  }

  return (
    <div className="App">
       <div className={classNames}>
       <div className="menu">
           <div className="menu__masthead menu__masthead--left">
             <div className="search">
                <input placeholder="Tìm kiếm" className="search-input" type="text" list="listSuggestion"
                value={search} onChange={(event) => input(event)}></input>
                <datalist id="listSuggestion">
                    <option value={"Gia tri tim kiem: " + search}/>
                </datalist>
                <div className="icon icon-keyboard"><FaKeyboard></FaKeyboard></div>
                <div className="icon icon-search"><FaSearch></FaSearch></div>  
              </div>
                <div className="icon icon-micro"><FaMicrophone></FaMicrophone></div>            
           </div>
           <div className="menu__masthead menu__masthead--right">
                <div className="icon icon-call--video"><FaVideo></FaVideo></div>
                <div className="icon icon-ellipsish" onClick={handleChangeBackground}><FaEllipsisH></FaEllipsisH></div>
                <div className="icon icon-bell"><FaBell></FaBell></div>
                <div className="shadow">
                    <Subnav></Subnav>
                </div>
           </div>
       </div>
      
      <div className="container">
       <Categories data={row2}></Categories>
        
        <Propose data={row3}></Propose>
        <Topvideo data={row4}></Topvideo>
        </div>
        </div>
    </div>
);
   

}

export default App;
