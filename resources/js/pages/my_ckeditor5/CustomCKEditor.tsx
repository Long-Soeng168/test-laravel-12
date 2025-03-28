import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react';

const CustomCKEditor: React.FC = () => {
    const [editorData, setEditorData] = useState<string>('');
    const [fileManagerOpen, setFileManagerOpen] = useState<boolean>(false);
    const [editorInstance, setEditorInstance] = useState<any>(null);

    const openFileManager = (editor: any) => {
        setEditorInstance(editor);
        setFileManagerOpen(true);
    };

    const handleFileSelect = (fileUrl: string) => {
        if (editorInstance) {
            editorInstance.model.change((writer: any) => {
                const imageElement = writer.createElement('image', { src: fileUrl });
                editorInstance.model.insertContent(imageElement, editorInstance.model.document.selection);
            });
        }
    };

    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onReady={(editor) => console.log('Editor is ready')}
                config={{
                    licenseKey: 'GPL',
                    toolbar: ['heading', '|', 'bold', 'italic', '|', 'link', 'imageUpload', '|', 'undo', 'redo'],
                    extraPlugins: [
                        function (editor: any) {
                            editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
                                return {
                                    upload: () =>
                                        new Promise((_resolve, reject) => {
                                            openFileManager(editor);
                                            reject('File manager should be used.');
                                        }),
                                };
                            };
                        },
                    ],
                }}
                onChange={(_, editor) => setEditorData(editor.getData())}
            /> 
        </div>
    );
};

export default CustomCKEditor;
