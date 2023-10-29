"use client";

import { DataTable } from "@/components/Table";
import { IBagian } from "../types/bagian.model";
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

const MasterBagianContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);

  const data: IBagian[] = [
    {
      id: 1,
      nama: "TAMU KEPALA BIRO",
      decriptions: "TAMU KEPALA BIRO",
      linkWA: "https://wa.me/628123456789",
      username: "Doni",
    },
    {
      id: 2,
      nama: "BAGIAN PENGELOLAAN LAYANAN PENGADAAN SECARA ELEKTRONIK",
      decriptions: "BAGIAN PENGELOLAAN LAYANAN PENGADAAN SECARA ELEKTRONIK",
      linkWA: "https://wa.me/628123456789",
      username: "Dody",
    },
    {
      id: 3,
      nama: "BAGIAN PEMBINAAN DAN ADVOKASI PENGADAAN BARANG DAN JASA",
      decriptions: "BAGIAN PEMBINAAN DAN ADVOKASI PENGADAAN BARANG DAN JASA",
      linkWA: "https://wa.me/628123456789",
      username: "Ferdy",
    },
    {
      id: 3,
      nama: "BAGIAN PENGELOLAAN PENGADAAN BARANG DAN JASA",
      decriptions: "BAGIAN PENGELOLAAN PENGADAAN BARANG DAN JASA",
      linkWA: "https://wa.me/628123456789",
      username: "Wahyu",
    },
  ];

  const columns: ColumnDef<IBagian>[] = useMemo(() => {
    return [
      {
        accessorKey: "nama",
        header: "Nama",
      },
      {
        accessorKey: "decriptions",
        header: "Deskripsi",
      },
      {
        id: "linkWA",
        header: "Link Whatsapp",
        cell: ({ row }) => {
          const bagian = row.original;

          return (
            <a
              href={bagian.linkWA}
              target="_blank"
              className="ds-btn ds-btn-sm ds-btn-primary text-white"
            >
              Link Whatsapp
            </a>
          );
        }
      },
      {
        accessorKey: "username",
        header: "Nama Alias",
      },
      {
        id: "actions",
        cell: ({ row }) => {
          // const bagian = row.original;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="ds-btn ds-btn-sm ds-btn-link">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem className="hover:!bg-primary hover:text-white">
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:!bg-primary hover:text-white">
                  Hapus
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ];

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="px-5">
      <h1 className="font-bold text-3xl">Master Data Bagian</h1>
      <div className="ds-divider mt-2"></div>
      <div>
        <div className="w-full flex justify-between items-center">
          <h2 className="font-bold text-xl">Data Bagian</h2>
          <button className="ds-btn ds-btn-sm ds-btn-primary text-white">
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
    </div>
  );
};

export default MasterBagianContainer;
