````markdown
# 🪙 Gold Price Prediction App

A modern Streamlit web application to forecast gold prices using machine learning and visualize real-time market sentiment. It also integrates **Tavily AI** to enhance predictions with relevant news and sentiment analysis.

---

## 🚀 Features

- 📈 **Gold Price Prediction** using SARIMAX time series model
- 📰 **Live News Feed** from Tavily AI related to gold
- 😊 **Sentiment Analysis** of the news to detect market mood
- 🤖 **Tavily Q&A Assistant** – ask any gold-related question
- 📊 Interactive visualizations
- ⚡ Fast and responsive UI powered by Streamlit

---

## 🛠️ Tech Stack

- **Frontend**: [Streamlit](https://streamlit.io/)
- **ML Model**: SARIMAX (from `statsmodels`)
- **NLP API**: [Tavily AI](https://www.tavily.com/)
- **Language**: Python 3.9
- **Deployment**: Streamlit Community Cloud
- **Data**: Historical gold price CSV

---

## 🧠 Models Used

- **SARIMAX**: Forecasting time series prices using autoregression and moving averages.
- **Sentiment**: Simple Vader-based scoring from Tavily's summarized articles.

---

## 📁 File Structure

```plaintext
Gold_price_prediction/
│
├── app.py                      # Main Streamlit app
├── app.ipynb                   # Notebook version
├── SarimaxModel.pkl            # Trained SARIMAX model
├── gold_price_data.csv         # Historical price data
├── tavily_utils.py             # Tavily integration functions
├── requirements.txt            # Python dependencies
├── .streamlit/
│   └── secrets.toml            # Encrypted API key for Tavily
└── __pycache__/                # Cached files
````

---

## 🧪 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/Thilakbangera/Gold_price_prediction.git
cd Gold_price_prediction
```

### 2. Create virtual environment (optional but recommended)

```bash
python -m venv venv
source venv/bin/activate     # On Windows: venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Set Tavily API Key

Create a `.streamlit/secrets.toml` file with the following:

```toml
TAVILY_API_KEY = "your-api-key-here"
```

> ⚠️ If you're deploying on [Streamlit Cloud](https://streamlit.io/cloud), set this in the **"Secrets"** section of the app dashboard.

---

## ▶️ Run the App Locally

```bash
streamlit run app.py
```

---

## ☁️ Deployment (Streamlit Cloud)

1. Push code to GitHub:
   [https://github.com/Thilakbangera/Gold\_price\_prediction](https://github.com/Thilakbangera/Gold_price_prediction)

2. Visit: [https://streamlit.io/cloud](https://streamlit.io/cloud)

3. Click **“New App”** → Connect your GitHub → Choose this repo.

4. In **App settings**, set the main file as:

```
app.py
```

5. Under **Secrets**, paste:

```toml
TAVILY_API_KEY = "your-api-key-here"
```

6. Click **Deploy** 🚀

---

## 🧠 How It Works

* SARIMAX is trained on past 7-day gold prices to predict future values.
* Tavily fetches real-time articles about gold and summarizes them.
* Each article is scored for sentiment polarity to gauge public/market mood.
* All info is combined in an intuitive, real-time Streamlit dashboard.

---

## 📌 Example Use Cases

* 📊 For traders/investors monitoring gold trends
* 📰 For analysts who want news sentiment tied to pricing
* 🎓 For students learning time series forecasting

---

## 👨‍💻 Author

**Thilak Bangera**
📬 [LinkedIn](https://www.linkedin.com/in/thilakbangera) | 📁 [Portfolio](https://github.com/Thilakbangera)
