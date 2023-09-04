document.querySelector(function(){

  document.querySelector("a").forEach(function(){

    if (document.querySelector(this).getAttribute("href") == window.location.pathname){

      document.querySelector(this).classList.add("selected");
    }
  }
  );
}
);
