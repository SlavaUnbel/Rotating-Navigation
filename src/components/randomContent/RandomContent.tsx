import React from 'react';

interface Props {
  data: IData;
}

const RandomContent: React.FC<Props> = ({ data }) => (
  <div className="content">
    <h1>{data.title}</h1>
    <small>{data.subtitle}</small>
    <p>{data.firstArticle}</p>

    <h3>{data.imgTitle}</h3>
    <img src={data.link} alt="dog" />
    <p>{data.secondArticle}</p>
  </div>
);
export default RandomContent;
