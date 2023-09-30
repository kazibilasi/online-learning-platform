/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import PlatformService from '../PlatformService/PlatformService';
import ExploreCategory from '../ExploreCategory/ExploreCategory';
import CourseFeatured from '../CourseFeatured/CourseFeatured';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <PlatformService></PlatformService>
            <ExploreCategory></ExploreCategory>
            <CourseFeatured></CourseFeatured>
        </div>
    );
};

export default Home;