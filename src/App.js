import { useEffect, useState } from "react";
import "./App.css";

// Material UI imports
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//END


function App() {

  // Use State starts
  const [quoteInfo, setQuoteInfo] = useState({});
  const [bgColor, setBgColor] = useState("");
// ENDS


// Random color array
  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
  ];

// sets a random color
  const setRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 7);
    const randomColor = colors[randomIndex];
    setBgColor(randomColor);
  };

// ENDS


// Fetch API to get random quote
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
        setRandomColor();
      });
  };

 //USE Effect starts
  useEffect(() => {
    getQuote();
 // eslint-disable-next-line   
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  // ENDS



  return (
// Main Div Start
    <div className="App"  >



<Card sx={{ minWidth: 275 }}>
      <div id="quote-box">
      <CardContent>
      <Typography variant="body2">
     " {quoteInfo.text}"
        </Typography> 
        <br></br>
       {quoteInfo.author}
        </CardContent>


        
        <Button onClick={getQuote} id="new-quote">
          New Quote
        </Button>
      
        <a
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text" +
            quoteInfo.text
          }
          target="_top"
          id="tweet-quote"
        ><Button>
          Post to Twitter
          </Button>
        </a>
        
      </div>




      </Card>
    {/* Main Div ENDS */}
    </div>
  );
}

export default App;
