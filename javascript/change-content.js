// Use Jqury to grab the entire document and use a funciton
$(function() {
    // Grab all the li elements with the text pine and replace the text with 'almonds'
    $('li:contains("pine")').text('almonds');
    //Get all 'li' with the class 'hot' and use a function to return the li text wrapped in '<em>'
    // Hint: Use 'this' to reference the new jQuery object. aka all the li elements you just selected
    $('li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>'
    });
    // Remove li with the 'id' of 'one'
    $('li#one').remove();
});