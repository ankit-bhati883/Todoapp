$(document).ready(function () {

    const addTask = ()=>{
      var input = $("#input").val();
      if (input !== "") {
        $("ul").append(
          "<li>" + input + '<i class="fas fa-check fa-trash "> </li>'
        );
        $("ul").append(
          "<hr size=2>"
          // <hr size=2>
        )
        $("#input").val("");
      }
    }
  
    $("#input").change(function () {
      addTask();
    });
    $("#add-btn").click(() => {
      addTask();
    });
    $("ul").on("click", ".fa-trash", function () {
      $(this).parent("li").fadeOut(200);
    });
  });