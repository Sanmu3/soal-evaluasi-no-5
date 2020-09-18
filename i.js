function santriProgrammer(nama,status,asal) {
    console.log(nama, asal);
    status()
}

function status() {
    alert('statusnya adalah santri');
}

santriProgrammer('Rahmad', status, 'Medan')