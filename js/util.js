async function loadHTML(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

$(function() {
  // Dynamically determine correct path based on current page depth
  const pathPrefix = window.location.pathname.includes("product-detail") ? "../" : "./";
  $("#header").load(pathPrefix + "util/header.html");
  $("#footer").load(pathPrefix + "util/footer.html");
});


function changeImage(element) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = element.src;
}

