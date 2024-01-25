import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

var openDialog = function (editor) {
  return editor.windowManager.open({
    title: 'Example plugin',
    body: {
      type: 'panel',
      items: [
        {
          type: 'input',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'input',
          name: 'title2',
          label: 'Title2'
        },
      ],
    },
    buttons: [
      {
        type: 'cancel',
        text: 'Close'
      },
      {
        type: 'submit',
        text: 'Save',
        primary: true
      }
    ],
    onSubmit: function (api) {
      var data = api.getData();
      console.log(data)
      /* Insert content when the window form is submitted */
      editor.insertContent('<h1>I HOPE THIS IS A TITLE</h1> <details><summary>Click to toggle</summary><span>Oh, hello</span></details>' + data.title);
      api.close();
    }
  });
};

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('custom-dropdown', {
    text: 'Add Dropdown',
    onAction: function () {
      /* Open window */
      openDialog(editor);
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('custom-dropdown', setup);
};
