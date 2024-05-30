import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

export default function PageContent() {
  const [editorHtml, setEditorHtml] = useState('');
  const [formData, setFormData] = useState({});
  const [content, setContent] = useState('');
  console.log(editorHtml)

  const editor = useRef(null);



  // const modules = {
  //   toolbar: {
  //     container: [
  //       ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //       ['blockquote', 'code-block'],
  //       ['link', 'image', 'video', 'formula'],

  //       [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  //       [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
  //       [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  //       [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  //       [{ 'direction': 'rtl' }],                         // text direction

  //       [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  //       [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  //       [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //       [{ 'font': [] }],
  //       [{ 'align': [] }],

  //       ['clean']                                         // remove formatting button
  //     ],
  //     handlers: {
  //       image: function () {
  //         const url = window.prompt('Enter the image URL:');
  //         if (url) {
  //           this.quill.format('image', url);
  //         }
  //       },
  //     },
  //   },
  // };

  // const formats = [
  //   'header', 'font', 'size',
  //   'bold', 'italic', 'underline', 'strike', 'blockquote',
  //   'list', 'bullet', 'indent',
  //   'link', 'image', 'video'
  // ];

  // const handleEditorChange = (html) => {
  //   setEditorHtml(html);
  // };



  return (
    <div className='mt-[70px]'>
      {/* <ReactQuill
        theme="snow"
        onChange={(value) => setEditorHtml({ ...formData, content: value })}
        modules={modules}
        formats={formats}
        bounds={'.app'}
      /> */}

      <JoditEditor
        ref={editor}
        value={content}
        // config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => { }}
      />
    </div>
  )
}
