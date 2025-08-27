import React from 'react'
import { ChartBarIcon, NewspaperIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gold-400 to-gold-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Gold Price Forecasts,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
              Live News & AI Insights
            </span>{' '}
            in One Place
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Predict, explore, and chat—all in a modern dashboard. Get accurate SARIMAX-powered forecasts, 
            real-time market news, and AI-driven insights to make informed gold investment decisions.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#prediction" className="btn-primary">
              Start Forecasting
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
          
          {/* Feature Icons */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Accurate Predictions</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <NewspaperIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Live Market News</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Chat Assistant</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Chart Visualization */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:block animate-float">
        <div className="w-64 h-40 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4">
          <div className="flex items-end justify-between h-full space-x-1">
            {[40, 65, 45, 80, 55, 90, 70, 85].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-gold-400 to-gold-600 rounded-t"
                style={{ height: `${height}%`, width: '12%' }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-gold-400 to-gold-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  )
}

export default Hero