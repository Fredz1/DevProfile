$('#headImageContainer').on(
  'mouseover',
  () => {
    $('#headContainer').css(
      {
        'background-color': 'white',
        'color': 'black'
      }
    )
  }
)
$('#headImageContainer').on(
  'mouseout',
  () => {
    $('#headContainer').css(
      {
        'background-color': 'black',
        'color': 'white'
      }
    )
  }
)