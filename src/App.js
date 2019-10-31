import React from 'react'
import './utils/api'
import GlobalStyle from './styles/global'
import Main from './screens/Main'
import { requestWeather } from './utils/api'

import data from './config/data.json'

class App extends React.Component {

  state = {
    weathers: []
  }

  updateWeathers = async (item)  => {
    const response = await this.getWeather(item)

    const newData = this.state.weathers.map(item => {

      if(item.name === response.name) {
        return ({ 
          ...response,
          //Mock data to always get humidity and pressure if city is different of the Uruburici
          humidity: (item.name !== 'Urubici') ? undefined : response.humidity,
          pressure: (item.name !== 'Urubici') ? undefined : response.pressure,
          error: false,
        })
      }
      return item
    })

    this.setState({ weathers: newData })

  }

  getWeather = async (item) => {
    
    try {
      const { main, lastUpdate } = await requestWeather(item.name, item.country)
  
      //Mock data to get an error in Nairobi request
      // if(item.name === 'Nairobi') {
      //   throw new Error();
      // }

      return ({
        ...item,
        error: false,
        isLoading: false,
        ...main,
        lastUpdate,
      })

    } catch(error) {

      return ({
        ...item,
        error: true,
        isLoading: false,
      })
    } 
  }

  requestWeathers = async () => {

    for(let i = 0; i < data.length; i++) {
      
      const response = await this.getWeather(data[i])
      
      const newData = this.state.weathers.map(item => {

        if(item.name === response.name) {
          return ({ 
            ...response,
            humidity: (item.name !== 'Urubici') ? undefined : response.humidity,
            pressure: (item.name !== 'Urubici') ? undefined : response.pressure,
          })
        }
        return item
      })

      this.setState({ weathers: newData }, () => localStorage.setItem('@weathers', JSON.stringify(newData)))
      
    }
  }

  componentDidMount() {

    const localData = JSON.parse(localStorage.getItem('@weathers'))
        
        
    if(this.state.weathers.length === 0 && !localData) {
        
        this.setState({ weathers: [...data] }, () => {
          this.requestWeathers()
        })
    } else {
      this.setState({ weathers: localData })
    }

    this.autoRequest()
  }

  autoRequest = () => {
      setInterval(() => {
        this.requestWeathers()
        localStorage.removeItem('@weathers')
      }, 600000)//10 minutes
  }

  componentWillUnmount() {
    localStorage.setItem('@weathers', JSON.stringify(this.state.weathers))
    this.autoRequest()
  }
  
  render() {
    return (
      <>
        <GlobalStyle />
        <Main 
          weathers={this.state.weathers}
          getWeather={this.updateWeathers}
        />
      </>
    )
  }
}

export default App
