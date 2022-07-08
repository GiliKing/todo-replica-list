

let Todo_List = [];


let count = 0;


$(document).ready(function(){

    window.onload = () => {
    
        let getItem1 = localStorage.getItem("list");
    
        if(getItem1 != null) {
    
            getItem1 = JSON.parse(getItem1);
    
            for(let i = 0; i < getItem1.length; i++) {
                Todo_List.push(getItem1[i])
            }
    
    
            localStorage.setItem("list", JSON.stringify(Todo_List));
    
    
        }
    }

    let getItem = localStorage.getItem("list")

    if(getItem != null) {
        getItem = JSON.parse(getItem);

        for(let i = 0; i < getItem.length; i++) {
            $(".todo-list").append(getItem[i]);
        }
    }



    $(".add").click(function(){
        var inputval = $(".form-control").val();
        if(inputval != ''){
            
            // $(".todo-list").append('<li id="show'+count+'"><div class="left-cont">  <input type="checkbox" id="check-'+count+'" name=""><label for="check-'+count+'"></label>'+inputval+'</span></div><span class="remove" id="remove"><i class="material-icons">delete</i></span></li>');

            Todo_List.push('<li id="show'+count+'"><div class="left-cont">  <input type="checkbox" id="check-'+count+'" name=""><label for="check-'+count+'"></label>'+inputval+'</span></div><span class="remove" id="remove"><i class="material-icons">delete</i></span></li>');

            localStorage.setItem("list", JSON.stringify(Todo_List))

            count ++;

            window.location.href = "index.html"

            
        }
        $(".form-control").val('');
    })

    $(document).on('change', 'input[type="checkbox"]',function(){
        if($(this).is(':checked')){
            $(this).closest("li").children(".remove").addClass("active");
        }else{
            $(this).closest("li").children(".remove").removeClass("active");
        }
    })

    $(document).on('click', '.remove',function(){
        // $(this).parent().remove();

        // alert(document.querySelectorAll("li").length)

        // this is not the best style 

    })


    let numberList = document.querySelectorAll("#remove");

    console.log(numberList)

    for(let i = 0; i < numberList.length; i++) {
        document.querySelectorAll("#remove")[i].addEventListener("click", () => {

            document.querySelectorAll("#remove")[i].parentNode.style.display = "none";
            

            Todo_List.splice(i, 1);

            console.log(Todo_List);

            localStorage.removeItem("list");

            localStorage.setItem("list", JSON.stringify(Todo_List));

        })
    }

})





