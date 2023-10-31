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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import EditFormBagian from "./form/EditFormBagian";
import AddFormBagian from "./form/AddFormBagian";

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

  const [typeModdal, setTypeModdal] = useState<"add" | "edit" | "delete">("add");
  const [selectedRow, setSelectedRow] = useState<IBagian | null>(null);
  const onOpenModal = () => {
    (document.getElementById("my_modal_1") as HTMLFormElement).showModal();
  };

  const onCloseModal = () => {
    (document.getElementById("my_modal_1") as HTMLFormElement).close();
  };

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
        },
      },
      {
        accessorKey: "username",
        header: "Nama Alias",
      },
      {
        id: "actions",
        cell: ({ row }) => {
          const bagian = row.original;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="ds-btn ds-btn-sm ds-btn-link">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedRow(bagian);
                    setTypeModdal("edit");
                    onOpenModal();
                  }}
                  className="hover:!bg-primary hover:text-white"
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedRow(bagian);
                    setTypeModdal("delete");
                    onOpenModal();
                  }}
                  className="hover:!bg-primary hover:text-white"
                >
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
          <EditFormBagian onCloseModal={onCloseModal} />
        )}
        {typeModdal === "add" && <AddFormBagian onCloseModal={onCloseModal} />}
        {typeModdal === "delete" && (
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
        )}
      </dialog>
    </div>
  );
};

export default MasterBagianContainer;
