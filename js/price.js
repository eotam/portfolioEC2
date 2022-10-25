let selectItem = document.querySelectorAll(".selectItem")
let price = document.querySelector("#itemPrice")
let Name = document.querySelector("#offcanvasRightLabel")
let img = document.querySelector("#itemImg")


selectItem.forEach(function (item, index) {
    item.onclick = function () {

        let selectPrice = this.lastElementChild.textContent
        price.textContent = selectPrice

        let selectName = this.children[1].textContent
        Name.textContent = selectName

        let selectImg = this.firstElementChild
        img.src = selectImg.src

    }
})


let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let order = document.querySelector("#order")
let cart = document.querySelector("#cart")

plus.addEventListener("click", () => {
    order.value++
})

minus.addEventListener("click", () => {
    if (order.value >= 1) {
        order.value--
    }
})

cart.addEventListener("click", () => {
    let size = document.querySelector("#size")
    let color = document.querySelector("#color")
    if (order.value >= 1 && size.value >= 1 && color.value >= 1) {
        document.form.reset()
        window.confirm("カートに追加されました")
    } else {
        window.confirm("注文内容を確認して下さい")
    }
})