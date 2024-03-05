const PesertaIndex = [
    {
        'ID' : 1,
        'name' : 'Fianna',
        'Npm' : '3232412',
        'NIK' : '32139182472737',
        'Tempatlahir' : 'Bekasi',
        'tglahir' : 'Bekasi, 24 Juni 2000',
        'namaDivpal' : 'kapal api',
        'gender' : 'L',
        'type' : 'PTN',
        'instance' : 'Merdeka',
        'pddk' : 'S1',
        'jurusan' : 'Nautika',
        'Telp' : '0828172231551',
        'JenisMagang' : 'Magang Laut',
        'alamatDomisili' : 'jl test 1 no 12',
        'parentName' : 'surti',
        'parentJob' : 'Swasta',
        'checkIn'   : '08.00',
        'checkOut'  : '17.30',
        'jenisAbsen' : 'WFA',
        'unitKerja' : 'Cabang Merak',
        'tgls' : '1 Januari 2024',
        'tgle' : '1 Januari 2025',
        'durasi' : '12 Bulan',
        'tanggalmsk' : '26 Februari 2024',
    },
    {
        'ID' : 2,
        'name' : 'Nanda Eka ',
        'Npm' : '3232413',
        'NIK' : '32139182472738',
        'Tempatlahir' : 'Bekasi',
        'tglahir' : 'Bekasi, 24 Juni 2000',
        'namaDivpal' : 'Divisi Teknologi Informasi',
        'gender' : 'P',
        'type' : 'PTN',
        'instance' : 'Merdeka',
        'pddk' : 'S1',
        'jurusan' : 'Sistem Informasi',
        'Telp' : '0828172231551',
        'JenisMagang' : 'Magang Darat',
        'alamatDomisili' : 'jl test 1 no 12',
        'parentName' : 'surti',
        'parentJob' : 'Swasta',
        'checkIn'   : '08.00',
        'checkOut'  : '17.30',
        'jenisAbsen' : 'WFO',
        'unitKerja' : 'Kantor Pusat',
        'tgls' : '1 Januari 2024',
        'tgle' : '1 Januari 2025',
        'durasi' : '12 Bulan',
        'tanggalmsk' : '26 Februari 2024',
    },
    {
        'ID' : 3,
        'name' : 'Dianan',
        'Npm' : '3232412',
        'NIK' : '32139182472737',
        'Tempatlahir' : 'Bekasi',
        'tglahir' : 'Bekasi, 24 Juni 2000',
        'namaDivpal' : 'Divisi Teknologi Informasi',
        'JenisMagang' : 'Magang Darat',
        'gender' : 'L',
        'type' : 'PTN',
        'instance' : 'Merdeka',
        'pddk' : 'S1',
        'jurusan' : 'Sistem Informasi',
        'Telp' : '0828172231551',
        'alamatDomisili' : 'jl test 1 no 12',
        'parentName' : 'surti',
        'parentJob' : 'Swasta',
        'checkIn'   : '08.00',
        'checkOut'  : '17.30',
        'jenisAbsen' : 'WFA',
        'unitKerja' : 'Cabang Bakauheni',
        'tgls' : '1 Januari 2024',
        'tgle' : '1 Januari 2025',
        'durasi' : '12 Bulan',
        'tanggalmsk' : '26 Februari 2024',
    },
]

const DataID = (id) => {
    const obj = Object.entries(PesertaIndex)
    const filtered = obj.filter(([key, index]) => {
        index.ID == id
    })
    return filtered
}


export {
    PesertaIndex,
    DataID
}