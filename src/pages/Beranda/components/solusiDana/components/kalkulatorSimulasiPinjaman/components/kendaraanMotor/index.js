'use client';

import { Fragment } from 'react';
import FormKendaraan from '../formKendaraan';

export default function Index(props) {
  const { formKendaraan, onChange, dataArea, dataInsuranseType, selectedTab } = props;

  return (
    <Fragment>
      <FormKendaraan show="motor" formKendaraan={formKendaraan}
            onChange={onChange}
            dataArea={dataArea}
            dataInsuranseType={dataInsuranseType}
            selectedTab={selectedTab} />
    </Fragment>
  );
}
