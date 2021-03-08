import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { t } from 'react-i18nify';

import classesCSS from './InputUpload.module.css';
import { UplaodArrowSVG, UploadArrowBottomSVG } from './InputUploadSVG';

const InputUpload = (props) => {
    let style = props.style ? classesCSS[props.style] : classesCSS.dashboard;

    const [files, setFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        console.log(acceptedFiles);
    }, [])

    const deleteFiles = () => {
        setFiles([]);
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone(
        {
            onDrop,
            multiple: false,
            accept: 'image/*',
        }
    )

    // cleaning
    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const thumbs = files.map(file => (
        <div key={file.name} className={classesCSS.Prewiev}>
            <img
                src={file.preview}
            />
        </div>
    ));
    const size = files.map(file => (
        <div key={file.name} className={classesCSS.uploadTextContainer}>
            {(+file.size / 1000).toFixed([0])}KB
        </div>
    ));

    return (
        <div className={style} >
            {props.label ?
                <div className={classesCSS.InputLabel}>
                    {props.label}
                </div> : null}
            <div className={classesCSS.DropContainer}>
                <div className={classesCSS.uploadIconContainer} onClick={deleteFiles}>
                    <UplaodArrowSVG />
                    <UploadArrowBottomSVG />
                </div>
                <div
                    className={classesCSS.InputContainer}
                    {...getRootProps()}>
                    <input {...getInputProps()} />
                    {thumbs}
                    {isDragActive ?
                        <p className={classesCSS.Drag}>{t("dashboard.booking.drop")}</p> :
                        thumbs.length == 0 ?
                            <p className={classesCSS.Drag}>{t("dashboard.booking.drag")}</p> : null
                    }
                </div>
                {size}
            </div>
        </div >
    )
}

export default InputUpload;