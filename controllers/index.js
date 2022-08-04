function renderProduct(arrProduct) {
    var html = '';

    for (var index = 0; index < arrProduct.length; index++) {
        var product = arrProduct[index];
        var des = product.description.slice(0,10)
        var namePr = product.name.slice(0,13)
        html += `
        <div class="col-md-4">
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${namePr}</h5>
                <p class="card-text">${des}</p>
                <div class="footer-card">
                    <a href="./detail.html?product=${product.id}">
                        
                            Buy now
                        

                    </a>
                    <p>${product.price}$</p>
                </div>
            </div>
        </div>
    </div>
    `;
    }
    document.querySelector('#tblProduct').innerHTML = html
    return html;
}

// ---------------------GET--------------

function layDanhSachSanPham() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product?',
        method: 'GET',
        ResponseType: JSON,

    });
    promise.then(function (result) {
        renderProduct(result.data.content);
    });
    promise.catch(function (err) {
        console.log(err);
    });
}
window.onload = function () {
    layDanhSachSanPham();
}