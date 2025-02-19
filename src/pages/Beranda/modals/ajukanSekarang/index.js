import Modals from '@/components/modals';
import { Fragment, useState } from 'react';

const Index = (props) => {
  const { show, onClose } = props;

  const [dataForm, setDataForm] = useState({
    nama: '',
    domisili: '',
    alasan_pengajuan: '',
    lainnya: ''
  });

  const [error, setError] = useState({});
  const [showLainnya, setShowLainnya] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm((prev) => ({
      ...prev,
      [name]: value
    }));

    // Hapus error ketika input diisi
    setError((prev) => ({
      ...prev,
      [name]: ''
    }));

    // Tampilkan input "Lainnya" jika alasan pengajuan adalah "Lainnya"
    if (name === 'alasan_pengajuan') {
      setShowLainnya(value === 'Lainnya');
    }
  };

  const handleAjukanPinjaman = () => {
    const { nama, domisili, alasan_pengajuan, lainnya } = dataForm;

    // Validasi input
    let newError = {};
    if (!nama) newError.nama = 'Nama harus diisi';
    if (!domisili) newError.domisili = 'Domisili harus diisi';
    if (!alasan_pengajuan) newError.alasan_pengajuan = 'Alasan pengajuan harus dipilih';
    if (alasan_pengajuan === 'Lainnya' && !lainnya) newError.lainnya = 'Harap isi alasan lainnya';

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    const alasanText = alasan_pengajuan === 'Lainnya' ? lainnya : alasan_pengajuan;
    const message = `Halo, saya ingin pinjaman dana dengan data sebagai berikut:\n\nNama Lengkap: ${nama}\nKota Domisili: ${domisili}\nAlasan Pengajuan: ${alasanText}`;
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://api.whatsapp.com/send?phone=6281228883616&text=${encodedMessage}`;

    window.open(waLink, '_blank');

    clearForm();
    onClose();
  };

  const clearForm = async () => {
    setDataForm({
      nama: '',
      domisili: '',
      alasan_pengajuan: '',
      lainnya: ''
    });
  };

  return (
    <Modals
      show={show}
      onClose={onClose}
      modalBody={
        <Fragment>
          <form>
            {/* Nama */}
            <div>
              <label>Nama Lengkap</label>
              <input
                type="text"
                className="form-control"
                name="nama"
                placeholder="Contoh : Adi Rahmat Setiawan"
                value={dataForm.nama}
                onChange={handleChange}
              />
              {error.nama && <small className="form-text text-danger">{error.nama}</small>}
            </div>

            {/* Domisili */}
            <div className="mt-2">
              <label>Kota Domisili</label>
              <input
                type="text"
                className="form-control"
                name="domisili"
                placeholder="Contoh : Jakarta Selatan"
                value={dataForm.domisili}
                onChange={handleChange}
              />
              {error.domisili && <small className="form-text text-danger">{error.domisili}</small>}
            </div>

            {/* Alasan Pengajuan */}
            <div className="mt-2">
              <label>Alasan Pengajuan</label>
              <select
                name="alasan_pengajuan"
                className="form-control"
                value={dataForm.alasan_pengajuan}
                onChange={handleChange}
              >
                <option value="" disabled>
                  - Pilih Alasan Pengajuan -
                </option>
                <option value="Modal Usaha">Modal Usaha</option>
                <option value="Renovasi Rumah">Renovasi Rumah</option>
                <option value="Kenduri/Nikah">Kenduri/Nikah</option>
                <option value="Liburan">Liburan</option>
                <option value="Investasi Emas">Investasi Emas</option>
                <option value="Kesehatan">Kesehatan</option>
                <option value="Pendidikan">Pendidikan</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              {error.alasan_pengajuan && (
                <small className="form-text text-danger">{error.alasan_pengajuan}</small>
              )}
            </div>

            {/* Alasan Pengajuan Lainnya */}
            {showLainnya && (
              <div className="mt-2">
                <label>Alasan Pengajuan Lainnya</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="lainnya"
                  placeholder="Contoh : Keperluan mendadak"
                  value={dataForm.lainnya}
                  onChange={handleChange}
                />
                {error.lainnya && <small className="form-text text-danger">{error.lainnya}</small>}
              </div>
            )}
          </form>
        </Fragment>
      }
      modalFooter={
        <Fragment>
          <button onClick={handleAjukanPinjaman} type="button" className="btn btn-warning m-auto">
            Ajukan Pinjaman
          </button>
        </Fragment>
      }
    />
  );
};

export default Index;
