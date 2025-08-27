import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Investment Analyst",
      company: "Goldman Sachs",
      content: "GoldPredict's SARIMAX model has been incredibly accurate for our short-term forecasting needs. The real-time news integration gives us the context we need for better decision making.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Portfolio Manager",
      company: "Fidelity Investments",
      content: "The AI chat feature is a game-changer. It's like having a gold market expert available 24/7. The insights are spot-on and help us make informed investment decisions.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Commodities Trader",
      company: "JP Morgan",
      content: "I've been using GoldPredict for 6 months now. The prediction accuracy is impressive, and the multi-currency support makes it perfect for our global operations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ]

  const stats = [
    { label: "Active Users", value: "10,000+" },
    { label: "Prediction Accuracy", value: "94.2%" },
    { label: "Countries Served", value: "50+" },
    { label: "Daily Forecasts", value: "1M+" }
  ]

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-gold-600 dark:text-gold-400">
            Trusted by professionals
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Join thousands of satisfied users
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="card p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-gold-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Trusted by leading financial institutions worldwide
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Goldman Sachs</div>
            <div className="text-2xl font-bold text-gray-400">JP Morgan</div>
            <div className="text-2xl font-bold text-gray-400">Fidelity</div>
            <div className="text-2xl font-bold text-gray-400">BlackRock</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials