import { useEffect } from 'react';

const Index = (props) => {
  const { show, onClose, modalBody, modalFooter } = props;

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className={'modal fade show'} id={'myModal'} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content mt13">
          <div className="modal-header center">
            <h5 class="modal-title">Form Pengajuan SolusiDana</h5>
            <button onClick={onClose} className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{modalBody}</div>
          <center>
            <div className="modal-footer center">{modalFooter}</div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Index;
