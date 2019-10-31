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

function calcFooterSize(humidity, pressure, isLoading, error) {
  if(humidity && pressure && !isLoading && !error) {
    return '130px'
  }

  if(!humidity && !pressure && !isLoading && !error) {
    return '110px'
  }

  return '30px'
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
  height: calc(100% - ${({humidity, pressure, isLoading, error}) => calcFooterSize(humidity, pressure, isLoading, error)});
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;

  p {
      font-size: 83px;
      font-weight: 300;
      color: ${props => selectTemperatureColor(props.temperature)};
  }

  span {
    font-size: 40px;
    line-height: 56px;
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

export const ErrorContainer = styled.div`

  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: -40px;

  p {
    font-size: 18px;
  }
`

export const ErrorButton = styled.button.attrs({
  type: 'button',
})`
  background: transparent;
  padding: 10px 18px;
  border-radius: 24px;
  box-shadow: none;
  border: 3px solid #737C84;
  color: #737C84;
  font-size: 16px;
  cursor: pointer;
  font-weight: 100;
`