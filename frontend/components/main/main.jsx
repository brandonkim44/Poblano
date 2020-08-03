import React from 'react';
import { openModal } from '../../actions/modal_actions';

const Main = () => {
    return (
        <main className="main-container">
            <div className="guac-banner" >
                <img className="guac-img" src={window.guac} alt="guac" />
                <h1 className="guac-pre-title">- Be Extra -</h1>
                <h1 className="guac-title">National Avocado Day </h1>

                <div className="main-advertisement-container">
                    <img className="main-poblano-simple-logo" src={window.PoblanoLogoSimple} alt="poblano-logo-simple" />
                    <h2>JOIN POBLANO REWARDS. UNWRAP SOME FREE POBLANO.</h2>
                    <div className="main-create-signin">
                        <span className="main-create" onClick={() => dispatch(openModal('signup'))}>CREATE AN ACCOUNT</span>
                        <span className="main-or">OR</span>
                        <span className="main-signin" onClick={() => dispatch(openModal('signin'))}>SIGN IN</span>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </main>
    )
};

export default Main;