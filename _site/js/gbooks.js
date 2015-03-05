$(document).ready(function() {
 $.get(
  "https://www.googleapis.com/books/v1/users/111229343672475185570/bookshelves/3/volumes",
  function(data) {
    booksDiv = $(".booklist");
    items = data.items;

    var list = booksDiv.append('<ul></ul>').find('ul');

    for (i=0; i < items.length; i++) {

      /* set up some easy to read vars */
      bookAuthor = String(items[i].volumeInfo.authors).replace(/,/g, ", ");
      bookTitle = String(items[i].volumeInfo.title).replace(/,/g, ", ");
      bookThumbnail = String(items[i].volumeInfo.imageLinks.thumbnail);
      bookURL = String(items[i].volumeInfo.infoLink);
      
      // list.append('<li><span class="book-title">' + 
      //   bookTitle + '</span><span class="book-author">by ' + 
      //   bookAuthor + '</span></li>');

      list.append('<li><div class="book-thumbnail"><a href="' + bookURL + '" target="_blank"></div><span class="book-title">' + 
      bookTitle + '</span><span class="book-author">' + 
      bookAuthor + '</span></a></li>');

      // <img src="' + bookThumbnail + '" />
    }    

    console.log(data);
  }
  );

});