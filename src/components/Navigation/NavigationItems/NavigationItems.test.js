import React from 'react'
import {configure,shallow} from 'enzyme'//shallow is the best alternative to rendering comp in many circumstances
//it renders the content but not deeply
import Adapter from 'enzyme-adapter-react-16'//config for enzyme to adjust with react version

import NavigationItems from './NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter:new Adapter()})//enzyme connedted with react

describe('<NavigationItems />',()=>{
    it('should render two <Navigation /> elements if not authenticated ',()=>{
        const wrapper=shallow(<NavigationItems />)
        //expactations- things you watn to check
        expect(wrapper.find(NavigationItem).toHaveLength(2))//want o chaek if we fing NavigationItem
    })
})  