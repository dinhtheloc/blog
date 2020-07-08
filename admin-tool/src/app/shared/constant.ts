import { environment } from '../../environments/environment';

export class AppSettings {

    static PAGE_SIZE = 30;
    static PAGE_SIZE_ALL = 999;
    static PAGE_SIZE_ALL_NEW = 10000;
    static MAX_ES_VALUE = 100000;
    public static TOKEN = 'token';
    public static USERTYPE_KEY = 'usertype';
    public static USERNAME_KEY = 'username';
    public static FUNCTION_KEY = 'functions';
    public static itemsPerPageList = [10, 30, 50, 100];
    public static PDF_ICON_URL = '/assets/img/icon-pdf-download-red.png';
    public static FILE_ICON_URL = '/assets/img/file.png';
    // tslint:disable-next-line:max-line-length
    public static LEGAL_IMG_URL = '/assets/img/legal-image.jpg';
    public static CHILL_IMG_URL = '/assets/img/signature/stampZion-ChiLL.png';
    public static THUYVTT_IMG_URL = '/assets/img/signature/stampZion-ThuyVTTpng';
    public static LINHTTC_IMG_URL = '/assets/img/signature/stampZion-LinhTTC.png';
    public static ZIP_ICON_URL = '/assets/img/icon-zip.jpg';
    public static NOIMGAE_URL = '/assets/img/noimage.png';
    public static listPMC = [
        { id: '36', name: 'Thẻ Visa/Master Card/JCB' },
        { id: '37', name: 'Tài Khoản Ngân Hàng' },
        { id: '38', name: 'TK Zalo Pay' },
        { id: '39', name: 'Thẻ ATM' },
        { id: '41', name: 'Thẻ Visa/Master Debit' }
    ];
    public static miniModeInitialValue = true;
}

export const EXTENSION_CODES = {
    doc: 'application/msword',
    dot: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    docm: 'application/vnd.ms-word.document.macroEnabled.12',
    dotm: 'application/vnd.ms-word.template.macroEnabled.12',

    xls: 'application/vnd.ms-excel',
    xlt: 'application/vnd.ms-excel',
    xla: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    xlsm: 'application/vnd.ms-excel.sheet.macroEnabled.12',
    xltm: 'application/vnd.ms-excel.template.macroEnabled.12',
    xlam: 'application/vnd.ms-excel.addin.macroEnabled.12',
    xlsb: 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',

    ppt: 'application/vnd.ms-powerpoint',
    pot: 'application/vnd.ms-powerpoint',
    pps: 'application/vnd.ms-powerpoint',
    ppa: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    potx: 'application/vnd.openxmlformats-officedocument.presentationml.template',
    ppsx: 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    ppam: 'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    pptm: 'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    potm: 'application/vnd.ms-powerpoint.template.macroEnabled.12',
    ppsm: 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',

    pdf: 'application/pdf'
};


export const internalVNGFACode: Array<string> = ['1483', '23889', '23890', '39063', '28874']; // Kiểu string, nhớ convert rồi hãy so sánh
