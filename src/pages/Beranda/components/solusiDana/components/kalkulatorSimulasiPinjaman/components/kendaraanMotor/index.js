'use client';

import { Fragment } from 'react';
import FormKendaraan from '../formKendaraan';

export default function Index(props) {
  const { formKendaraan, onChange, dataArea, dataInsuranseType, selectedTab, setFormKendaraan } =
    props;

  return (
    <Fragment>
      <FormKendaraan
        show="motor"
        formKendaraan={formKendaraan}
        onChange={onChange}
        dataArea={dataArea}
        dataInsuranseType={dataInsuranseType}
        selectedTab={selectedTab}
        setFormKendaraan={setFormKendaraan}
      />
    </Fragment>
  );
}
