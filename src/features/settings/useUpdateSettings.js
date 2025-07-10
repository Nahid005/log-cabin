import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
    const queryClient = useQueryClient(); 
    const {data: settingUpdateData, mutate: settingUdpateMutate} = useMutation({
        mutationFn: (settings) => updateSetting(settings),
        onSuccess: () => {
            toast.success("Your settings has been updated");
            queryClient.invalidateQueries({
                queryKey: ["settings"]
            })
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    return {settingUdpateMutate, settingUpdateData}
}
