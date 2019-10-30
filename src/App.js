import React from 'react'
import './utils/api'
import GlobalStyle from './styles/global'
import Main from './screens/Main'
import { requestWeather } from './utils/api'

import cities from './config/cities.json'

class App extends React.Component {

  state = {
    weathers: []
  }

  getWeather = async (item) => {
    
    const { weathers } = this.state
    try {
      const { main, lastUpdate } = await requestWeather(item.name, item.country)



      return ([...weathers, {
          ...item,
          error: false,
          ...main,
          lastUpdate,
        }]
      )

    } catch(error) {

      return (
        [...weathers, {
          ...item,
          error: true
        }]
      )
    } 
  }

  requestWeathers = async () => {

    for(let i = 0; i < cities.length; i++) {
      try  {
        const data = await this.getWeather(cities[i])

        this.setState({ weathers: data })
      }catch(error) {
        console.log(error)
      }
      
    }
  }

  componentDidMount() {
    if(this.state.weathers.length === 0) {
        this.requestWeathers()
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
