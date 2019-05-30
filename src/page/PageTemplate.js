import React from 'react';
import MainMenuList from '../component/MainMenuList'
import SearchPerformance from '../component/SearchPerformance'
import MenuHeader from '../component/Header'
import { Container } from '@material-ui/core';

const PageTemplate = ({inner}) => {
    return (
        <Container>
            <header>
                <MenuHeader/>
            </header>
            <body>
                <SearchPerformance/>
            </body>
        </Container>
    );
};

export default PageTemplate;