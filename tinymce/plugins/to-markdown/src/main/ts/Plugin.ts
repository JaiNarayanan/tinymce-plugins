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
          label: 'Dropdown Title'
        },
        {
          type: 'textarea',
          name: 'content',
          label: 'Dropdown Content'
        }
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
      editor.insertContent(`<details><summary><h1 class="text-bruh">${data.title}</h1></summary><span>${data.content}</span></details>`);
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
