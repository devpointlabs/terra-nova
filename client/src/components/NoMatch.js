import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';

const NoMatch = ({t}) => (
  <Header as="h1" inverted color="white" textAlign="center">
    {t("Page not found return")}
    <Link to="/"> {t("Home")}</Link>
  </Header>
)

export default withNamespaces()(NoMatch);