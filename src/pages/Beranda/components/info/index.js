'use client';

import { Fragment } from 'react';

export default function Index() {
  return (
    <Fragment>
      <div className="section-info">
        <div className="text-center mb-3">
          <table
            className="table table-bordered pinjaman"
            style={{
              borderCollapse: 'collapse',
              backgroundColor: 'rgb(206, 212, 217)',
              borderWidth: '2px'
            }}
            border="1"
          >
            <tbody>
              <tr>
                <th style={{ background: 'rgb(252, 215, 51)' }}>Bunga Tetap per Bulan</th>
                <th style={{ background: 'rgb(252, 215, 51)' }}>Bunga Tetap per Tahun</th>
                <th style={{ background: 'rgb(252, 215, 51)' }}>Asuransi</th>
              </tr>
              <tr style={{ background: 'rgb(242, 242, 242)' }}>
                <td className="text-center">1.66%</td>
                <td className="text-center">19,95%</td>
                <td className="text-center">1,04%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
