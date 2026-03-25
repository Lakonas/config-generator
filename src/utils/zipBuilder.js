import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export async function downloadConfigBundle(files) {
  const zip = new JSZip();

  files.forEach((file) => {
    zip.file(file.name, file.content);
  });

  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, 'project-config.zip');
}