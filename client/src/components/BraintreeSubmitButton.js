import React from 'react';
import { GoldButton } from '../styles/AppStyles'
import { withNamespaces } from 'react-i18next';



const renderSubmitButton = ({onClick, isDisabled, text, t}) => {
  return (
    <GoldButton
      primary
      onClick={onClick}
      disabled={isDisabled}
    >
      {t("Reserve Room")}
    </GoldButton>
  )
}

export default withNamespaces()(renderSubmitButton);