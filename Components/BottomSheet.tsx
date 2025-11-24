import { Colors } from "@/constants/Colors";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

export type BottomSheetRef = {
  open: () => void;
  close: () => void;
};

const BottomSheetComponent = forwardRef<
  BottomSheetRef,
  {
    snapPoints?: string[];
    children: React.ReactNode;
  }
>(({ snapPoints = ["50%"], children }, ref) => {
  const sheetRef = useRef<BottomSheet>(null);

  useImperativeHandle(ref, () => ({
    open: () => sheetRef.current?.expand(),
    close: () => sheetRef.current?.close(),
  }));

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      overDragResistanceFactor={0}
      // backdropComponent={(props) => (
      //   <BottomSheetBackdrop
      //     {...props}
      //     pressBehavior="close"    
      //     appearsOnIndex={0}
      //     disappearsOnIndex={-1}
      //   />
      // )}
      backgroundStyle={{ borderRadius:0 , backgroundColor:Colors.lightGrey}}
      handleIndicatorStyle={{ display:'none'}} 
    >
      <BottomSheetView style={{ padding: 20 }}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default BottomSheetComponent;
