import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('to-markdown', {
    text: 'to-markdown button',
    onAction: () => {
      editor.setContent('<p>content added from to-markdown</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('to-markdown', setup);
};
