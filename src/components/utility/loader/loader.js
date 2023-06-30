import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThreeCircles } from "react-loader-spinner";
import { GetLoader } from "../../../redux/action/loaderAction";
import "./loader.css";
const Loader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLoader());
  }, [dispatch]);
  const isLoading = useSelector((state) => state.LoaderReducer.isLoading);
  return (
    <div className={isLoading ? "overlayON" : "overlayOff"}>
      <div className={"divStyle"}>
     
      <ThreeCircles
        height="80"
        width="80"
        wrapperStyle={{}}
        wrapperClass=""
        visible={isLoading}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#13f1e5"
        innerCircleColor="#13f149"
        middleCircleColor="#e7f113"
      />
   

      <h2 className={"h2Style"}>Loading...</h2>
      </div>

    </div>
  );
};

export default Loader;
