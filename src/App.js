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
    const response = await this.getWeather(item, true)

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

  getWeather = async (item, isUpdated = undefined) => {
    
    try {
      const { main, lastUpdate } = await requestWeather(item.name, item.country)
  
      //Mock data to get an error the first time
      if(item.name === 'Nairobi' && !isUpdated) {
        throw new Error();
      }

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
            humidity: (item.name === 'Nuuk' || item.name === 'Nairobi') ? undefined : response.humidity,
            pressure: (item.name === 'Nuuk' || item.name === 'Nairobi') ? undefined : response.pressure,
          })
        }
        return item
      })

      this.setState({ weathers: newData })
      
    }
  }

  componentDidMount() {
    if(this.state.weathers.length === 0) {
        this.setState({ weathers: [...data] }, () => this.requestWeathers())
    }
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
