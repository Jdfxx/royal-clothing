import React, {memo} from 'react';
import StripeCheckout from "react-stripe-checkout";
import './StripeButton.styles.scss';

const StripeButton = ({price}) => {

    const priceForStripe = price*100;
    const publishableKey = 'pk_test_8TzbWHamKwdUMvntP0TmxkET00s8OWI12K';

    const onToken = token =>console.log(token);

    return (
        <div>
            <StripeCheckout
                label="Pay Now"
                name="Royal Clothing"
                currency={"USD"}
                allowRememberMe
                billingAddress
                shippingAddress
                image="https://svgshare.com/i/CUz.svg"
                description={`Your total is: $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    );
};

export default memo(StripeButton);