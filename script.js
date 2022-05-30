const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      bars=body.querySelector("#bars-3line-drow"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


const toggle= () =>{
    sidebar.classList.toggle("close");
    
    if(bars.classList.contains("fa-xmark")){
    bars.classList.remove('fa-xmark');
    bars.classList.add("fa-bars");
    }else{
    bars.classList.add('fa-xmark');
    bars.classList.remove("fa-bars");
    }
}

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});