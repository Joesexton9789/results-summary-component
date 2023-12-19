const categories = document.querySelector('ul')
const resultNumber = document.getElementById('result-number')
const text = document.querySelector('.text')
const resultOutcome = document.getElementById('result-outcome')
const btn = document.getElementById('continue')

async function getData() {
  categories.innerHTML = null
  const res = await fetch('./data.json')
  const data = await res.json()

  data.forEach(category => {
    const result = document.createElement('li')

    result.innerHTML = `
    <div class=${category.category.toLowerCase()}>
    <span class='icon'
      ><img
        src=${category.icon}
        alt="${category.category.toLowerCase()} icon" /></span
    >${
      category.category.slice(0, 1).toUpperCase() + category.category.substr(1)
    }
  </div>
  <div class="display-result"><span>${category.score} </span>/ 100</div>
    `

    categories.appendChild(result)
  })

  setResult()
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

function setResult() {
  const result = getRandomNumber()
  console.log(result)
  resultNumber.innerText = result

  console.log(resultOutcome)
  console.log(text)
  if (result >= 75) {
    resultOutcome.innerText = 'Great'
    text.innerHTML = `
    You scored higher than <span id="result-percent">65</span>% of the
          people who have taken these tests.
    `
  } else if (result >= 55) {
    resultOutcome.innerText = 'Good'
    text.innerHTML = `
    You scored higher than <span id="result-percent">50</span>% of the
          people who have taken these tests.
    `
  } else if (result < 55) {
    resultOutcome.innerText = 'Poor'
    text.innerHTML = `
    You scored higher than <span id="result-percent">35</span>% of the
          people who have taken these tests.
    `
  }
}

btn.addEventListener('click', getData)
getData()
