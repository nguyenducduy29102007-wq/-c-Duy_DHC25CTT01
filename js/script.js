const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");
});

function showDetail(product){
    alert("Thông tin chi tiết của " + product);
}
