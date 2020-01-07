import React, { Component } from 'react';
import Header from '../common/header'
import { Router } from 'next/router'
import Head from 'next/head'

class Home extends Component {
    render() {
        return (
            <>
                <Head>
                    <title>Home</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                </Head>
                <Header />
                <h2>Home</h2>
            </>
        )
    }
}
export default Home;