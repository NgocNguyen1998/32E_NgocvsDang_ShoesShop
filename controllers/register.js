document.querySelector("#btnSubmit").onclick = function () {
    let member = new Member();
    member.email = document.querySelector("#email").value;
    member.name = document.querySelector("#name").value;
    member.password = document.querySelector("#password").value;
    member.phone = document.querySelector("#phone").value;
    var cfPassword = document.querySelector("#cfPassword").value;
    
    const inputsGender = document.querySelectorAll(' #test1,#test2')
    inputsGender.forEach(input => {
        if (input.checked === true) {
            member.gender = input.value
        }
        
    })
    
  
    let valid = true;
    valid &=
    kiemTraRong(member.email,"#tbEmail","Email")&
    kiemTraRong(member.name,"#tbName","Name")&
    kiemTraPassword(member.password,"#tbPassword","Pass")&
    kiemTraRong(member.phone,"#tbPhone","Phone")&
    kiemTraRong(cfPassword,"#tbCfPassword","Pass")&
    kiemTraEmail(member.email,"#err_email","Email")&
    kiemTraTatCaKyTu(member.name,"#err_name","Name")&
    confirmPassword(cfPassword, member.password,"#err_pass","Pass")&
    kiemTraPhone(member.phone,"#err_phone","Phone")


    
    if (!valid) {
      return;
    }

    var promise = axios({
      url: 'https://shop.cyberlearn.vn/api/Users/signup',
      method: 'POST',
      data: member,
  });

  promise.then(function (result) {
      document.getElementById('title').innerHTML = 'Đăng ký thành công';
      document.getElementById('title').style.color = 'green';
      console.log(result.data.content)

  });
  promise.catch(function (err) {
    document.getElementById('title').innerHTML = 'Đăng ký không thành công';
    document.getElementById('title').style.color = 'red';
  });
  };

  