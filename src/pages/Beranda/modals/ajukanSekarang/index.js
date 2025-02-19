import Modals from '@/components/modals';
import { Fragment, useEffect } from 'react';

const Index = (props) => {
  const { show, onClose } = props;

  return (
    <Modals
      show={show}
      onClose={onClose}
      modalBody={
        <Fragment>
          <h5>Terimakasih telah mendaftarkan email Anda di Adira Finance.</h5>
          <p>Jangan lupa untuk ikuti media sosial kami untuk informasi terbaru.</p>
        </Fragment>
      }
      modalFooter={
        <Fragment>
          <button onClick={onClose} type="button" id="pengajuan" class="btn btn-warning m-auto">
            Ajukan Pinjaman
          </button>
        </Fragment>
      }
    />
  );
};

export default Index;
