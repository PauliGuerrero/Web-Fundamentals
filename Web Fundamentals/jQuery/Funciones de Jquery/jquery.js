$(document).ready(function () {
  console.log("ready");
  $("#rojo").on("click", function () {
    $("p#parrafo").css("color", "red");
  });
  
  $("#imagen").on("click", function () {
    $("img").show("slow");
  });

  $("#append").on("click", function () {
    $("p#aparece").show("slow");
  });
});
