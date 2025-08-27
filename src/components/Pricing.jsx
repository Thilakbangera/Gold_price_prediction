import React from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with gold price predictions',
      features: [
        { name: '5 predictions per day', included: true },
        { name: 'Basic news feed', included: true },
        { name: 'Limited AI chat (10 messages/day)', included: true },
        { name: 'USD pricing only', included: true },
        { name: 'Email support', included: true },
        { name: 'Multi-currency support', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'API access', included: false },
        { name: 'Priority support', included: false },
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'per month',
      description: 'Ideal for traders and investment professionals',
      features: [
        { name: 'Unlimited predictions', included: true },
        { name: 'Premium news feed', included: true },
        { name: 'Unlimited AI chat', included: true },
        { name: 'Multi-currency support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Email & chat support', included: true },
        { name: 'Historical data export', included: true },
        { name: 'API access', included: false },
        { name: 'Priority support', included: false },
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'For institutions and large-scale operations',
      features: [
        { name: 'Everything in Professional', included: true },
        { name: 'Full API access', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Priority support', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Custom reporting', included: true },
        { name: 'SLA guarantee', included: true },
        { name: 'White-label options', included: true },
        { name: 'Volume discounts', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  return (
    <div id="pricing" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-gold-600 dark:text-gold-400">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Choose the right plan for you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Start free and scale as your needs grow. All plans include our core prediction engine.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card p-8 relative animate-slide-up ${
                plan.popular 
                  ? 'ring-2 ring-gold-500 scale-105' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center">
                    {feature.included ? (
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <XMarkIcon className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${
                      feature.included 
                        ? 'text-gray-700 dark:text-gray-300' 
                        : 'text-gray-400 dark:text-gray-500'
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <span>✓ Cancel anytime</span>
            <span>✓ 99.9% uptime SLA</span>
            <span>✓ SOC 2 compliant</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing