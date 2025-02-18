export default function Index() {
  const data = [
    { tenor: '1/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '2/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '3/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '4/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '5/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '6/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '7/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '8/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '9/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '10/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '11/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' },
    { tenor: '12/12', bayar: '1.093.000', pokok: '833.333', bunga: '259.667' }
  ];
  return (
    <section className="container-fluid produk-wrapper">
      <div className="row">
        <div
          style={{ borderTop: '10px solid #fcd733' }}
          className="col-md-12 white-bg p20 contentox text-center"
        >
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-2143"
              role="tabpanel"
              aria-labelledby="v-pills-2143-tab"
            >
              <p>
                Area: Jateng
                <br />
                Jaminan Kendaraan: &nbsp;NEW BEAT FI CW PLUS
                <br />
                Tahun: 2022
                <br />
                Harga OTR Kendaraan: Rp 17.000.000
                <br />
                Pinjaman: Rp 10.000.000
              </p>
              <p>
                Asuransi: 1,04% (dari harga OTR Kendaraan) = Rp 176.800
                <br />
                Biaya Admin: Rp 750.000
              </p>
              <p>
                Periode Pembayaran: 12 Bulan
                <br />
                Bunga Tetap Per Tahun: 19,95%
              </p>
              <p>
                Total biaya yang harus dibayarkan dalam setahun (pinjaman 10jt) = Rp. 13.116.000
                <br />
                Total biaya yang harus dibayarkan dalam sebulan (pinjaman 10jt) = Rp. 1.093.000
              </p>
              <p>
                - <strong>Total Pinjaman: Rp. 10.000.000</strong>
                <br />
                - Total Biaya Asuransi yang harus dibayarkan sekali untuk pinjaman Rp. 10.000.000
                (dibebankan saat pencairan): Rp. 176.800
                <br />
                - Total Biaya Administrasi yang harus dibayarkan sekali untuk Pinjaman Rp.
                10.000.000 (dibebankan saat pencairan): Rp. 750.000
                <br />-{' '}
                <strong>Sehingga total pinjaman yang diterima saat pencairan: Rp. 9.073.200</strong>
              </p>
              <table
                style={{ borderCollapse: 'collapse', width: '100%', height: '313.468px' }}
                border="1"
              >
                <colgroup>
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '25%' }} />
                  <col style={{ width: '25%' }} />
                </colgroup>
                <tbody>
                  <tr style={{ height: '22.3906px;' }}>
                    <td className="text-center" style={{ height: '22.3906px;' }}>
                      <strong>Tenor</strong>
                    </td>
                    <td className="text-center" style={{ height: '22.3906px;' }}>
                      <strong>Bayar Cicilan</strong>
                    </td>
                    <td className="text-center" style={{ height: '22.3906px;' }}>
                      <strong>Pokok</strong>
                    </td>
                    <td className="text-center" style={{ height: '22.3906px;' }}>
                      <strong>Bunga</strong>
                    </td>
                  </tr>
                  {data.map((row, index) => (
                    <tr key={row?.id || index} style={{ height: '22.3906px;' }}>
                      <td className="text-center" style={{ height: '22.3906px;' }}>
                        {row.tenor}
                      </td>
                      <td className="text-center" style={{ height: '22.3906px;' }}>
                        {row.bayar}
                      </td>
                      <td className="text-center" style={{ height: '22.3906px;' }}>
                        {row.pokok}
                      </td>
                      <td className="text-center" style={{ height: '22.3906px;' }}>
                        {row.bunga}
                      </td>
                    </tr>
                  ))}
                  <tr style={{ height: '22.3906px;' }}>
                    <td style={{ height: '22.3906px;' }}>
                      <strong>Total</strong>
                    </td>
                    <td className="xl68" style={{ height: '22.3906px;' }}>
                      <strong>13.116.000</strong>
                    </td>
                    <td className="xl68" style={{ height: '22.3906px;' }}>
                      <strong>10.000.000</strong>
                    </td>
                    <td style={{ height: '22.3906px;' }}>
                      <strong>3.116.000</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                <em>
                  *Estimasi nilai pinjaman bukan merupakan persetujuan pinjaman dana, bersifat tidak
                  mengikat, dan dapat
                  <br />
                  disesuaikan berdasarkan penilaian lebih lanjut serta kebijakan Adira Finance
                </em>
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
