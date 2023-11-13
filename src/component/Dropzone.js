import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import FadeLoader from "react-spinners/FadeLoader";
import './Dropzone.scss';

const Dropzone = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
        setLoading(true);
        console.log(acceptedFiles);
        if (acceptedFiles?.length) {
            setTimeout(() => {
                setFiles(previousFiles => [
                    ...previousFiles,
                    ...acceptedFiles.map(file =>
                        Object.assign(file, { preview: URL.createObjectURL(file) })
                    )
                ]);
                setLoading(false);
            }, 1000);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'audio/mp3': [],
            'audio/AAC': [],
            'audio/M4A': [],
            'audio/WAV': [],
        }
    });

    const removeFile = (name) => {
        setFiles(files => files.filter(file => file.name !== name));
    };

    return (
        <div className="drop-container">
            {files.length > 0 ? (
                <ul className="file">
                    {files.map(file => (
                        <li key={file.name}>{file.name}</li>
                    ))}
                </ul>
            ) : (
                <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here..</p>
                    ) : (
                        <p>Upload your 30s/1m voice sample</p>
                    )}
                    {loading && (
                        <div className="loading-icon">
                            <FadeLoader
                                color="black"
                                loading={loading}
                                size={50}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Dropzone;
