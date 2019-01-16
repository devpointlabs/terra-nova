import React from 'react';
import { Header,  } from 'semantic-ui-react';
import Rooms from './Rooms';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

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

function Home ({t}) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

return (
  <div>
    <button onClick={() => changeLanguage('zh')}>Chineese</button>
    <button onClick={() => changeLanguage('en')}>Englishh</button>
    <h1>{t("Welcome to Terra Nova Cabins")}</h1>
    <h2> {t("HOTELS & RESORTS")} </h2>
  </div>
)
}
export default withNamespaces()(Home);