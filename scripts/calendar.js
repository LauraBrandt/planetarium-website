$(document).ready(function() {
    
    // toggle between left and down carets on click
    $("thead>tr").click(function() {
        $(this).find(".toggle").toggle();
    });
    
});

