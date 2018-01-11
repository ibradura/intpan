export class DILLER {
    private _flDurum: number = 1;
    private _olsTarih: Date = new Date();
    public DML_TYPE: string;
    public SQ_WEB_ICERIK_NO?: number;
    public CH_ICERIK_BASLIK: string;
    public CH_ICERIK_METNI: string;
    public CH_ICERIK_RESMI: string;
    public CH_ICERIK_OZET: string;
    public RF_GALERI_NO?: number;
    public RF_DIL_NO?: number;
    public DT_YAYIN_TARIHI: Date;
    get DT_OLUSTURULMA_TARIHI(): Date { return this._olsTarih; }
    set DT_OLUSTURULMA_TARIHI(value: Date) { this._olsTarih = value; }
    get FL_DURUM(): number { return this._flDurum; }
    set FL_DURUM(value: number) { this._flDurum = value; }
}
