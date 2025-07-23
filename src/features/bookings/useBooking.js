import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking() {
    const {bookingId} = useParams();

    const {data, isError, isLoading} = useQuery({
        queryKey: ["bookings", bookingId],
        queryFn: () => getBooking(bookingId),
        retry: false
    })

    if(isError) throw new Error("data could not fetch");

    return {data, isLoading}
}

export default useBooking;