import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, RootState, AppStore } from './store';

export const useAppDispatch = () => useDispatch.withTypes<AppDispatch>();
export const useAppSelector = () => useSelector.withTypes<RootState>() as TypedUseSelectorHook<RootState>;
export const useAppStore = () => useStore.withTypes<AppStore>();