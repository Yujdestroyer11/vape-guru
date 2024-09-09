import cat1 from "../../public/images/Cat1.png"
import cat2 from "../../public/images/Cat2.png"
import cat3 from "../../public/images/Cat3.png"

export default function () {
    return (
    <div class="container">
        <h1 class="text-center py-3">Popular Categories</h1>
        <div class="row featurette">
            <div class="col-md-7 py-5 px-5">
                <h2 class="featurette-heading fw-normal lh-1">Vape Kits and Mods</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-md-5">
                <img src={cat1} alt="" srcset="" class="hover-image rounded bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />                
            </div>
        </div>
            <hr class="featurette-divider"></hr>
        <div class="row featurette container py-2 bg-body-tertiary border rounded-3">
            <div class="col-md-7 order-md-2 py-5 px-5">
                <h2 class="featurette-heading fw-normal lh-1">Pod Systems</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img src={cat2} alt="" srcset="" class="hover-image rounded bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />                
            </div>
        </div>
            <hr class="featurette-divider"></hr>
        <div class="row featurette">
            <div class="col-md-7 py-5 px-5">
                <h2 class="featurette-heading fw-normal lh-1">E-liquids</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-md-5">
                <img src={cat3} alt="" srcset="" class="hover-image rounded bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" />                
            </div>
        </div>
    </div>
    )
};