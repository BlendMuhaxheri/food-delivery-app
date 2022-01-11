import { useState, useEffect } from 'react';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { BannerName } from './Components/BannerName';


function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');
    function setMenuActive() {
      menuLi.forEach(element => element.classList.remove('active'))
      this.classList.add('active')
      console.log('hi')
    }
    menuLi.forEach(element => element.addEventListener('click', setMenuActive))

  }, [])
  return (
    <div className="App">
      {/* Header Section */}
      <Header />

      {/* Main Container */}
      <main>
        <div className='mainContainer'>
          {/* Banner */}
          <div className='banner'>
            <BannerName name={'Vetri'} discount={'20'} link={'#'} />
            <img className='deliveryPic' src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fpizzaslice.png?alt=media&token=c91c0c7e-ffa9-41be-ba84-c3b45c79d483' />
          </div>
        </div>
        <div className='rightMenu'></div>
      </main>

      {/* Bottom Menu */}
      <div className='bottomMenu'>
        <ul id='menu' >
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<HomeRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Chat />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<SummarizeRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<Settings />} />
          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
