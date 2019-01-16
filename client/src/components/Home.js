import React from 'react';
import { Header,  } from 'semantic-ui-react';
import Rooms from './Rooms';
import { withNamespaces  } from 'react-i18next';

class Home extends React.Component {
  
  render() { 
    const { t } = this.props;
    return (
      <div>
                <h1>{t("Welcome to Terra Nova Cabins")}</h1>
                <h2> {t("HOTELS & RESORTS")} </h2>
              </div>
      )
        }
      }
      
      export default withNamespaces()(Home);
      