import brand1 from "../../public/images/Brand1.png"
import brand2 from "../../public/images/Brand2.png"
import brand3 from "../../public/images/Brand3.png"
import brand4 from "../../public/images/Brand4.png"
import brand5 from "../../public/images/Brand5.png"
import brand6 from "../../public/images/Brand6.png"

const imgStyle = {
    height: "80px",
    width: "80%",
}

export default function Brand() {
    return (
        <div class="container text-center py-2">
            <h1>Brands</h1>
            <div class="row row-cols-3">
                <div class="col-md-2 col-sm-4 py-2">
                    <img class="" src={brand1} alt="" srcset="" style={imgStyle}/>
                </div>
                <div class="col-md-2  col-sm-4 py-2">
                    <img class="" src={brand2} alt="" srcset="" style={imgStyle}/>
                </div>
                <div class="col-md-2  col-sm-4 py-2">
                    <img class="" src={brand3} alt="" srcset="" style={imgStyle}/>
                </div>
                <div class="col-md-2  col-sm-4 py-2">
                    <img class="" src={brand4} alt="" srcset="" style={imgStyle}/>
                </div>
                <div class="col-md-2  col-sm-4 py-2">
                    <img class="" src={brand5} alt="" srcset="" style={imgStyle}/>
                </div>
                <div class="col-md-2  col-sm-4 py-2">
                    <img class="" src={brand6} alt="" srcset="" style={imgStyle}/>
                </div>
            </div>
        </div>
    ) 
};