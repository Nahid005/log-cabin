import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const {cabins, isLoading} = useCabins();
  const [searchParams] = useSearchParams();

  if(isLoading) return <Spinner />;

  if(!cabins.length) return <Empty resource="Cabins" />

  //Filter
  const filterValue = searchParams.get("discount") || "all";
  let filterdCabins;

  if(filterValue === "all") filterdCabins = cabins;
  if(filterValue === "with-discount") filterdCabins = cabins.filter(cabin => cabin.discount != 0);
  if(filterValue === "no-discount") filterdCabins = cabins.filter(cabin => cabin.discount == 0)

  //Sort
  const sortBy = searchParams.get('sortBy') || "startDate-asc";
  const [field, direction] = sortBy.split('-');
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filterdCabins.sort((a, b) => (a[field] - b[field]) * modifier)

  return (
    <Menus>
      <Table columns={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div> 
        </Table.Header>
        <Table.Body>
          {sortedCabins.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)}
        </Table.Body>
      </Table>
    </Menus>
  )
}

export default CabinTable;