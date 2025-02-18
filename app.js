  const div = document.createElement('div')
    console.log(div)
    div.className= 'firstName'
    div.setAttribute("title", "generated title")
    div.style.backgroundColor= 'orange'
    
    div.style.color="red"
    div.style.width = "200px"
    div.style.borderRadius= "15px"
    div.style.fontSize= "25px"
    div.style.fontWeight= "bold"

    div.style.padding='15px'
    const addText = document.createTextNode("Hello Everyone")
     div.appendChild(addText)
     
    document.body.appendChild(div)
   