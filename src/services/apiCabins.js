import supabase from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase.from('cabins').select('*');

    if(error) {
        console.log(error)
        throw new Error("cabins could not be loaded")
    }

    return data;
}

export async function createCabin(newCabin) {
    const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select()

    if(error) {
        throw new Error("Cabin could not be created")
    }

    return data;
}


export async function deleteCabins(id) {

    const { error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

    if(error) {
        console.log(error)
        throw new Error("cabins could not be deleted")
    }

}