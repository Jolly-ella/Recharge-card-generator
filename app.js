let nums = ''

function generated() {


    generatePin.value = Math.floor(Math.random() * 900000000000) + 100000000000;
    nums = generatePin.value;
}


let arry = []

function displayHistory() {

    tableBody.innerHTML = ''

    arry.forEach((elem, index) => {
        tableBody.innerHTML += `
<tr>
  <td>${index + 1}</td>
  <td>${elem.netOP}</td>
  <td>${elem.amount}</td>
  <td>${elem.date}</td>
  <td>${elem.pin}</td>
  <td>${elem.printRef}</td>
  <td>${elem.status}</td>
  <td><input class='btn btn-dark' id='clearBtn' type="button" value="clear" onclick="clearCard(${index})"></td>
</tr>
`
    })
}

displayHistory();


function saved() {

    let cards = {
        MTN: '*888*',
        GLO: '*555*',
        AIRTEL: '*234*',
        ETISALAT: '*785*'
    }

    if (amounts.value == '' || netOperator.value == '') {
        return
    }

    let obj = {
        netOP: netOperator.value,
        amount: amounts.value,
        date: new Date().toLocaleDateString(),
        pin: nums,
        printRef: cards[netOperator.value] + nums + '#',
        status: 'UNUSED',
    };

    generatePin.value = '';
    arry.push(obj);
    displayHistory(); 
    saveCard();
}


function loaded() {
    let load = false
        arry.forEach((elem, index) => {

            if (elem.printRef === EnterPin.value) {
                load = true
                if (elem.status === 'UNUSED') {
                    alert('This card has been successfully loaded')
                    elem.status = 'USED'
                    EnterPin.value = ''
                    displayHistory()

                } else {
                    alert('This card has already been used')
                }

            } else if (index === arry.length - 1 && load === false) {
                alert('The pin you entered is invalid, try again!');
            }
        })

        displayHistory();
        saveCard();
    }


function clearCard(index) {
    arry.splice(index, 1);
    displayHistory();
    saveCard();
}


function saveCard() {
    localStorage.setItem('card', JSON.stringify(arry));
}


function retriveCard() {
    const savedcards = JSON.parse(localStorage.getItem('card'));

    if (savedcards) {
        arry = savedcards
        displayHistory();
    }
}

retriveCard();






















  //   if (RefValue == EnterPin.value || printRefsArray.some((ref) => ref == EnterPin.value) ) {
    //     cardStatus = true;
    //     console.log(printRefsArray);




    // arry.forEach((ele, index) =>{
    //         if (ele.printRef === EnterPin.value ) {

    //             console.log('loaded');
    //             ele.status='used'
    //             saved()

    //             // saveCard();

    //         }
    //         else{
    //             console.log('used');
    //         }
    //         console.log(printRefsArray);
    // } )




   

    // for (let index = 0; index < arry.length; index++) {

    //     if (arry[index].printRef === EnterPin.value) {
    //         seen = true
    //         if (arry[index].status === 'UNUSED') {
    //             alert('The card has been successfully loaded')
    //             arry[index].status = 'USED'
    //             EnterPin.value = ''
    //             displayHistory()
    //         }
    //         else {
    //             alert('This card has already been used')
    //         }
    //         setTimeout(() => {
    //             seen = false
    //         }, 500);
    //     } else if (index == arry.length - 1 && seen == false) {
    //         alert('The code you have entered is inavlid. Try agin')

    //     }

// if (netOperator.value == 'MTN') {
    //     obj.printRef = '*888*' + nums + '#';
    // } else if (netOperator.value == 'GLO') {
    //     obj.printRef = '*555*' + nums + '#';
    // } else if (netOperator.value == 'AIRTEL') {
    //     obj.printRef = '*234*' + nums + '#';
    // } else if (netOperator.value == '9 MOBILE') {
    //     obj.printRef = '*785*' + nums + '#';
    // }
