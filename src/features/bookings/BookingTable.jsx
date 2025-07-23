import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const {data, isLoading} = useBookings();

  console.log(data)

  if(isLoading) return <Spinner />
  const bookings = data.data;

  

  if(!bookings.length) return <Empty resource="Booking" />

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body>
          {bookings.map(booking => <BookingRow key={booking.id} booking={booking} />)}
        </Table.Body>
        <Table.Footer>
          <Pagination  count={data.count}/>
        </Table.Footer>
      </Table>

    </Menus>
  );
}

export default BookingTable;
