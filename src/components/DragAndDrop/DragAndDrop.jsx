import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import uploadImg from './images/cloud_upload.svg'
import './DragAndDrop.css'


const hostUrl = 'http://localhost:8080/uploadImage';


const DragAndDrop = props => {

  const wrapperRef = useRef(null)

  const[fileList, setFileList] = useState([])

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState();

  const handleUpload = async () => {
    if(fileList.length === 0) {
      return;
    };

    const formData = new FormData();
    formData.append('file', fileList[0]);

    const res = await fetch(hostUrl, {
      method: 'POST',
      mode: "no-cors",
      body: formData,
    });
    const data = await res;

    setUploaded(data);
  }

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

  const onDrop = () => wrapperRef.current.classList.remove('dragover');

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if(newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  }

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1)
     setFileList(updatedList);
    props.onFileChange(updatedList);
  }

  return(
    <>
      <div className='DragAndDrop'>
        <div 
          ref={wrapperRef}
          className='DragAndDrop__input'
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          >
            <h2 className='DregAndDrop__title'>
            Загрузите фотографию
            </h2>
          <div className='DragAndDrop__input__label'>
            <img src={uploadImg} width="100px" height="100px" alt=""/>

            <div>
              <button className='DragAndDrop__button'> Выберите фото</button>
              <p>или перетащите его сюда</p>
            </div>
          </div>
          <input type="file" accept='image/*' value="" onChange={onFileDrop}/>
        </div>
        {
        fileList.length > 0 ? (
          <div>
          <div className='DragAndDrop-preview'>
            {
              fileList.map((item, index) => (
                <div key={index}
                      className="DragAndDrop-preview__item">
                  <div className='DragAndDrop-previe__item__info'>
                    <p>{item.name}</p>
                  </div> 
                  <span className='DragAndDrop-preview__item__del' onClick={()=>fileRemove(item)}>
                    X
                  </span>       
                </div>
              ))
            }
          </div>
          <button className='upload DragAndDrop__button' type='submit' onClick={handleUpload}>Upload Photo</button>
          </div>
        ) : null
      }
      </div>
      
  </>
  );
};

DragAndDrop.propTypes = {
  onFileChange: PropTypes.func
}

export default DragAndDrop;