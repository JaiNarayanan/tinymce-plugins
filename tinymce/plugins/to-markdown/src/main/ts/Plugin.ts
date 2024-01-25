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
        }
      ]
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
      /* Insert content when the window form is submitted */
      editor.insertContent('Title: ' + data.title);
      api.close();
    }
  });
};

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('example', {
    text: 'My button',
    onAction: function () {
      /* Open window */
      openDialog(editor);
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('to-markdown', setup);
};
