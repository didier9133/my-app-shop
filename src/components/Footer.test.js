import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

test('should render Footer',()=>{
    render(
        <Footer /> 
    )
    const titleEl=screen.getByText(/PlatziConf/i)
    expect(titleEl).toBeInTheDocument()
})