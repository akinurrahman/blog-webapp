"use client";

import { useEffect } from "react";
import { registerLicense } from "@syncfusion/ej2-base";

const SyncfusionInitializer = () => {
  useEffect(() => {
    const licenseKey = process.env.NEXT_PUBLIC_SYNCFUSION_LICENSE_KEY;
    if (licenseKey) {
      registerLicense(licenseKey);
    }
  }, []);

  return null;
};

export default SyncfusionInitializer;
