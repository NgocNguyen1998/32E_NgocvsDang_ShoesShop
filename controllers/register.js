document.querySelector("#btnSubmit").onclick = function () {
    let member = new Member();
    member.email = document.querySelector("#email").value;
    member.name = document.querySelector("#name").value;
    member.password = document.querySelector("#password").value;
    member.phone = document.querySelector("#phone").value;
    member.cfPassword = document.querySelector("#cfPassword").value;
  
    let valid = true;
    valid &=
    kiemTraRong(member.email,"#tbEmail","Email")&
    kiemTraRong(member.name,"#tbName","Name")&
    kiemTraRong(member.password,"#tbPassword","Pass")&
    kiemTraRong(member.phone,"#tbPhone","Phone")&
    kiemTraRong(member.cfPassword,"#tbCfPassword","Pass")&
    kiemTraEmail(member.email,"#err_email","Email")&
    kiemTraTatCaKyTu(member.name,"#err_name","Name")&
    confirmPassword(member.cfPassword, member.password,"#err_pass","Pass")&
    kiemTraPhone(member.phone,"#err_phone","Phone")
    
    if (!valid) {
      return;
    }
  };

