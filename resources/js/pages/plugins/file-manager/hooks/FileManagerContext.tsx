import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Create the context with the correct default value
const FileManagerContext = createContext(undefined);

export const FileManagerProvider = ({ children }: { children: ReactNode }) => {
    const [currentFolder, setCurrentFolder] = useState(null);
    const [fileTableData, setFileTableData] = useState<any[]>([]);
    const [error, setError] = useState<any>(null);

    // Function to fetch file data
    const getFileData = () => {
        axios
            .get('/api/file_manager/files')
            .then((response) => {
                // console.log(response.data);
                setFileTableData(response.data); // Set the data to state
            })
            .catch((error) => {
                console.error('Error fetching files:', error);
                setError(error); // Handle errors if any
            });
    };

    useEffect(() => {
        getFileData();
    }, []);

    return (
        <FileManagerContext.Provider value={{ fileTableData, getFileData, error, currentFolder, setCurrentFolder}}>
            {children}
        </FileManagerContext.Provider>
    );
};

// Custom hook to use FileManager context
export const useFileManager = (): FileManagerContextType => {
    const context = useContext(FileManagerContext);
    if (!context) {
        throw new Error('useFileManager must be used within a FileManagerProvider');
    }
    return context;
};
