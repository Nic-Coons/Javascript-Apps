//alert("Hi")
//each item should look like this: <li><input type="checkbox" /><span>Write the To-Do List</span></li>

//Lessons
//Avoid Global Variables
//Make Functions reusable

var totalItems = 1;


window.onload = function () {
    document.getElementById("inItemText").focus();
    
    function updateItemStatus() {
        var cbId = this.id.replace("cb_", "");
        var itemText = document.getElementById("span " + cbId);        
        if (this.checked) {
            itemText.className = "checked";
        } else {
            itemText.className = "Unchecked";
        }
      };



    function addNewItem(list, itemText) {
        var listItem = document.createElement("li");

        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "cb_" + totalItems;
        checkBox.onclick = updateItemStatus;
        var span = document.createElement("span");
        span.id = "span " + totalItems;
        span.innerText = itemText;

        listItem.appendChild(checkBox);
        listItem.appendChild(span);

        list.appendChild(listItem);
        totalItems++;
    };


    var tEntry = document.getElementById("inItemText")
    tEntry.onkeyup = function (event) {
        if (event.which == 13) {
            var newItem = document.getElementById("inItemText").value;

            if (!newItem || newItem == "" || newItem == " ") {
                return false;
            }
            addNewItem(document.getElementById("ToDoList"), newItem);

            tEntry.focus();
            tEntry.select();
        };
    };


};