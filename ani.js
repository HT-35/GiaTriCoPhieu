const submit = document.querySelector(".submit");
const FormStock = document.querySelector(".Form-Stock");
const price = document.querySelector(".price");


FormStock.addEventListener("submit", handlePrice);

console.log("aaa")

function removeDecimalPoint(num) {
    return num.toString().replace(/\./g, "");
}

function priceStock(asset, stock) {

    let price = parseInt(asset / stock);

    return price;
}

function GetData(CK, DG, TS, CP) {

    const giaTS = loc(TS);
    const kl = loc(CP);

    const template = `
    <hr>
     <div class="output">
    <h3 class="DinhGia maCK"> <span class="maCK">${CK}</span> </h3>
    <h3 class="DinhGia"> <span class="maCK"> ${DG}   VND </span>   </h3>
    <h3 class="DinhGia"> <span class="maCK">${TS} VND </span>    </h3>
    <h3 class="DinhGia">  <span class="maCK">${CP}     Cổ Phiếu </span></h3>
</div>
<div class="SumVolumStock">
    <h3>Mã CK: </h3>
    <h3> định giá cổ phiếu </h3>
    <h3> tổng tài sản: </h3>
    <h3>Số lượng cổ phiếu</h3>
</div>`

    price.insertAdjacentHTML("beforeend", template);
}


// function loc(num) {
//     if (num > 1000) {
//         return "ngàn";
//     } else if (num > 1000000) {
//         return "triệu";
//     } else if (num > 1000000000) {
//         return "tỷ";
//     } else if (num > 1000000000000) {
//         return "ngàn tỷ";
//     }
// }

function tinhHang(n) {
    /*
    Trả về hạng của số tự nhiên
    */
    if (n < 1000) {
        return "";
    } else if (n < 1000000) {
        return "nghìn";
    } else if (n < 1000000000) {
        return "triệu";
    } else if (n < 1000000000000) {
        return "tỷ";
    } else if (n < 1000000000000000) {
        return "nghìn tỷ";
    } else {
        return "";
    }
}

function loc(n) {
    /*
    Trả về 3 số đầu tiên và hạng của số tự nhiên
    */
    var hang = tinhHang(n);
    var hang_dau_tien = Math.floor(n / Math.pow(10, (Math.floor(Math.log10(n)) - 2)));
    return hang_dau_tien + " " + hang;
}
console.log(loc(123456789));


async function handlePrice(Event) {
    Event.preventDefault();

    const maCK = this.elements["maCK"].value;
    const stock = +removeDecimalPoint(this.elements["stock"].value);
    const asset = +removeDecimalPoint(this.elements["asset"].value);

    // seconds_Text.textContent = `0${seconds}`.slice(-2);

    // const price = priceStock(asset, stock).toString().slice(0, 2);
    const price = priceStock(asset, stock);



    console.log(maCK);



    await GetData(maCK, price, asset, stock);


    console.log(`${(price).toString().slice(0, 2)} K`);
    this.reset();
}

//   5196525259733

//    449435205