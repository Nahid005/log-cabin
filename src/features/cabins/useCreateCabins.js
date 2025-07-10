import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabins() {
    const queryClient = useQueryClient();

    const {isLoading: loadingCreateCabin, mutate: createCabinMutate} = useMutation({
        mutationFn: (newCabin) => createEditCabin(newCabin),
        onSuccess: () => {
            toast.success("New cabin successfully created");
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            });
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return {loadingCreateCabin, createCabinMutate}
}