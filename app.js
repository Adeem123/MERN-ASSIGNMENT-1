var data = {
    mobile: {
        samsung: {
            a30: {
                name: 'a30',
                ram: '4gb',
                rom: '64gb',
                camera: '50px',
                price: '20000'
            },

            note10: {
                name: 'note10',
                ram: '4gb',
                rom: '64gb',
                camera: '50px',
                price: '54000'
            },

            s10: {
                name: 's10',
                ram: '4gb',
                rom: '64gb',
                camera: '50px',
                price: '30000'
            },

        },

        iphone: {
            iphone7: {
                name: 'iphone7',
                ram: '4gb',
                rom: '64gb',
                camera: '50px',
                price: '30000'
            },

            iphone11: {
                name: 'iphone11',
                ram: '4gb',
                rom: '64gb',
                camera: '50px',
                price: '30000'
            },

            iphone13: {
                name: 'iphone13',
                ram: '4gb',
                rom: '64gb',
                camera: '50px',
                price: '30000'
            },
        },

        xiaomi: {
            redmi10: {
                name: 'redmi10',
                ram: '4gb',
                rom: '64gb',
                camera: '50px',
                price: '30000'
            },

            redmi11: {
                name: 'redmi11',
                ram: '4gb',
                rom: '64gb',
                camera: '50px',
                price: '30000'
            },

            redmi12: {
                name: 'redmi12',
                ram: '4gb',
                rom: '64gb',
                camera: '50px',
                price: '30000'
            },
        }
    }
}


var mobile= document.getElementById("mob");
var model= document.getElementById("mod");


function Render(){

    var show=(data.mobile[mobile.value][model.value]);
    console.log(show);
   
}
Render()
