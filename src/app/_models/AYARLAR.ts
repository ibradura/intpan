export class AYARLAR {
    private _flDurum: number = 1;
    public DML_TYPE: string;
    public SQ_WEB_AYAR_NO?: number;
    public CH_AYAR_ADI: string;
    public CH_SITE_URL: string;
    public CH_SITE_ADI: string;
    public CH_SITE_SLOGANI: string;
    public CH_FOOTER_SLOGAN: string;
    public CH_SITE_META_TITLE: string;
    public CH_SITE_META_KEYWORDS: string;
    public CH_SITE_META_DESCRIPTION: string;
    public CH_SITE_ULKE: string;
    public CH_SITE_DIL: string;
    public CH_SITE_ADRES_ADI: string;
    public CH_SITE_ADRES: string;
    public CH_SITE_LAT: string;
    public CH_SITE_LONG: string;
    public CH_SITE_LOGO: string;
    public CH_SITE_TELEFON1: string;
    public CH_SITE_TELEFON2: string;
    public CH_SITE_FACEBOOK_PAGE_URL: string;
    public CH_SITE_TWITTER_PAGE_URL: string;
    public CH_SITE_GPLUS_PAGE_URL: string;
    public CH_SITE_LINKEDIN_PAGE_URL: string;
    public CH_SITE_INSTAGRAM_PAGE_URL: string;
    public CH_SITE_OTHER_SOCIAL_URL: string;
    public CH_SITE_NOTE: string;
    public RF_DIL_NO: number;
    public CH_SITE_FAX: string;
    public CH_SITE_MAIL: string;
    public CH_MESAI_INFO: string;
    get FL_DURUM(): number { return this._flDurum; }
    set FL_DURUM(value: number) { this._flDurum = value; }
}
