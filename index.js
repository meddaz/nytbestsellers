

var url = 'https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=DT9tiNTO3lwwxEtEnKkICKQfETZIWApG';

$.getJSON(url, function (data) {
  console.log(data);
  var info = data.results.lists;

  var books = info.books;

  var date = data.results;
  var pubDate = new Date(date.bestsellers_date);



  pubInfo.innerHTML = `


 <p class="dateInfo">${pubDate.toUTCString()}</p>
 <br>
 <p class="description dateInfo">${date.published_date_description}</p>

  `;

  var imagesCPEF = info[0].books;

  for (var i = 0; i < imagesCPEF.length; i++) {


    cpef.innerHTML += `<p>${imagesCPEF[i].rank}</p> <img class="preview" src="${imagesCPEF[i].book_image}" alt="Cover of ${imagesCPEF[i].title}">`


      ;
  }

  var imagesCPENF = info[1].books;

  for (var i = 0; i < imagesCPENF.length; i++) {


    cpenf.innerHTML += `<p>${imagesCPENF[i].rank}</p>  <img class="preview" src="${imagesCPENF[i].book_image}" alt="Cover of ${imagesCPENF[i].title}">`;
  }

  var imagesHF = info[2].books;

  for (var i = 0; i < imagesHF.length; i++) {

    hf.innerHTML += `<p>${imagesHF[i].rank}</p> <img class="preview"  src="${imagesHF[i].book_image}" alt="Cover of ${imagesHF[i].title}">`;
  }


  var imagesNF = info[3].books;

  for (var i = 0; i < imagesNF.length; i++) {


    nf.innerHTML += `<p>${imagesNF[i].rank}</p> <img class="preview" src="${imagesNF[i].book_image}" alt="Cover of ${imagesNF[i].title}">`;
  }

  var imagesTFP = info[4].books;

  for (var i = 0; i < imagesTFP.length; i++) {


    tfp.innerHTML += `<p>${imagesTFP[i].rank}</p> <img class="preview" src="${imagesTFP[i].book_image}" alt="Cover of ${imagesTFP[i].title}">`;
  }

  var imagesPBNF = info[5].books;

  for (var i = 0; i < imagesPBNF.length; i++) {


    pbnf.innerHTML += `<p>${imagesPBNF[i].rank}</p> <img class="preview" src="${imagesPBNF[i].book_image}" alt="Cover of ${imagesPBNF[i].title}">`;
  }


  var imagesAHTM = info[6].books;

  for (var i = 0; i < imagesAHTM.length; i++) {


    ahtm.innerHTML += `<p>${imagesAHTM[i].rank}</p> <img class="preview" src="${imagesAHTM[i].book_image}" alt="Cover of ${imagesAHTM[i].title}">`;
  }
});