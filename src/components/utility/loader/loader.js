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
      <ThreeCircles
        height="100"
        width="100"
        color="#a9d9e6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={isLoading}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
