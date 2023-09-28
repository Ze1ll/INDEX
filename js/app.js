

function send() {
    //ввод данных из поля ввода html input
    //let x = prompt("Введите х")

    let message = document.getElementById('message').value;  
    let name = document.getElementById('name').value;
    //логика

    if (message=='') 
    {
        alert("Нужно ввести сообщение")
    } 
    if (name == '') {
        alert("Нужно ввести имя")
    } 
  
    
    //Вывод данных в поле 
    alert(name+ " Здравствуйте");
    document.getElementById('messageresult').innerText = message;
   // document.getElementById('nameresult').innerText = name;
    
    

    //document.getElementById('result').value = message;
    //alert(`${x} * 5 = ${resuls}`)

}


