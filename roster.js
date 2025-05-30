document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById('rosterGrid')
  grid.classList.add("row")

  const render = list => {
    grid.innerHTML = ''

    list.forEach(p => {
      const col = document.createElement('div')
      col.className = '"col-6 col-md-3 col-xl-2 d-flex justify-content-center align-items-center";'
      col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${p.photo}" class="img-top load" alt="${p.firstName} ${p.lastName}">
                <div class="card-body text-center">
                    <h5 class="card-title mb-1"> 
                      <b>${p.firstName}</b>
                      <br>
                      From: <b>${p.lastName} </b>
                      <br>
                      Weapon: <b>${p.position} </b>
                    </h5>
                    <h5 class="small text-muted mb-0">
                        Appeared in: <b>${p.age} </b> games
                    </h5>
                    <br>
                   
                     <img src="${p.pic}" data-bs-toggle="modal" data-bs-target="#Modal-${p.alt}" style="cursor:pointer;">
      
      <div class="modal fade" id="Modal-${p.alt}" tabindex="-1" aria-labelledby="modalLabel-${p.alt}" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel-${p.alt}">${p.firstName} </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
              <img src="${p.photoALT}" alt="${p.firstName}.ALT" class="img-fluid mb-3 roost" />
              <br>
              <p>
              <b>${p.fact}</b>
              </p>
            </div>
          </div>
        </div>
      </div>

                  </div>
            </div>
            `

      grid.appendChild(col)

    })
  }

  render(players)


})




//using the js provided, the modals btn and information ust be in 2 different functions that are connected with the this function
//work on modals with hidden facts for each