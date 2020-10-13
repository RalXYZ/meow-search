// $(document).ready()

window.onload = () => {
    let keyword = document.getElementById("keyword").value;
    [".title", ".simplified-content"].forEach((element) => {
        document.querySelectorAll(element).forEach((ele) => {
            let values = ele.innerHTML.split(keyword);
            ele.innerHTML = values.join('<span style="color:#d3586c!important;">' + keyword + '</span>');
        })
    })
}
