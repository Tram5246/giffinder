// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  function appendImageToBody(srcURL) {
    // this function appends an <img> to the body with the
    // URL provided in the parameters
    $("").replaceWith("<img src=" + srcURL + ">");
}

// DO NOT MODIFY ABOVE THIS LINE. READ THE COMMENTS BELOW TO COMPLETE THE FUNCTIONS.

// write a function that will return a url for the giphy API with
// the searchTerm provided in the parameters
function giphyURLWithSearchTerm(searchTerm) {
return "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
}           


function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
        // modify this url to take the searchTerm into account (hint: which function gives you the api url with a searchTerm as a parameter?)
        url: giphyURLWithSearchTerm(searchTerm),
        method: "GET",
        success: function(response) {
            var url = response.data[0].images.original.url;
            // call the appendImageToBody function to add the image to the page
            appendImageToBody(url);
      },
    }); 
}

// Fix the click handler so that callGiphyAPIWithSearchTerm is called with the user's input
$("button").click(function (){
    var searchTerm = $("#srch-term").val();
    callGiphyAPIWithSearchTerm(searchTerm);


});
  
  
  
});
