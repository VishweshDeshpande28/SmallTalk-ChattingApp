import React from 'react';
import { Upload } from 'antd';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};
const Uploadfile = () => (
  <Upload {...props}>
          <img
        src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"
        className="record"
        alt="1"
      ></img>
  </Upload>
);
export default Uploadfile;