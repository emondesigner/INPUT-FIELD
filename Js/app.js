
// INPUT FIELD START
$(function(){
    $('.addBtn').on('click',function(){
        newRowAdd =
        '<div class="removOption"> <div class="input_group">'+
        '<input type="text" >' + ' <button class="removeBtn" type="button"><i class="fa-solid fa-minus"></i></button> </div> </div>' ;
        
        $('#addOption').append(newRowAdd)
    })
    
    $("body").on('click', ".removeBtn", function(){
        $('.input_group').remove();
    })
})
// INPUT FIELD END
