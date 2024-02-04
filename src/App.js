import React, { Component } from 'react'
import ConditionalRendering from './Components/ConditionalRendering/ConditionalRendering'
import NotifCount from './Components/NotifCount/NotifCount'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* session 62 */}
        <ConditionalRendering></ConditionalRendering>

        {/* session 63 and 64 */}
        <NotifCount>
          
        </NotifCount>
      </div>
    )
  }
}
