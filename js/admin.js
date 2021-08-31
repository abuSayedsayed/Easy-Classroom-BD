const admin=document.getElementById('admin')
const adminPass=document.getElementById('admin-pass')
const adminPassword=document.getElementById('input-password')


showAdmin()
let pressedKey=''


function showAdmin() {
    window.addEventListener('keypress',function (event) {
        pressedKey+=event.key
        if(pressedKey==='Admin'){
            admin.style.display='block'
            
            adminPassword.addEventListener('keypress',function(event) {
                if(event.key==='Enter'){
                    if(event.target.value==='sayed_theDeveloper'){
                        adminPass.style.display='none'
                    }else{
                        alert('Wrong Password')
                    }
                }
            })

        }
        
    })
}

