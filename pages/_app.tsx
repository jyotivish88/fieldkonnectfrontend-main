import 'bootstrap/dist/css/bootstrap.css'
import 'styles/theme.css'
import React from 'react'
import App from 'next/app';
import wrapper from "../store";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

class MyApp extends App {
    // @ts-ignore
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
            }
        };
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <Component {...pageProps} />
        );
    }

}

export default wrapper.withRedux(MyApp);


