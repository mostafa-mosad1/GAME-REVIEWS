// import {getId}  from "./index.js"

class Ui {
  constructor() {}
  cardHome(item) {
    return `
    
  <div class="sasa col-sm-6 col-md-4 col-xl-3">
    <div data-id="${item.id}"  class="my-card  h-100 border border-dark d-flex flex-column justify-content-between ">
      <div>
          <div>
            <img
              src="${item.thumbnail}"
              alt="gamePhoto"
              loading="lazy"
              class="d-block w-100"
            />
          </div>
          <div class="d-flex justify-content-between mt-4 mx-2">
            <p>${item.title}</p>
            <button class="btn btn-primary btnCard">Free</button>
          </div>
          <div class="mt-4 text-center border-top pt-2 border-dark mx-2">
            <p class="fs-6 number-lines opacity-75">
            ${item.short_description}
            </p>
          </div>
      </div>
      <div
        class="d-flex mx-2 justify-content-between mt-4 border-top py-2 border-dark position-relative bottom-0"
      >
        <span class="spanCard text-uppercase rounded-4 bg-dark p-2">
        ${item.genre}
        </span>
        <span class="text-uppercase spanCard rounded-4 bg-dark p-2">
        ${item.platform}
        </span>
      </div>
    </div>
  </div>

    `;
  }

  detailesCard(data) {
    return `
     <section  class="text-white   mt-5 " >
        <div class="d-flex justify-content-between align-items-baseline my-5">
          <h2>Details</h2>
          <i class="fa-brands fa-x-twitter exit"></i>
        </div>
        <div class="row d-flex justify-content-between">
        <div class="col-md-4">
        <div>
          <img src="${data.thumbnail}" alt="image" class="w-100 d-block bg-danger">

        </div>
        </div>
        <div class="col-md-7">
        <h2>Title: <button class="btn btn-info ms-3">${data.title}</button></h2>
                  <h3>Category:<button class="btn btn-info ms-3">${data.genre}</button></h3>
                  <h3>Platform:<button class="btn btn-info ms-3">${data.platform}</button></h3>
                  <h3>Status:<button class="btn btn-info ms-3">${data.status}</button></h3>
                  <p>
                      ${data.description}
                    </p>
                    <button class="btn btn-outline-warning mb-4">
                     <a href="https://www.playneverwinter.com/en">
                     Show Game</a>
                    </button>
        </div>
        </div>
      </section>

    `;
  }
}

export let design = new Ui();
