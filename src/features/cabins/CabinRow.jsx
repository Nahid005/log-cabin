import styled from "styled-components";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";

import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabins } from "./useDeleteCabins";
import { useCreateCabins } from "./useCreateCabins";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus"

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({cabin}) {
  const {mutate} = useDeleteCabins();
  const {loadingCreateCabin, createCabinMutate} = useCreateCabins();

  const {id, name, image, maxCapacity, regularPrice, discount} = cabin;

  function handleDuplicate() {
    createCabinMutate({
      name: `Copy of ${name} cabins`,
      image, 
      maxCapacity, 
      regularPrice, 
      discount
    })
  }

  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>{maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{discount ? discount : <span>--</span>}</Discount>
        <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={id} />
              <Menus.List id={id}>
                <Menus.Button icon={<FaRegCopy />} onClick={handleDuplicate}>
                  Duplicate
                </Menus.Button>
                
                <Modal.Open opens="edit">
                  <Menus.Button icon={<CiEdit/>}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<MdDeleteOutline/>}>Delete</Menus.Button>
                </Modal.Open>

              </Menus.List>


<Modal.Window name="edit">
              <CreateCabinForm cabinData={cabin} />
            </Modal.Window>
<Modal.Window name="delete">
              <ConfirmDelete 
                resourceName="cabins"
                onConfirm={() => mutate(id)}
              />
            </Modal.Window>

            </Menus.Menu>
            
            
            
          </Modal>

        </div>
      </Table.Row>
    </>
  )
}

export default CabinRow;