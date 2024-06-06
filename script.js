// memo紙會隨著輸入內容的量而變長，內有scrollbar。
let plus = document.querySelector("#plus");
let right = document.querySelector(".right");
plus.onclick = function() {
  let div = document.createElement("div");
  div.classList.add("memo");
  div.innerHTML = `
<div class="insideLeft roboto-slab" >
  <div class="content">
  <!-- <input class="output" type="text" value="1223" > -->
  </div>
<div class="levelfather">

  <div class="level roboto-slab">high</div>
</div>

</div>
<div class="insideRight">
   <input type="checkbox" class="tickfather" >
</div>
  `;

  right.appendChild(div);

  let tickfather = div.querySelector(".tickfather")
  tickfather.onclick = function() {
    let animation = div.animate([
      // keyframes
      { transform: "translateY(0px)", opacity: '1' },
      { transform: "translateY(-700px)", opacity: '0' }
    ], {
      // timing options
      duration: 1000,
    });

    animation.onfinish = (event) => {
      div.style.display = "none";
    }

  }

  let input = document.querySelector(".inputbox");
  let output = div.querySelector(".content");
  output.innerHTML = input.value;

  let selector = document.querySelector(".prioritybar");
  let level = div.querySelector(".level");


  level.innerHTML = selector.value;
  if (selector.value == "Low") {
    level.style.backgroundColor = "#FFFF99";
  }
  else if (selector.value == "Medium") {
    level.style.backgroundColor = "#FBD697"
  }
  else if (selector.value == "High") {
    level.style.backgroundColor = "#f6b3b2"
  }

  div.animate([
    // keyframes
    { transform: "translateY(700px)", opacity: '0' },
    { transform: "translateY(0px)", opacity: '1' }
  ], {
    // timing options
    duration: 800,
  });

}

