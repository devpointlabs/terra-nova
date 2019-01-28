import React from 'react';
import { withNamespaces } from 'react-i18next';
import {Button} from 'semantic-ui-react';


const renderSubmitButton = ({onClick, isDisabled, t}) => {
    debugger
  return (
    <Button
      primary
      onClick={onClick}
      disabled={isDisabled}
      color="brown"
    >
      {t("Reserve Room")}
    </Button>
  )
}

export default withNamespaces()(renderSubmitButton);