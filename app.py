import streamlit as st
import numpy as np
import pandas as pd
import pickle
from tavily_utils import fetch_gold_news, get_sentiment_score, ask_tavily

# Load SARIMAX model
with open("SarimaxModel.pkl", "rb") as f:
    model = pickle.load(f)

st.set_page_config(page_title="Gold Price Prediction", layout="wide")
st.title("🌟 Gold Price Prediction App (SARIMAX Model)")

# 📥 User Inputs
st.header("📥 Enter Last 7 Days of Gold Prices")
last_7_days = []
cols = st.columns(7)
for i, col in enumerate(cols):
    price = col.number_input(f"Day {i+1}", min_value=0.0, format="%.2f", value=None)
    last_7_days.append(price)

if st.button("📈 Predict Next Day Price"):
    if all(p is not None and p > 0 for p in last_7_days):
        # Prepare input as DataFrame with column names 'lag1' to 'lag7'
        input_data = np.array(last_7_days).reshape(1, -1)
        exog_input = pd.DataFrame(input_data, columns=[f"lag{i}" for i in range(1, 8)])

        # Predict next day price
        prediction = model.forecast(steps=1, exog=exog_input)
        predicted_price = prediction.iloc[0]  # ✅ FIXED HERE

        st.success(f"💰 Predicted Gold Price: ${predicted_price:.2f}")
        price_per_gram = predicted_price / 31.1035
        price_inr = price_per_gram * 84.93
        st.markdown(f"💎 Price per gram (INR): ₹{price_inr:.2f}")
    else:
        st.error("Please enter valid prices for all 7 days.")


st.markdown("---")

# 📰 News Section
st.header("📰 Live Gold News")
news_articles = fetch_gold_news()
if news_articles:
    for article in news_articles[:8]:
        title = article.get("title", "No Title")
        desc = article.get("body", "")[:200].strip() + "..."
        url = article.get("url", "#")
        st.markdown(f"### 🔗 [{title}]({url})", unsafe_allow_html=True)
        st.write(desc)
        st.markdown("---")
else:
    st.warning("No news available at the moment.")

# 🤖 Tavily Q&A
st.header("🤖 Ask Tavily About Gold")
question = st.text_input("What do you want to know about gold?")
if st.button("Ask"):
    if question:
        answer = ask_tavily(question)
        st.info(answer)
    else:
        st.warning("Please enter a question.")

