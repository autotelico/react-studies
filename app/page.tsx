'use client'
import { useState } from 'react';
import DisplayBox from './my-use-context/DisplayBox';
import ThemeProvider from './my-use-context/ThemeProvider';
import InputBar from './my-use-context/InputBar';
import InputValProvider from './my-use-context-person/InputValProvider';
import PersonList from './my-use-context-person/PersonList';
import Form from './my-use-context-person/Form';
import APIDisplay from './my-use-memo/APIDisplay';
import ProductList from './my-use-memo-2/ProductList';

export default function Home(): React.ReactNode {
  return (
    <>
      {/* <ThemeProvider>
        <DisplayBox />
        <InputBar />
      </ThemeProvider> */}
      {/* <InputValProvider>
        <PersonList />
        <Form />
      </InputValProvider> */}
      <ProductList />
    </>
  )
}