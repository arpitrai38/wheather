async function search(){
    let a = document.getElementById("city").value;
    // console.log(a)

const key = API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${key}&units=metric`;
    let res = await fetch(url)
    let data= await res.json();
    console.log(data);
    document.querySelector('.a h3').innerHTML= `Temp = ${data.main.temp} ℃`

   document.querySelector('.a h4').innerHTML = `City = ${data.name}`
    document.querySelector('.a h4.time').innerHTML = `Time-Zone = ${data.timezone}`
     document.querySelector('.a h4.count').innerHTML = `Country = ${data.sys.country}`


    // console.log(res)
}







