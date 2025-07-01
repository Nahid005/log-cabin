import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {

  const [isShow, setIsShow] = useState();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <Button variation="primary" size ="medium" onClick={() => setIsShow(!isShow)}> Add to cabins </Button>
        {
          isShow && <CreateCabinForm setIsShow={setIsShow} />
        }
      </Row>
    </>
  );
}

export default Cabins;
