  let apiItem;
  nasaAPI = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=3fq4jsnL7lK5G13mOGdJAtyNbhMgZ8rE0JRz4cBy')
        .then((res) => res.json())
        .then((data) => {
          document.querySelector('h6').innerHTML = data.date;
          let main = document.querySelector('main');
          let h2 =document.createElement('h2');
          main.appendChild(h2).innerHTML = data.title;
          let myImage = new Image(500, 500);
          myImage.src = data.url;
          main.appendChild(myImage);
          let p = document.createElement('p');
          main.appendChild(p).innerHTML = data.explanation
          
          
        
        })
  }
  nasaAPI()

