// البحث في المنتجات
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const productsList = document.getElementById("products-list");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();
  const products = productsList.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

// تغيير اللغة (تجريدي)
const langSelector = document.getElementById("lang-selector");

langSelector.addEventListener("change", () => {
  const lang = langSelector.value;
  alert(`تم اختيار اللغة: ${lang}. \nهذه خاصية تجريبية يمكن ربطها بملفات ترجمة لاحقًا.`);
});

// نموذج التواصل (تجريبي)
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("تم إرسال الرسالة بنجاح. شكراً لتواصلكم معنا!");
  contactForm.reset();
});

// خريطة جوجل (موقع التعاونية)
function initMap() {
  const coopLocation = { lat: 34.020882, lng: -6.841650 }; // مثال: الدار البيضاء
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: coopLocation,
  });
  new google.maps.Marker({
    position: coopLocation,
    map: map,
    title: "تعاونية الخزامى",
  });
}
window.initMap = initMap;

