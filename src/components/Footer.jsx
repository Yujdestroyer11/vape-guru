import vape2 from "../../public/images/Vape2.jpg"

export default function Footer() {
    return (
        <div class="container ">
        <footer class="py-3 my-4">
            <div class="nav justify-content-center border-bottom pb-3 mb-3">
            <a href="https://www.facebook.com/VapeGuruMain" class="btn btn-primary">Follow us on Facebook</a>
            <img src={vape2} class="bi mx-3 rounded" width="40" height="40" role="img" />
            </div>                
           <p class="text-center text-body-secondary">© 2024 Vape Guru PH</p>
        </footer>
      </div>
    )
};