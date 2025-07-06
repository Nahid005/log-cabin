import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";
import { createEditCabin } from "../../services/apiCabins";
import FormRow from "../../ui/FormRow";


function CreateCabinForm({setIsShow, cabinData = {}}) {
  const {id: editId, ...editValues} = cabinData;
  const {register, handleSubmit, reset, formState, getValues} = useForm({
    defaultValues: editId ? editValues : {}
  });

  const queryClient = useQueryClient();
  const {errors} = formState;

  const {isLoading: loadingCreateCabin, mutate: createCabinMutate} = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      });
      reset();
      setIsShow(false)
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const {isLoading: loadingEditCabin, mutate: editCabinMutate} = useMutation({
    mutationFn: ({newCabinData, id}) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin update successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    createCabinMutate({...data, image})
    editCabinMutate({newCabinData: {...data, image}, id: editId})
  }

  function onError(errors) {
    console.log(errors)
  }

  if(loadingCreateCabin || loadingEditCabin) return <Spinner />

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>

      <FormRow label="Cabin name" errors={errors?.name?.message}>
        <Input type="text" id="name" {...register("name", {
          required: "This field is required",
          min: {
            value: 3,
            message: "Enter min 3 character"
          }
        })} />
      </FormRow>

      <FormRow label="Maximum capacity" errors={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register("maxCapacity", {
          required: "Required"
        })} />
      </FormRow>

      <FormRow label="Regular price" errors={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" {...register("regularPrice", {
          required: "Required"
        })} />
      </FormRow>

      <FormRow label="Discount" errors={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} {...register("discount", {
          validate: (value) => value <= getValues().regularPrice || "Discount price greater then regular price"
        })} />
      </FormRow>

      <FormRow label="Description for website" errors={errors?.description?.message}>
      <Textarea type="number" id="description" defaultValue="" {...register("description")} />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput id="image" accept="image/*" {...register("image", {
          required: editId ? false : "Cabins images is required"
        })} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" size="medium" type="reset">
          Cancel
        </Button>
        <Button variation="primary" size="medium" type="submit">{editId ? "Edit Cabin" : "Add cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
