import React, { Component } from 'react';
import Header from '../common/header'
import { Router } from 'next/router'
import Head from 'next/head'
import PartyDetailsCard from './PartyDetailsCard'
import PrtyData from '../../data/Data'
class Parties extends Component {
    constructor() {
        super()
        this.state = {
            // partiesData: [
            //     { partyName: 'ABC', partyID: 1 },
            //     { partyName: 'ABC', partyID: 2 },
            //     { partyName: 'ABC', partyID: 3 },
            //     { partyName: 'ABC', partyID: 4 },
            //     { partyName: 'ABC', partyID: 5 },
            //     { partyName: 'ABC', partyID: 6 },
            // ]
        }
    }

    render() {
        return (
            <>
                <Head>
                    <title>Parties</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                </Head>
                <Header />
                <h2>Parties</h2>
                <div className='container'>
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        {PrtyData.map((itm, ind) => {
                            return (
                                <PartyDetailsCard itm={itm} ind={ind} key={ind}  />
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default Parties;