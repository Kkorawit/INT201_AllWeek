const h21Ele = document.querySelector("#h21");
console.log(h21Ele.textContent);
console.log(h21Ele.firstChild);

const ulEle = document.getElementById("u11");
console.log(ulEle);
console.log(ulEle.nodeType === Node.ELEMENT_NODE);
console.log(ulEle.tagName);
console.log(ulEle.childElementCount);
console.log(ulEle.firstChild);
console.log(ulEle.firstElementChild);
console.log(ulEle.firstElementChild.nextElementSibling);

const liU11Ele = document.getElementById("u11").getElementsByClassName("prog");
console.log(`liU11Ele: ${liU11Ele.length}`);

const ulAttr = document.getElementsByTagName("ul")[0].getAttributeNode("prog");
console.log(ulAttr);
console.log(ulAttr.nodeType === Node.ATTRIBUTE_NODE);
const u11Ele = document.querySelector("#u11");
console.log(u11Ele);
const progEle = document.querySelectorAll(".prog");
console.log(progEle);
const htmlEle = document.querySelector("html");
console.log(htmlEle.firstElementChild);

let product = {
  productId: "P001",
  productName: "iphone",
  price: 15000,
  stocks: 10,
};

const productsEle = document.querySelector("#products");
console.log(productsEle);
const divProductEle = document.createElement("div");
//1.<div></div>
divProductEle.setAttribute("id", product.productId);
//2. <div id='p001'></div>
const pProductNameEle = document.createElement("p");
//3. <p></p>
pProductNameEle.textContent = product.productName;
//4. <p>iphone</p>;
divProductEle.appendChild(pProductNameEle);
//5.<div id='p001'><p>iphone</p></div>
productsEle.appendChild(divProductEle);
//6.<div id="products"><div id='p001'><p>iphone</p></div></div>;
