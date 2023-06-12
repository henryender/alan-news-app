import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Home from "./components/Home";
import { Typography } from "@mui/material";
import Results from "./components/Results";
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  const [country, setCountry] = useState([])
  const [source, setSource] = useState([])
  const [category, setCategory] = useState([])
  const navigate = useNavigate()
  const newsApiKey = 'd23791a3849e45959624c7899864343b';
  const alanKey = '68136bc18e7852fc991daed74269272d2e956eca572e1d8b807a3e2338fdd0dc/stage'
  useEffect(() => {


    alanBtn({
      key: alanKey,
      onCommand: ({ command, source, category, country }) => {



        if (command === 'newHeadlines') {
          const NEWS_API = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${newsApiKey}`
          fetch(NEWS_API).then(res => res.json())
            .then(data => setSource(data.articles))
          navigate('/results')
        }

        if (command === 'newCategory') {
          const NEWS_API = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${newsApiKey}`
          fetch(NEWS_API).then(res => res.json())
            .then(data => setCategory(data.articles))
          navigate('/results')
        }

        if (command === 'newCountry') {
          const NEWS_API = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${newsApiKey}`
          fetch(NEWS_API).then(res => res.json())
            .then(data => setCountry(data.articles))
          navigate('/results')
        }

        if (command === 'back') {
          navigate('/')
        }
      }
    })

  }, [navigate])

  console.log(category)
  return (
    <>
      <Routes>
        <Route path="/" element={<div style={{ marginLeft: '2%', marginTop: '1%' }}>
          <Typography variant="h4" fontWeight={700}>Alan NewsAI Application</Typography>

          <Typography fontWeight={1000}
            sx={{ fontSize: { lg: '15px', md: '15px', sm: '15px', xs: '12px' }, color: 'gray' }}>
            <ul>
              <li> Use the Power of AI to make wonders!</li>
              <li>Please read the hints on each cards below</li>
              <li> Then click the microphrone at the bottom right corner.</li>
              <li>Optional hints: You can ask Alan "Who are you" or "What is your name" and flow with the conversation.</li>
              <li>You can say "Thank you so much Alan or Nice job Alan" after showing search results.</li>
              <li>You can say "Go back or Go back to home page" after showing search results.</li>
              <li>Happy Chatting!</li>
            </ul>
          </Typography>
          <Home />
        </div>} />

        <Route path="/results" element={<Results country={country} source={source} category={category} />} />

      </Routes>



    </>

  );
}
export default App;
