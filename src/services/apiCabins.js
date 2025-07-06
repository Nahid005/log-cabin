import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase.from('cabins').select('*');

    if(error) {
        console.log(error)
        throw new Error("cabins could not be loaded")
    }

    return data;
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image.startsWith(supabaseUrl);

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", " ");
    const imagesPath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    let query = supabase.from('cabins')

    //create cabins
    if(!id) query
    .insert([{...newCabin, image: imagesPath}])
    .select()
    .single()

    const {data, error} = query

    if(error) {
        throw new Error("Cabin could not be created")
    }

    // Upload file using standard upload
    const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image)

    if(storageError) {
        await supabase.from('cabins').delete().eq('id', data.id)
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