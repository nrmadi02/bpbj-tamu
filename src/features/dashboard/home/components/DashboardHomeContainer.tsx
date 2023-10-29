const DashboardHomeContainer = () => {
  return (
    <div className="px-5">
      <h1 className="font-bold text-3xl">Dashboard Home</h1>
      <p className="text-2xl mt-2 font-semibold">Selamat Datang, Pengguna</p>
      <div className="ds-divider mt-2"></div>
      <div>
        <h2 className="font-bold text-xl">
          Monitor Tamu Pada Tiap Bagian Tahun 2023
        </h2>
        <div className="ds-card mt-3 w-full bg-base-100 shadow-xl">
          <div className="ds-card-body">
            <div className="overflow-x-auto">
              <table className="ds-table ds-table-sm">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Nama Bagian</th>
                    <th>Sudah Selesai</th>
                    <th>Belum Selesai</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>TAMU KEPALA BIRO</td>
                    <td>13</td>
                    <td>0</td>
                    <td>13</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>
                      BAGIAN PENGELOLAAN LAYANAN PENGADAAN SECARA ELEKTRONIK
                    </td>
                    <td>13</td>
                    <td>0</td>
                    <td>13</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>
                      BAGIAN PEMBINAAN DAN ADVOKASI PENGADAAN BARANG DAN JASA
                    </td>
                    <td>13</td>
                    <td>0</td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>BAGIAN PENGELOLAAN PENGADAAN BARANG DAN JASA</td>
                    <td>13</td>
                    <td>0</td>
                    <td>13</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={4} align="center">
                      Total
                    </th>
                    <th>1235</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-xl">Saldo Pulsa Tersedia</h2>
        <div className="ds-card mt-3 w-full bg-base-100 shadow-xl">
          <div className="ds-card-body">
          <div className="ds-badge text-white ds-badge-outline ds-badge-error gap-2">Expired : 20 Agustus 2023</div>
            <h1 className="text-center text-2xl font-bold text-primary mt-5">
              RP. 10.000
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomeContainer;
