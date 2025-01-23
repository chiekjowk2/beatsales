import "./Uploads.css"
import {useState} from 'react'
const Uploads = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const handleFileSize = (file) => {
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      setErrorMessage("File size exceeds 50MB")
      setSelectedFile(null)
    } else {
      setErrorMessage("")
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
    handleFileSize(file)

  }
  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
    } else {
      alert("No file selected!");
    }
  };
  const HandleFileType1 = (file)=>{
    const splitFile1 = file.split(".")
    const extensionFile1 = splitFile1[1]
    const extension1 = ["wav", "mp3", "flac", "ogg"]
    if(extension1.includes(extensionFile1)){
      console.log("success uploading file")
    } else {
      console.log("fail uploading file")
      document.getElementById("file-one").value = ""
    }
  }  
  const HandleFileType = (file)=>{
    const splitFile = file.split(".")
    const extensionFile = splitFile[1]
    const extension = ["png", "jpg", "jpeg", "gif"]
    if(extension.includes(extensionFile)){
      console.log("success uploading file")
    } else {
      console.log("fail uploading file")
      document.getElementById("file-two").value = ""
      return
    }
  }

  return (
    <div className="upload-container">
      <div className='uploads'>
        <h2>Upload Files Here</h2>
        <div className="beat-more">
          <div className="beat-des">
          <div className="beat-details">
            <div className="beat-wav">
            <input type="file"  id="file-one" onChange = {(e) => HandleFileType1(e.target.files[0].name)} className="file-input"/>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
            <div className="beat-img">
              <input id="file-two" type="file"  onChange={(e)=> HandleFileType(e.target.files[0].name)} />
            </div>
          </div>
            <div className="beat-inform">
              <div className="beat-title">
                <h2>Beat Title:</h2><input type="text" />
              </div>
              <div className="beat-bpm">
                <h2>BPM:</h2><input type="text" />
              </div>   
              <div className="beat-key">
                <h2>Key:</h2><input type="text" />
              </div>
            </div>
            
            

        </div>
         
        </div>
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  )
}

export default Uploads