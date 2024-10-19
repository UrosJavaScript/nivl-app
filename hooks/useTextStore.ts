import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setValue } from '@/store/slices';
import { AppDispatch, RootState } from '@/types';
import { Alert, Platform } from 'react-native';

const useTextStore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector((state: RootState) => state.text.value);
  const loading = useSelector((state: RootState) => state.text.loading);

  const updateValue = (newValue: string) => {
    dispatch(setValue(newValue));

    if (newValue) {
      dispatch(setLoading(true));

      setTimeout(() => {
        dispatch(setLoading(false));
      }, 500);
    } else {
      dispatch(setLoading(false));
    }
  };

  const showAlert = (value: string) => {
    if (Platform.OS === 'ios') {
      Alert.alert('iOS Alert', `Value: ${value}`, [
        { text: 'OK', style: 'destructive' },
      ]);
    } else if (Platform.OS === 'android') {
      Alert.alert('Android Alert', `Value: ${value}`, [
        { text: 'OK', style: 'destructive' },
      ]);
    } else {
      alert(`Value: ${value}`);
    }
  };

  return {
    value,
    updateValue,
    loading,
    showAlert,
  };
};

export default useTextStore;
