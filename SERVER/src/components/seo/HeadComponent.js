import React from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent = () => {
  return (
    <Helmet>
      <title>
        SpaceX Launching Platform - Publicis Sapient : Gaurav Bhardwaj
      </title>

      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content="SpaceX Launching Platform - Publicis Sapient : Gaurav Bhardwaj"
      />

      <link
        rel="shortcut icon"
        href={`${process.env.PUBLIC_URL}/favicon.ico?v1`}
      />
    </Helmet>
  );
};

export default HeadComponent;
