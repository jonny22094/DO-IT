const storage = window.localStorage;
let list = JSON.parse(storage.getItem("TODO")) || [];

const createWorks = text => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement( "i" );

    a.innerHTML = text;

    i.className = "fas fa-trash";
    i.addEventListener("click", () => {
      if(list.length === 1) list = [];
      else list.splice(list.indexOf(text), 1);

      li.parentNode.removeChild(li);
      storage.setItem("TODO", JSON.stringify(list));
      console.log(list);
    });

    li.appendChild(a);
    li.appendChild(i);
    document.getElementsByTagName("ul")[0].appendChild(li);
}

const createNewWork = () => {
  let input = document.getElementById("text");

  if(input.value !== "") {
      list.push(input.value);
      storage.setItem( "TODO", JSON.stringify(list));

      createWorks(input.value);
      input.value = "";
  }
}

document.getElementsByTagName("form")[0].addEventListener("submit" , e => {
    e.preventDefault();
    createNewWork();
}, false );

list.map(text => createWorks(text));
