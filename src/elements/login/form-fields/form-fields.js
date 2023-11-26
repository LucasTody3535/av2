const $formFields = $(".form-field");

$formFields.css({
    "width": "100%",
    "height": "70px",
    //"margin-bottom": "10px",
    "margin-top": "20px",
});

$formFields.children("input").css({
    "display": "block",
    "height": "60%",
    "width": "100%",
    "border-radius": "5px",
    "outline": "none",
    "border": "none",
    "background-color": "rgb(202, 202, 202)",
    "padding": "5px",
    "color": "black"
})

$formFields.children("label").css({
    "display": "block",
    "height": "40%",
    "font-size": "13.5px"
})
