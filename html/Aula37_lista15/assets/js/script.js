let name_channel = 'unoescoficial'
let credential = key

$(document).ready(function(){
  Fancybox.bind("[data-fancybox-plyr]", {})
  console.log('Working JQuery and uploaded script.js')

  $.get('https://www.googleapis.com/youtube/v3/channels',{
    part: 'contentDetails',
    forUsername: name_channel,
    key: credential
    },
    content => {
      let code_upload = content.items[0].contentDetails.relatedPlaylists.uploads
      console.log(content, 'upload code:', code_upload)

      getVideo(code_upload)
    }
  )

  function getVideo(code){
    $.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      part: 'snippet',
      maxResults: 10,
      playlistId: code,
      key: credential
    }, content => {
      $.each(content.items, (_, item) => {
        let img, title, file, published_at, description, video
        img = item.snippet.thumbnails.medium.url
        title = item.snippet.title

        moment.locale('pt')
        published_at = new moment(item.snippet.publishedAt).format('DD [de] MMMM [de] YYYY')

        description = item.snippet.description;
        description = description.replace(/((https?|file|ftp):\/\/[\w?=&.\/-;#~%-]+(\w\s?&.\/;#~%"=-]*>))/g,
                                        '<a href="$1" target="_blank">$1</a>')

        video = item.snippet.resourceId.videoId

        file = `<li class="main">
                  <div class="photo">
                    <a data-fancybox-plyr href="https://www.youtube.com/watch?v=${video}">
                      <img src="${img}">
                    </a>
                    <div class="caption">
                      <h5>${title}</h5>
                      <p>
                        ${description}
                        <br>
                        Data da publicação: ${published_at}
                      </p>
                    </div>
                  </div>
                </li>`


        $('#iWindow ul').append(file)
      })
    })
  }
})
