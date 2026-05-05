// ================= Typing Effect =================
const words = ["Python Developer", "Web Designer", "ML Engineer"];
let i = 0, j = 0, isDeleting = false;

function type(){
  let word = words[i];
  document.getElementById("typing").textContent = word.substring(0, j);

  if(!isDeleting && j < word.length) j++;
  else if(isDeleting && j > 0) j--;
  else{
    isDeleting = !isDeleting;
    if(!isDeleting) i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();


// ================= Scroll Animation =================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));


// ================= Open Modal =================
function openProject(title, desc, link){
  const modal = document.getElementById("projectModal");

  modal.classList.add("show");

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalLink").href = link;
}


// ================= Close Modal =================
function closeModal(){
  document.getElementById("projectModal").classList.remove("show");
}


// ================= Close when clicking outside =================
window.onclick = function(e){
  const modal = document.getElementById("projectModal");
  if(e.target === modal){
    modal.classList.remove("show");
  }
};