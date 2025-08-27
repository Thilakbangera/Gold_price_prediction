import React from 'react'
import { 
  ChartBarIcon, 
  NewspaperIcon, 
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

const Features = () => {
  const features = [
    {
      name: 'SARIMAX Predictions',
      description: 'Advanced time series forecasting using SARIMAX models for highly accurate gold price predictions.',
      icon: ChartBarIcon,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Real-time News',
      description: 'Stay updated with the latest gold market news and analysis from trusted financial sources.',
      icon: NewspaperIcon,
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'AI Chat Assistant',
      description: 'Get instant answers to your gold investment questions with our intelligent AI assistant.',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Multi-Currency Support',
      description: 'View prices in USD, INR, and other major currencies with real-time conversion rates.',
      icon: CurrencyDollarIcon,
      color: 'from-gold-500 to-gold-600',
    },
    {
      name: 'Live Updates',
      description: 'Get real-time price updates and market movements as they happen.',
      icon: ClockIcon,
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Mobile Responsive',
      description: 'Access your gold forecasts and insights on any device, anywhere, anytime.',
      icon: DevicePhoneMobileIcon,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      name: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.',
      icon: ShieldCheckIcon,
      color: 'from-teal-500 to-teal-600',
    },
    {
      name: 'Lightning Fast',
      description: 'Get predictions and insights in milliseconds with our optimized infrastructure.',
      icon: BoltIcon,
      color: 'from-yellow-500 to-yellow-600',
    },
  ]

  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gold-600 dark:text-gold-400">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Choose GoldPredict?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Comprehensive gold market analysis tools designed for modern investors and traders.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="flex flex-col animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features