import React from "react";
import { useRef } from "react";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import { ReactComponent as ReturnSVG } from '../../assets/svg/return.svg';
import { ReactComponent as SaveSVG } from '../../assets/svg/save.svg';

const App = () => {
    const [readonly, setReadonly] = useState(false);
    useEffect(() => {
        // Initialize TinyMCE
        //@ts-ignore
        tinymce.init({
            readonly: readonly,
            external_plugins: {
                'custom-dropdown': 'https://cdn.jsdelivr.net/gh/JaiNarayanan/tinymce-plugins@plugin-testing/src/editor/plugins/dropdown/plugin.min.js'
            },

            selector: '#tinymce-editor',
            height: '100vh',
            menubar: false,
            plugins: [
                "advlist", "autolink",
                "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks",
                "fullscreen", "insertdatetime", "media", "table", "help", "wordcount", "powerpaste", "save",
            ],
            toolbar:"undo redo print save | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat | custom-dropdown",
            toolbar_sticky: true,
            skin: "bootstrap",
            content_style: `
                        body {
                            background: #fff;
                        }

                        @media (min-width: 840px) {
                            html {
                                background: #eceef4;
                                min-height: 100%;
                                padding: 0 .5rem
                            }

                            body {
                                background-color: #fff;
                                box-shadow: 0 0 4px rgba(0, 0, 0, .15);
                                box-sizing: border-box;
                                margin: 1rem auto 0;
                                max-width: 1100px;
                                min-height: calc(100vh - 1rem);
                                padding:4rem 6rem 6rem 6rem
                            }
                        }
                    `,
            // icons: "material",


            // Add any TinyMCE configuration options here
        });

        // Cleanup on component unmount
        return () => {
            //@ts-ignore
            tinymce.remove('#tinymce-editor');
        };
    }, [readonly]);
    const editorRef = useRef(null);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [saved, setSaved] = useState(true);
    const [alert, setAlert] = useState({
        delay: 0,
        message: "",
        status: "",
        open: false,
    });

    const clearAlert = () => {
        setAlert({ ...alert, open: false });
    };

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div>
            <div className="h-[5vh] w-full flex ">
                {/* <button className="z-10 text-center w-3/12 flex-initial flex bg-blue-600 hover:bg-blue-700 uppercase py-2 justify-center">
                    <h1 className="leading-7 ml-3 text-base text-white font-medium">Preview</h1>
                </button> */}
                <button onClick={() => setReadonly(!readonly)} className="z-10 text-center w-[3.5rem] flex-initial flex bg-[#ECEEF4] hover:bg-[#e1e2e8] uppercase py-2 justify-center">
                    Preview
                </button>
            </div>
            <textarea id="tinymce-editor"></textarea>
            {/* <Editor
                apiKey={process.env.REACT_APP_TINY_MCE_KEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={content}
                onEditorChange={() => {
                        if(saved){
                            setSaved(false);
                        }
                    }
                }
                init={{
                    extended_valid_elements : "emstart,emend",
                    custom_elements: "emstart,emend",
                    content_css: "editor.css",
                    height: '95vh',
                    menubar: false,
                    plugins: [
                        "advlist", "autolink",
                        "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace", "visualblocks",
                        "fullscreen", "insertdatetime", "media", "table", "help", "wordcount", "powerpaste", "save",
                    ],	
                    save_onsavecallback: () => {
                        saveContent()
                    },
                    
                    toolbar:"undo redo print save | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat",
                    toolbar_sticky: true,
                    skin: "bootstrap",
                    icons: "material",
                    content_style: `
                        body {
                            background: #fff;
                        }

                        @media (min-width: 840px) {
                            html {
                                background: #eceef4;
                                min-height: 100%;
                                padding: 0 .5rem
                            }

                            body {
                                background-color: #fff;
                                box-shadow: 0 0 4px rgba(0, 0, 0, .15);
                                box-sizing: border-box;
                                margin: 1rem auto 0;
                                max-width: 1100px;
                                min-height: calc(100vh - 1rem);
                                padding:4rem 6rem 6rem 6rem
                            }
                        }
                    `, 
                }}
            /> */}
        </div >
    );
};

export default App;
