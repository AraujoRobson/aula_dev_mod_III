const URL = 'movies.xml'
const PARSER = new DOMParser()

function list_titles(mode, XML){
  const titles = XML.getElementsByTagName('title')
  console.log('Request by: ' + mode)
  for(title of titles){
    console.log(title.innerHTML);
  }
}

function insert_content(XML){
  const MOVIES = $(XML).find('movie')
  let html = '<ul>'
  $("#iContent").empty()
  $("#iContent").append('<hr>')

  MOVIES.each(function (){
    let title = $(this).find('title').text()
    html += `<li><strong>${title}</strong></li>`
    html += '<ul>'
    $(this).find('actor').each((idx, elem) => {
      html += `<li>${elem.innerHTML}</li>`
    })
    html += '</ul>'
  })
  html += '</ul>'
  $("#iContent").append(html)
}

function getMoviesXHR(){
  let ajax = new XMLHttpRequest();
  ajax.onreadystatechange = () => {
    if (ajax.readyState == 4){
      if (ajax.status == 200){
        const XML = ajax.responseXML;
        list_titles('XMLHttpRequest', XML)
        insert_content(XML)

        console.log('Request completed successfully!')
        console.log('The status of the response is:', ajax.status);
      } else if (ajax.status == 404){
        console.log('404 Not Found')
      }
    }
  }
  ajax.open('GET', URL)
  ajax.send();
}

function getMoviesAjax(){
  $.ajax({
    type: 'GET',
    url: 'movies.xml',
    dataType: 'xml',
    success: XML => {
      list_titles('Ajax + jQuery', XML)
      insert_content(XML)
    },
    error: () => console.log('404 Not Found')
  })
}

function getMoviesFetch(){
  const OPTIONS = {
    method: 'GET',
    mode: 'cors',
  }
  fetch(URL)
    .then(response => {
      console.log(response)
      return response.text()
    })
    .then(content => {
      const XML = PARSER.parseFromString(content, 'text/xml')
      list_titles('Fetch API', XML)
      insert_content(XML)
    })
    .catch((error) => console.log('404 Not Found'))
}

async function getMoviesAA(){
  const response = await fetch(URL)
  const data = await response.text()
  const XML = await PARSER.parseFromString(data, 'text/xml')

  list_titles('Async/Await', XML)
  insert_content(XML)
}
