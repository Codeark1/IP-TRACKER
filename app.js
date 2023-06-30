// const body = document.body
// // body.style.backgroundColor= "red"
// body.style.cssText = `background-color:red; height:100vh`
// const input = document.querySelector("input")
// input.addEventListener("change", ip)

// const ip = (e)=>{
//     const query = e.target.value
//     fetch(`http://ip-api.com/json/{query}`)
//     .then((response)=>{
//         response.json()
//         console.log(response);
//     })
//     .then((data)=>{
//         console.log(data);
//     })
// }
// ip()

// const h1 =document.querySelector("h1")
// const input = document.querySelector("input")
// input.addEventListener("change", ()=>{
//     // e.preventDefault()
// //    const value = e.target.value
//    fetch(`http://ip-api.com/json/123.123.123.123`)
//    .then((response)=>{
// return response.json()
//    })
//    .then((data)=>{
//     console.log(data);
//     if(data.status == "success"){
//         h1.innerHTML = data.country

//     } 
//    })


// })







// btn.addEventListener("click", ()=>{
//     fetch(`http://ip-api.com/json/${input}`)
//     .then((response)=>{
// response.json()
//     })
//    .then((data)=>{
// console.log(data);
// if (data.status == "success"){
//     h1.innerHTML = data.lat
// }

//    })
// })
// btn.addEventListener("click", getIp )
// function getIp() {
//     fetch(`http://ip-api.com/json/${value}`)
//     .then((response)=>{
// return response.json()
//     })
//     .then((data)=>{
//         console.log(data);
//         if(data.status == 'success'){
//             // h1.innerHTML = data.country
//         }
//     })
    
// }
// // getIp()


const result_1 = document.getElementById("h2-1")
const result_2 = document.getElementById("h2-2")
const result_3 = document.getElementById("h2-3")
const result_4 = document.getElementById("h2-4")



const input = document.getElementById("input")
const value = input.value
const btn = document.getElementById("btn")
btn.addEventListener("click", getLocation )
 
function  getLocation() {
    fetch(`http://ip-api.com/json/${input.value}`)
    
    .then((response)=>{
return response.json()
    })
    .then ((data)=>{
        console.log(data);
        if(data.status == 'success'){
                 console.log(data.lat);
                 result_1.innerText = data.country
                 result_2.innerText = data.city
                 result_3.innerText = data.isp
                //  result_4.innerText = data.
             }
    })
  
}
    