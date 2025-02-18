import { Fragment } from 'react';

export default function Index() {
  const handleClick = () => {
    // Implement the click and scroll functionality here
    // For example, you can use a ref to scroll to the desired section
    const element = document.getElementById('Appsmpl');
    if (element) {
      element.scrollIntoView({ top: element.offsetTop - 200, behavior: 'smooth' });
    }
  };

  return (
    <Fragment>
      <div className="row section-one mb-4" style={{ gridRowGap: '35px' }}>
        <div className="col-12 col-md-12">
          <div className="align-items-center d-flex flex-column justify-content-center">
            <div>
              <p className="WixMadeforTextBold2-font" style={{ fontSize: '24px' }}>
                <b>SolusiDana</b>
              </p>
            </div>
            <div>
              <p className="mt-2 mb-4 text-center" style={{ fontSize: '14px' }}>
                Adira Finance menawarkan fasilitas Pinjaman Dana Tunai dengan jaminan BPKB
                motor/mobil, dengan syarat mudah dan proses cepat.
                <br />
                Khusus untuk jaminan BPKB mobil, dapatkan tenor hingga 60 bulan dengan pencairan
                hingga Rp500 juta.
              </p>
            </div>
            <div className="mb-3">
              <a
                className="btn-hitung-simulasi align-self-center align-self-md-start"
                onClick={handleClick}
              >
                Hitung Simulasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
