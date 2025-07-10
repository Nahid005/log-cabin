import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import { useUpdateSettings } from './useUpdateSettings';

function UpdateSettingsForm() {
  const {settingsData: {minBookingLength, maxNumGuestsBooking, maxBookingLength, breakfastPrice} = {}, isLoading, isError} = useSettings();
  const {settingUdpateMutate, settingUpdateData} = useUpdateSettings();

  function handleSettingUpdate(e, filed) {
    const value = e.target.value;

    if(!value) return;

    settingUdpateMutate({[filed]: value});
  }


  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={(e) => handleSettingUpdate(e, "minBookingLength")} />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={(e) => handleSettingUpdate(e, "maxBookingLength")}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxNumGuestsBooking} onBlur={(e) => handleSettingUpdate(e, "maxNumGuestsBooking")}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={(e) => handleSettingUpdate(e, "breakfastPrice")} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
