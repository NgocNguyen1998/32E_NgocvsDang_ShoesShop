function laySanPham(id) {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
    method: "GET",
    ResponseType: JSON,
  });
  promise.then(function (result) {
    renderProductID(result.data.content);
    renderProductRelated(result.data.content);
  });
}
function renderProductID(product) {
  console.log(product);
  let detail = product;
  console.log(detail);
  document.getElementById(
    "hinhAnh"
  ).innerHTML = `<img src="${detail.image}" alt="">`;
  document.getElementById("noiDung").innerHTML = `
    <h1>${detail.name}</h1>
    <p>${detail.description}</p>
    <h3>Available size</h3>
    <div class="button-size" id="size">
      <button>36</button>
      <button>37</button>
      <button>38</button>
      <button>39</button>
      <button>40</button>
      <button>41</button>
      <button>42</button>
    </div>
    <h4>${detail.price}$</h4>
    <div class="button-amount">
        <button class="button-plus">+</button>
        <span>1</span>
        <button class="button-minus">-</button>
    </div>
    <div class="button-add">
        <button>Add to cart</button>
    </div>

    `;
}

function renderProductRelated(value) {
  let a = value.relatedProducts;
  console.log(a);
  let html = "";
  for (let i = 0; i < a.length; i++) {
    let product = a[i];
    let des = product.description.slice(0, 10);
    let namePr = product.name.slice(0, 13);

    html += `
          <div class="col-md-4">
            <div class="card">
                <img src="${a[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${namePr}...</h5>
                    <p class="card-text">${des}...</p>
                    <div class="footer-card">
                        <a href="./views/detail.html?product=${a[i].id}">
                          Buy now
                        </a>
                        <p>${a[i].price}$</p>
                    </div>
                </div>
            </div>
        </div>

      `;
  }
  document.getElementById("realateProduct").innerHTML = html;
  return html;
}

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("product");
  laySanPham(myParam);
};
