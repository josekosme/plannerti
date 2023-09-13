plannerModule = function (){

    var _clearContactFields = function () {
        $("#emailContato").val("");
        $("#nomeContato").val("");
        $("#telefoneContato").val("");
        $("#comentarioContato").val("");
    }

    var _enviarMensagem = function () {
        var data = {
            Email: $("#emailContato").val(),
            Nome: $("#nomeContato").val(),
            Telefone: $("#telefoneContato").val(),
            Comentario: $("#comentarioContato").val()
        }

        _sendRequest("http://plannerti-002-site1.atempurl.com/api/Contact/Add", data, function(){_clearContactFields();alert("Mensagem enviada com sucesso.")}, function(){alert("Erro, contate o administrado.")});
    }

    var _sendRequest = function(rootUrl, data, success, error){
        $.ajax({
            url: rootUrl,
            data: JSON.stringify(data), 
            type: "post",
            dataType: 'json',
            contentType: "application/json",
            success: success,
            error: error
        });
    }

    return {
        enviarMensagem : _enviarMensagem
    }
};