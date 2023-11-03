// выбираю корневой элемент
const root = document.querySelector('#root')

// создаем секцию, добавляем класс и вешаем на корневой элемент
const firstSection = document.createElement('section')
firstSection.classList.add('first-section')
root.appendChild(firstSection)

// создаем h1, добавляем текст
const heading = document.createElement('h1')
heading.textContent = 'РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ'

// создаем p, добавляем текст
const paragraphsSection = document.createElement('p')
paragraphsSection.textContent = 'стадионы, газопроводы, мосты, дамбы'

//создаем контейнер
const divForNumberItems = document.createElement('div')
divForNumberItems.classList.add('div-for-number-items')

// создаем 4 дива
for (let i = 0; i <= 3; i++) {
  const numberItem = document.createElement('div')
  numberItem.classList.add('number-item')
  const headerNumberItem = document.createElement('h3')
  headerNumberItem.textContent = '26'
  const secondNumberItem = document.createElement('h4')
  secondNumberItem.textContent = 'лет'
  const thirdNumberItem = document.createElement('h5')
  thirdNumberItem.textContent = 'на рынке'
  numberItem.appendChild(headerNumberItem)
  numberItem.appendChild(secondNumberItem)
  numberItem.appendChild(thirdNumberItem)
  divForNumberItems.appendChild(numberItem)
}

// вешаем  все элементы на первую секцию
firstSection.appendChild(heading)
firstSection.appendChild(paragraphsSection)
firstSection.appendChild(divForNumberItems)

// ВТОРАЯ СЕКЦИЯ
const secondSection = document.createElement('section')
secondSection.classList.add('second-section')
root.appendChild(secondSection)

const heading2 = document.createElement('h2')
heading2.textContent = 'НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ'

const divForProjects = document.createElement('div')
divForProjects.classList.add('projects-container')

for (let i = 0; i < 3; i++) {
  const project = document.createElement('div')
  project.classList.add('project')

  // внутренние элементы
  const image = document.createElement('img')

  image.setAttribute('src', './images/stadium.svg')
  image.setAttribute('alt', 'stadium')
  const heading3 = document.createElement('h3')
  heading3.textContent = 'Арена'
  const paragraph = document.createElement('p')
  paragraph.textContent =
    'Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.'

  project.appendChild(image)
  project.appendChild(heading3)
  project.appendChild(paragraph)
  divForProjects.appendChild(project)
}
secondSection.appendChild(heading2)
secondSection.appendChild(divForProjects)

// ТРЕТЬЯ СЕКЦИЯ
const thirdSection = document.createElement('section')
thirdSection.classList.add('third-section')
root.appendChild(thirdSection)

const textContainer = document.createElement('div')
const heading2_banner = document.createElement('h2')
heading2_banner.textContent = 'САМЫЕ УМНЫЕ ПРОЕКТЫ'

const heading3_banner = document.createElement('h3')
heading3_banner.textContent = 'РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ!'

const button_banner = document.createElement('button')
button_banner.textContent = 'ВАШ ЗАПРОС'

// добавляем
textContainer.appendChild(heading2_banner)
textContainer.appendChild(heading3_banner)
thirdSection.appendChild(textContainer)
thirdSection.appendChild(button_banner)

// ЧЕТВЕРТАЯ
const forthSection = document.createElement('section')
forthSection.classList.add('forth-section')
root.appendChild(forthSection)

const heading2_4 = document.createElement('h2')
heading2_4.textContent = 'ЧЕМ МЫ ЗАНИМАЕМСЯ'

const divForActivities = document.createElement('div')
divForActivities.classList.add('what-we-do-container')

for (let i = 0; i < 3; i++) {
  const project = document.createElement('div')
  project.classList.add('what-we-do')

  // внутренние элементы
  const image = document.createElement('img')

  image.setAttribute('src', './images/building.svg')
  image.setAttribute('alt', 'building')
  const heading3 = document.createElement('h3')
  heading3.textContent = 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ'

  project.appendChild(image)
  project.appendChild(heading3)

  divForActivities.appendChild(project)
}
forthSection.appendChild(heading2_4)
forthSection.appendChild(divForActivities)

// ПЯТАЯ
const fifthSection = document.createElement('section')
fifthSection.classList.add('forth-section')
root.appendChild(fifthSection)

const heading2_5 = document.createElement('h2')
heading2_5.textContent = 'ЧЕМ МЫ ЗАНИМАЕМСЯ'

const divForActivities2 = document.createElement('div')
divForActivities2.classList.add('what-we-do-container')

for (let i = 0; i < 6; i++) {
  const project = document.createElement('div')
  project.classList.add('what-we-do')

  // внутренние элементы

  const image = document.createElement('img')

  image.setAttribute('src', './images/building.svg')
  image.setAttribute('alt', 'building')
  const heading3 = document.createElement('h3')
  heading3.textContent = 'СТРОИТЕЛЬСТВО ОФИСНЫХ ЗДАНИЙ'

  project.appendChild(image)
  project.appendChild(heading3)

  if (i === 0) {
    project.removeChild(image)
  }

  divForActivities2.appendChild(project)
}
fifthSection.appendChild(heading2_5)
fifthSection.appendChild(divForActivities2)
