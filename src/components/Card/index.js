import React from 'react';

import { 
    Container, 
    CardHeader, 
    CardBody, 
    CardFooter,
    FoorterLine,
    FoorterDate,
} from './styles';

export default function Card({
    cityName = 'Teste',
    country = 'Tt',
    temperature = 0,
    humidity=75,
    pressure=892,
    lastUpdate = new Date(),
}) {
  return (
    <Container
        humidity={humidity}
        pressure={pressure}
    >
        <CardHeader>
            <h2>
                {cityName}, 
                <span>{country}</span>
            </h2>
        </CardHeader>

        <CardBody 
            temperature={temperature}
            humidity={humidity}
            pressure={pressure}
        >
            <p>
                {temperature}
                <span>°</span>
            </p>
        </CardBody>

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
                Updated at {lastUpdate.toLocaleTimeString('en', {
                    hour: '2-digit',
                    minute:'2-digit',
                    second: '2-digit',
                })}
            </FoorterDate>
            
        </CardFooter>
    
    </Container>
  );
}
