import styled from 'styled-components';

function selectTemperatureColor(temperature) {
  if(temperature <= 5) {
    return '#69A3FF'
  }
  
  if(temperature <= 25) {
    return '#FF9632'
  }

  return '#ED1946'
}

function calcFooterSize(hasProps) {
  return hasProps ? '130px' : '110px'
}

export const Container = styled.div`
  width: 280px;
  height: ${props => (props.humidity && props.pressure) 
    ? '300px'
    : '260px'
  };
  background: #FFF;
  box-shadow: 3px 4px 10px rgba(51,51,51,0.1);
  flex-direction: column;

  @media (max-width: 909px){
    margin: 20px;
  }
`

export const CardHeader = styled.div`
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  border-bottom:1px solid #EBEBEB;

  h2 {
    font-weight: 100;
    color: #B4B4B4;
  }

  span {
    text-transform: uppercase;
  }
`

export const CardBody = styled.div`
  height: calc(100% - ${({humidity, pressure}) => calcFooterSize(humidity && pressure)});
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;

  p {
      font-size: 95px;
      font-weight: 300;
      color: ${props => selectTemperatureColor(props.temperature)};
  }

  span {
    font-size: 40px;
    line-height: 68px;
    vertical-align: text-top;
  }
`

export const CardFooter = styled.div`
    height: ${props => (props.humidity && props.pressure) 
    ? '80px'
    : '60px'
  };
  background-color: rgba(241,241,241,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FoorterLine = styled.div`
  
  display: flex;
  flex-direction: row;
  width: 100%;

  div {
    flex: 1;
    display: ${({humidity, pressure}) => (humidity && pressure)
      ? 'flex'
      : 'none'
    };
    align-items: center;
    justify-content: center;
    height: 40px;
    flex-direction: column;

    p, span {
      font-size: 14px;
      display: block;
      color: #d2d2d2;
    }

    span {
        color: #737C84;
        font-size: 16px;
    }
  }
`

export const FoorterDate = styled.div`
  font-size: 11px;
  color: #D8D2D2;
`