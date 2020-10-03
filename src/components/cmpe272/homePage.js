import React from 'react'
import TopNav from './topNav'
import About from './about'
import Product from './product'
import Contact from './contact'
import News from './news'

export default function HomePage(){

    return(
        <div className="homePage">
            <TopNav/>
            <About/>
            <Product/>
            <News/>
            <Contact/>
        </div>
    )
}