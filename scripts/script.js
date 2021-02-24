let l_f = document.querySelector("#fortnite_link");
let l_m = document.getElementById("minecraft_link");
let l_c = document.getElementById("csgo_link");

let of_m_f = document.getElementById("offer_more--fortnite");
let of_m_m = document.getElementById("offer_more--minecraft");
let of_m_c = document.getElementById("offer_more--csgo");

l_f.addEventListener("click", () => {
  of_m_c.style.visibility = "hidden";
  of_m_c.classList.remove("offer_more--shown");

  of_m_m.style.visibility = "hidden";
  of_m_m.classList.remove("offer_more--shown");

  of_m_f.style.visibility = "visible";
  of_m_f.classList.add("offer_more--shown");
});

l_m.addEventListener("click", () => {
  of_m_c.style.visibility = "hidden";
  of_m_c.classList.remove("offer_more--shown");

  of_m_f.style.visibility = "hidden";
  of_m_f.classList.remove("offer_more--shown");

  of_m_m.style.visibility = "visible";
  of_m_m.classList.add("offer_more--shown");
});

l_c.addEventListener("click", () => {
  of_m_m.style.visibility = "hidden";
  of_m_m.classList.remove("offer_more--shown");

  of_m_f.style.visibility = "hidden";
  of_m_f.classList.remove("offer_more--shown");

  of_m_c.style.visibility = "visible";
  of_m_c.classList.add("offer_more--shown");
});
