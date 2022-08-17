// ####### DOM CHALLENGE #######


// ### header section ###

// creating the logo and appending it to the header
let myHeader = document.createElement("div")
myHeader.className = "header"

let myLogo = document.createElement("div")
myLogo.setAttribute("class", "logo")
let logoText = document.createTextNode("Elzero")
myLogo.append(logoText)
myHeader.append(myLogo)

// creating the links and appending them to the header
let myLinks = document.createElement("ul")
myLinks.className = "links"

let homeLink = document.createElement("li")
let aboutLink = document.createElement("li")
let servicesLink = document.createElement("li")
let contactLink = document.createElement("li")
let linksName = "HomeAboutServicesContact"

let linksArray = [homeLink, aboutLink, servicesLink, contactLink]

linksArray[0].append(linksName.slice(linksName.indexOf("Home"), linksName.indexOf("About")))
linksArray[1].append(linksName.slice(linksName.indexOf("About"), linksName.indexOf("Services")))
linksArray[2].append(linksName.slice(linksName.indexOf("Services"), linksName.indexOf("Contact")))
linksArray[3].append(linksName.slice(linksName.indexOf("Contact")))

for(let i = 0; i < linksArray.length; i++){
  myLinks.append(linksArray[i])
}

myHeader.append(myLinks)


// styling the header
myHeader.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding:10px"
// styling the logo
myLogo.style.cssText = "font-weight: bold; font-size:21px; color:#f44336;"
// styling the ul
myLinks.style.cssText = "list-style: none; display: flex;"
// styling the li
for(let i = 0; i < linksArray.length; i++){
  linksArray[i].style.cssText = "font-size: 10px; margin-right: 8px; rgb(160 153 153);"
}


// ### content section ###

let myContent = document.createElement("div")
myContent.setAttribute("class", "content")

let myProduct = []
myProduct.length = 15
console.log(myProduct)


for(let i = 0; i < myProduct.length; i++){
  myProduct[i] = document.createElement("div")
  let mySpan = document.createElement("span")
  let productText = document.createTextNode("Product")
  myProduct[i].className = `product-${i+1}`
  mySpan.append(`${i+1}`)
  myProduct[i].append(mySpan)
  // myProduct[i].mySpan.append(`${i+1}`)
  myProduct[i].append(productText)
  myContent.append(myProduct[i])
}

// styling the products container
myContent.style.cssText = "background-color: #d6d6d6; padding: 20px; display:grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap:20px"
// styling the product and span
for(let i = 0; i < myProduct.length; i++){
  myProduct[i].style.cssText = "padding: 15px; background-color:white; color:rgb(160 153 153);text-align:center; border-radius:3px; display:flex; flex-direction:column; font-size: 12px"
  myProduct[i].firstElementChild.style.cssText = "flex:1; font-size: 19px margin: 10px 0; font-size: 20px; color:black"
}


// ### footer section ###

let myFooter = document.createElement("div")
myFooter.setAttribute("class", "footer")
let footerText = document.createTextNode("Copyright 2022")
myFooter.appendChild(footerText)

myFooter.style.cssText = "background-color: #f44336; color: white; text-align:center; padding:15px"
document.body.style.cssText = `font-family: 'Open Sans', sans-serif;`
document.body.append(myHeader)
document.body.append(myContent)
document.body.append(myFooter)