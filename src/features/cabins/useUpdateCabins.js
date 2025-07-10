import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabins() {
    const queryClient = useQueryClient();
    const {isLoading: loadingEditCabin, mutate: editCabinMutate} = useMutation({
        mutationFn: ({newCabinData, id}) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success("Cabin update successfully");
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            });
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {loadingEditCabin, editCabinMutate}
}