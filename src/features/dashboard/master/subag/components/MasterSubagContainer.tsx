"use client";

import { DataTable } from "@/components/Table";
import { PlusIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/Pagination";
import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { ISubag } from "../types/subag.model";
import AddSubagForm from "./form/AddSubagForm";
import EditSubagForm from "./form/EditSubagForm";

const MasterSubagContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const data: ISubag[] = [
    {
      id: 1,
      bagian: {
        id: 1,
        nama: "TAMU KEPALA BIRO",
        decriptions: "TAMU KEPALA BIRO",
        linkWA: "https://wa.me/628123456789",
        username: "Doni",
      },
      subbag: [
        {
          id: 1,
          nama: "UOU",
        },
      ],
    },
    {
      id: 2,
      bagian: {
        id: 2,
        nama: "BAGIAN PENGELOLAAN LAYANAN PENGADAAN SECARA ELEKTRONIK",
        decriptions: "BAGIAN PENGELOLAAN LAYANAN PENGADAAN SECARA ELEKTRONIK",
        linkWA: "https://wa.me/628123456789",
        username: "Dody",
      },
      subbag: [
        {
          id: 2,
          nama: "SUB BAGIAN PENGEMBANGAN SISTEM INFORMASI",
        },
        {
          id: 3,
          nama: "SUB BAGIAN PENGELOLAAN INFORMASI PENGADAAN BARANG DAN JASA",
        },
      ],
    },
    {
      id: 3,
      bagian: {
        id: 3,
        nama: "BAGIAN PEMBINAAN DAN ADVOKASI PENGADAAN BARANG DAN JASA",
        decriptions: "BAGIAN PEMBINAAN DAN ADVOKASI PENGADAAN BARANG DAN JASA",
        linkWA: "https://wa.me/628123456789",
        username: "Ferdy",
      },
      subbag: [
        {
          id: 4,
          nama: "SUB BAGIAN PENGEMBANGAN SISTEM INFORMASI",
        },
        {
          id: 5,
          nama: "SUB BAGIAN PENGELOLAAN INFORMASI PENGADAAN BARANG DAN JASA",
        },
      ],
    },
  ];

  const [typeModdal, setTypeModdal] = useState<"add" | "edit" | "delete">(
    "add"
  );
  const [selectedRow, setSelectedRow] = useState<ISubag | null>(null);
  const onOpenModal = () => {
    (document.getElementById("my_modal_1") as HTMLFormElement).showModal();
  };

  const onCloseModal = () => {
    (document.getElementById("my_modal_1") as HTMLFormElement).close();
  };

  const columns: ColumnDef<ISubag>[] = useMemo(() => {
    return [
      {
        accessorKey: "bagian.nama",
        header: "Nama Bagian",
      },
      {
        id: "subbag",
        header: "Subbag",
        cell: (row) => (
          <ul className="flex flex-col gap-2 list-disc list-inside">
            {row.row.original.subbag.map((item, idx) => {
              return (
                <li onClick={() => {
                  setTypeModdal("edit");
                  setSelectedRow(row.row.original);
                  onOpenModal();
                }} key={idx} className="cursor-pointer font-semibold text-primary hover:font-bold transition-all">
                  {item.nama}
                </li>
              );
            })}
          </ul>
        ),
      },
    ];

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="px-5">
      <h1 className="font-bold text-3xl">Master Data Sub. Bagian</h1>
      <div className="ds-divider mt-2"></div>
      <div>
        <div className="w-full flex justify-between items-center">
          <h2 className="font-bold text-xl">Data Sub. Bagian</h2>
          <button
            onClick={() => {
              setTypeModdal("add");
              onOpenModal();
            }}
            className="ds-btn ds-btn-sm ds-btn-primary text-white"
          >
            <PlusIcon size={18} />
            Tambah Data
          </button>
        </div>
        <div className="ds-card mt-3 w-full bg-base-100 shadow-xl">
          <div className="ds-card-body">
            <div className="flex items-center gap-3 mt-2">
              <label>Cari</label>
              <Input placeholder="Cari..." className=" max-w-[300px]" />
            </div>
            <div className="overflow-x-auto mt-3">
              <DataTable columns={columns} data={data} />
            </div>
            <Pagination
              className="pagination-bar w-full flex justify-end mt-3"
              currentPage={currentPage}
              totalCount={data.length}
              pageSize={10}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="ds-modal">
        {typeModdal === "edit" && (
          <EditSubagForm onCloseModal={onCloseModal} />
        )}
        {typeModdal === "add" && <AddSubagForm onCloseModal={onCloseModal} />}
        {/* {typeModdal === "delete" && (
          <div className="ds-modal-box">
            <h3 className="font-bold text-lg">Hapus Data Bagian</h3>
            <p className="py-4">Apakah yakin untuk menghapus data bagian ?</p>
            <div className="ds-modal-action">
              <div className="ds-modal-action flex items-center gap-1">
                <form method="dialog">
                  <button className="ds-btn">Close</button>
                </form>
                <button className="ds-btn text-white ds-btn-error">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        )} */}
      </dialog>
    </div>
  );
};

export default MasterSubagContainer;
