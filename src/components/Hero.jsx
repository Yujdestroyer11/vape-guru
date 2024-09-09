import vape1 from "../../public/images/Vape1.jpg"

const customStyle = {
    maxHeight: "50vh",
}

export default function Hero() {
    return (
    <div class="px-4 pt-5 my-5 text-center border-bottom ">
            <h1 class="display-4 fw-bold text-body-emphasis">Inhale the <span class="text-warning">GOOD</span> stuff.</h1>
            <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a href="/products"><button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Buy now</button></a> 
            <a href="https://www.facebook.com/VapeGuruMain"><button type="button" class="btn btn-outline-secondary btn-lg px-4">Follow us on Facebook</button></a>    
            </div>
            </div>
            <div class="overflow-hidden" style={customStyle}>
            <div class="container px-5">
                <img src={vape1} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
            </div>
            </div>
      </div>   
    )
};