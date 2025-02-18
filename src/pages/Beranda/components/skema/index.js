import { Fragment } from 'react';
import SkemaMotor from './components/motor';
import SkemaMobil from './components/mobil';

export default function Index() {
  return (
    <Fragment>
      <div className="section-info-two d-none d-lg-block text-center mb-3">
        *) Estimasi nilai pinjaman jaminan BPKB bukan merupakan persetujuan pinjaman dana, bersifat
        tidak mengikat, dan dapat disesuaikan berdasarkan penilaian lebih lanjut serta kebijakan
        Adira Finance.
      </div>
      <div className="d-block d-lg-none text-center px-2">
        *) Estimasi nilai pinjaman jaminan BPKB bukan merupakan persetujuan pinjaman dana, bersifat
        tidak mengikat, dan dapat disesuaikan berdasarkan penilaian lebih lanjut serta kebijakan
        Adira Finance.
      </div>
      <div className="section-info-two">
        <div className="row">
          <div className="col-12 col-md-6">
            <SkemaMotor />
          </div>
          <div className="col-12 col-md-6">
            <SkemaMobil />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
