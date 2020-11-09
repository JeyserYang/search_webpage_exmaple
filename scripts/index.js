/*
* @Author: weijie Yang
* @Date:   2020-10-21 10:37:56
* @Last Modified by:   weijie Yang
* @Last Modified time: 2020-10-21 12:54:57
*/

// 将一个元素插在另一个元素后面
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        // nextSibling获取元素的下一个兄弟节点
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function submitForm() {
	var search_button = document.getElementById("search_button");
	var formURL = document.getElementById("form").getAttribute("action");
	search_button.onclick = function() {
		var search_text = document.getElementById("search_text").value;
		// alert(search_text);
		window.open(formURL + "uniprot/?query=" + search_text + "&sort=score", "uniport_search_result");

        // var fileDiv = document.createElement("div");
        // var header = document.getElementById("header");
        // insertAfter(fileDiv, header);
        // fileDiv.style.width = "80%";
        // fileDiv.style.height = "100%";
        // fileDiv.style.margin = "0 10%";
        // var fileInput = document.createElement("input");
        // var textarea = document.createElement("textarea");
        // fileInput.setAttribute("type", "file");
        // fileDiv.appendChild(fileInput);
        // fileDiv.appendChild(textarea);
		return false;
	}
}


// https://www.uniprot.org/uniprot/?query=b0124&sort=score
window.onload = submitForm;