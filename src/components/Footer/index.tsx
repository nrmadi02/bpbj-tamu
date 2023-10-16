const Footer = () => {
  return (
    <footer className="ds-footer p-10 bg-base-200 text-base-content">
      <aside>
        <h1 className="font-bold text-2xl">E-TAMU</h1>
        <p className="text-sm max-w-[300px]">
          ETAMU adalah alat bantu untuk mengetahui seberapa banyak pengunjung
          datang ke Biro Pengadaan Barang dan Jasa (BPBJ) Setda Provinsi
          Kalimantan Selatan. Dengan aplikasi ini Kami bisa mendapatkan feedback
          dari tamu mengenai layanan yang diberikan. Juga sebagai tolak ukur
          kepuasan tamu (pengunjung) terhadap layanan yang telah Kami berikan.
        </p>
      </aside>
      <nav>
        <header className="ds-footer-title">Company</header>
        <a className="ds-link ds-link-hover">About us</a>
        <a className="ds-link ds-link-hover">Features</a>
      </nav>
      <nav>
        <header className="ds-footer-title">Legal</header>
        <a className="ds-link ds-link-hover">Terms of use</a>
        <a className="ds-link ds-link-hover">Privacy policy</a>
      </nav>
      <nav>
        <header className="ds-footer-title">Contact</header>
        <div className="text-sm max-w-[300px]">
          <p>
            <strong>Alamat: </strong>Jln. Jend. S. Parman No 44, Banjarmasin,
            Kalimantan Selatan 70114
          </p>
          <p>
            <strong>Telepon:</strong>{" "}
            <a
              href="tel:+625113350215"
              className="cursor-pointer"
              target="_blank"
            >
              (0511) 3350215
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              className="cursor-pointer"
              href="mailto:helpdesk@lpse.kalselprov.go.id"
              target="_blank"
            >
              helpdesk@lpse.kalselprov.go.id
            </a>{" "}
            cc{" "}
            <a
              className="cursor-pointer"
              href="mailto:lpse.kalsel@gmail.com"
              target="_blank"
            >
              lpse.kalsel@gmail.com
            </a>
          </p>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;