import React from 'react'
import Header from '../../components/header/Header'
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './home.css'

const Home = () => {
  const [surat, setSurat] = useState([])
  const navigate = useNavigate()
  const getSurat = async ()=>{
    try {
      const result = await axios.get(`https://equran.id/api/surat`)
      setSurat(result.data)
      console.log(surat);
    } catch (error) {
      console.log(error);
    }
  }

  const callBackSurat = useCallback(()=>{
    getSurat()
  }, [])

  useEffect(()=>{
    callBackSurat()
    console.log('Surat');
  }, [callBackSurat])

  return (
    // <div>Home</div>
    <React.Fragment>
        <Header/>
        <div className="container-surat row">
            {surat.map(item=>(
                <>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="card-surat">
                        <div>{item.nama_latin}</div>
                        <div>{item.nama}</div>
                        <div>{`Surat ke - ${item.nomor}`}</div>
                        <div 
                          className="visit-button"
                          onClick={()=>{
                            navigate(`/surat/${item.nomor}`)
                          }}
                          >Baca</div>
                    </div>
                </div>
                {/* <div>{item.nama}</div> */}
                </>
            ))}
        </div>
    </React.Fragment>
  )
}

export default Home