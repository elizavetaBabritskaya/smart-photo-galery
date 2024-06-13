import React, {useState} from "react";
import Link from "antd/es/typography/Link";
import './MyMenu.css'

import IconPhoto from './images/imagesmode.svg';
import IconAlbom from './images/auto_awesome_motion.svg';
import IconAvailiablePhoto from './images/how_to_reg.svg';
import IconBasket from './images/delete.svg';


const MyMenu = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(1);
  const addClassSelected = (value) => {
    if (selectedAnswer === value) {
      return "link_selected";
    }
    return "";
  }

  return (
    <ul className="side__menu"> 
      <Link href="/"><li className={`menu__elem_link ${addClassSelected(1)}`} onClick={()=>setSelectedAnswer(1)}>
        <div className="menu__elem">
          <img className="link__img" alt="" src={IconPhoto}/>
          Мои фото
        </div>
      </li>
      </Link>

      <Link href="#"><li className={`menu__elem_link ${addClassSelected(2)}`} onClick={()=>setSelectedAnswer(2)}>
        <div className="menu__elem">
          <img className="link__img" alt="" src={IconAlbom}/>
          Мои альбомы
        </div>
      </li>
      </Link>

      <Link href="#"><li className={`menu__elem_link ${addClassSelected(3)}`} onClick={()=>setSelectedAnswer(3)}>
        <div className="menu__elem">
          <img className="link__img" alt="" src={IconAvailiablePhoto}/>
          Доступные мне
        </div>
      </li>
      </Link>

      <Link href="#"><li className={`menu__elem_link ${addClassSelected(4)}`} onClick={()=>setSelectedAnswer(4)}>
        <div className="menu__elem">
          <img className="link__img" alt="" src={IconBasket}/>
          Корзина
        </div>
      </li>
      </Link>
    </ul>
  );
};
export default MyMenu;