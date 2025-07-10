import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
    const {data: settingsData, isLoading, isError } = useQuery({
        queryKey: ["settings"],
        queryFn: getSettings
    })

    return {settingsData, isLoading, isError}
}