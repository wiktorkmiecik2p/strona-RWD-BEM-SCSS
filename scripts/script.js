let l_f = document.getElementById("fortnite_link");
let l_m = document.getElementById("minecraft_link");
let l_c = document.getElementById("csgo_link");

let l_f2 = document.getElementById("fortnite_link2");
let l_m2 = document.getElementById("minecraft_link2");
let l_c2 = document.getElementById("csgo_link2");

let of_m_f = document.getElementById("offer_more--fortnite");
let of_m_m = document.getElementById("offer_more--minecraft");
let of_m_c = document.getElementById("offer_more--csgo");

l_f.addEventListener("click", () => {
  of_m_c.style.display = "none";
  of_m_c.classList.remove("offer_more--shown");

  of_m_m.style.display = "none";
  of_m_m.classList.remove("offer_more--shown");

  of_m_f.style.display = "flex";
  of_m_f.classList.add("offer_more--shown");
});

l_m.addEventListener("click", () => {
  of_m_c.style.display = "none";
  of_m_c.classList.remove("offer_more--shown");

  of_m_f.style.display = "none";
  of_m_f.classList.remove("offer_more--shown");

  of_m_m.style.display = "flex";
  of_m_m.classList.add("offer_more--shown");
});

l_c.addEventListener("click", () => {
  of_m_m.style.display = "none";
  of_m_m.classList.remove("offer_more--shown");

  of_m_f.style.display = "none";
  of_m_f.classList.remove("offer_more--shown");

  of_m_c.style.display = "flex";
  of_m_c.classList.add("offer_more--shown");
});

l_f2.addEventListener("click", () => {
  of_m_c.style.display = "none";
  of_m_c.classList.remove("offer_more--shown");

  of_m_m.style.display = "none";
  of_m_m.classList.remove("offer_more--shown");

  of_m_f.style.display = "flex";
  of_m_f.classList.add("offer_more--shown");
});

l_m2.addEventListener("click", () => {
  of_m_c.style.display = "none";
  of_m_c.classList.remove("offer_more--shown");

  of_m_f.style.display = "none";
  of_m_f.classList.remove("offer_more--shown");

  of_m_m.style.display = "flex";
  of_m_m.classList.add("offer_more--shown");
});

l_c2.addEventListener("click", () => {
  of_m_m.style.display = "none";
  of_m_m.classList.remove("offer_more--shown");

  of_m_f.style.display = "none";
  of_m_f.classList.remove("offer_more--shown");

  of_m_c.style.display = "flex";
  of_m_c.classList.add("offer_more--shown");
});
