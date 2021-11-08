import React from "react";
import { LoaderContainer } from "./styles";

import Loader from 'react-loader-spinner'

export const Spinner = () => {
  return (
    <LoaderContainer>
      <Loader
        type={'TailSpin'}
        color={'#000000'}
        height={100}
        width={100}
      />
    </LoaderContainer>
  )
}