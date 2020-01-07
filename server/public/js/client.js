$(document).ready(function(){
  const spaceshipParts = [];

  $.ajax({
    type: 'GET',
    url: '/hello'
  }).then(function(data){
    $('h1').text(data);
  }).catch(function(error){
    console.log('The "/hello" ajax get request failed with error: ', error);
  });

  getParts();

  function getParts(){
    $.ajax({
      type: 'GET',
      url: '/parts'
    }).then(function(partsData){
      displayParts(partsData);
    }).catch(function(error){
      console.log('The "/parts" ajax get request failed with error: ', error);
    })
      
    getRocketPossibleCount();
  }

  function displayParts(partThings){
    $('tbody').empty();
    for(let i = 0; i < partThings.length; i++){
      let newRow = $('<tr>');
      newRow.data('partId', partThings[i].id);
      newRow.append('<td>' + partThings[i].name + '</td>');
      newRow.append('<td>' + partThings[i].needed + '</td>');
      newRow.append('<td>' + partThings[i].inStock + '</td>');
      $('tbody').append(newRow);
    }
  }

  // New part
  $('#newPartInfo').on('submit', function(event) {
    event.preventDefault();
    let newPartObject = {};
    let fields = $('#newPartInfo').serializeArray();
    fields.forEach(function(element, index, array) {
      newPartObject[element.name] = element.value;
    });
    $('#newPartInfo').find('input[type=text]').val('');
    $('#newPartInfo').find('input[type=number]').val('');

    saveNewPart(newPartObject);
  });

  function saveNewPart(newestPart){
    $.ajax({
      type: 'POST',
      url: '/parts/new',
      data: newestPart
    }).then(function(response){
      console.log(response);
      getParts();
    }).catch(function(error){
      console.log('The "/part" ajax post request failed with error: ', error);
    })
    
  }

  // Calculate number of rockets you can build
  function getRocketPossibleCount(){
    $.ajax({
      type: 'GET',
      url: '/parts/rocketCount',
    }).then(function(data){
      console.log(data);
      $('#numberOfSpaceships').text(data.count);
    }).catch(function(error){
      console.log('The "/rocketCount" ajax get request failed with error: ', error);
    })
  }

});
