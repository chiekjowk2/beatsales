import "./Uploads.css"
import {useState} from 'react'
const Uploads = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const handleFileSize = () => {
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
    handleFileSize()

  }
  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
    } else {
      alert("No file selected!");
    }
  };

  return (
    <div className="upload-container">
      <div className='uploads'>
        <h2>Upload Files Here</h2>
        <input type="file"  onChange = {handleFileUpload} className="file-input"/>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  )
}

export default Uploads