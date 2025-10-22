// loading.tsx
'use client';
import React from "react";
import { useState , useEffect } from "react";
export default function Loading() {
  const [lang, setLang] = useState <'th' | 'en' | 'jp'>('th');


  useEffect(() => {
    if(typeof window !== 'undefined'){
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' || 'th';
      setLang(storedLang);
    }
    
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <div className="spinner mb-4"></div>
        <p className="text-gray-700 font-medium">{lang.includes('th') ? "กำลังโหลด..." : lang.includes('en')  ? "Loading..." : "読み込み中..." }</p>
      </div>

    </div>
  );
}
