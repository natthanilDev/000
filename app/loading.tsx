// loading.tsx
import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <div className="spinner mb-4"></div>
        <p className="text-gray-700 font-medium">กำลังโหลด...</p>
      </div>

    </div>
  );
}
