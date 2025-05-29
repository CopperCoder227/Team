document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById('rosterGrid')
  grid.classList.add("row")

  const render = list => {
    grid.innerHTML = ''

    list.forEach(p => {
      const col = document.createElement('div')
      col.className = 'col-6 col-lg-2'
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
                    <img src="${p.pic}"  data-bs-toggle="modal" data-bs-target="#Modal-${p.firstName}">
                    
                    <div class="modal fade" id="Modal-${p.firstName}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered"">
                      <div class="modal-content">
                        <div class="modal-body">
                          <div class="text-center">
                            <h1><b> Kris</b></h1>
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