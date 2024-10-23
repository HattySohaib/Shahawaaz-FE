import React from "react";
import done from "../../assets/editor_icons/done.png";

function ImageBtn({ img, onChange, text, selectedFile }) {
  return (
    <div>
      <label
        id="banner-label"
        htmlFor={`${text}-banner`}
        className="file-upload-btn banner-label"
      >
        {!selectedFile && (
          <>
            <img className="banner-btn-icon" src={img} />
            <span>Add {text} banner</span>
          </>
        )}
        {selectedFile && (
          <>
            <img className="banner-btn-icon" src={done} />
            <span>Change {text} banner</span>
          </>
        )}
      </label>
      <input
        name={`${text}-banner`}
        id={`${text}-banner`}
        className="banner-input"
        type="file"
        onChange={onChange}
      />
    </div>
  );
}

export default ImageBtn;
