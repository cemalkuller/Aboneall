import * as React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component<any, any> {
  
  constructor(props: any) {
    super(props);
}


  render() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-lg-2 gizle">
          <div className="steps">
            <div className="step">
              <div className="step_content">
                <div>
                  <img src="./img/onay.svg" />
                </div>
                <div>
                  BAŞVURU ONAYI
                </div>
              </div>
              <div className="step_ok">
                <img src="./img/ok_active.svg" />
              </div>
            </div>
          </div>
          <div className="step passive">
            <div className="step_content">
              <div>
                <img src="./img/document.svg" />
              </div>
              <div>
                EVRAK YÜKLEME
              </div>
            </div>
            <div className="step_ok">
              <img src="./img/ok_passive.svg" />
            </div>
          </div>
          <div className="step passive">
            <div className="step_content">
              <div>
                <img src="./img/gift.svg" />
              </div>
              <div>
                AVANTAJLAR
                DÜNYASI
              </div>
            </div>
          </div> 
        </div>
        <div className="col-lg-10">
          <div className="row">
            <div className="col-lg-8">
              <div className="customer_info">
                <h3>Sayın CEMAL KÜLLER;</h3>
                <p>Başvurunuzun güvenli bir şekilde tamamlanması için bilgilerinizi kontrol ederek
                  onaylamanız
                  gerekmektedir.</p>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4 t15">
                  <div className="customer_info">
                    <div className="customer_info_placeholder">
                      Tc Kimlik Numarası
                    </div>
                    <div className="customer_info_value">
                      2869069458
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 t15">
                  <div className="customer_info">
                    <div className="customer_info_placeholder">
                      İsim Soyisim
                    </div>
                    <div className="customer_info_value">
                      CEMAL KÜLLER
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 t15">
                  <div className="customer_info">
                    <div className="customer_info_placeholder">
                      Geçiş Yapılacak Numara
                    </div>
                    <div className="customer_info_value">
                      +90 533 028 20 87
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <div className="customer_info">
                        <div className="customer_info_placeholder mb-2">
                          Kargo / Kurye Adresi
                        </div>
                        <textarea className="form-control" defaultValue={"Kazım Karabekir Mah. 317. Sok. No : 29 D : 2 BAĞCILAR / İSTANBUL"} />
                      </div>
                    </div>
                    <div className="col-lg-6 t15">
                      <div className="customer_info">
                        <div className="customer_info_placeholder">
                          İL
                        </div>
                        <div className="customer_info_value">
                          <select className="form-control">
                            <option>İSTANBUL</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 t15">
                      <div className="customer_info">
                        <div className="customer_info_placeholder">
                          İLÇE
                        </div>
                        <div className="customer_info_value">
                          <select className="form-control">
                            <option>BAĞCILAR</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="kampanya_bilgi">
                <div className="marka_icon text-center mt-5 mb-3">
                  <img src="./img/turktelekom.svg" />
                </div>
                <div className="k_name">
                  Cep Dostu 6GB
                </div>
                <div className="brand_product_propertys">
                  <div className="brand_product_ozellik"><i className="genel-wifi product_icon" /><span className="brand_unit">6 <span> GB</span></span></div>
                  <div className="brand_product_ozellik"><i className="genel-phone_iphone product_icon" /><span className="brand_unit">1500 <span> Dk.</span></span></div>
                  <div className="brand_product_ozellik"><i className="genel-message product_icon" /><span className="brand_unit">1500 <span> Sms</span></span></div>
                </div>
                <div className="brand_price_div">
                  <div className="product_price">
                    <div className="price_tam">42.</div>
                    <div className="price_ondalik">
                      <div className="ondalik">00</div>
                      <div className="tl_simge">TL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox"  id="bavuru"  />
                <label className="form-check-label" htmlFor="bavuru">
                  Başvuru Koşullarını Onaylıyorum
                </label>
              </div>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox"  id="kvkk"  />
                <label className="form-check-label" htmlFor="kvkk">
                  Kişisel veri aydınlatma metni'ni okudum, kişisel verilerimin işlenmesine izin veriyorum.
                </label>
              </div>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox"  id="iys"  />
                <label className="form-check-label" htmlFor="iys">
                  Ticari Elektronik İleti Gönderimi Hakkında Bilgilendirme yi okudum , kampanyalardan
                  haberdar olabilmem için kişisel verilerimin işlenmesini ve tarafıma elektronik ileti
                  gönderilmesini kabul ediyorum.
                </label>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mb-5">
              <div className="d-flex">
                <button className="btn btn-success">
                  Kabul Ediyorum Devam Et
                </button>
                <div className="btn-musteri">
                  <a className="musteri">Müşteri Temsilcisi Beni Arasın</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       );
      }
  }

export default App; 
