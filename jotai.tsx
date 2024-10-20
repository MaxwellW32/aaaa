import { globalFormDataType } from '@/types';
import { atom } from 'jotai'
import { globalFormData } from './globalFormData';

export const globalFormDataJotaiGlobal = atom<globalFormDataType>(globalFormData);


