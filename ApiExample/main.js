let photoData;

function getPhotos() {
  return new Promise((resolve, reject) => {
    
    let xhr = new XMLHttpRequest();
    let token = 'P-30lrIUvH1bGoB1PncqxDePpYxCbKUYHeWp3952Fv0';
    let url = `https://api.unsplash.com/photos/?client_id=${token}`
    
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

async function refreshGalary() {
  let response = await getPhotos();
  if (response.length > 0) {
    let galary = document.getElementById('galary');
    galary.innerHTML = "";
    response.forEach(photo => {
      galary.innerHTML += `<img src=${photo.urls.small} class='galary_imgs' />`;
    });
  }
}