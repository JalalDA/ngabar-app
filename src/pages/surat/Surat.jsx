import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/header/Header'
import './surat.css'

const Surat = () => {
    const [ayat, setAyat] = useState([])
    const [surat, setSurat] = useState({})
    const params = useParams()
    const getSuratByNomor = async ()=>{
        try {
            const result = await axios.get(`https://equran.id/api/surat/${params.id}`)
            setAyat(result.data.ayat)
            setSurat(result.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getSuratByNomor()
    }, [])
  return (
    <>
    <Header/>
    <div className="suratContainer">
        <div>Nama surat : {surat.nama}</div>
        <div className="nama-latin">Nama Latin : {surat.nama_latin}</div>
        <div>Surat nomor {`${params.id}`}</div>
        <div className="jumlah_ayat">Jumlah Ayat : {surat.jumlah_ayat}</div>
        {ayat.map(ayat=>(
            <div className="card-ayat">
            <div className="ayat_arab">{ayat.ar}</div>
            <div className="cara_baca">{ayat.tr}</div>
            <div className="terjemahan">{ayat.idn}</div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Surat