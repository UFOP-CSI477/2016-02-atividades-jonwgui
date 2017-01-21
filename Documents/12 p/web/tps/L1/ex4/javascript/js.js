$(document).ready( function() {
  $("#formulario").validate({
    // Define as regras
    rules:{

      sexo:{


      },
areaInteresse:{

       minlength: 2

},
Rua:{

},
Complemento:{

},
Estado:{


},
CEP:{
  required: true, minlength: 2  

},
Telefone:{


},
Celular:{


},
Email:{

required: true, email: true
},
CPF:{
  required: true, minlength: 11

},
Usuario:{
  required: true, minlength: 2

},
Senha:{
    required: true, minlength: 6

},
  
    // Define as mensagens de erro para cada regra
    messages:{
   
       sexo:{

             
      },
areaInteresse:{


},

},

Rua:{


},
Complemento:{


},
Estado:{


},
CEP:{
  

        required: "Digite o seu CEP",
        minLength: "O seu nome deve conter, no mínimo, 2 caracteres"

},
Telefone:{



},
Celular:{


},
Email:{


        required: "Digite o email",
        minLength: "O seu email deve conter, no mínimo, 2 caracteres"

},
CPF:{


        required: "Digite o seu cpf",
        minLength: "O seu nome deve conter, no mínimo, 11 caracteres"

},
Usuario:{


        required: "Digite o seu nome",
        minLength: "O seu nome deve conter, no mínimo, 2 caracteres"

},
Senha:{


        required: "Digite o sua senha",
        minLength: "O seu nome deve conter, no mínimo, 2 caracteres"

},

    }


submitHandler: function(form){
form.submit();
}

  });
});
