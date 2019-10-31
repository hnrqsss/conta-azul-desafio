import React from 'react';

import { Loader } from '../index'

import { 
    Container, 
    CardHeader, 
    CardBody, 
    CardFooter,
    FoorterLine,
    FoorterDate,
    ErrorContainer,
    ErrorButton,
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
    isLoading,
    error,
    requestData
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
            error={error}
        >
            {(!isLoading && !error) && (
                <p>
                    {temp}
                    <span>°</span>
                </p>
            )} 
            { isLoading && <Loader />}

            {(!isLoading && error) && (
                <ErrorContainer>
                    <p>Something went wrong</p>
                    <ErrorButton
                        onClick={() => requestData({
                            name,
                            country,
                            temp,
                            humidity,
                            pressure,
                            lastUpdate,
                            isLoading,
                            error,
                        })}
                    >
                        Try Again
                    </ErrorButton>
                </ErrorContainer>
            )}
            
        </CardBody>
        { (!isLoading && !error) && (
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
