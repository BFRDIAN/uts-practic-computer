document.getElementById('tampilButton').addEventListener('click', function() {
    var nama = document.getElementById('nama').value;
    var nim = document.getElementById('nim').value;
    var matakuliah = document.getElementById('matakuliah').value;
    var nilai = document.getElementById('nilai').value;

    if (nama && nim && matakuliah && nilai) {
        var nilaiHuruf = getNilaiHuruf(nilai);
        var nilaiNim = getNilaiHuruf(nim);
        var nilaiMatakuliah = getNilaiHuruf(matakuliah);
        var indeksNilai = getIndeksNilai(nilaiHuruf);

        document.getElementById('resultNama').innerHTML = nama;
        document.getElementById('resultNim').innerHTML = nim;
        document.getElementById('resultMatakuliah').innerHTML = matakuliah;
        document.getElementById('resultNilai').innerHTML = nilai;
        document.getElementById('nilaiHuruf').innerText = nilaiHuruf;
        document.getElementById('indeksNilai').innerText = indeksNilai;

        document.getElementById('result').style.display = 'block';
    } else {
        alert('Mohon isi semua input.');
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('inputForm').reset();
    document.getElementById('result').style.display = 'none';
});

function getNilaiHuruf(nilai) {
    if (nilai >=100){
        return 'tidak terdeteksi';
    } else if (nilai >= 85) {
        return 'A';
    } else if (nilai >= 79) {
        return 'A-';
    } else if (nilai >= 74) {
        return 'B+';
    } else if (nilai >= 69) {
        return 'B';
    } else if (nilai >= 64) {
        return 'B-';
    } else if (nilai >= 59) {
        return 'C+';
    } else if (nilai >= 54) {
        return 'C';
    } else if (nilai >= 41) {
        return 'D';
    } else if (nilai >= 0) {
        return 'E';
    } else {
        return 'tidak terdeteksi';
    }
}

function getIndeksNilai(nilaiHuruf) {
    switch (nilaiHuruf) {
        case 'A':
            return '4.0';
        case 'A-':
            return '3.67';
        case 'B+':
            return '3.3';
        case 'B':
            return '3.0';
        case 'B-':
            return '2.67';
         case 'C+':
            return '2.33';
        case 'C':
            return '2.00';
        case 'D':
            return '1.00';
        default:
            return '0.0';
    }
}
function getKeterangan(nilaiHuruf) {
        switch (nilaiHuruf) {
            case 'A':
                return '4.0';
            case 'A-':
                return '3.67';
            case 'B+':
                return '3.3';
            case 'B':
                return '3.0';
            case 'B-':
                return '2.67';
             case 'C+':
                return '2.33';
            case 'C':
                return '2.00';
            case 'D':
                return '1.00';
            default:
                return '0.0';
        }
    }

