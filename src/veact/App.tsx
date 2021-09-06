/**
 * @file App component
 * @author Surmon <https://github.com/surmon-china>
 */

import React from 'react'
import { onMounted, useReactivity } from 'veact'

export const App: React.FC = () => {

  onMounted(() => {
    console.info(`Veact Run!`)
  })

  return (
    <div className="app" id="app">
      veact run!
    </div>
  )
}
