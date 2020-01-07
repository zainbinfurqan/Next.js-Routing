import React, { Component } from 'react';
import { Router } from 'next/router'
import Header from '../common/header'
import Head from 'next/head'

class Discussion extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Discussion</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                </Head>
                <Header />
                <h2>Discussion</h2>
            </>
        )
    }
}
export default Discussion;