setInterval(() => {
   
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let hh = document.getElementById('hr');
    let mm = document.getElementById('mn');
    let ss = document.getElementById('sc');

    hr.style.transform = `rotate(${h* 30}deg)`; // 360/60 = 6
    mn.style.transform = `rotate(${m * 6}deg)`; // 360/60 = 6
    sc.style.transform = `rotate(${s * 6}deg)`; // 360/12 = 30
})