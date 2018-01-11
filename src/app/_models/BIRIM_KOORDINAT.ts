export class BIRIM_KOORDINAT {
    private _flDurum: number = 1;
    public DML_TYPE: string;
    public RF_BIRIM_KOD?: any;
    public QT_LATITUDE?: any;
    public QT_LONGITUDE?: any;
    public SQ_SUBE_NO?: number;
    public CD_SUBE_KOD: string;
    public RF_ANA_SUBE_KOD: string;
    public CH_SUBE_AD: string;
    public RF_BOLGE_KOD: string;
    public RF_AKTARMA_KOD: string;
    public RF_IL_KOD: string;
    public RF_ILCE_KOD: string;
    public CH_IL_ADI: string;
    public CH_ILCE_ADI: string;
    public FL_MOBIL?: any;
    public FL_MOBIL_GUN?: any;
    public CH_TELEFON: string;
    public CH_FAX: string;
    public EM_EMAIL: string;
    public TX_ADRES: string;
    public BL_ONAY?: any;
    public LG_KULLANICI: string;
    public LG_IP: string;
    public LG_TARIH?: any;
    public CH_SEMT: string;
    public FL_YDH?: number;
    public FL_DENIZ_MOBIL?: number;
    public TM_SUBE_CAL_SAAT: string;
    public CH_KISA_KOD: string;
    get FL_DURUM(): number { return this._flDurum; }
    set FL_DURUM(value: number) { this._flDurum = value; }
}
