import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom/client";

import MyLayout from "../../Layouts/Layout/MyLayout";
import Carousel from "../../components/Carousel/Carousel";
import "./MyPhoto.css";
import openSetting from "../../actions/settings/actionOpenSetting";
import getPhoto from "../../actions/getPhoto/actionGetPhoto";
import openCarousel from "../../actions/carousel/actionOpenCarousel";

const MyPhoto = () => {
  // const [photoSrc, setPhotoSrc] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [chooses, setChooses] = useState(false);
  const photoSrc = useSelector((state) => state.getPhotoReducer.photos);
  const dispatch = useDispatch();
  const isShowSetting = useSelector((state) => state.settingReducer.isOpen);
  const isShowCarousel = useSelector(
    (state) => state.carouselReducer.carouselIsOpen
  );

  useEffect(() => {
    dispatch(getPhoto());
  }, []);

  useEffect(() => {}, [photoSrc]);

  const addClassSelected = (value) => {
    if (selectedPhoto === value && isShowSetting) {
      return "selected";
    }
    return "";
  };

  const choose = (value) => {
    setSelectedPhoto(value);
    dispatch(openSetting());
    setChooses(!chooses);
    const set = localStorage.setItem("selectedPhoto", value);
    console.log(selectedPhoto);
  };

  const showCarousel = () => {
    dispatch(openCarousel());
  };

  return (
    <MyLayout className="layout__myPhoto">
      <h2 className="myPhoto__title">Мои фотографии</h2>
      <div className="myPhoto__all-albom">
        {photoSrc.map((result) => (
          <>
            {!isShowCarousel && (
              <div className="checkbox">
                <input
                  id={`checkbox${result.url}`}
                  type="checkbox"
                  name="checkbox"
                  value={`checkbox${result.url}`}
                  onChange={() => choose(result.url)}
                />
                <label for={`checkbox${result.url}`} />
                <button className="img__button" onClick={showCarousel}>
                  <img
                    style={{ width: "150px", height: "150px" }}
                    className="album__photo"
                    src={result.url}
                    alt={""}
                  />
                </button>
              </div>
            )}
          </>
        ))}
      </div>
      {isShowCarousel && (
          <Carousel>
            {photoSrc.map((result) => (
              <>
                <img
                  className=""
                  src={result.url}
                  alt={""}
                />
              </>
            ))}
          </Carousel>
        )}
    </MyLayout>
  );
};
export default MyPhoto;
