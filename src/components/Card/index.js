import React from 'react';

import { Loader } from '../index'

import { 
    Container, 
    CardHeader, 
    CardBody, 
    CardFooter,
    FoorterLine,
    FoorterDate,
} from './styles';

export default function Card({
    name = '',
    country = '',
    temp,
    humidity,
    pressure,
    lastUpdate = new Date().toLocaleTimeString('en', {
        hour: '2-digit',
        minute:'2-digit',
        second: '2-digit',
    }),
    isLoading
}) {
  return (
    <Container
        humidity={humidity}
        pressure={pressure}
    >
        <CardHeader>
            <h2>
                {name}, 
                <span> {country}</span>
            </h2>
        </CardHeader>

        <CardBody 
            temperature={temp}
            humidity={humidity}
            pressure={pressure}
        >
            {!isLoading ? (
                <p>
                    {temp}
                    <span>°</span>
                </p>
            ) : (
                <Loader />
            )}
        </CardBody>
        { !isLoading && (
            <CardFooter
                humidity={humidity}
                pressure={pressure}
                lastUpdate={lastUpdate}
            >
                <FoorterLine
                    humidity={humidity}
                    pressure={pressure}
                >
                    <div>
                        <p>HUMIDITY</p>
                        <span>{humidity} %</span>
                    </div>
                    <div>
                        <p>PRESSURE</p>
                        <span>{pressure} hPa</span>
                    </div>
                </FoorterLine>

                <FoorterDate>
                    Updated at {lastUpdate}
                </FoorterDate>
                
            </CardFooter>
        )}
    
    </Container>
  );
}
