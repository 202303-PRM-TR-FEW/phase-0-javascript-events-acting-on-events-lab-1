// Your code here
// Your code here
const dodger = document.querySelector('#dodger');
dodger.style.backgroundColor = '#FF69B4'
dodger.style.bottom = '0px'
dodger.style.left = '100px'

// dodger.addEventListener('keydown', (e) => {
//   console.log('sd')
// })

document.addEventListener("keydown", function (e) {
  console.log(e.key)
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    console.log('sdafa')
    moveDodgerRight();
  } else if ( e.key === 'ArrowUp'){
    moveDodgerUp();
  } else if ( e.key === 'ArrowDown'){
    moveDodgerDown();
  }
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  dodger.style.left = `${left + 1}px`;
}

function moveDodgerUp(){
  const bottomNumbers = dodger.style.bottom.replace('px', '');
  const bottom = parseInt(bottomNumbers, 10);
  dodger.style.bottom = `${bottom + 1}`
}

function moveDodgerDown(){
  const bottomNumbers = dodger.style.bottom.replace('px', '');
  const bottom = parseInt(bottomNumbers, 10);
  dodger.style.bottom = `${bottom - 1}`
}

