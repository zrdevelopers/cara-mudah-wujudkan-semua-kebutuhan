import { Fragment } from 'react';

export default function Index() {
  return (
    <Fragment>
      <section className="yellow-bg">
        <div className=" container ">
          <div className="row justify-content-md-center ">
            <div className="col-md-6 center pt-4 pb-5">
              <h5>
                Dapatkan informasi terbaru tentang Adira Finance <br />
                Subscribe Sekarang
              </h5>
              <br />
              <a
                className="btn-hitung-simulasi align-self-center align-self-md-start"
                style={{
                  background: '#000',
                  color: '#fcd733'
                }}
              >
                Ajukan Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
