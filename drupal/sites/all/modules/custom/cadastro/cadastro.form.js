jQuery(document).ready(function(){
    jQuery("#edit-submit").click(function(){
        salvar();
        return false;
    });

    function salvar(){

        jQuery.ajax({
            type: "POST",
            url: "/cadastro_salvar",
            data: {"nome":jQuery("#edit-nome").val(), "sobrenome":jQuery("#edit-sobrenome").val()},
            success: function(data) {
                show_by_node(data);
                jQuery("#cadastro_form").dialog("close");
                jQuery("#edit-nome").val("");
                jQuery("#edit-sobrenome").val("");
            }
        });
    }

    function show_by_node(id) {
        jQuery.ajax({
            type: "GET",
            url: "/cadastro_show_raw/" + id,
            success: function(html){
                jQuery("#cadastro_content").html(html);
            }
        });
    }
});