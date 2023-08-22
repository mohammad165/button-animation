import React from 'react';
import '@/globals.css'
const buttonAnimations  = ({
  href = "/",
  title = "Trun on",
  data_back = "Trun on",
  data_front = "Trun off"
}) => {
  return (
    <a
      href={href}
      title={title}
      className="btn-flip"
      data-back={data_back}
      data-front={data_front}
    ></a>
  );
};

export default buttonAnimations ;
