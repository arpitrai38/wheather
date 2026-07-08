async function search(){
    let a = document.getElementById("city").value;
    // console.log(a)

    const key='634d18546ad7d1d421f489c9d8ade896'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${key}&unit = metric`
    let res = await fetch(url)
    let data= await res.json();
    console.log(data);
    document.querySelector('.a h3').innerHTML= `Temp = ${data.main.temp} ℃`

   document.querySelector('.a h4').innerHTML = `City = ${data.name}`
    document.querySelector('.a h4.time').innerHTML = `Time-Zone = ${data.timezone}`
     document.querySelector('.a h4.count').innerHTML = `City = ${data.sys.country}`


    // console.log(res)
}









// https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=634d18546ad7d1d421f489c9d8ade896