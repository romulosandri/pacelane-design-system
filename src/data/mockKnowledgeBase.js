/**
 * Mock Knowledge Base Data
 * Sample knowledge base structure for development and demonstration purposes
 */

export const mockKnowledgeBase = [
  {
    id: 'folder-1',
    name: 'Research Documents',
    type: 'folder',
    children: [
      {
        id: 'file-1',
        name: 'User Interview Transcripts.pdf',
        type: 'file',
        fileType: 'pdf',
        size: '2.4 MB',
        lastModified: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'file-2',
        name: 'Survey Results.xlsx',
        type: 'file',
        fileType: 'excel',
        size: '892 KB',
        lastModified: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'file-3',
        name: 'Competitor Analysis.docx',
        type: 'file',
        fileType: 'document',
        size: '1.2 MB',
        lastModified: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      }
    ]
  },
  {
    id: 'folder-2',
    name: 'Design Assets',
    type: 'folder',
    children: [
      {
        id: 'file-4',
        name: 'Brand Guidelines.pdf',
        type: 'file',
        fileType: 'pdf',
        size: '5.1 MB',
        lastModified: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'file-5',
        name: 'Logo Assets.zip',
        type: 'file',
        fileType: 'zip',
        size: '3.7 MB',
        lastModified: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000)
      }
    ]
  },
  {
    id: 'file-6',
    name: 'Project Requirements.pdf',
    type: 'file',
    fileType: 'pdf',
    size: '1.8 MB',
    lastModified: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
  },
  {
    id: 'file-7',
    name: 'Meeting Recording.mp4',
    type: 'file',
    fileType: 'video',
    size: '125 MB',
    lastModified: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
  }
];