import React from 'react'
import {SwapiServiceConsumer} from '../swapi-service-context';
 
const withSwapiService = (Wrap)=> {
    return (props)=> {
        return (
        <SwapiServiceConsumer>
            {(swapiService)=>{

                return <Wrap {...props} swapiService = {swapiService} />
            }}
        </SwapiServiceConsumer>
        );
    }
}

export {withSwapiService}