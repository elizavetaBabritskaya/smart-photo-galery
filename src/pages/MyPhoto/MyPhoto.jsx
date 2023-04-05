import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';


import MyLayout from '../../Layouts/Layout/MyLayout';
import './MyPhoto.css'

const hostUrl = 'http://localhost:8080/files'

const MyPhoto = ({children}) => {

  const [photoSrc , setPhotoSrc] = useState([]);

  // const renderItem = (item) => {
  //   const listItem = createDocumentFragment();
  
  //   const description = createElement("img");
  //   description.className = "album__photo";
  //   description.src = item;
  //   // description.append(item.description);
  
  //   listItem.append(description);
  
  //   return listItem;
  // };

  
  
  useEffect(() => {fetch(hostUrl, {
    method: 'GET'
  }).then((response) => response.json()).then(data => {setPhotoSrc(data)});}, [])
  
  return (
    <MyLayout className="layout__myPhoto">
      <h2 className="myPhoto__title">Мои фотографии</h2>
      <div className="myPhoto__all-albom">
          {
            photoSrc.map((result) => (
              <img style={{width: "150px", height: "150px"}} className="album__photo" src = {result.url} alt = {""}/>
            ))
          }
      </div>
    </MyLayout>
  );
};
export default MyPhoto;