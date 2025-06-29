export const translations = {
  zh: {
    // Header
    title: '文本转CSV转换器',
    subtitle: '解析百度网盘分享信息并导出为CSV',
    newFile: '新文件',
    
    // Upload section
    uploadTitle: '上传您的文本文件',
    uploadDescription: '上传包含百度网盘分享信息的.txt文件。应用会自动解析内容并准备CSV导出。',
    dropFile: '将.txt文件拖放到此处',
    clickBrowse: '或点击浏览文件',
    supportedFiles: '支持最大10MB的.txt文件',
    processing: '正在处理文件...',
    
    // Errors
    errorTxtOnly: '请选择.txt文件',
    errorFileSize: '文件大小应小于10MB',
    errorReading: '读取文件时出错',
    
    // Parsed content
    parsedTitle: '解析内容',
    blocksFound: '个数据块',
    previewDescription: '提取的数据块预览',
    block: '数据块',
    extractCode: '提取码',
    
    // Export section
    readyToExport: '准备导出',
    exportDescription: '成功解析了{count}个数据块。每个数据块将在CSV文件中占据单独的行。',
    exportButton: '导出为CSV',
    
    // No data
    noDataTitle: '未找到数据',
    noDataDescription: '上传的文件不包含可识别的百度网盘分享格式。请检查文件内容后重试。',
    
    // Footer
    footerDescription: '支持解析百度网盘分享信息格式。每个内容块将作为CSV文件中的单独行导出。'
  },
  en: {
    // Header
    title: 'Text to CSV Converter',
    subtitle: 'Parse Baidu netdisk sharing information and export to CSV',
    newFile: 'New File',
    
    // Upload section
    uploadTitle: 'Upload Your Text File',
    uploadDescription: 'Upload a .txt file containing Baidu netdisk sharing information. The app will automatically parse the content and prepare it for CSV export.',
    dropFile: 'Drop your .txt file here',
    clickBrowse: 'or click to browse files',
    supportedFiles: 'Supports .txt files up to 10MB',
    processing: 'Processing file...',
    
    // Errors
    errorTxtOnly: 'Please select a .txt file',
    errorFileSize: 'File size should be less than 10MB',
    errorReading: 'Error reading file',
    
    // Parsed content
    parsedTitle: 'Parsed Content',
    blocksFound: 'blocks found',
    previewDescription: 'Preview of extracted data blocks',
    block: 'Block',
    extractCode: 'Extract Code',
    
    // Export section
    readyToExport: 'Ready to Export',
    exportDescription: '{count} data blocks parsed successfully. Each block will be placed in a separate row in the CSV file.',
    exportButton: 'Export as CSV',
    
    // No data
    noDataTitle: 'No Data Found',
    noDataDescription: 'The uploaded file doesn\'t contain recognizable Baidu netdisk sharing format. Please check the file content and try again.',
    
    // Footer
    footerDescription: 'Supports parsing of Baidu netdisk sharing information format. Each content block will be exported as a separate row in the CSV file.'
  }
};

export type TranslationKey = keyof typeof translations.zh;