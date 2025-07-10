import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCabins } from "../../services/apiCabins"
import toast from "react-hot-toast"

export function useDeleteCabins() {
    const queryClient = useQueryClient()
    const {mutate} = useMutation({
        mutationFn : (id) => deleteCabins(id),
        onSuccess: () => {
            toast.success('Your cabins is successfully deleted')
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            })
        },
        onError: (error) => toast.error(error.message)
    })

    return {mutate}
}