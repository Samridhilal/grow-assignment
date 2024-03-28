"use client";
import React, { useCallback } from "react";
import { RefreshCcw } from 'lucide-react';
import ReviewOrder from "@/components/order-review/ReviewOrder";
import { useOrderDetails } from "@/hooks/useOrderDetail";

export default function Home() {
    const { refetch } = useOrderDetails();

    const handleRefresh = () => {
        refetch(); // Refresh only useOrderDetails hook
    };

    return (
        <div className="sm:container px-3 mx-auto lg:px-4 py-6 w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold mb-0">Your Cart</h1>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={handleRefresh}
                >
                    <RefreshCcw />
                </button>
            </div>
            <ReviewOrder />
        </div>
    );
}