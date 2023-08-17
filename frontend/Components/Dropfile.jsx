import React, { useState } from 'react';
import { CSSProperties } from "react";
import { useRouter } from 'next/navigation'

import '../assets/css/DropFile.css'
import upload from '../assets/img/file.png'
import folder from '../assets/img/folder.png'
import { Box } from '@mui/material';
import Image from 'next/image'
import BeatLoader from "react-spinners/BeatLoader";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
function FileUploadComponent() {
    const [uploadedFile, setUploadedFile] = useState(null);
    const router=useRouter()

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file);
            setTimeout(() => {
                router.push('/products/56ae8099-abe7-4e58-8fdc-6114cc8a388c')
              }, "3000");
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            // setLoading(true)
            setUploadedFile(file);
            setTimeout(() => {
                router.push('/products/56ae8099-abe7-4e58-8fdc-6114cc8a388c')
              }, "3000");
           
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    // let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#0071DC");
    return (
        <div>
            {/* <BeatLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      
             

            <div style={{marginTop:"80px"}}
                className="dropbox"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                {uploadedFile ? (
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Image width={50} src={folder} alt="img" />
                        </div>
                        <p>File Successfully uploaded: {uploadedFile.name} and Please wait your image is processing.</p>
                        <BeatLoader
                    color={color}
                    loading={true}
                    cssOverride={override}
                    size={15}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                            />
                    </div>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Image width={50}  src={upload} alt="img" />
                        </div>
                        <p>Drop your file here or</p>
                        <input style={{ margin: "10px 0px 10px 20%" }} type="file" onChange={handleFileUpload} />
                    </div>
                )}
            </div>
            <Box sx={{display:{sm:"none",xs:"block"},marginBottom:"300px"}}>

</Box>
        </div>
    );
}

export default FileUploadComponent;
