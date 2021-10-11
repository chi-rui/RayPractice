let photoData;

// XMLHttpRequest
async function getPhotosByXhr() {
  return new Promise((resolve, reject) => {
    
    let xhr = new XMLHttpRequest();
    let token = 'P-30lrIUvH1bGoB1PncqxDePpYxCbKUYHeWp3952Fv0';
    let url = `https://api.unsplash.com/photos/?client_id=${token}`;
    
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if(this.status >= 200 && this.status < 400) {
          photoData = JSON.parse(this.response);
          console.log(photoData);
          // addToGalary();
          resolve(photoData);
      };
    };
    
    xhr.onerror = function() {
      reject('Error');
    };
    
    xhr.send();
  });
}

// Fetch()
async function getPhotosByFetch() {
  let token = 'P-30lrIUvH1bGoB1PncqxDePpYxCbKUYHeWp3952Fv0';
  //# Correct url
  let url = `https://api.unsplash.com/photos/?client_id=${token}`;
  //# Wrong url
  // let url = `https://api.unsplash.com/photos/`;

  return fetch(url)
    .then(
      (response) => {
        //# response object is the whold http request/response object
        // console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          //# Log to record can be here!
          // console.error(`Fail connection with status ${response.status}`);
          return undefined;
        }
      }
    );
}

async function refreshGalary() {
  // # Use XmlHttpRequest 
  // let response = await getPhotosByXhr();
  
  // # Use fetch
  let response = await getPhotosByFetch();
  
  console.log(response);
  if (response) {
    let galary = document.getElementById('galary');
    galary.innerHTML = "";
    response.forEach(photo => {
      galary.innerHTML += `<img src=${photo.urls.small} class='galary_imgs' />`;
    });
  }
}