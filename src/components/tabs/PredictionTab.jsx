import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { CurrencyDollarIcon, TrendingUpIcon } from '@heroicons/react/24/outline'

const PredictionTab = () => {
  const [prices, setPrices] = useState(Array(7).fill(''))
  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)

  // Sample historical data for visualization
  const historicalData = [
    { day: 'Day 1', price: 1950 },
    { day: 'Day 2', price: 1965 },
    { day: 'Day 3', price: 1940 },
    { day: 'Day 4', price: 1975 },
    { day: 'Day 5', price: 1960 },
    { day: 'Day 6', price: 1980 },
    { day: 'Day 7', price: 1970 },
  ]

  const handlePriceChange = (index, value) => {
    const newPrices = [...prices]
    newPrices[index] = value
    setPrices(newPrices)
  }

  const handlePredict = async () => {
    const validPrices = prices.filter(p => p && parseFloat(p) > 0)
    if (validPrices.length !== 7) {
      alert('Please enter valid prices for all 7 days.')
      return
    }

    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const avgPrice = validPrices.reduce((sum, p) => sum + parseFloat(p), 0) / 7
      const randomVariation = (Math.random() - 0.5) * 100
      const predictedPrice = avgPrice + randomVariation
      
      setPrediction({
        price: predictedPrice.toFixed(2),
        pricePerGram: (predictedPrice / 31.1035).toFixed(2),
        priceINR: ((predictedPrice / 31.1035) * 84.93).toFixed(2)
      })
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Gold Price Prediction
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Enter the last 7 days of gold prices to get an AI-powered forecast for tomorrow.
        </p>
      </div>

      {/* Price Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {prices.map((price, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Day {index + 1}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                value={price}
                onChange={(e) => handlePriceChange(index, e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-gold-500 focus:border-gold-500 dark:bg-gray-700 dark:text-white"
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Predict Button */}
      <div className="text-center">
        <button
          onClick={handlePredict}
          disabled={loading}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Predicting...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <TrendingUpIcon className="h-5 w-5" />
              <span>Predict Next Day Price</span>
            </div>
          )}
        </button>
      </div>

      {/* Prediction Results */}
      {prediction && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="text-center space-y-4">
            <h4 className="text-xl font-semibold text-green-800 dark:text-green-200">
              Prediction Results
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-600 dark:text-gray-400">USD per oz</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${prediction.price}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-600 dark:text-gray-400">USD per gram</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${prediction.pricePerGram}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-600 dark:text-gray-400">INR per gram</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ₹{prediction.priceINR}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chart Visualization */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Price Trend Visualization
        </h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" className="text-sm" />
              <YAxis className="text-sm" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#f59e0b', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default PredictionTab