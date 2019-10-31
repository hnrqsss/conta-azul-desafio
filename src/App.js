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

  getWeather = async (item) => {
    
    try {
      const { main, lastUpdate } = await requestWeather(item.name, item.country)

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
          return response
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
          getWeather={this.getWeather}
        />
      </>
    )
  }
}

export default App
