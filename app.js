
function addElement(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li)

}
addElement('CSS')




const thirdName = document.querySelector("li:nth-child(3)")
const changeNameEle = document.createElement('li')
changeNameEle.textContent = 'Mojo'
thirdName.replaceWith(changeNameEle)



function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li)

    }
    addOptiLanguage('golang')

    
const changeName = document.querySelector("li:last-child")
const nameRep = document.createElement('li')
nameRep.textContent = 'HTML'
changeName.replaceWith(nameRep)


