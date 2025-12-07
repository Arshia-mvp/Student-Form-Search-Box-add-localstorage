let userForm = document.querySelector('.form');

let inputUserName = document.querySelector('.firstnameinput');

let inputUserLastName = document.querySelector('.lastnameinput');

let inputUserAge = document.querySelector('.inputuserage');

let inputUserJob = document.querySelector('.userjobinput');

let inputUserGmail = document.querySelector('.usergmailinput');

let inputUserPostalCode = document.querySelector('.userpostalcodeinput');

let inputUserAddress = document.querySelector('.useraddressinput');

let searchBox = document.querySelector('#searchBox');

let allUsers = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

displayUsers(allUsers);

function displayUsers(users) {
    
    let box = document.getElementById("box");

    box.innerHTML = "";

    users.forEach(user => {
        
        let etelaat = [
            `your name : ${user.firstName}`,
            `your lastname : ${user.lastName}`,
            `your age : ${user.userAge}`,
            `your job : ${user.userJob}`,
            `your Gmail : ${user.userGmail}`,
            `your postal code : ${user.userPostalCode}`,
            `your address : ${user.userAddress}`
        ];

        etelaat.forEach(item => {
            
            let div = document.createElement("div");
            
            div.textContent = item;
            
            box.appendChild(div);
        });

        let hr = document.createElement("hr");

        box.appendChild(hr);

    });
}

userForm.addEventListener("submit", (e) => {
    
    e.preventDefault();

    let address = inputUserAddress.value;
    
    let userAddressLower = address.toLowerCase();

    let user = {
        
        firstName: inputUserName.value,
        lastName: inputUserLastName.value,
        userAge: Number(inputUserAge.value),
        userJob: inputUserJob.value,
        userGmail: inputUserGmail.value,
        userPostalCode: inputUserPostalCode.value,
        userAddress: address
    };

    if (inputUserName.value.trim().length <= 2) {
        
        alert('لطفا یک اسم بیشتر از 3 حرف وارد کنید');
        return;
    } 
    
    else if (inputUserLastName.value.trim().length < 5) {
        
        alert('لطفا یک فامیلیه بیشتر از 5 حرف وارد کنید');
        return;
    } 
    
    else if (inputUserAge.value < 10 || inputUserAge.value > 70) {
        
        alert('متاسفانه سن شما برای ثبت اطلاعات کافی نیست (سن ، بیشتر از 10 سال و کمتر از 70 سال باشد)');
        return;
    } 
    
    else if (inputUserJob.value.trim().length < 4) {
        
        alert('لطفا شغلی وارد کنید که بیشتر از 4 حرف داشته باشد');
        return;
    } 
    
    else if (inputUserGmail.value.trim().length < 10) {
        
        alert('لطفا جیمیلی وارد کنید که بیشتر از 10 حرف داشته باشد');
        return;
    } 
    
    else if (inputUserPostalCode.value.trim().length !== 10) {
        
        alert('کد پستی نمیتواند کمتر یا بیشتر از 10 رقم باشد');
        return;
    } 
    
    else if (address !== address.trim() || address.length < 3) {
        
        alert('آدرس را اشتباه وارد کردید ، لطفا آدرس را درست وارد کنید');
        return;
    }

    if (userAddressLower.includes('tehran')) {
        
        alert('به دلیل اینکه شما در تهران هستید بسته شما زود تر به دستتان میرسد');
    }

    allUsers.push(user);

    localStorage.setItem('students' , JSON.stringify(allUsers));

});

searchBox.addEventListener("input", (e) => {
    
    let searchValue = e.target.value.toLowerCase();
    
    let filtered = allUsers.filter(user =>
        
        user.firstName.toLowerCase().includes(searchValue) ||
        
        user.lastName.toLowerCase().includes(searchValue) ||
        
        user.userJob.toLowerCase().includes(searchValue) ||
        
        user.userAddress.toLowerCase().includes(searchValue)
    
    );

    displayUsers(filtered);
});
