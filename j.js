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

function GetData(DG, TS, CP) {

    const giaTS = loc(TS);
    const kl = loc(CP);

    const template = ` <div class="SumAsset">
    <h3 class="DinhGia">${DG}.000      Ngàn Đồng</h3>
    <h3 class="DinhGia">     ${giaTS} Tỷ</h3>
    <h3 class="DinhGia">     ${kl} Cổ Phiếu</h3>
</div>
<div class="SumVolumStock">
    <h3> định giá cổ phiếu theo tài sản </h3>
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


function handlePrice(Event) {
    Event.preventDefault();

    const stock = +removeDecimalPoint(this.elements["stock"].value);
    const asset = +removeDecimalPoint(this.elements["asset"].value);

    // seconds_Text.textContent = `0${seconds}`.slice(-2);

    const price = priceStock(asset, stock).toString().slice(0, 2);





    GetData(price, asset, stock);


    console.log(`${(price).toString().slice(0, 2)} K`);

}

//   5196525259733

//    449435205