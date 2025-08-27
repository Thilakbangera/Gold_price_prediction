import React, { useState, useEffect } from 'react'
import { NewspaperIcon, ExternalLinkIcon, ClockIcon } from '@heroicons/react/24/outline'

const NewsTab = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  // Sample news data
  const sampleNews = [
    {
      id: 1,
      title: "Gold Prices Surge Amid Global Economic Uncertainty",
      summary: "Gold prices reached new highs this week as investors seek safe-haven assets amid growing concerns about global economic stability and inflation.",
      url: "#",
      publishedAt: "2025-01-02T10:30:00Z",
      source: "Financial Times"
    },
    {
      id: 2,
      title: "Central Bank Gold Purchases Hit Record Levels",
      summary: "Central banks worldwide continue to increase their gold reserves, with purchases reaching unprecedented levels in the fourth quarter.",
      url: "#",
      publishedAt: "2025-01-02T08:15:00Z",
      source: "Reuters"
    },
    {
      id: 3,
      title: "Mining Companies Report Strong Q4 Gold Production",
      summary: "Major gold mining companies exceeded production targets in Q4, signaling robust supply despite challenging market conditions.",
      url: "#",
      publishedAt: "2025-01-01T16:45:00Z",
      source: "Bloomberg"
    },
    {
      id: 4,
      title: "Digital Gold Investment Platforms See Massive Growth",
      summary: "Online gold investment platforms report 300% increase in new users as younger investors embrace digital precious metals trading.",
      url: "#",
      publishedAt: "2025-01-01T14:20:00Z",
      source: "MarketWatch"
    },
    {
      id: 5,
      title: "Federal Reserve Policy Impact on Gold Markets",
      summary: "Analysts discuss how upcoming Federal Reserve decisions could significantly impact gold prices and investor sentiment in precious metals.",
      url: "#",
      publishedAt: "2025-01-01T11:30:00Z",
      source: "CNBC"
    },
    {
      id: 6,
      title: "Sustainable Gold Mining Practices Gain Momentum",
      summary: "Environmental concerns drive adoption of sustainable mining practices, potentially affecting gold supply chains and pricing structures.",
      url: "#",
      publishedAt: "2024-12-31T09:15:00Z",
      source: "Wall Street Journal"
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNews(sampleNews)
      setLoading(false)
    }, 1500)
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Live Gold Market News
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Loading the latest news and market updates...
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="card p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Live Gold Market News
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Stay updated with the latest gold market news and analysis from trusted financial sources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((article, index) => (
          <div 
            key={article.id} 
            className="card p-6 hover:scale-105 transition-transform duration-200 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <NewspaperIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
                  {article.title}
                </h4>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <ClockIcon className="w-4 h-4" />
                  <span>{formatDate(article.publishedAt)}</span>
                  <span>•</span>
                  <span className="font-medium">{article.source}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {article.summary}
            </p>
            
            <a
              href={article.url}
              className="inline-flex items-center space-x-2 text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-medium transition-colors"
            >
              <span>Read more</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="btn-secondary">
          Load More News
        </button>
      </div>
    </div>
  )
}

export default NewsTab