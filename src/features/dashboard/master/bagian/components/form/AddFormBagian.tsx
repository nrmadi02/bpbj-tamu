import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export interface AddFormBagianProps {
  onCloseModal: () => void;
}

const AddFormBagian = ({ onCloseModal }: AddFormBagianProps) => {
  const form = useForm();
  return (
    <div className="ds-modal-box">
      <h3 className="font-bold text-lg">Tambah Data Bagian</h3>
      <div className="ds-modal-action">
        <Form {...form}>
          {/* if there is a button in form, it will close the modal */}

          <button type="button" onClick={onCloseModal} className="ds-btn">
            Close
          </button>
          <button className="ds-btn ds-btn-success text-white">Simpan</button>
        </Form>
      </div>
    </div>
  );
};

export default AddFormBagian;
