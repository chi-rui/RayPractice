function resolveAfterSeconds(text, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
			if (text) {
        resolve(text);
      } else {
				reject('text undefined');
			}      
    }, delay);
  });
}

async function asyncCall() {
  try {
    console.log('calling');
    console.log(await resolveAfterSeconds('first', 2000));
    console.log(await resolveAfterSeconds('second', 1000));
    console.log(await resolveAfterSeconds(undefined, 1000));
    console.log(await resolveAfterSeconds('last', 5000));
    console.log('all finish');
  } catch (err) {
    console.log('Promise rejected!');
  }
}

asyncCall();