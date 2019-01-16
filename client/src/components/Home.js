import React from 'react';
import { Header,  } from 'semantic-ui-react';
import Rooms from './Rooms';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';


function Home ({t}) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
    <h1>{t("Welcome to Terra Nova Cabins")}</h1>
    <h2> {t("HOTELS & RESORTS")} </h2>
  </div>
  )
}
export default withNamespaces()(Home);
                  

// class Home extends React.Component {
  
  //   render() { 
  //     const { } = this.props;
  //     return (
  //         <div>
  //           <h1>{("Welcome to Terra Nova Cabins")}</h1>
  //           <h2> {("HOTELS & RESORTS")} </h2>
  //         </div>
  //     )
  //   }
  
  // }
  
  {/* <button onClick={() => changeLanguage('en')}>EN</button>
  <button onClick={() => changeLanguage('zh')}>ZH</button> */}