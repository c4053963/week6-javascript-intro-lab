(() => {
    document.querySelectorAll(".colPicker").forEach(function(ev) {
    ev.addEventListener('click', function() {
        let classCol = ev.innerHTML.toLowerCase() + "Back";
        console.log(classCol)
        if(classCol == "defaultBack"){
            document.body.removeAttribute('class');
        } else {
            document.body.setAttribute('class', classCol);
        }
    });
});
})();
