import React, { Component, } from 'react';
import axios from 'axios';
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import { Dimmer, Loader, Segment, Button} from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';
import { Redirect, } from 'react-router-dom';
import CheckoutConfirm from './CheckoutConfirm';


class BraintreeDrop extends Component {
    state = { loaded: false, token: '', redirect: false, transactionId: '', };
        
    componentDidMount() {
        axios.get('/api/braintree_token')
            .then(res => {
                const { data: token, } = res;
                this.setState({ token, loaded: true });
                // this.loaded()
            })
    }

    // loaded = () => {
    //     this.setState({ loaded: !this.state.loaded })
    // }

    handlePaymentMethod = (payload) => {
       const { amount } = this.props;
        debugger
       axios.post('/api/payment', { amount, ...payload, })
        .then( res => {
            debugger    
            const { data: transactionId, } = res;
            this.setState({ redirect: true, transactionId, })
            this.props.history.push({
                pathname: "/checkout/confirmation",});
        })
        .catch( res => {
            debugger
            window.location.reload();
        });
    }



    

    render() {
        const { loaded, token, redirect, transactionId, } = this.state;
        const { t } = this.props;
        
    //     if(redirect)
    //   return(
    //     <Redirect to={{
    //       pathname: '/checkout/confirmation',
    //       state: { amount: this.props.amount, transactionId }
    //     }}/>
    //   );
        if (loaded) 
            return (
                <Segment basic textAlign='center'>
                    <BraintreeDropin
                        braintree={braintree}
                        authorizationToken={token}
                        handlePaymentMethod={this.handlePaymentMethod}
                        renderSubmit={BraintreeSubmitButton}
                    />
                </Segment>
                
            );
         else 
            return (
                <Dimmer active>
                    <Loader>{t("Loading Luxury Premium Payment System...")}</Loader>
                </Dimmer>
            )
        
    }
}

export default withNamespaces()(BraintreeDrop);