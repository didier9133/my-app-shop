import React, { useContext } from 'react';
import Products from '../components/Products';
import { AppContext } from '../context/AppContext';
import { Helmet } from 'react-helmet';

const Home = () => {
    const{state}=useContext(AppContext)
    
    return ( 
      <>
        <Helmet>
          <title>Home | Platzi Conf Merch</title>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@didierecs"/>
          <meta name="twitter:creator" content="@didierecs"/>
          <meta name="twitter:title" content="Platzi Conf Store"/>
          <meta name="twitter:description" content="Platzi Conf Store"/>
          <meta
            name="twitter:image"
            content="https://pbs.twimg.com/card_img/1596702259026485253/3XS9wdEt?format=jpg&name=small"
          />
          <meta property="og:title" content="Platzi Conf Store"/>
          <meta property="og:description" content="Platzi Conf Store"/>
          <meta
            property="og:image"
            content="https://pbs.twimg.com/card_img/1596702259026485253/3XS9wdEt?format=jpg&name=small"
          />
          <meta property="og:url" content="platzistore.xyz" />
          <meta property="og:site_name" content="Platzi Conf Store" />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content="1152550414" />
        </Helmet>
        <Products products={state.products} />
      </>
     );
}
 
export default Home;
