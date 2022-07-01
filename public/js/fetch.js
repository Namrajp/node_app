const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", () => {
  // console.log("shake and dance");
  fetch("http://127.0.0.1:5000/api/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (menu) {
      displayMenuItems(menu);
      displayMenuButtons(menu);
    });

  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
      return `
     <article class="menu-item">
        <img src="${item.img}" class="photo" alt="">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>
    `;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }

  function displayMenuButtons(menuItem) {
    let menuCategory = menuItem.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    // console.log(menuCategory);

    let displayButton = menuCategory.map((category) => {
      return `
      <button class="filter-btn" type="button" data-id=${category}>${category}</button>
    `;
    });
    displayButton = displayButton.join("");
    btnContainer.innerHTML = displayButton;
    // console.log(displayButton);

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // e.preventDefault();

        const category = e.currentTarget.dataset.id;

        const filterCategory = menuItem.filter(function (item) {
          if (item.category === category) {
            return item;
          }
        });
        if (category === "all") {
          displayMenuItems(menuItem);
        } else {
          // console.log(filterCategory);
          displayMenuItems(filterCategory);
        }
      });
    });
  }
});
