import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import PredictionTab from './tabs/PredictionTab'
import NewsTab from './tabs/NewsTab'
import ChatTab from './tabs/ChatTab'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabSwitcher = () => {
  const tabs = [
    { name: 'Prediction', component: PredictionTab },
    { name: 'News', component: NewsTab },
    { name: 'Chat AI', component: ChatTab },
  ]

  return (
    <div id="prediction" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Interactive Dashboard
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Explore our comprehensive suite of tools for gold market analysis and forecasting.
          </p>
        </div>

        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-white dark:bg-gray-900 p-1 shadow-lg max-w-md mx-auto">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-gold-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels className="mt-8">
            {tabs.map((tab, idx) => (
              <Tab.Panel
                key={idx}
                className="rounded-xl bg-white dark:bg-gray-900 p-8 shadow-xl ring-white ring-opacity-60 ring-offset-2 ring-offset-gold-400 focus:outline-none focus:ring-2 animate-fade-in"
              >
                <tab.component />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default TabSwitcher