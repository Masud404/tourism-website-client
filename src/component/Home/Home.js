import React from 'react';
import Article from '../Article/Article';
import ExploreWorld from '../ExploreWorld/ExploreWorld';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Work from '../Work/Work';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Work></Work>
            <ExploreWorld></ExploreWorld>
            <Article></Article>
        </div>
    );
};

export default Home;