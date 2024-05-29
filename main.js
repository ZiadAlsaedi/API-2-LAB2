let imageName=document.getElementById("name")
let image=document.getElementById("image")
let btn=document.getElementById("btn")
let text=document.getElementById("text")
let viewImage=document.getElementById("view")
viewImage.classList.add("card-list")

let btn2=document.getElementById("btn2")
let container=document.querySelector('.container')
container.appendChild(view)


async function setImages(){
   let res= await fetch('https://6657369e9f970b3b36c865b0.mockapi.io/Images', {
        method: 'POST',
        body: JSON.stringify({
          imageName: imageName.value,
          image:image.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

    let data=await res.json()
    text.innerText=data.imageName
    viewImage.src=data.image
}


async function getImages(){
    let res= await fetch('https://6657369e9f970b3b36c865b0.mockapi.io/Images', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

    let data=await res.json()
    console.log(data);
    data.forEach( (element) => {
    let car =document.createElement('img')
    let name =document.createElement("p")
    let input =document.createElement("button")
    let card =document.createElement('div')
    card.classList.add("card-item")
    car.classList.add("Image")

input.classList.add("btno")
    input.innerText="DELETE"
    input.addEventListener("click",async function deleteImages(){
        let res= await fetch(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${element.id}`, {
             method: 'DELETE',
             body: JSON.stringify({
               imageName: imageName.value,
               image:image.value
             }),
             headers: {
               'Content-type': 'application/json; charset=UTF-8',
             },
           })
     
         let data=await res.json()
         text.innerText=data.imageName
         viewImage.src=data.image
     }
     )
    name.innerText=element.imageName
    car.src=element.image
    console.log(car);
    console.log(name);
    card.append(input)
    card.append(car)
    card.append(name)
    view.append(card)

    })
}

getImages()


// async function deletImages(){
//     let res= await fetch('https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`', {
//         method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })

//     let data=await res.json()
//     console.log(data);
//     data.forEach( (element) => {
//     let car =document.createElement('img')
//     let name =document.createElement("p")
//     let input =document.createElement("button")
//     input.innerText="button"
//     name.innerText=element.imageName
//     car.src=element.image
//     console.log(car);
//     console.log(name);
//     view.append(car)
//     document.body.append(input)
//     view.append(name)
    
//     })
// }