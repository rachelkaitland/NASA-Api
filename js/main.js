
document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto(){
  const date = document.querySelector('input').value

  fetch(`https://api.nasa.gov/planetary/apod?api_key=8YWycwXqsYxzDDmmRNcF6ALGZqb5XMAVxVAuKQfR&date=${date}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url 
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}