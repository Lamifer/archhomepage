function validate() {
    if( document.contact_form.name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    else if( document.contact_form.email.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.Name.focus() ;
       return false;
    }
    else if( document.contact_form.subject.value == "" ) {
       alert( "Please provide your Subject!" );
       document.myForm.Name.focus() ;
       return false;
    }
    else if( document.contact_form.comment.value == "" ) {
       alert( "Please provide your Comment!" );
       document.myForm.Name.focus() ;
       return false;
    }
}