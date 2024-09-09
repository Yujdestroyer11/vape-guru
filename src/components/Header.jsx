import vape2 from "../../public/images/Vape2.jpg"

export default function Header() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
          <div class="container-fluid">
          <a class="navbar-brand px-4 fs-2 fw-bold" href="/"><img src={vape2} class="bi me-4 rounded" width="40" height="40" role="img" />Vape Guru</a> 
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
      
            <div class="navbar-collapse collapse" id="navbarsExample03">
              <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                <li class="nav-item">
                  <a class="nav-link btn btn-secondary" href="/products">Products</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn-secondary" href="/about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn-secondary" href="/contact">Contact us</a>
                </li>
              </ul>
              <form role="search">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
};