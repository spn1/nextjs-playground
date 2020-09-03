import Head from 'next/head';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <Head>
        <title>Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>boop</h1>
      <Link href='/'><a>Home</a></Link>
    </Layout>
  );
}