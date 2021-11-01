import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Article from '../Article/Article';
import ExploreWorld from '../ExploreWorld/ExploreWorld';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Work from '../Work/Work';



const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center"><Spinner animation="border" /></div>
    }
    return (
        // home section
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