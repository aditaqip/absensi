const PesertaIndex = [
    {
        'ID' : 1,
        'name' : 'Fianna',
        'Npm' : '3232412',
        'NIK' : '32139182472737',
        'tglahir' : 'Bekasi, 24 Juni 2000',
        'gender' : 'L',
        'type' : 'PTN',
        'instance' : 'Merdeka',
        'pddk' : 'S1',
        'jurusan' : 'Sistem Informasi',
        'Telp' : '0828172231551',
        'alamatDomisili' : 'jl test 1 no 12',
        'parentName' : 'surti',
        'parentJob' : 'Swaasta',
    },
    {
        'ID' : 1,
        'name' : 'Bayu',
        'Npm' : '3232412',
        'NIK' : '32139182472737',
        'tglahir' : 'Bekasi, 24 Juni 2000',
        'gender' : 'L',
        'type' : 'PTN',
        'instance' : 'Merdeka',
        'pddk' : 'S1',
        'jurusan' : 'Sistem Informasi',
        'Telp' : '0828172231551',
        'alamatDomisili' : 'jl test 1 no 12',
        'parentName' : 'surti',
        'parentJob' : 'Swaasta',
    },
    {
        'ID' : 1,
        'name' : 'Dianan',
        'Npm' : '3232412',
        'NIK' : '32139182472737',
        'tglahir' : 'Bekasi, 24 Juni 2000',
        'gender' : 'L',
        'type' : 'PTN',
        'instance' : 'Merdeka',
        'pddk' : 'S1',
        'jurusan' : 'Sistem Informasi',
        'Telp' : '0828172231551',
        'alamatDomisili' : 'jl test 1 no 12',
        'parentName' : 'surti',
        'parentJob' : 'Swaasta',
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