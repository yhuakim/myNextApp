import React, { Component } from 'react';
import Input from '../components/input';
import Head from 'next/head';



export default class extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>My Todo App</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
                </Head>

                    <div className="container">
                        <h1 className="text-center display-4 text-primary">
                            MY TODO APP
                    </h1>
                    </div>
                    <Input />
            </div>
        )
    }
}
