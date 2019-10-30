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
    name = 'Teste',
    country = 'Tt',
    temp = 0,
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
                {name}, 
                <span> {country}</span>
            </h2>
        </CardHeader>

        <CardBody 
            temperature={temp}
            humidity={humidity}
            pressure={pressure}
        >
            <p>
                {temp}
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
                Updated at {lastUpdate}
            </FoorterDate>
            
        </CardFooter>
    
    </Container>
  );
}
