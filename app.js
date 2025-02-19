
function addElement(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li)

}
addElement('CSS')

function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li)

    }
    addOptiLanguage('Golang')

const repName = document.querySelector("li:first-child")
const elementName = document.createElement('li')
elementName.textContent = "Java"
repName.replaceWith(elementName)

const thirdName = document.querySelector("li:nth-child(4)")
const changeNameEle = document.createElement('li')
changeNameEle.textContent = 'Mojo'
thirdName.replaceWith(changeNameEle)

